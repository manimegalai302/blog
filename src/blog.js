import React from 'react';
const Blog=({data})=>{  //
console.log(data);

return(
    <div>
    {data.map((item)=>{
        return(
            <>
            {Object.entries(item).map((value)=>{
                console.log(value);
                switch (value[0]){
                    case 'title':
                        return(<h1>{value[1]}</h1>)
                    case 'author':
                        return(<p>{value[1]}</p>)    
                }
    })}
            </>
        )
    })
    }
    </div>
)
} 
export default Blog;