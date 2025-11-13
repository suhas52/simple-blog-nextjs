"use client"

import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import PostModal from "./modal"
import { useState } from "react"

interface PostType {
        id: string,
        title: string,
        created_at: string,
        content: string,
        author: string
    }

interface PostListProp {
        posts: PostType[]
    }

export default function PostCard({posts}: PostListProp) {
    const [dialogIsOpen, setDialogIsOpen] = useState(false)

    function handleModal() {
        setDialogIsOpen(!dialogIsOpen)
    }

    return <>
    {posts.map(post => {
            return <Card key={post.id}>
                <CardContent>
                    <Typography onClick={handleModal} variant="h4">{post.title}</Typography>
                    <Typography variant="body1">{post.content.length > 50 
                        ? post.content.slice(0,50) + "..." : post.content}</Typography>
                </CardContent>
                <CardActions className="flex">
                    <CardActionArea>
                        <Typography>{post.author}</Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <Typography>{post.created_at}</Typography>
                    </CardActionArea>
                </CardActions>
                <PostModal post={post} dialogIsOpen={dialogIsOpen} setDialogIsOpen={setDialogIsOpen} />
            </Card>
        })}
    </>
}