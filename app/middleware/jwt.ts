import { configDotenv } from "dotenv";
import { PrismaClient } from "../generated/prisma/client"

import jwt from 'jsonwebtoken'
configDotenv();
const JWT_SECRET = String(process.env.JWT_SECRET)
const prisma = new PrismaClient();

export async function getUser(token: string) {
    
    if (!token) return null
    const verification: any = jwt.verify(token, JWT_SECRET)
    if (verification) {
        const user = await prisma.user.findUnique({
        where: {id: verification.userId},
        select: {id: true, isAdmin: true, username: true, firstName: true, lastName: true}
    })
        return user
    } else return null
}