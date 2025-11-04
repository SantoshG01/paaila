import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import Product from "@/lib/modals/Product";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connect();
  const { id } = await params;

  const product = await Product.findById(id);
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connect();
  const { id } = await params;
  const body = await request.json();

  const updatedProduct = await Product.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });

  if (!updatedProduct) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(updatedProduct);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connect();
  const { id } = await params;

  const deletedProduct = await Product.findByIdAndDelete(id);
  if (!deletedProduct) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Product deleted successfully" });
}
