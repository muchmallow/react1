import React from "react";
import Header from "./Header";
import {getAuthUserDataThunkCreator, logoutThunkCreator} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserDataThunkCreator();
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return (
        {
            isAuth: state.auth.isAuth,
            login: state.auth.login
        });
};

export default connect(mapStateToProps, {getAuthUserDataThunkCreator, logoutThunkCreator})(HeaderContainer);