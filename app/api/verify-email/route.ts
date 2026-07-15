import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// POST /api/verify-email  { email: "student@example.com" }
// TEMPORARY DEBUG VERSION - shows what Stripe actually returns
export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-02-24.acacia",
  });

  const { email } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  const sessions = await stripe.checkout.sessions.list({ limit: 10 });

  const debugData = sessions.data.map((s) => ({
    id: s.id,
    payment_status: s.payment_status,
    customer_details_email: s.customer_details?.email,
    customer_email: s.customer_email,
  }));

  return NextResponse.json({ debug: debugData, searchedFor: email });
} 
