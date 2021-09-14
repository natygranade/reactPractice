import React from 'react'
import {Link, useParams} from "react-router-dom";

const Cities = () => {
  
    const {id} = useParams()

    const [ciudades, setCiudades] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    }, [id])
    
    const obtenerDatos = async () => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const cities = await data.json()
        setCiudades(cities.civilizations)
    }
    

    return (
        <div>
        <ul>
            {
                ciudades.map(item => (
                    <li key={item.id}>
                        <Link to={`/cities/${item.id}`}>{item.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
    )
}

export default Cities
