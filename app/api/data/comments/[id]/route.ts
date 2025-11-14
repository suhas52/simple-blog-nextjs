import { PrismaClient } from '@/app/generated/prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';


const prisma = new PrismaClient


export async function GET(req: NextApiRequest, { params }: { params: {id: string}}, res: NextApiResponse) {
    const id = (await params).id
    const result = await prisma.comment.findMany({
        where: {
            postId: id,
        },

        select: {
            id: true,
            content: true,
            createdAt: true,
            title: true,
            user: {
                select: {
                    id: true,
                    username: true,
                },
            },
            post: {
                select: {
                    id: true,
                }
            }
        }
    })

    const messages = result.map(r => ({
        id: r.id,
        content: r.content,
        createdAt: r.createdAt,
        title: r.title,
        username: r.user.username,
        user_id: r.user.id,
        post_id: r.post.id
    }))

    return Response.json(messages)
}