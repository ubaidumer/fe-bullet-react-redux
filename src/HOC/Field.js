import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { updatePoints } from '../slices/point';
import { updateHeadlines } from '../slices/headline';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    Field:{
        marginTop:'5px'
    }
  }));

const Field = props =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const [value,setValue] = useState(props.value);
    const handleChange = event => {
        setValue(event.target.value);
        if(props.Type === 'Point' ){
            dispatch(updatePoints(props.ID,event.target.value));
        }else{
            dispatch(updateHeadlines(props.ID,event.target.value));
        }
     };
    return (
        <React.Fragment>

        <TextField 
        className={classes.Field}
        id="outlined-basic" 
        variant="outlined" 
        value={value||''}
        onChange={handleChange}
        />

        </React.Fragment>
    );
}

export default Field;