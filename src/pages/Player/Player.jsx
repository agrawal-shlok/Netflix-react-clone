import React, { useEffect, useState } from 'react'
import "./Player.css"
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'


const Player = () => {
  const {id} = useParams();

  const navigate = useNavigate();
  console.log(id)
  const[apidata,setApidata] = useState([])

  const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '47821c84dfmshd527ce756c1a19dp11b78ajsn493b7b7814db',
      'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };

  useEffect(() =>{
    fetch(url,options)
   
    .then(response => response.json())
    .then(data => setApidata(data))
    .catch(err => console.error(err));


  } , [])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" className='iconback'onClick={() =>{
        navigate(-2)
      }}/>
  <div className="player-info">
    {apidata.map((item) =>{
      return <div key={item.id}>
        
        {item.id === id && (<div >
          <img src={item.image} alt="" className='movieimg'/>
          <h1>{item.title}</h1>
          <h3>{item.year}</h3>
          <h5> Rating {item.rating}</h5>
          <p>{item.description}</p>
          
          
          4
        </div>)
        }
        
      </div>
})}
  </div>
    </div>
  )
}

export default Player