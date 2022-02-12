import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    points: []
};

const slice = createSlice({
  name: 'point',
  initialState,
  reducers: {
    getPoints(state, action) {
      const { points } = action.payload;
      state.points = points;
    },
    deletePoints(state, action) {
      state.points = state.points.filter(point => point._id !== action.payload);
    },
    addPoints(state, action) {
     state.points.push(action.payload.data);
    },
    updatePoints(state, action){
      state.points= state.points.map(point=>{
        if(point._id === action.payload.id ){
          point.point= action.payload.point;
        }
        return point;
      });
    }
  }
});
export const reducer = slice.reducer;

export const getPoints = (id) => (dispatch) => {
    (async () => {
        await axios.get(`http://localhost:4000/bullet/point`)
        .then(res => {
            let obj = JSON.parse(JSON.stringify({points:[...res.data]}));
            console.log(obj);
            dispatch(slice.actions.getPoints(obj));
        });
    })().catch(err => {
        console.error(err);
    });
  };


export const updatePoints = (id,point) => (dispatch) => {
  (async () => {
      await axios.put(`http://localhost:4000/bullet/point/${id}`,{point:point})
      .then(res => {
        dispatch(slice.actions.updatePoints({id,point}));
      });
  })().catch(err => {
      console.error(err);
  });
};


export const addPoints = (point) => (dispatch) => {
  (async () => {
      await axios.post(`http://localhost:4000/bullet/point`,{point:point})
      .then(res => {
          dispatch(slice.actions.addPoints(res));
      });
  })().catch(err => {
      console.error(err);
  });
};

  export const deletePoints = (id) => (dispatch) => {
    (async () => {
        await axios.delete(`http://localhost:4000/bullet/point/${id}`)
        .then(res => {
            dispatch(slice.actions.deletePoints(id));
        });
    })().catch(err => {
        console.error(err);
    });
  };
export default slice;



