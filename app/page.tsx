import { Button, Container, Typography } from "@mui/material";
import { getUser } from "./middleware/jwt";
import { getCookies } from "./helper";

const token = await getCookies()
  let loggedUser: any = null;
  if (token) {
    loggedUser = await getUser(token)
  }

export default function Home() {
  return (
    <Container className="flex flex-col justify-center items-center gap-5">
      <Typography variant="h1" >Welcome to My Blog</Typography>
      {loggedUser && <Button href="/addpost" variant="contained" >Add Post</Button>}
    </Container>     
  );
}
