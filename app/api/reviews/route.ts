// Example in Next.js API route
import { NextResponse , NextRequest  } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { productId, userId, username, comment, rating } = await req.json();
    // Save to DB...
    return NextResponse.json({ message: 'Review submitted' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit review' }, { status: 500 });
  }
}
