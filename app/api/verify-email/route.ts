import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-06-20",
  });

  const { email } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  const normalizedEmail = email.toLowerCase().trim();

  const sessions = await stripe.checkout.sessions.list({ limit: 100 });

  const match = sessions.data.find((s) => {
    const sessionEmail = (s.customer_details?.email || s.customer_email || "")
      .toLowerCase()
      .trim();
    return sessionEmail === normalizedEmail && s.payment_status === "paid";
  });

  if (!match) {
    return NextResponse.json({ access: false }, { status: 402 });
  }

  const response = NextResponse.json({
    access: true,
    email: normalizedEmail,
  });

  response.cookies.set("apptly_access", "granted", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });

  return response;
} 
