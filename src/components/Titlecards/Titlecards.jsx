import React, { useEffect, useRef, useState } from 'react'
import './Titlecards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const Titlecards = ({title,category}) => {

  const[apidata,setApidata] = useState([])
  const cardsref = useRef();

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2MwNzRiYmU3NDQ1MjNiNTIyNjVmNWJlMTY5Y2EzOCIsIm5iZiI6MTcyMDI5MzMxMC42MDk1MDQsInN1YiI6IjY2ODk5NWNlZmM5NzE4ODRjZDAxMWZkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cpFOH0CTip73st0VBMyFDLhTUYTfzvEyvI5h3DMfIYQ'
  //   }
  // };
  


// const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'a818ea4d5dmshd236ab14cce52d3p16b856jsn972da45a0d83',
// 		'x-rapidapi-host': 'imdb8.p.rapidapi.com'
// 	}
// };


const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '47821c84dfmshd527ce756c1a19dp11b78ajsn493b7b7814db',
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