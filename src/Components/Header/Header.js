import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Typography ,Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  customColor: {
    backgroundColor: '#000000',
  },
  gridItem:{
    display:'flex',
    justifyContent:'center'
  }
}

));

export default function Header() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar
        className={classes.customColor}
      >
            < Grid container spacing={2}>
            <Grid item md ={4} sm ={4} xs ={4} className={classes.gridItem}>
                <Typography>Bullet Point Component</Typography>
            </Grid>
            <Grid item md ={8} sm ={8} xs ={8} className={classes.gridItem}>
            <Typography>Bullet Point Editor</Typography>
            </Grid>
        </Grid>
      </AppBar>
    </React.Fragment>
  );
}