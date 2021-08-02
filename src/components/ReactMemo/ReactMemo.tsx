import React, {useState} from 'react';

const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const Example = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])
    return <>
        <button onClick={()=> setCounter(counter + 1)}>+</button>
        <Counter count={counter}/>
        <Users users={users}/>
        </>
        }