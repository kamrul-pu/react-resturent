import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    console.log("MapStateToProps", state);
    return {
        dishes: state.dishes,
        comments: state.comments,
    }
}

class Home1 extends React.Component {

    render() {
        document.title = "HOME";
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Home1);
