import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { reactLocalStorage } from 'reactjs-localstorage'
import { v4 as uuidv4 } from 'uuid'

type JobsState = {
   _id: string
   job_name: string
   hours_worked: number[] | []
}

const empty_job: JobsState = { _id: uuidv4(), job_name: '', hours_worked: [] }

const initialState: JobsState[] = [empty_job]

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
      updateJob(state, action: PayloadAction<JobsState>) {
         const updatedJobIndex = state.findIndex((job) => job._id === action.payload._id)

         if (updatedJobIndex !== -1) {
            state[updatedJobIndex] = { ...state[updatedJobIndex], ...action.payload }
         }

         return state
      },
      updateJobs(state, action: PayloadAction<JobsState[]>) {
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
