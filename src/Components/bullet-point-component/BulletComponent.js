import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography,Box,Paper, List, ListItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getHeadlines } from '../../slices/headline';
import { getPoints } from '../../slices/point';

const useStyles = makeStyles((theme) => ({
    Box:{
        display:'flex',
        justifyContent:'center',
        marginTop:'100px'
    },
    Typography:{
        fontFamily: 'inherit'
    },
    Paper:{
        minHeight:'200px',
        minWidth: '300px',
        padding:'20px'
    }
  }));


function BulletComponent() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {headlines} = useSelector(state=> state.headline);
    const {points} = useSelector(state=> state.point);

    React.useEffect(()=>{
        dispatch(getHeadlines());
        dispatch(getPoints());
      },[dispatch]);

    return (
        <React.Fragment>
            <Box className={classes.Box}>
            <Paper elevation={3} className={classes.Paper}>

                {headlines?.map(line => {
                return (
                    <Typography className={classes.Typography}> 
                  HeadLine : {line.headline}
                    </Typography>
                );
              })}

                {points?.map(point => {
                return (
                    <ListItem className={classes.Typography}> 
                    - {point.point}
                    </ListItem>
                );
              })}


             </Paper>
            </Box>
        </React.Fragment>

    );
}

export default BulletComponent;