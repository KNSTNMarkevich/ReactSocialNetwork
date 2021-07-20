
export type FriendsType = {
    id: number
    name: string
    surname: string
    status: string
}
export type InitialStateType = {
    friends: Array<FriendsType>
}
let initialState = {
    friends: [
        {id: 1, name: 'Artem', surname: 'Tereschenko', status: 'offline' },
        {id: 2, name: 'Karina', surname: 'Morozova', status: 'online' },
        {id: 3, name: 'Illia', surname: 'Bozhok', status: 'online' },
    ]
}

const sidebarReducer = (state = initialState, action : any) : InitialStateType => {

    return state;
}



export default sidebarReducer