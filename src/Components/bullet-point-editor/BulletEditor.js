import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography ,Box,Paper,Button} from '@material-ui/core';
import Field from '../../HOC/Field';
import { useDispatch, useSelector } from 'react-redux';
import { deletePoints ,addPoints} from '../../slices/point';

const useStyles = makeStyles((theme) => ({
    Box:{
        display:'flex',
        justifyContent:'center',
        marginTop:'100px'
    },
    Typography:{
        fontFamily: 'inherit',

    },
    Paper:{
        minHeight:'200px',
        minWidth: '300px',
    },
    bar:{
        color:'white',
        backgroundColor:'#4169E1',
        padding:'20px',
    },
    headline:{
        display:'grid',
        padding:'20px',
    },
    bullet:{
        display:'flex',
    },
    button:{
        marginLeft:"5px"
    }
}));


function BulletEditor() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {headlines} = useSelector(state=> state.headline);
  const {points} = useSelector(state=> state.point);

  const handleDeletePoint =(id)=>{
     dispatch(deletePoints(id));
  };

  const handleAddPoint =()=>{
      dispatch(addPoints("new bullet is here"));
 };

   const handleChangePoint =(change)=>{
      alert(change);
 };

  return (
    <React.Fragment>
    <Box className={classes.Box}>
    <Paper elevation={3} className={classes.Paper}>
    <div className={classes.bar}>
      <Typography className={classes.Typography}>
          Edit Component
      </Typography>
      </div>
      <div className={classes.headline}>
      <Typography className={classes.Typography}>
          HeadLine
      </Typography>
      {headlines?.map(line => {
                return (
       <Field Type={'Headline'} ID={line._id} value={line.headline}/> 
                );
       })}
     {points?.map(point => {
                return (
       <div>
       <Typography className={classes.Typography}>
            Bullet # {point._id}
        </Typography>
        <div className={classes.bullet}>
        <Field Type={'Point'} ID={point._id}  value={point.point}/> 
        <Button onClick={(e)=>handleDeletePoint(point._id)} className={classes.button} variant='outlined'>Delete</Button>
        </div>
        </div>
                );
      })}
      <Button onClick={(e)=>handleAddPoint()} >Add Bullet</Button>
      </div>
     </Paper>
    </Box>
</React.Fragment>
  );
}

export default BulletEditor;