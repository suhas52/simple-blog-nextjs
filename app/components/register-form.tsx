"use client"

import { Button, Container, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { registerUser } from "../actions";
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            username: "",
            password: ""
        })
    
        function handleChange(e: ChangeEvent<HTMLInputElement>) {
            setFormData({...formData, [e.target.name]: e.target.value})
        }
    
        async function handleSubmit(e: FormEvent<HTMLFormElement>) {
            e.preventDefault();
            const {firstName, lastName, username, password} = formData; 
            try {
                const newUser = await registerUser(firstName, lastName, username, password);
                if (newUser) {
                    router.push('/')
                }
            } catch (err) {
                console.log(err)
            }
        }

    return <form onSubmit={handleSubmit} className="flex justify-center flex-1"> 
    <Container maxWidth="sm" className="grid grid-cols-1 p-5 border rounded-2xl m-50 ">
    
    <TextField type="text" name="firstName" onChange={handleChange}  variant="filled" label="First Name" className="bg-amber-100"/>
    <TextField type="text" name="lastName" onChange={handleChange} value={formData.lastName} variant="filled" label="Last Name" className="bg-amber-100"/>
    <TextField type="text" name="username" onChange={handleChange} value={formData.username} variant="filled" label="Username" className="bg-amber-100"/>
    <TextField type="password" name="password" onChange={handleChange} value={formData.password}variant="filled" label="Password" className="bg-amber-100"/>
    <Container className="flex justify-center p-5">
    <Button type="submit" variant="outlined" className="bg-amber-100">Submit</Button>
    </Container>
    </Container>
    </form>
}