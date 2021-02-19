import React from 'react'
import style from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/images.png'

class Users extends React.Component {

    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    // [
        //     {id: 1, photoUrl: 'https://sun2.velcom-by-minsk.userapi.com/s/v1/ig1/3nBH_b9o5ZymRS3TlxFHG7XQMa7dRq0FLA16DLSnFdgdyKcbPrtjMGUwGuEKDqQ-xnvucG66.jpg?size=50x0&quality=96&crop=0,308,1080,1080&ava=1', followed: false, fullName: 'Konstantin', status: 'cold', location: {city: 'Minsk', country: 'Belarus'}},
        //     {id: 2, photoUrl: 'https://sun2.velcom-by-minsk.userapi.com/s/v1/ig1/3nBH_b9o5ZymRS3TlxFHG7XQMa7dRq0FLA16DLSnFdgdyKcbPrtjMGUwGuEKDqQ-xnvucG66.jpg?size=50x0&quality=96&crop=0,308,1080,1080&ava=1', followed: true, fullName: 'Konstantin', status: 'cold', location: {city: 'Moscow', country: 'Russia'}},
        //     {id: 3, photoUrl: 'https://sun2.velcom-by-minsk.userapi.com/s/v1/ig1/3nBH_b9o5ZymRS3TlxFHG7XQMa7dRq0FLA16DLSnFdgdyKcbPrtjMGUwGuEKDqQ-xnvucG66.jpg?size=50x0&quality=96&crop=0,308,1080,1080&ava=1', followed: false, fullName: 'Konstantin', status: 'cold', location: {city: 'Ukraine', country: 'Kiev'}},
        //     {id: 4, photoUrl: 'https://sun2.velcom-by-minsk.userapi.com/s/v1/ig1/3nBH_b9o5ZymRS3TlxFHG7XQMa7dRq0FLA16DLSnFdgdyKcbPrtjMGUwGuEKDqQ-xnvucG66.jpg?size=50x0&quality=96&crop=0,308,1080,1080&ava=1', followed: true, fullName: 'Konstantin', status: 'cold', location: {city: 'Minsk', country: 'Belarus'}},
        // ]
        render()
        {
            return (
                <div>
                    {
                        this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Follow</button> :
                                <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Unfollow</button>}
                        </div>
                    </span>
                            <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>
                        </div>)
                    }
                </div>
            )
        }
    }

export default Users;