import React from 'react'
import style from './Users.module.css'

let Users = (props) => {
    if(props.users.length === 0){
        props.setUsers(
            [
                {id: 1, photoUrl: 'https://sun2.velcom-by-minsk.userapi.com/s/v1/ig1/3nBH_b9o5ZymRS3TlxFHG7XQMa7dRq0FLA16DLSnFdgdyKcbPrtjMGUwGuEKDqQ-xnvucG66.jpg?size=50x0&quality=96&crop=0,308,1080,1080&ava=1', followed: false, fullName: 'Konstantin', status: 'cold', location: {city: 'Minsk', country: 'Belarus'}},
                {id: 2, photoUrl: 'https://sun2.velcom-by-minsk.userapi.com/s/v1/ig1/3nBH_b9o5ZymRS3TlxFHG7XQMa7dRq0FLA16DLSnFdgdyKcbPrtjMGUwGuEKDqQ-xnvucG66.jpg?size=50x0&quality=96&crop=0,308,1080,1080&ava=1', followed: true, fullName: 'Konstantin', status: 'cold', location: {city: 'Moscow', country: 'Russia'}},
                {id: 3, photoUrl: 'https://sun2.velcom-by-minsk.userapi.com/s/v1/ig1/3nBH_b9o5ZymRS3TlxFHG7XQMa7dRq0FLA16DLSnFdgdyKcbPrtjMGUwGuEKDqQ-xnvucG66.jpg?size=50x0&quality=96&crop=0,308,1080,1080&ava=1', followed: false, fullName: 'Konstantin', status: 'cold', location: {city: 'Ukraine', country: 'Kiev'}},
                {id: 4, photoUrl: 'https://sun2.velcom-by-minsk.userapi.com/s/v1/ig1/3nBH_b9o5ZymRS3TlxFHG7XQMa7dRq0FLA16DLSnFdgdyKcbPrtjMGUwGuEKDqQ-xnvucG66.jpg?size=50x0&quality=96&crop=0,308,1080,1080&ava=1', followed: true, fullName: 'Konstantin', status: 'cold', location: {city: 'Minsk', country: 'Belarus'}},
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {props.unfollow(u.id)}}>Follow</button> :
                                <button onClick={() => {props.follow(u.id)}}>Unfollow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users