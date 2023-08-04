import {useState} from 'react';
import Blog from './blog';


const Content=({obj})=>{
    // const value=[
    //     {
    //         title:"opening a blog",
    //         author:"written by yoshi"
    //     },
    //     {
    //         title:"welcome new blog",
    //         author:"mani"
    //     }
    // ] 
    
    const [name,setname] = useState("john")
    const [age,setage]=useState(25)
    const handleClick=()=>{
        console.log("hi")
        setname("Roshan")
        setage(30)
    };
const [text,setText]=useState('hello');
const handleChange=(e)=>{
    setText(e.target.value);
}

return(
    <div className='cont'>
         {/* <h1>{value[0].title}</h1>
        <p>{value[0].author}</p> */}
        <Blog data={obj} />
        {/* <h1>opening party!</h1>
       <p>written by yoshi</p>
        <h1>Welcome to new Blog </h1>
        <p>written by mario</p> */}
      <h2>HomePage</h2> 
         <p>{name}  your age is {age}</p>
       <button onClick={handleClick}>click</button><br/><br/>
       <input value={text} onChange={handleChange}/>
      <p>You typed: {text} </p>
    </div>
);
}
export default Content;