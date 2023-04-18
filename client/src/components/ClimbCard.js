import * as React from 'react';

const ClimbCard = ({id, difficulty, date, description}) => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-content">
                    {/* <h1 className="card-title">Problem {id}</h1> */}
                    <h2>Grade: {difficulty}</h2>
                    <h4>Date: {date}</h4>
                    <p className="card-description">
                        {description}
                    </p>
                </div>
                <a href={"climb/" + id} className="card-link"> </a>
            </div>
        </div>
    )
}

export default ClimbCard;