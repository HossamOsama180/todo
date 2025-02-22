import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    tasks:[],
    CompleteTask:[],
    DeleteeTask:[],
    ArchiveTask:[],
}

export const TODOSLICE = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addtask: (state,action)=>{
            state.tasks.push(action.payload)
        },
        Completee:(state,action)=>{
            state.CompleteTask.push(action.payload)
            state.tasks = state.tasks.filter(task => task !== action.payload); // ✅ إزالة المهمة من المهام العادية

        },
        Deletee : ( state, action)=>{
            state.DeleteeTask.push(action.payload)
            state.tasks= state.tasks.filter(item => item !==  action.payload);
        },
        Archive : ( state, action)=>{
            state.ArchiveTask.push(action.payload)
            state.tasks= state.tasks.filter(item => item !==  action.payload);

        },

    }
})

// Action creators are generated for each case reducer function
export const { addtask ,Completee, Deletee, Archive} = TODOSLICE.actions

export default TODOSLICE.reducer