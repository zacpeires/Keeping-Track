import React, { Component } from "react";
import { connect } from "react-redux";
import { gotAllDates } from "../store";

class WholeCalendar extends Component {
  constructor() {
    super();

    this.state = {
      dates: [],
      datesByMonths: []
    };
  }

  async componentDidMount() {
    const { user } = this.props;
    await this.props.gotAllDates(user.id);

    this.setState({
      dates: this.props.dates
    });
  }


  render() {
    if (this.state.dates.length) {
      this.separateDatesIntoMonths();
      console.log(this.state.datesOrganisedByMonths);
    }

    return <div />;
  }
}

const mapStateToProps = state => ({
  dates: state.dates
});
const mapDispatchToProps = dispatch => ({
  gotAllDates: userId => dispatch(gotAllDates(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WholeCalendar);
