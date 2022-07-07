import React, {useEffect, useState} from 'react';
import axios from 'axios'

const CardUsuarios = () => {

    const [matchs, setMatchs] = useState ([]);

    useEffect(()=>{
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-caroline/person`)
        .then((response)=>{
            setMatchs(response.data.results);
        }).catch((error)=>{
            console.log(error)
        });
    },[])

    const changeMatchs = (e) =>{
        setMatchs(e.target.value);
    };

    return(

        <div>

            <h2> Usuários </h2>
            <div>
                {matchs.map((match)=>{
                    return (
                        <div key={match.id}>
                            <img
                             src={match.photo}
                             alt={match.name} />
                            <h3>{match.name}</h3>
                            <p>{match.description}</p>
                        </div>
                    )
                })}
            </div>

            <button onClick={changeMatchs}><img src="https://img.icons8.com/nolan/64/heart-upside-down.png"/></button>
            <button onClick={changeMatchs}><img src="https://img.icons8.com/nolan/64/like.png"/></button>

        </div>
    )
}

export default CardUsuarios;