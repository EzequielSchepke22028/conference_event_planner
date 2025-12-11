// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const venueSlice = createSlice({
  name: "funkopops",  
  initialState: [
    {
      img: "/src/assets/images/funko1.jpg",  // IMAGEN 1
      name: "Funko Pop Thanos",
      cost: 50000,
      quantity: 0,
    },
    {
      img: "/src/assets/images/funko2.jpg",  // IMAGEN 2
      name: "Amazona DC",
      cost: 45000,
      quantity: 0,
    },
    {
      img: "/src/assets/images/funko3.jpg",  // IMAGEN 3
      name: "Aang Avatar",
      cost: 40000,
      quantity: 0,
    },
   {
      img: "/src/assets/images/funko4.jpg",
      name: "Buu - Monsters INC",
      cost: 15000,
      quantity: 0,
    },
    {
      img: "/src/assets/images/funko5.jpg",
      name: "Pokemon Cubone",
      cost: 35000,
      quantity: 0,
    },
  
  ],

    reducers: {
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;
export default venueSlice.reducer;

  /*reducers: {
   
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === " Auditorium Hall (Capacity:200)" && state[index].quantity >= 3) {
          return;        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;

export default venueSlice.reducer;*/
