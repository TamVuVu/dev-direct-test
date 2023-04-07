import { createSlice } from "@reduxjs/toolkit";
import { createUUID } from "../utils";
import { IElement } from "../types";

export const configSlice = createSlice({
  name: "config",
  initialState: {
    instances: 0,
    dragging: "",
    currentIndex: -1,
    elements: [] as IElement[],
  },
  reducers: {
    addInstance: (state, action) => {
      const payload = {
        id: createUUID(),
      };
      state.elements = [...state.elements, { ...payload, ...action.payload }];
    },
    setMultiInstances: (state, action) => {
      state.elements = [...state.elements, ...action.payload];
    },
    setDragging: (state, action) => {
      state.dragging = action.payload;
    },
    setCurrentElement: (state, action) => {
      const index = state.elements.findIndex(
        (item) => item.id === action.payload.id
      );
      return { ...state, currentIndex: index };
    },
    changeProps: (state, action) => {
      const [key, value]: [string, string] = action.payload;
      (state.elements[state.currentIndex].props as any)[key] = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setDragging,
  addInstance,
  setMultiInstances,
  setCurrentElement,
  changeProps,
} = configSlice.actions;
