import { Button, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container className="flex flex-col justify-center items-center gap-5">
      <Typography variant="h1" >Welcome to my Blog</Typography>
      <Button href="/addpost" variant="contained" >Add Post</Button>
    </Container>     
  );
}
