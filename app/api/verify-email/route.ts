import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// POST /api/verify-email  { email: "student@example.com" }
// Used on the /login page for returning customers without a valid cookie
export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-02-24.acacia",
  });

  const { email } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  const customers = await stripe.customers.list({ email, limit: 1 });

  if (customers.data.length === 0) {
    return NextResponse.json({ access: false }, { status: 404 });
  }

  const customer = customers.data[0];
  const charges = await stripe.charges.list({ customer: customer.id, limit: 20 });

  const hasValidPurchase = charges.data.some((c) => c.paid && !c.refunded);

  if (hasValidPurchase) {
    const response = NextResponse.json({ access: true });
    response.cookies.set("apptly_access", "granted", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });
    return response;
  }

  return NextResponse.json({ access: false }, { status: 402 });
} 
