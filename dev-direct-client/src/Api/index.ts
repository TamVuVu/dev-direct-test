import apiService from "../App/apiService";
import { setMultiInstances } from "../Reducers";
import { IElement } from "../types";

export const getElements = () => async (dispatch?: any) => {
  const response = await apiService.get("/config");
  dispatch(setMultiInstances(response.data));
};

export const bulkCreateElements =
  (elements: IElement) => async (dispatch: any) => {
    const response = await apiService.post("/config", elements);
    if (response.status === 201) alert("Saved Succeed");
    // dispatch(setMultiInstances(response.data));
  };
