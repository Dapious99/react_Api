import { useRef} from 'react'
import axios from 'axios'

const PostAxios = () => {
    // const [ourTitle, setOurTitle] = useState('')
    const ourTitleRef = useRef('')
    // const [content, setContent] = useState('')
    const contentRef = useRef('')
    const info ={
      title: ourTitleRef.current.value,
      body: contentRef.current.value,
      userId: 1,
    }
    //FETCH API
    function handleSubmit(e){
      e.preventDefault();
      axios.post("https://jsonplaceholder.typicode.com/posts", {
        body: JSON.stringify({
          info
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response)
        .catch((error) =>console.log(error));
        // fetch("https://jsonplaceholder.typicode.com/posts", {
        //    method: "POST",
        //    body: JSON.stringify({info}),
        //    headers: {
        //      "Content-type": "application/json; charset=UTF-8",
        //    },
        //  }).then((response)=>{response.json()})
        //  .then((result)=>{ console.log(result);
       

        //  }).catch((error)=>{console.log(error)})
        } 
 
  // function getOurTitle(e){
  //   setOurTitle(e.target.value)
  //   console.log(ourTitle)
  // }
// function getContent(e) {
//   setContent(e.target.value)
//   console.log(content);
// }

  return (
    <div style={{ maxWidth: 700, margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">ourTitle</label>
        <br />
        <input
          type="text"
          name="title"
          ref={ourTitleRef}
          
          id="title"
        />{" "}
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <input
          type="text"
          name="body"
          ref={contentRef}
          
          style={{ width: "70%" }}
        />
        <br />
        <button type="submit" style={{ marginTop: "1rem" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default PostAxios