

import { Backdrop, Card, CardActionArea, CardActions, CardContent, Dialog, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Dispatch, SetStateAction } from "react";
import Comments from "./comments";


interface PostType {
    id: string,
    title: string,
    createdAt: string,
    content: string,
    author: string
}

interface PostModalTypes {
    currentPost: PostType,
    dialogIsOpen: boolean,
    setDialogIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function PostModal({currentPost, dialogIsOpen, setDialogIsOpen}: PostModalTypes) {

    
    return <Dialog open={dialogIsOpen} slotProps={{
      backdrop: {
        open: true,
        sx: { backgroundColor: 'rgba(0, 0, 0, 0.4)' },
      },
    }} onClose={setDialogIsOpen} maxWidth="xl" className="flex border rounded-2xl">
        <Card key={currentPost.id} className="flex flex-1 flex-col p-2" >
               <IconButton
                aria-label="close"
                onClick={() => setDialogIsOpen(false)}
                sx={(theme) => ({
                position: 'absolute',
                right: 8,
                top: 8,
              color: theme.palette.grey[500],
             })}
        >
          <CloseIcon />
        </IconButton>
                <CardContent>
                    <Typography variant="h4">{currentPost.title}</Typography>
                    <Typography variant="body1">{currentPost.content}</Typography>
                </CardContent>
                <CardActions className="flex">
                    <CardActionArea>
                        <Typography>{currentPost.author}</Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <Typography>{currentPost.createdAt}</Typography>
                    </CardActionArea>
                </CardActions>
            </Card>
        <Comments id={currentPost.id}/>
    </Dialog>
}