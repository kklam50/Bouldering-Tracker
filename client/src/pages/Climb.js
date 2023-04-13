import { useHistory ,useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Climb() {
    const [data, setData] = useState(null);
    const location = useLocation()
    var splitURL = location.pathname.split("/");
    var climbID = splitURL[splitURL.length - 1];

    useEffect(() => {
        fetch('http://localhost:3000/climb/' + climbID)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);

    if (data == null) {
        return;
    }

    var climbDifficulty = data[0].climbDifficulty;
    var climbDate = data[0].climbDate;
    var climbLocation = data[0].climbLocation;
    var climbDescription = data[0].climbDescription;

    return (
        <>
            <div>
            <h1>ClimbID: {climbID}</h1>
            <h2>Climb grade: {climbDifficulty}</h2>
            <h3>Climb date: {climbDate}</h3>
            <p>Climb Location: {climbLocation}</p>
            <p>Climb description: {climbDescription}</p>
            </div>
        </>
    )
}