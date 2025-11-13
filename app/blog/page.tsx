import { Card, CardActionArea, CardActions, CardContent, CardHeader, Container, Link, Typography } from "@mui/material";
import { randomUUID } from "crypto";
import PostModal from "../components/modal";
import PostCard from "../components/card";

export default function BlogPage() {


    interface PostType {
        id: string,
        title: string,
        created_at: string,
        content: string,
        author: string
    }

    const posts: PostType[] = [{
        id: randomUUID(),
        title: "Lorem ipsum dolor sit amet.",
        created_at: new Date(Date.now()).toLocaleString(),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam labore repellat maiores corporis illum accusantium magni cupiditate perspiciatis, iusto laudantium dicta. Maiores quam iure modi nam voluptatem neque cum quisquam delectus deleniti recusandae? Obcaecati voluptas facere culpa. Quam sequi dolor recusandae consequatur, expedita alias aperiam voluptas dolore natus harum earum.",
        author: 'Suhas'
    },
    {
        id: randomUUID(),
        title: "Lorem ipsum dolor sit amet.",
        created_at: new Date(Date.now()).toLocaleString(),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam labore repellat maiores corporis illum accusantium magni cupiditate perspiciatis, iusto laudantium dicta. Maiores quam iure modi nam voluptatem neque cum quisquam delectus deleniti recusandae? Obcaecati voluptas facere culpa. Quam sequi dolor recusandae consequatur, expedita alias aperiam voluptas dolore natus harum earum.",
        author: 'Suhas'
    },
    {
        id: randomUUID(),
        title: "Lorem ipsum dolor sit amet.",
        created_at: new Date(Date.now()).toLocaleString(),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam labore repellat maiores corporis illum accusantium magni cupiditate perspiciatis, iusto laudantium dicta. Maiores quam iure modi nam voluptatem neque cum quisquam delectus deleniti recusandae? Obcaecati voluptas facere culpa. Quam sequi dolor recusandae consequatur, expedita alias aperiam voluptas dolore natus harum earum.",
        author: 'Suhas'
    },
    {
        id: randomUUID(),
        title: "Lorem ipsum dolor sit amet.",
        created_at: new Date(Date.now()).toLocaleString(),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam labore repellat maiores corporis illum accusantium magni cupiditate perspiciatis, iusto laudantium dicta. Maiores quam iure modi nam voluptatem neque cum quisquam delectus deleniti recusandae? Obcaecati voluptas facere culpa. Quam sequi dolor recusandae consequatur, expedita alias aperiam voluptas dolore natus harum earum.",
        author: 'Suhas'
    },
    {
        id: randomUUID(),
        title: "Lorem ipsum dolor sit amet.",
        created_at: new Date(Date.now()).toLocaleString(),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam labore repellat maiores corporis illum accusantium magni cupiditate perspiciatis, iusto laudantium dicta. Maiores quam iure modi nam voluptatem neque cum quisquam delectus deleniti recusandae? Obcaecati voluptas facere culpa. Quam sequi dolor recusandae consequatur, expedita alias aperiam voluptas dolore natus harum earum.",
        author: 'Suhas'
    },
    {
        id: randomUUID(),
        title: "Lorem ipsum dolor sit amet.",
        created_at: new Date(Date.now()).toLocaleString(),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam labore repellat maiores corporis illum accusantium magni cupiditate perspiciatis, iusto laudantium dicta. Maiores quam iure modi nam voluptatem neque cum quisquam delectus deleniti recusandae? Obcaecati voluptas facere culpa. Quam sequi dolor recusandae consequatur, expedita alias aperiam voluptas dolore natus harum earum.",
        author: 'Suhas'
    },
]

    

    return <Container className="grid grid-cols-2 justify-center gap-2">
        <PostCard posts={posts}/>
    </Container>
}