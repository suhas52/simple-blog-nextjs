import { Card, CardContent, CardHeader, Container, Typography } from "@mui/material"
import { randomUUID } from "crypto"


interface idPropType {
    id: string
}

interface commentsType {
    id: string,
    content: string,
    created_at: string,
    post_id: string,
    user_id: string,
    username: string
}

export default function Comments({id}: idPropType) {

    const comments: commentsType[] = [{
        id: "whatever",
        content: "Lorem ipsum dolor sit amet.",
        created_at: new Date(Date.now()).toLocaleString(),
        post_id: "whatever",
        user_id: "whatever",
        username: "suhas"
    },
    {
        id: "whatever",
        content: "Lorem ipsum dolor sit amet.",
        created_at: new Date(Date.now()).toLocaleString(),
        post_id: "whatever",
        user_id: "whatever",
        username: "suhas"
    },
    {
        id: "whatever",
        content: "Lorem ipsum dolor sit amet.",
        created_at: new Date(Date.now()).toLocaleString(),
        post_id: "whatever",
        user_id: "whatever",
        username: "suhas"
    },
    {
        id: "whatever",
        content: "Lorem ipsum dolor sit amet.",
        created_at: new Date(Date.now()).toLocaleString(),
        post_id: "whatever",
        user_id: "whatever",
        username: "suhas"
    },
]

    return <Container className="m-5 grid grid-cols-2 g-5">
        {comments.map(comment => {
            return <Card >
        <CardContent>
            <Typography>{comment.username}</Typography>
            <Typography>{comment.content}</Typography>
            <Typography variant="subtitle2">{comment.created_at}</Typography>
            <Typography></Typography>
        </CardContent>
    </Card>
        })}
    </Container>
}