"use server"

import bcrypt from 'bcryptjs'
import { PrismaClient, Post } from "./generated/prisma/client"
import dotenv from 'dotenv';
dotenv.config(); 
const prisma = new PrismaClient();
const SALT  = Number(process.env.JWT_SALT);

export async function registerUser(firstName: string, lastName: string, username: string, password: string) {
    const userExists = !!(await prisma.user.findUnique({
        where: { username },
    }));
    if (userExists) throw new Error("User already exists.")
    const hashed_password = await bcrypt.hash(password, SALT)
    const newUser = await prisma.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
            username: username,
            hashed_password: hashed_password
        }
    })
    return newUser;
}

export async function addPost(userId: string, content: string, title: string): Promise<Post> {
    const result = await prisma.user.findUnique({
        where: {id: userId},
        select: {isAdmin: true}
    })
    const isAdmin = result?.isAdmin;
    
    if (!isAdmin) throw new Error("You cannot post!")
    else {
        const newPost = await prisma.post.create({
            data: {
                content: content,
                title: title,
                userId: userId,
            },
        })
        return newPost;
    }
}

export async function addComment(userId: string, postId: string, content: string, title: string): Promise<void> {
    const newComment = await prisma.comment.create({
        data: {
            userId: userId,
            content: content,
            title: title,
            postId: postId,
        }
    })
}