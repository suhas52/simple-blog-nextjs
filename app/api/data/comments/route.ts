import { PrismaClient } from '@/app/generated/prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';


const prisma = new PrismaClient


export async function POST(req: any, res: NextApiResponse) {
    console.log("what", await req.json())
    // const result = await prisma.comment.findMany({
    //     where: {
    //         postId: req.body.id,
    //     },

    //     select: {
    //         id: true,
    //         content: true,
    //         createdAt: true,
    //         title: true,
    //         user: {
    //             select: {
    //                 username: true
    //             },
    //         },
    //     }
    // })

    // const messages = result.map(r => ({
    //     id: r.id,
    //     content: r.content,
    //     createdAt: r.createdAt,
    //     title: r.title,
    //     username: r.user.username
    // }))
}