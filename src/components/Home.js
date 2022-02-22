import { useEffect, useState } from "react";

export default function Home(){

    function randomNumber() {
        return Math.floor(Math.random() * 100) + 1
    }
    
    const [pokemon, setPokemon] = useState({});
    const [randomPokemon, setRandomPokemon] = useState(1);


    useEffect( () =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
        .then((res) => res.json())
        .then((res) => setPokemon(res))
    },[randomPokemon])

    const handleClick = () =>{
        setRandomPokemon(randomNumber());
    }


    return pokemon ? (
        <>
            <p>Name : {pokemon.name}</p>
            <p>Height : {pokemon.height}</p>
            <p>Wieght : {pokemon.weight}</p>
            <p>Type : {pokemon.types[0].type.name}</p>
            <button onClick={handleClick}>Get a new Pokemon</button>
        </>
    
    ) : <p>Loading</p>;
}