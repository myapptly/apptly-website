import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// GET /api/verify-purchase?session_id=xxxx
// Called right after Stripe redirects a customer back to /dashboard
export async function GET(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-02-24.acacia",
  });

  const sessionId = req.nextUrl.searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: "Missing session_id" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      const response = NextResponse.json({
        access: true,
        email: session.customer_details?.email ?? null,
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

    return NextResponse.json({ access: false }, { status: 402 });
  } catch (err) {
    return NextResponse.json({ error: "Invalid or expired session" }, { status: 400 });
  }
} 
