import React, { Component } from "react";
import { connect } from "react-redux";

export default class SingleMonth extends Component {
    constructor() {
        super()

        this.state = {
            
        }
        this.returnFirstNumber = this.returnFirstNumber.bind(this)
    }

    returnFirstNumber(date) {
        if (date[1] === '/') {
            return date.slice(0,1)
        } else {
            return date.slice(0, 2)
        }
    }

    render() {
        const arrayOfDatesinMonth = this.props.month
        console.log(this.props)
        return (
            <section className="single-month">
            <div>
                    <h4>{arrayOfDatesinMonth[0].monthName}</h4>
              <div>
                  <div className="single-month__days">
                  {
                      this.props.month.map( month => {
                        return (
                            
                                <div className="single-month__single-day">
                                    <p>
                                        {this.returnFirstNumber(month.date)}
                                    </p>

                                </div>
                            
                        )
                      })

                  }
                  </div>
              </div>
            </div>
            </section>
        )
    }
}