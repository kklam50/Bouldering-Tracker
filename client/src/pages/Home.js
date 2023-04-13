import ClimbCard from "../components/ClimbCard";
import React, { useState, useEffect } from 'react';

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/history')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);

    if (data == null) {
        return;
    }

    var climbCards = [];
    for (var i = 0; i < data.length; i++) {
        climbCards.push(<ClimbCard id={data[i].climbID} 
                              difficulty={data[i].climbDifficulty}
                              date={data[i].climbDate}
                              description={data[i].climbDescription}/>)
    }

    return (
        <>
            <div className="card-row">
                {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'} */}
                {climbCards.map((card) => (
                    card
                ))}
            </div>
        </>
    )
}