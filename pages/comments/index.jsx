import axios from "axios"
import { useEffect, useState } from "react"

export default function Index() {
    ///////////get Comment////////////////
    const [ commet, setCommet ] = useState( [] )
    async function getAllComments() {
        await axios.get('/api/comments').then((result)=>setCommet(result.data)).catch((error)=>console.log(error))
    }
    useEffect( () => {
        getAllComments()
    }, [] )
    /////////add Comment///////////////
    const [addComment,setAddComment] = useState("")
    async function handleSubmit( e ) {
        e.preventDefault()
        await axios.post( '/api/comments', {
        body:addComment
        } ).then( ( result ) => {
            if ( result.data.id ) {
            getAllComments()
            }
        } )
       
    }
    ///////////delete comment////////////
    async function handleDelete(commentId) {
        axios
          .delete(`/api/comments/${commentId}`)
            .then( ( result ) => {
                if ( result.data.msg === "deleted" ) {
                  getAllComments()
              }
          });
    }
    ///////updata comment//////////////
    const [ updated, setUpdated ] = useState( "" )
    async function handleUpdated(commentId) {
      axios
        .patch(`/api/comments/${commentId}`, {
          body: updated,
        })
          .then( ( result ) => {
              if ( result.data.msg === "updated" ) {
                getAllComments()
            }
        });
    }
  return (
    <div
      style={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      {commet.map((comm) => (
        <div
          key={comm.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <p>{comm.id}</p>
          <p>{comm.comment}</p>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(comm.id)}
          >
            delete
          </button>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setUpdated(e.target.value)}
            />
            <button
              className="btn btn-primary"
              onClick={() => handleUpdated(comm.id)}
            >
              update
            </button>
          </div>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setAddComment(e.target.value)}
        />
        <button className="btn btn-primary">Add Comment</button>
      </form>
    </div>
  );
}
