"use server"

import bcrypt from 'bcryptjs';
import {PrismaClient} from './generated/prisma/client'
import { configDotenv } from 'dotenv';
configDotenv();

const prisma = new PrismaClient();
const SALT  = Number(process.env.JWT_SALT)


export async function loginUser(formData: FormData) {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    
}

export async function registerUser(formData: FormData) {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const hashedPassword = await bcrypt.hash(password, SALT)

    try {
        console.log("test")
        const newUser = await prisma.user.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                username: username,
                hashedPassword: hashedPassword
            }
        })
    } catch (err) {
        console.log(err)
    }
}