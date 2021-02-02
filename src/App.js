import './App.css' ;
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render ={ () => <Dialogs dialogsElements={props.dialogsElements} messagesElements={props.messagesElements}/>}/>
                    <Route path='/profile' render ={ () => <Profile postElements = {props.postElements}/>}/>
                    <Route path='/news' render ={ () => <News />}/>
                    <Route path='/music' render ={ () => <Music />}/>
                    <Route path='/settings' render ={ () => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
