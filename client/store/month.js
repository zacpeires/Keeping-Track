import axios from 'axios'
import history from '../history'

const months = {
  singleMonth: {},
  allMonths: []
}

const GET_SINGLE_MONTH = 'GET_SINGLE_MONTH'
const GET_MONTHS = 'GET_MONTHS'

const getSingleMonth = month => ({
  type: 'GET_SINGLE_MONTH',
  month
})

const getMonths = months => ({
  type: 'GET_MONTHS',
  months
})

//months can eager load in the days
