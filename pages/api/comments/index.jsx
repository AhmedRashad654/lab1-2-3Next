import { comments } from "@/data/comments"
import { v4 as uuid } from "uuid"
export default function Index( req, res ) {
    if(req.method === "GET")
        res.status( 200 ).json( comments )
    else if ( req.method === "POST" ) {
        console.log( req.body.body );
        const newComment = {
          id: uuid(),
          comment: req.body.body,
        };
                comments.push(newComment);
        res.status(200).json(newComment)
    }

}
