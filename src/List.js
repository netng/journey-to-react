import * as React from 'react'

export default function List({ users }) {
    /*
    const users = [
        'ujang', 'udin', 'ace', 'asep', 'aep'
    ]

    const displayUser = users.map(function(user) {
        return <li key={user}>{user}</li>
    })
    */

    /*
    const users = [
        { id: 1, name: 'ujang', gender: 'male' },
        { id: 2, name: 'udin', gender: 'male' },
        { id: 3, name: 'ace', gender: 'male' },
        { id: 4, name: 'ijah', gender: 'female' },
        { id: 5, name: 'siti', gender: 'female' }
    ]
    */

    //const displayUser = users.map( user => {
    //    return <li key={user.id}>{ user.name } ({ user.gender })</li>
    //})

    //return(
    //    <ul>
    //        {users.length > 0 && users.map(user=> {
    //            const {id, name, gender} = user
    //            return <li key={id}>{name} ({gender})</li>
    //        })}
    //    </ul>
    //)
    return(
        <table border='1'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 && users.map(user => {
                    const {id, name, gender} = user
                    return(
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{gender}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}