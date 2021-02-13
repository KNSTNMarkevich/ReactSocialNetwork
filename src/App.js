import './App.css' ;
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom"
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    debugger;
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sidebar={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer
                           store={props.store}
                       />}/>
                <Route path='/profile'
                       render={() => <Profile
                           store={props.store}
                       />}
                />
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}


export default App;
