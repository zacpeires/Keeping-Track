import React, { Component } from "react";
import { connect } from "react-redux";
import { gotAllDates, gotAllMonths } from "../store";

class WholeCalendar extends Component {
  constructor() {
    super();

    this.state = {
      allMonths: [],
      datesByMonths: []
    };

    this.sortDatesByMonth = this.sortDatesByMonth.bind(this)
  }

  async componentDidMount() {
    const { user } = this.props;
    await this.props.gotAllMonths(user.id)

    this.setState({
      allMonths: this.props.months
    });
  }

  sortDatesByMonth() {
    
  }


  render() {

    if (!this.state.datesByMonthslength) {
      this.sortDatesByMonth()
    }
  
    return <div />;
  }
}

const mapStateToProps = state => ({
  dates: state.dates,
  months: state.month
});
const mapDispatchToProps = dispatch => ({
  gotAllDates: userId => dispatch(gotAllDates(userId)),
  gotAllMonths: userId => dispatch(gotAllMonths(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WholeCalendar);
