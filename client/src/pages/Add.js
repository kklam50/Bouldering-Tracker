import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import { ThemeProvider} from '@mui/material/styles';
import theme from '../Theme';

const climbGrades = ["V0", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10", "V11", "V12", "DYNO", "COMP"]

export default function Add() {
    const [climbDifficulty, setDifficulty] = React.useState('');

    const handleChange = (event) => {
        setDifficulty(event.target.value);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <h1 className="page-title">Add Climb</h1>
                <div >
                    <form className="add-climb-form" action="http://localhost:3000/add" method="POST">
                        <FormControl sx={{minWidth: 200}}>
                            <InputLabel id="climbDifficultyLabel" sx={{color: theme.palette.form.text}}>Climb Grade:</InputLabel>
                            <Select 
                                    labelId="climbDifficultyLabel"
                                    id="climbDifficulty"
                                    value={climbDifficulty}
                                    name="climbDifficulty" 
                                    label="Climb Difficulty"
                                    onChange={handleChange}
                                    required
                                    sx={{
                                        color: theme.palette.form.text,
                                        // color: "black",
                                        backgroundColor: theme.palette.form.background,
                                        '.MuiOutlinedInput-notchedOutline': {
                                          borderColor: theme.palette.form.borderColor,
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                          borderColor: theme.palette.form.borderColor,
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                          borderColor: theme.palette.custom.main,
                                        },
                                        '.MuiSvgIcon-root ': {
                                          fill: theme.palette.form.text,
                                        }
                                      }}
                            >
                                <MenuItem value={"V0"}>V0</MenuItem>
                                <MenuItem value={"V1"}>V1</MenuItem>
                                <MenuItem value={"V2"}>V2</MenuItem>
                                <MenuItem value={"V3"}>V3</MenuItem>
                                <MenuItem value={"V4"}>V4</MenuItem>
                                <MenuItem value={"V5"}>V5</MenuItem>
                                <MenuItem value={"V6"}>V6</MenuItem>
                                <MenuItem value={"V7"}>V7</MenuItem>
                                <MenuItem value={"V8"}>V8</MenuItem>
                                <MenuItem value={"V9"}>V9</MenuItem>
                                <MenuItem value={"V10"}>V10</MenuItem>
                                <MenuItem value={"V11"}>V11</MenuItem>
                                <MenuItem value={"V12"}>V12</MenuItem>
                                <MenuItem value={"DYNO"}>DYNO</MenuItem>
                                <MenuItem value={"COMP"}>COMP</MenuItem>
                            </Select>
                        </FormControl>

                        <FormLabel sx={{color: theme.palette.primary.contrastText}}>Climb Date:</FormLabel>
                        <TextField name="climbDate" 
                                type="date" 
                                variant='outlined' 
                                size='small'
                                // fullWidth
                                required
                                sx={{
                                    svg: theme.palette.form.text,
                                }}>
                        </TextField>

                        <FormLabel sx={{color: theme.palette.primary.contrastText}}>Climb Location:</FormLabel>
                        <TextField name="climbLocation" 
                                type="text" 
                                variant='outlined' 
                                size='small'
                                required>
                        </TextField>

                        <FormLabel sx={{color: theme.palette.primary.contrastText}}>Climb Description:</FormLabel>
                        <TextField name="climbDescription" 
                                multiline 
                                // fullWidth 
                                type="text" 
                                variant='outlined' 
                                size='small'
                                required>
                        </TextField>

                        <Button type="submit" 
                                // fullWidth 
                                sx={{color: theme.palette.primary.contrastText, background: theme.palette.custom.light}}>
                            Submit
                        </Button>
                    </form>
                </div>
            </ThemeProvider>
        </>
    )
}