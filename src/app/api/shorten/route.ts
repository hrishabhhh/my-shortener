import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

function generateShortCode(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

export async function POST(request: NextRequest) {
  try {
    const { longUrl } = await request.json();

    if (!longUrl || !longUrl.startsWith('http')) {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    let shortCode: string;

    do {
      shortCode = generateShortCode();
    } while (await prisma.shortURLS.findUnique({ where: { shortCode } }));
    
    await prisma.shortURLS.create({
      data: { longUrl: longUrl.trim(), shortCode },
    });

    return NextResponse.json({ shortCode });
  } catch (error: any) {
    console.error('SHORTEN ERROR:', error);
    return NextResponse.json({ error: 'Server error', details: error.message }, { status: 500 });
  }
}