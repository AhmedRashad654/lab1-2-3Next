import { comments } from "@/data/comments"

export default function commentId( req, res ) {
    const { commentId } = req.query
    const findComment = comments.findIndex( ( e ) => e.id.toString() === commentId )
    if ( req.method === "DELETE" ) {
           comments.splice(findComment, 1);
           res.status(200).json({ msg: "deleted" });
    } else if ( req.method === "PATCH" ) {
        comments[ findComment ].comment = req.body.body
        res.status(200).json({msg:'updated'})
    }
 

}
