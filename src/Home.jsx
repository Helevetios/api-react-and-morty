import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function App() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character').then(response => {
            setData(response.data.results);
        }).catch(error => {
            console.error('Error al obtener datos', error);
        });
    }, [])


    return (
        <div>
            <h1 className='text-center m-5 fw-bold'>The Rick and Morty Characters</h1>
            <div className='container'>
                <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
                    {
                        data.map(item => (
                            <div key={item.id} className="col mb-5">
                                <div className="card h-100">
                                    <img className="card-img-top" src={item.image} />
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">{item.name}</h5>
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center">
                                            <Link className='btn btn-outline-dark mt-auto' to={'/character/' + item.id}>Acerca de</Link>
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

export default App