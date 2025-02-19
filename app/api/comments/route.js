import { connectDB } from "@/utils/db";
import Comment from "@/models/Comment";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { text } = await req.json();
  const newComment = new Comment({
    text,
    user: token.id, // using user ID from token
  });

  try {
    await newComment.save();
    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  await connectDB();
  const comments = await Comment.find().populate("user");
  return NextResponse.json(comments, { status: 200 });
}
