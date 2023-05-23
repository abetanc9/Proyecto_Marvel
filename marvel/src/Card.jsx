import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Card() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://gateway.marvel.com/v1/public/characters', {
          params: {
            ts: 1,
            apikey: 'fb4fdc07eec19c0d31fe44d9026a8849',
            hash: '217267d532821b7da5edc9bde94b42c6',
          },
        });
        setPersonajes(response.data.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(personajes);

  return (
    <div className="Card">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {personajes.map((per) => (
          <div className="col" key={per.id}>
            <div className="card" style={{ width: '18rem' }}>
              <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-img-top" alt="Avatar" />
              <div className="card-body">
                <h5 className="card-title">{per.name}</h5>
                <p className="card-text">{per.series.available}</p>
                <p className="card-text">{per.stories.available}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;



// import axios from "axios";
// import { useState, useEffect } from "react";

// https://gateway.marvel.com:443/v1/public/characters?apikey=fb4fdc07eec19c0d31fe44d9026a8849

// Your public key fb4fdc07eec19c0d31fe44d9026a8849
// Your private key 52b8ebb6ff5feba521b158792759204cab61a121
//ts:1

// 152b8ebb6ff5feba521b158792759204cab61a121fb4fdc07eec19c0d31fe44d9026a8849

//hash 217267d532821b7da5edc9bde94b42c6



// function Card() {
//     const [personajes, setPersonajes]=useState([])

//     useEffect(()=>{
//         axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=fb4fdc07eec19c0d31fe44d9026a8849&hash=217267d532821b7da5edc9bde94b42c6').then(res=>{
//             setPersonajes(res.data.data.results);
//         }).catch(error=>console.log(error))
//     },[])

//     console.log(personajes);



//     return(
//         <div className="Card">
//             <h1>Marvel</h1>

//                 <div className="row row-cols-1 row-cols-md-3 g-4">
//                     {personajes.map( per=>(
//                         <div className="col"></div>

//                         <div className="card" style="width: 18rem;">
//                             <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-img-top">
//                                 <div className="card-body">
//                                     <h5 className="card-title">Card title</h5>
//                                     <p className="card-text"></p>
//                                 </div>
//                         </div>

//                     ))

//                     }
                    

//                 </div>
//         </div>
//     );    
// }

// export default Card;