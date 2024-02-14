import { IJob } from '@/constants/jobs'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { reactLocalStorage } from 'reactjs-localstorage'
import { v4 as uuidv4 } from 'uuid'

const empty_job: IJob = {
   _id: uuidv4(),
   job: {
      project_number: '',
      ship_name: '',
      job_description: ''
   },
   hours_worked: []
}

const initialState: IJob[] = [empty_job]

export const JobsSlice = createSlice({
   name: 'jobs',
   initialState,
   reducers: {
      addJob(state) {
         state.push({ ...empty_job, _id: uuidv4() })
      },
      removeJob(state, action: PayloadAction<string>) {
         if (state.length > 1) {
            return state.filter((job) => job._id !== action.payload)
         }
         return state
      },
      updateJob(state, action: PayloadAction<IJob>) {
         const updatedJobIndex = state.findIndex((job) => job._id === action.payload._id)

         if (updatedJobIndex !== -1) {
            state[updatedJobIndex] = { ...state[updatedJobIndex], ...action.payload }
         }

         return state
      },
      updateJobs(state, action: PayloadAction<IJob[]>) {
         state = [...action.payload]
         return state
      },
      updateHours(state, action: PayloadAction<{ _id: string }>) {
         const updatedJobIndex = state.findIndex((job) => job._id === action.payload._id)

         if (updatedJobIndex !== -1) {
            state[updatedJobIndex] = {
               ...state[updatedJobIndex]
            }
         }
         return state
      },
      resetJobs(state) {
         state = [empty_job]
         return state
      },
      cleanCache(state) {
         state = [empty_job]
         reactLocalStorage.remove('jobsLocal')
         return state
      }
   }
})

export const JobsActions = JobsSlice.actions
export default JobsSlice.reducer
