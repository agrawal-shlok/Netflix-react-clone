import React, { useEffect, useRef, useState } from 'react'
import './Titlecards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const Titlecards = ({title,category}) => {

  const[apidata,setApidata] = useState([])
  const cardsref = useRef();




  const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'b5a31e7de6mshfa4af5168f5305dp1c6869jsne470fad179df',
      'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };






const handlewheel = (event) =>{
  event.preventDefault();
  cardsref.current.scrollLeft += event.deltaY;
}

useEffect(() => {

  fetch(url,options)
   
    .then(response => response.json())
    .then(data => setApidata(data))
    .catch(err => console.error(err));


cardsref.current.addEventListener('wheel' , handlewheel)
},[])
  
  return (
    <div className='title-cards'>
      <h2>{title ? title : 'Popular On Netflix'} </h2>
      <div className="card-list" ref={cardsref}>
        {apidata.map((item) =>{
          return <Link to={`/player/${item.id}`} className="card" key={item.rank}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Titlecards