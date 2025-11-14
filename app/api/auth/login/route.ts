
import { NextRequest, NextResponse } from "next/server";

import jwt from 'jsonwebtoken'
import { PrismaClient } from "@/app/generated/prisma/client";
import bcrypt from "bcryptjs";
import { configDotenv } from "dotenv";
configDotenv();

const JWT_SECRET = String(process.env.JWT_SECRET);
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const { username, password } = await req.json();
    
    const user = await prisma.user.findUnique({
        where: {username: username},
        select: {username: true, hashed_password: true, isAdmin: true, id: true}
    })
    if (!user) throw new Error("User does not exist")
    const match = await bcrypt.compare(password, user?.hashed_password);
    if (!match) throw new Error("Incorrect password!")
    
    const token = jwt.sign({userId: user.id, username: user.username, isAdmin: user.isAdmin}, JWT_SECRET, {
        expiresIn: 60 * 60 * 24
    })
    
    const response = NextResponse.json({ message: 'Login successful' });

    response.cookies.set('token', token, {
        maxAge: 60 * 60 * 24,
        httpOnly: true
    })

    return response;
}