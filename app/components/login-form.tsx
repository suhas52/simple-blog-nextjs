"use client"

import { Button, Container, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";

export default function LoginForm() {


    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(formData)
    }

    return <form onSubmit={handleSubmit} className="flex justify-center flex-1">
    <Container maxWidth="sm" className="grid grid-cols-1 p-5 border m-50">
    <TextField type="text" onChange={handleChange} variant="filled" label="Username" className="bg-amber-100" name="username"/>
    <TextField type="text" onChange={handleChange} variant="filled" label="Password" className="bg-amber-100" name="password"/>
    <Container className="flex justify-center p-5">
    <Button type="submit" variant="outlined" className="bg-amber-100">Submit</Button>
    </Container>
    </Container>
    </form>
}