import { useState, useEffect } from "react";
import axios from "axios";

function Generator() {
    const [jokes, setJokes] = useState([]);

    const getJoke = async () => {
        try {
            const response = await axios.get(
                "https://official-joke-api.appspot.com/random_joke"
            );

           
            setJokes([response.data]);
            } catch (error) {
                console.log(error);
            }
    };

    useEffect(() => {
        getJoke();
    }, []);

    return (
        <div>
            <h1>Random Joke Generator</h1>

            {jokes.map((joke) => (
                <div
                    key={joke.id}
                    
                >
                    <h3>{joke.setup}</h3>
                    <p>{joke.punchline}</p>
                </div>
            ))}

            <button onClick={getJoke}>
                Next
            </button>
        </div>
    )
}

export default Generator;