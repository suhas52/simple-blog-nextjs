"use client"

import { Card, CardContent, CardHeader, Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"




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
    
    const [comments, setComments] = useState<commentsType[]>([]);

    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        
        async function getComments() {
            try {
                const response = await axios.get(`http://localhost:3000/api/data/comments/${id}`)
                setComments(response.data)
                setIsLoading(false)
            } catch (err) {
                console.log(err)
            }
        }
        getComments();
        
    }, [id])
    
    return <Container className="m-5 grid grid-cols-2 g-5">
        {Array.isArray(comments) && comments.map(comment => {
            return <Card key={comment.id}>
        <CardContent>
            <Typography>{comment.username}</Typography>
            <Typography>{comment.content}</Typography>
            <Typography variant="subtitle2">{comment.createdAt}</Typography>
            <Typography></Typography>
        </CardContent>
    </Card>
        })}
    </Container>
    
}