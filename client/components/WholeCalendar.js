import React, { Component } from "react";
import { connect } from "react-redux";
import { gotAllDates, gotAllMonths } from "../store";
import { SingleMonth } from "../components";

class WholeCalendar extends Component {
  constructor() {
    super();

    this.state = {
      allMonths: [],
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
    this.alphabetizeDatesByMonth = this.alphabetizeDatesByMonth.bind(this);
  }

  async componentDidMount() {
    const { user } = this.props;
    await this.props.gotAllMonths(user.id);

    this.setState({
      allMonths: this.props.months
    });

    this.sortDatesByMonth();
  }

  sortDatesByMonth() {
    const allMonths = this.state.allMonths;
    allMonths.forEach(month => {
      const state = this.state;
      for (let key in state) {
        if (key === month.name) {
       const sortedDates = this.alphabetizeDatesByMonth(month.dates)
          this.setState({
            [key]: sortedDates
          });
        }
      }
    });
  }

  alphabetizeDatesByMonth(dates) {
    return dates.sort((a, b) => {
      return +a.date.split('/')[0] - +b.date.split('/')[0]
    })

    return datesInMonth
  }

  render() {
    if (!this.state.allMonths) {
      return <div />;
    }

    return (
      <section className="whole-calendar">
        {/* <SingleMonth /> */}
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
