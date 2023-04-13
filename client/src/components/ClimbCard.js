import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import theme from '../Theme';
// import { ThemeProvider } from '@mui/material/styles';

const ClimbCard = ({id, difficulty, date, description}) => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-content">
                    {/* <h1 className="card-title">Problem {id}</h1> */}
                    <h3>Grade: {difficulty}</h3>
                    <h4>Date: {date}</h4>
                    <p className="card-description">
                        {description}
                    </p>
                </div>
                <a href={"climb/" + id} className="card-link"></a>
            </div>

        </div>
    )
}

export default ClimbCard;