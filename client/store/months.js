import axios from "axios";
import history from "../history";
import user from "./user";

const defaultMonths = {
  singlMonth: {},
  allMonths: []
};

const GET_MONTHS = "GET_MONTHS";
const GET_SINGLE_MONTH = "GET_SINGLE_MONTH";

const getMonths = months => ({
  type: GET_MONTHS, 
  months
});

export const gotAllMonths = userId => {
  return async dispatch => {
    const { data } = await axios.get(`/api/months/calendar/${userId}`);
    dispatch(getMonths(data));
  };
};

export default (state = defaultMonths, action) => {
  switch (action.type) {
    case GET_MONTHS:
      return action.months;
    default:
      return state;
  }
};
