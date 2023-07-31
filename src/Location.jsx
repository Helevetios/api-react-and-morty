import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Location() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location').then(response => {
      setData(response.data.results);
    }).catch(error => {
      console.error('Error al obtener datos', error);
    });
  }, [])


  return (
    <div>
      <h1 className='text-center m-5 fw-bold'>The Rick and Morty Locations</h1>
      <div className='container'>
        <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
          {
            data.map(item => (
              <div key={item.id} className="col mb-5">
                <div className="card h-100">
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{item.name}</h5>
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <h5 className='mb-4'>{item.type}</h5>
                      <span>Dimensión</span>
                      <h5>{item.dimension}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Location