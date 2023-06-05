import {useState} from 'react'

const Posts = () => {
    const [ourTitle,setOurTitle] = useState('')
    const [content,setContent] = useState('')
    const toPass = {
        title: ourTitle,
        body: content,
        userId: 1
    }
    function handleSubmit(e){
        e.preventDefault();
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method: 'POST',
            body: JSON.stringify({toPass}),
            headers:{'Content-Type': 'application/json; charset=UTF-8'},
        })
        .then((response) => response.json())
        .then((gotten) => console.log(gotten))
        .catch((err) => console.log(err))
        setOurTitle('')
        setContent('')
    }
    const getTitle = (e) =>{
        setOurTitle(e.target.value)
    }
    const getContent = (e) =>{
        setContent(e.target.value)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label><br/>
            <br />
            <input type='text' name='title' onChange={getTitle} value={ourTitle}/><br/>
            <label htmlFor='content'>Content</label><br/>
            <br />
            <input type='text' name='content' onChange={getContent} value={content}/><br/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Posts