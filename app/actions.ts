"use server"

import { PrismaClient, Post } from "./generated/prisma/client"
const prisma = new PrismaClient();


export async function addPost(userId: string, content: string, title: string): Promise<Post> {
    const isAdmin = await prisma.user.findUnique({
        where: {id: userId},
        select: {isAdmin: true}
    })
    
    if (isAdmin) throw new Error("You cannot post!")
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

