import { PrismaClient } from "../generated/prisma/client"


const prisma = new PrismaClient();

export async function getUser(userId: string) {
    const user = await prisma.user.findUnique({
        where: {id: userId},
        select: {id: true, isAdmin: true, username: true, firstName: true, lastName: true}
    })
    return user;
}