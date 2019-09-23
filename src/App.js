import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppTC} from "./redux/appReducer";
import Preloader from "./components/common/preloader/preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));

class App extends React.Component{

    componentDidMount() {
        this.props.initializeAppTC();
    }

	render() {
    	if (!this.props.initialized) {
            return <Preloader/>
		}

        return (
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <Navbar avatarUrls={this.props.avatarUrls}/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/dialogs"}
                           render={withSuspense(DialogsContainer)}/>
                    <Route path={"/profile/:userId?"}
                           render={withSuspense(ProfileContainer)}/>
                    <Route path={"/users"}
                           render={withSuspense(UsersContainer)}/>
                    <Route path={"/news"}
                           render={() => <News/>}/>
                    <Route path={"/music"}
                           render={() => <Music/>}/>
                    <Route path={"/settings"}
                           render={() => <Settings/>}/>
                    <Route path={"/login"}
                           render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
    avatarUrls: state.sideNavbar.avatarUrls
});
export default compose(
    withRouter,
	connect(mapStateToProps, {initializeAppTC}))(App);
