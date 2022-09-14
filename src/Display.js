import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import db from './firebase'
import { setToDo } from './TodoSlice'
import firebase from 'firebase/compat/app'
import 'firebase/firestore'


function Display() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            dispatch(setToDo(snapshot.docs.map(doc => ({
                todo: doc.data().todo,
                id: doc.id
            }
            ))))
        })
    }, [dispatch])
    const handleClick = () => {
        if (input === '') {
            alert('Add list')
        }
        else {
            db.collection('todos').add({
                todo: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()

            })
        }
        setInput('')

    }

    return (
        <div className='input'>
            <input placeholder='redux + firebase project....' value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Display