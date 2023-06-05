import {useState, useEffect} from 'react'
import './firstApiCall.css'

const FirstApiCall = () => {

    const [data,setData] = useState([])
    
    useEffect(() => {
        const toFetch = () =>{
            fetch("https://jsonplaceholder.typicode.com/posts/1/photos")
            .then((response) => response.json())
            .then((gotten) => setData(gotten.slice(0,100)))
        }
        toFetch();
    }, [])
    console.log(data)
  return (
    <div>
        <h1 style={{color:'black', textAlign:'center', padding:'1rem 3rem', background:'orange'}}>My first superb API fetch</h1>
        <div className='big-div'>
        <div className='grid-it'>
        {data && data.map((photo) =>{
            return <div key = {photo.id} className='styleIt'>
                <img  src={photo.url} alt='photo' className='images'/>
                <p>{photo.title}</p>
            </div>
        })}
        </div>
        </div>

    </div>
  )
}

export default FirstApiCall