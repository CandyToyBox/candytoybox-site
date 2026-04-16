import { NextRequest, NextResponse } from "next/server";

/**
 * x402 Agent Contact Endpoint
 *
 * AI agents can pay $0.50 USDC on Base mainnet via x402 protocol to submit
 * a contact brief. Qualifying briefs route to Samantha's email.
 *
 * Payment verification is handled by x402 middleware in production.
 * This route accepts the structured brief and logs it for review.
 */

interface ContactBrief {
  agent?: string;
  problem: string;
  budget?: string;
  timeline?: string;
  contact?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactBrief = await req.json();

    if (!body.problem) {
      return NextResponse.json(
        { error: "problem field is required" },
        { status: 400 }
      );
    }

    // In production: verify x402 payment header here
    // const payment = req.headers.get("X-Payment");
    // await verifyX402Payment(payment, "0.50", "USDC", "base-mainnet");

    const brief = {
      received_at: new Date().toISOString(),
      agent: body.agent || "unknown",
      problem: body.problem,
      budget: body.budget || "not specified",
      timeline: body.timeline || "not specified",
      contact: body.contact || "not specified",
    };

    console.log("[x402 contact-brief]", brief);

    // Forward to email in production via Resend or similar
    // await sendEmail({ to: "onchain@pressreleasemarketplace.com", brief });

    return NextResponse.json({
      status: "received",
      message: "Brief logged. Qualifying requests receive a response within 24 hours.",
      intake_url: "https://candytoybox.com/contact",
      agent_wallet: "0x287240eb8F763f03C3F9826b2fda3355d03d07bE",
      pricing: {
        contact_brief: "0.50 USDC",
        network: "Base mainnet",
        protocol: "x402",
      },
    });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({
    endpoint: "POST /api/contact-x402",
    description: "Submit a contact brief. AI agents pay $0.50 USDC via x402 on Base mainnet.",
    protocol: "x402",
    network: "Base mainnet",
    price_usdc: "0.50",
    owner: "@candytoybox",
    fields: {
      problem: "string (required) — what you need help with",
      budget: "string (optional) — your budget range",
      timeline: "string (optional) — when you need it",
      contact: "string (optional) — how to reach you back",
      agent: "string (optional) — agent/system identifier",
    },
    services: "https://candytoybox.com/services",
  });
}
