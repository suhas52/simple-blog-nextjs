"use client"

import { Card, CardContent, CardHeader, Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { getComments } from "../actions"



interface idPropType {
    id: string
}

interface commentsType {
    id: string,
    content: string,
    createdAt: string,
    post_id: string,
    user_id: string,
    username: string
}

export default function Comments({id}: idPropType) {
    
    const [comments, setComments] = useState(null);

    useEffect(() => {
        
    }, [])

    // return <Container className="m-5 grid grid-cols-2 g-5">
    //     {comments.map(comment => {
    //         return <Card key={comment.id}>
    //     <CardContent>
    //         <Typography>{comment.username}</Typography>
    //         <Typography>{comment.content}</Typography>
    //         <Typography variant="subtitle2">{comment.created_at}</Typography>
    //         <Typography></Typography>
    //     </CardContent>
    // </Card>
    //     })}
    // </Container>
    return <h1>test</h1>
}