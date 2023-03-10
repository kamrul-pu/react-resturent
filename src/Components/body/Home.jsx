import React from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';

const mapStateToProps = (state) => {
    console.log("MapStateToProps", state);
    return {
        dishes: state.dishes,
        comments: state.comments,
    }
}

class Home extends React.Component {
    componentDidMount() {
        console.log("Home Props", this.props);
        this.props.dispatch({
            type: 'TEST',
            str: "Sample Text Overrite From Home",
        })
    }
    componentDidUpdate() {
        console.log("Home Props Updated", this.props);
    }
    render() {
        document.title = "Resturent Demo";
        return (
            <div>
                <Loading />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Home);
