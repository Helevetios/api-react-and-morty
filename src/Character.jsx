import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Character() {

    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/' + id).then(response => {
            setData(response.data);
        }).catch(error => {
            console.error('Error al obtener datos', error);
        });
    }, [])

    return (
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={data.image} /></div>
                <div className="col-md-6">
                    <h1 className="display-5 fw-bolder">{data.name}</h1>
                    <h5>{data.species} | {data.gender}</h5>
                    <div className="fs-5 mb-5">
                        <span>Estado: {data.status}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Character