import React, { Component } from "react";
import { connect } from "react-redux";
import { gotAllDates, gotAllMonths } from "../store";
import { SingleMonth } from "../components";

class WholeCalendar extends Component {
  constructor() {
    super();

    this.state = {
      allMonths: [],
      orderedMonths: [],
      January: [],
      February: [],
      March: [],
      April: [],
      May: [],
      June: [],
      July: [],
      August: [],
      September: [],
      October: [],
      November: [],
      December: []
    };

    this.sortDatesByMonth = this.sortDatesByMonth.bind(this);
    this.sortDatesInAscendingOrder = this.sortDatesInAscendingOrder.bind(this);
    this.orderMonths = this.orderMonths.bind(this);
  }

  async componentDidMount() {
    const { user } = this.props;
    await this.props.gotAllMonths(user.id);
    const orderedMonths = this.orderMonths(this.props.months);
    this.setState({
      allMonths: orderedMonths
    });

    this.sortDatesByMonth();
  }

  sortDatesByMonth() {
    const allMonths = this.state.allMonths;
    const state = this.state;
    const sortedMonths = [];
    allMonths.forEach(month => {
      for (let key in state) {
        if (key === month.name) {
          const sortedDates = this.sortDatesInAscendingOrder(month.dates);
          this.setState({
            [key]: sortedDates
          });

          sortedMonths.push(sortedDates);
        }
      }
    });
    this.setState({
      orderedMonths: sortedMonths
    });
  }

  sortDatesInAscendingOrder(dates) {
    return dates.sort((a, b) => {
      return +a.date.split("/")[0] - +b.date.split("/")[0];
    });
  }

  orderMonths(months) {
    return months.sort((a, b) => {
      return a.numberInYear - b.numberInYear;
    });
  }

  render() {

    if (!this.state.orderedMonths.length) {
      return <div />
    }

    console.log(this.state)

    return (
      <section className="whole-calendar">
        {this.state.orderedMonths.map(month => {
          return (
          <SingleMonth month={month} key={month.monthName}/>
          )
        })}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  dates: state.dates,
  months: state.months
});
const mapDispatchToProps = dispatch => ({
  gotAllDates: userId => dispatch(gotAllDates(userId)),
  gotAllMonths: userId => dispatch(gotAllMonths(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WholeCalendar);
