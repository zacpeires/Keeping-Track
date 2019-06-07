import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WholeCalendar } from '../components';

class Home extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        const { user } = this.props
        return (
            <div>
                <WholeCalendar user={user} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(Home)