import React from 'react';
import style from './SideBar.module.css'
import SideBarFriends from "./SideBarFriends/SideBarFriends";


const SideBar = (props) => {

    const friendsElements = props.state.friends
        .map( p => ( <SideBarFriends name={p.name} surname={p.surname} status={p.status}/>));

    return (
        <div>
            <div>
                Friends
            </div>
            <div>
                {friendsElements}
            </div>
        </div>
    );
}

export default SideBar;