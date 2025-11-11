import { Button, TextField } from "@mui/material";
import { loginUser } from "../actions";



export default function LoginPage() {
    return <div className="m-20 h-70 w-100 border bg-amber-50">
        <form className="flex flex-wrap" action={loginUser}>
            <TextField required type="text" name="username" label="Username" />
            <TextField required type="password" name="password" label="password" />
            <Button variant="contained" type="submit">Submit</Button>
        </form>
    </div>
}