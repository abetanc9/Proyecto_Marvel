import React, { useEffect, useState } from 'react';
import axios from 'axios';

// https://gateway.marvel.com:443/v1/public/characters?apikey=fb4fdc07eec19c0d31fe44d9026a8849

// Your public key fb4fdc07eec19c0d31fe44d9026a8849
// Your private key 52b8ebb6ff5feba521b158792759204cab61a121
//ts:1

// 152b8ebb6ff5feba521b158792759204cab61a121fb4fdc07eec19c0d31fe44d9026a8849

//hash 217267d532821b7da5edc9bde94b42c6

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
              <div className="card-body">
                <h5 className="card-title">{per.name}</h5>
                <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-img-top" alt="Avatar" />
                <p className="card-text">Comics: {per.series.available}</p>
                <p className="card-text">Películas: {per.stories.available}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;