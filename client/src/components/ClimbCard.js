import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import theme from '../Theme';
// import { ThemeProvider } from '@mui/material/styles';

const ClimbCard = ({id}) => {
    return (
        <div className="card-container">
            {/* <ThemeProvider theme={theme}>
                <Card className="card" variant="outlined" component="div"
                    sx={{ minWidth: 275, 
                          maxWidth: 400, 
                          background: theme.palette.primary.main
                        }}
                    >
                    <CardContent className="card-content">
                        <Typography gutterBottom variant="h5" component="div" color={theme.palette.primary.contrastText} className="testing">
                            Problem 1 
                        </Typography>
                        <Typography variant="body2" color={theme.palette.primary.contrastText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </CardContent>
                </Card>
            </ThemeProvider> */}

            <div className="card">
                <div className="card-content">
                    <h1 className="card-title">Problem {id}</h1>
                    <p className="card-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <a href="history" className="card-link"></a>
            </div>

        </div>
    )
}

// export default function ClimbCard() {
    
// }
export default ClimbCard;