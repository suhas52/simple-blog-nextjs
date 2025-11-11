import { Button, TextField } from "@mui/material";
import { registerUser } from "../actions";

export default function RegisterPage() {
    return (
        <div className="m-20 h-70 w-100 border bg-amber-50">
            <h1>Register</h1>
            <form className="p-5" action={registerUser}>
                <TextField required type="text" name="firstName" label="First Name" />
                <TextField required type="text" name="lastName" label="Last Name" />
                <TextField required type="text" name="username" label="Username" />
                <TextField required type="password" name="password" label="password" />
                <Button variant="contained" type="submit">Submit</Button>
            </form>
        </div>
    )
}