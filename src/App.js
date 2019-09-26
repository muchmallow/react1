import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
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
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert("Some error occurred");
        //console.error(promiseRejectionEvent);
    };

    componentDidMount() {
        this.props.initializeAppTC();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
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
                    <Switch>
                        <Redirect exact from={"/"} to={"/profile"}/>
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
                        <Route path={"*"}
                               render={() => <div>ЫЫ 404 NOT FOUND </div>}/>
                    </Switch>
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
