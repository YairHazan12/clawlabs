import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "waitlist.json");

function readData() {
  try {
    const raw = readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return { seed: 47, entries: [] };
  }
}

function writeData(data: { seed: number; entries: { email: string; timestamp: string }[] }) {
  writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = (body.email || "").trim().toLowerCase();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const data = readData();

    // Check for duplicates
    const exists = data.entries.some(
      (e: { email: string }) => e.email === email
    );
    if (exists) {
      const total = data.seed + data.entries.length;
      return NextResponse.json(
        { message: "You're already on the list!", count: total, alreadyExists: true },
        { status: 200 }
      );
    }

    // Add new entry (no IP address collected for privacy)
    data.entries.push({
      email,
      timestamp: new Date().toISOString(),
    });

    writeData(data);

    const total = data.seed + data.entries.length;

    return NextResponse.json(
      {
        message: "You're on the list! We'll notify you when we launch.",
        count: total,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist POST error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
