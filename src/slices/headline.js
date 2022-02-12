import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    headlines: []
};

const slice = createSlice({
  name: 'headline',
  initialState,
  reducers: {
    getHeadlines(state, action) {
      const { headlines } = action.payload;
      state.headlines = headlines;
    },
    addHeadlines(state, action) {
     state.headlines = [action.payload];
    },
    updateHeadlines(state, action){
      state.headlines= state.headlines.map(headline=>{
        if(headline._id === action.payload.id ){
          headline.headline= action.payload.headline;
        }
        return headline;
      });
    }
  }
});
export const reducer = slice.reducer;

export const getHeadlines = (id) => (dispatch) => {
    (async () => {
        await axios.get(`http://localhost:4000/bullet/headline`)
        .then(res => {
            let obj = JSON.parse(JSON.stringify({headlines:[...res.data]}));
            console.log(obj);
            dispatch(slice.actions.getHeadlines(obj));
        });
    })().catch(err => {
        console.error(err);
    });
  };


export const updateHeadlines = (id,headline) => (dispatch) => {
  (async () => {
      await axios.put(`http://localhost:4000/bullet/headline/${id}`,{headline:headline})
      .then(res => {
        dispatch(slice.actions.updateHeadlines({id,headline}));
      });
  })().catch(err => {
      console.error(err);
  });
};

export default slice;



