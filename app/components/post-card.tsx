"use client"

import { Card, CardActionArea, CardActions, CardContent, Container, Typography } from "@mui/material"
import PostModal from "./post-modal"
import { useState } from "react"

 interface PostType {
        id: string,
        title: string,
        createdAt: string,
        content: string,
        author: string
    }

interface PostListProp {
        posts: PostType[]
    }

export default function PostCard({posts}: PostListProp) {
    const [dialogIsOpen, setDialogIsOpen] = useState(false)
    const [currentPost, setCurrentPost] = useState({
        id: "",
        title: "",
        createdAt: "",
        content: "",
        author: ""
    })

    function handleModal(post: PostType) {
        setCurrentPost(post)
        setDialogIsOpen(!dialogIsOpen)
    }

    return <>
    {posts.map(post => {
            return <Container key={post.id}>
                <Card >
                <CardContent>
                    <Typography onClick={() => handleModal(post)} variant="h4">{post.title}</Typography>
                    <Typography variant="body1">{post.content.length > 50 
                        ? post.content.slice(0,50) + "..." : post.content}</Typography>
                </CardContent>
                <CardActions className="flex">
                    <CardActionArea>
                        <Typography>{post.author}</Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <Typography>{post.createdAt}</Typography>
                    </CardActionArea>
                </CardActions>
            </Card>
            <PostModal currentPost={currentPost} dialogIsOpen={dialogIsOpen} setDialogIsOpen={setDialogIsOpen} />
            </Container>
        })}
    </>
}