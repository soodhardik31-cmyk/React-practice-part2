import { useState } from 'react';

export default function Joker () {
    const URL =" https://official-joke-api.appspot.com/random_joke";

    const getNewJoke= async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
    }
    return(
        <>
            <h3>Joker</h3>
            <button onClick={getNewJoke}>New Joke</button>
        </>
    )
}