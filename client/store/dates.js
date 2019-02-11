import axios from "axios";
import history from "../history";

const defaultDates = {
  singleData: {},
  allDates: []
};

const GET_SINGLE_DATE = "GET_SINGLE_DATE";
const GET_DATES = "GET_DATES";

const getSingleDate = date => ({
  type: "GET_SINGLE_DATE",
  date
});

const getDates = dates => ({
  type: "GET_DATES",
  dates
});

const gotSingleDate = userId => {
  return async dispatch => {
    const { data } = await axios.get(`/api/calendar/${userId}`);
    dispatch(getDates(data));
  };
};

export default (state = defaultDates, action) => {
  switch (action.type) {
    case GET_DATES:
      return action.dates;
    case GET_SINGLE_DATE:
      return action.date;
    default:
      return state;
  }
};
