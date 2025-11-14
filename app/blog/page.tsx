import { Container } from "@mui/material";
import PostCard from "../components/post-card";
import { PrismaClient } from "../generated/prisma/client";



export default async function BlogPage() {
    
    
    interface PostType {
        id: string,
        title: string,
        createdAt: string,
        content: string,
        author: string
    }
    
    const prisma = new PrismaClient();
    const newPosts = await prisma.post.findMany({
        select: {
            id: true,
            user: {
                select: {
                    username: true
                }
            },
            title: true,
            createdAt: true,
            content: true
        }
    })
    
    const posts: PostType[] = newPosts.map(p => ({
        id: p.id,
        title: p.title,
        createdAt: String(p.createdAt),
        content: p.content,
        author: p.user.username,
    }));
    console.log(posts)



return <Container className="grid grid-cols-2 justify-center gap-2">
<PostCard posts={posts}/>
</Container>
}