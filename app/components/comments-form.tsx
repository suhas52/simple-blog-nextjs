"use client"

import { Container, TextField, Button } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react"
import { addComment } from "../actions";


export default function AddComment({postId}: {postId: string}) {

    const [formData, setFormData] = useState({
        title: "",
        content: ""
    })

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const {title, content} = formData;
        const userId = "c66332e7-c012-479d-8375-114d74581405" //temp hardcode
        try {
            await addComment(userId, postId, content, title);

        } catch (err) {
            console.log(err)
            alert("Could not add your comment.")
        }
    }

    return <form onSubmit={handleSubmit} className="flex justify-center h-170">
    <Container maxWidth="sm" className="grid grid-cols-1 p-5 border m-50 rounded-b-sm">
    <TextField type="text" onChange={handleChange} variant="filled" label="Title" className="bg-amber-100" name="title"/>
    <TextField multiline minRows={5} type="text" onChange={handleChange} variant="filled" label="Body" className="bg-amber-100" name="content"/>
    <Container className="flex justify-center p-5">
    <Button type="submit" variant="outlined" className="bg-amber-100">Submit</Button>
    </Container>
    </Container>
    </form>

}

