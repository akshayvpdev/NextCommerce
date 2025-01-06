import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// Get all products
export async function GET(req: NextRequest) {
  try {
    const products = await db.product.findMany({
      include: { category: true } // Include category if you need the category details
    });
    return NextResponse.json({ success: true, data: products }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// Create a new product
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const product = await db.product.create({
      data: body
    });
    return NextResponse.json({ success: true, data: product }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
