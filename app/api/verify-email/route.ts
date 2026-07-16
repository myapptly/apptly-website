import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// POST /api/verify-email  { email: "student@example.com" }
// TEMPORARY DEBUG STEP — checks whether STRIPE_SECRET_KEY is actually
// present at runtime, without exposing the key itself.
export async function POST(req: NextRequest) {
  const keyExists = typeof process.env.STRIPE_SECRET_KEY === "string";
  const keyLength = process.env.STRIPE_SECRET_KEY?.length || 0;
  const keyPrefix = process.env.STRIPE_SECRET_KEY?.slice(0, 8) || "MISSING";

  return NextResponse.json({
    debug: true,
    keyExists,
    keyLength,
    keyPrefix,
  });
} 
