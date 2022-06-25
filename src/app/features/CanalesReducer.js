import { createSlice } from "@reduxjs/toolkit";

export const getData = async (dispatch) => {
  await fetch("https://api.audioboom.com/channels/recommended")
    .then((res) => res.json())
    .then((data) => {
      dispatch(SET_CANALES(data.body));
    });
};

export const getCanal = (id) => async (dispatch) => {
  await fetch(`https://api.audioboom.com/channels/${id}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(SET_CANAL(data.body));
    });
};

export const getCapitulos = (id) => async (dispatch) => {
    await fetch(`https://api.audioboom.com/channels/${id}/audio_clips`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(SET_CAPITULOS(data.body.audio_clips));
      });
  };

  export const getCapitulo = (id) => async (dispatch) => {
    await fetch(`https://api.audioboom.com/audio_clips/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(SET_CAPITULO(data.body));
      });
  };

export const CanalesSlice = createSlice({
  name: "canales",
  initialState: {
    canales: [],
    canal: [],
    capitulos: [],
    capitulo: [],
  },
  reducers: {
    SET_CANALES: (state, action) => {
      state.canales = action.payload;
    },
    SET_CANAL: (state, action) => {
        state.canal = action.payload;
      },
      SET_CAPITULOS: (state, action) => {
        state.capitulos = action.payload;
      },
      SET_CAPITULO: (state, action) => {
        state.capitulo = action.payload;
      },
  },
});

export const { SET_CANALES, SET_CANAL, SET_CAPITULOS, SET_CAPITULO } = CanalesSlice.actions;

export const selectCanales = (state) => state.canales.canales;
export const selectCanal = (state) => state.canales.canal;
export const selectCapitulos = (state) => state.canales.capitulos;
export const selectCapitulo = (state) => state.canales.capitulo;

export default CanalesSlice.reducer;
