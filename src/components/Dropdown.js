import React, {useState} from 'react';
import { Select, MenuItem, FormControl,InputLabel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    formControl :{
        minWidth: 100
    }
}))
    
export default function Dropdown(data) {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const handleChange =(e)=>setValue(e.target.value);
    console.log(value);
  
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel>Character</InputLabel>
                <Select onChange={handleChange}>
                    {data?.map((el, i)=>(<MenuItem key={i}>{el.name}</MenuItem>)
                    )}
                    
                </Select>
            </FormControl>
          
        </div>
    )
}
