import { useState } from "react";

const Put_Patch = () => {
  const [ourTitle, setOurTitle] = useState("");
  const [content, setContent] = useState("");
  const info = {
    
    title: ourTitle,
    
  };
  //FETCH API
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const wait = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PATCH",
            body: JSON.stringify({
              info,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
    } catch(error){
        console.log(error)
    }
  }
  function getOurTitle (e) {
    setOurTitle(e.target.value);
    console.log(ourTitle);
  }
  function getContent(e) {
    setContent(e.target.value);
    console.log(content);
  }
  return (
    <div style={{ maxWidth: 700, margin: "auto" }}>
      <h1>UPDATE POST (PUT)</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">ourTitle</label>
        <br />
        <input
          type="text"
          name="title"
          onChange={getOurTitle}
          value={ourTitle}
          id="title"
        />{" "}
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <input
          type="text"
          name="body"
          onChange={getContent}
          value={content}
          style={{ width: "70%" }}
        />
        <br />
        <button type="submit" style={{ marginTop: "1rem" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Put_Patch;
