import {useEffect, useState} from 'react'
// import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios'

const GetPost = () => {
    const [posts, setPosts] =useState([])
    //  const [loading, setLoading] = useState(false);
    useEffect(()=>{
       const getPosts=()=>{
        // setLoading(true)
        axios.get ("https://jsonplaceholder.typicode.com/photos",{
           
        })
          .then((response) => response)
          .catch((error)=>console.log(error))
       }
       getPosts() 
    }, [])
    console.log(posts)
  return (
    <div style={{ maxWidth: 700, margin: "auto" }}>
      {posts.map((post) => {
          return (
            <div
              key={post.id}
              // style={{
              //   marginBottom: 20,
              //   boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              //   padding: ".5rem 1rem",
              //   borderRadius: ".5rem",
              // }}
            >
              <img src={post.url} alt="" />
              {/* <h4>{post.title}</h4>
              <p>{post.body}</p> */}
            </div>
          );
        })
        }
    </div>
  );
}

export default GetPost