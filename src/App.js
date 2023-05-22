import './App.css';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route, Routes, withRouter} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData} from "./Redux/auth-reducer";
import {Component} from "react";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className="wrapper">
          <HeaderContainer/>
          <Sidebar/>
          <div className="content">
            <Routes>
              <Route path='profile' element={<ProfileContainer/>}/>
              <Route path='profile/:userId' element={<ProfileContainer/>}/>
              <Route path='messages' element={<MessagesContainer/>}>
                <Route index element={<div>Choose a message</div>}/>
                <Route path=':id' element={<div>message</div>}/>
              </Route>
              <Route path='users' element={<UsersContainer/>}/>
              <Route path='login' element={<LoginPage/>}/>
            </Routes>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  connect (mapStateToProps, {initializeApp}))(App);