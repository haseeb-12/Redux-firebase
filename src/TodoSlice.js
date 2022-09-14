import {createSlice} from '@reduxjs/toolkit'

// const[toDoList,setToDo]=useState([]) //initialState same as useState 
// state===initialState  
// action + dispatch ====setToDo

const initialState={
    toDoList:[]
}

export const toDoSlice=createSlice({
    name:'todos',
    initialState,

    reducers:{
        setToDo:(state,action)=>{
            state.toDoList=action.payload
        }
    }
})


export const{setToDo} =toDoSlice.actions

export default toDoSlice.reducer