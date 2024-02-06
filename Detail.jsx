import React, { useRef, useState } from 'react'
import "./global.css"
import LikeImg from "./like.png"
import UnlikeImg from "./unlike.png"

const Detail = (props) => {
    let data=props.data
    let divRef = useRef()
    let [like, setLike]=useState(true)

let handleChange=()=>{
    if(like===true){
        setLike(!true)
    }
    else{
        setLike(!false)
    }
}

  return (
    <div className='container'>
       {data.map((x , index)=>{
        return <div className='mainBlock'  ref={divRef}>
          <div>
             <div className='imageDiv' >
                <img src={x.photo} alt="" height="200px" width="200px"/>
           </div>
            <div className='detail'>
                <h3>{x.name}</h3>
                <div className='content'>
                    <img src="https://cdn-icons-png.flaticon.com/512/646/646094.png" alt="" height="20px" width="20px" />
                    <p>{x.email}</p>
                </div>
                <div className='content'>
                    <img src="https://cdn-icons-png.flaticon.com/512/3415/3415136.png" alt="" height="20px" width="20px"/>
                    <p>{x.phoneno}</p>
                </div>
                <div className='content'>
                    <img src="https://cdn-icons-png.flaticon.com/512/900/900782.png" alt="" height="20px" width="20px"/>
                    <p>{x.website}</p>
                </div>
            </div>
            <div className='subBlock'>
                <ul>
                    <li key={index}>
                        <button onClick={handleChange} className='likebtn'>
                        {like ?
                            <img src={UnlikeImg} alt="unlike" height="20px" width="20px" /> :
                            <img src={LikeImg} alt="like" height="20px" width="20px"/>
                        }
                        </button>
                    </li>
                    <li key={index}>
                        <img src="https://cdn-icons-png.flaticon.com/512/833/833275.png" alt="edit" height="20px" width="20px"/>
                    </li>
                    <li key={index}>
                        <img src="https://cdn-icons-png.flaticon.com/512/484/484662.png" alt="delete" height="20px" width="20px" onClick={()=>{
                             let main = document.getElementsByClassName("mainBlock")
                             main[index].style.display="none"
                        }}/>
                    </li>
                </ul>
            </div>
          </div>

        </div>
       })}

    </div>

  )
}

export default Detail