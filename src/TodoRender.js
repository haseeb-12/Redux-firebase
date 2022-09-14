import React from 'react'
import db from './firebase'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function TodoRender({ list }) {

    return (
        <div className='todoList'>
            <p>{list.todo}</p>
            <button onClick={e => db.collection('todos').doc(list.id).delete()}><DeleteForeverIcon/></button>
        </div>
    )
}

export default TodoRender





