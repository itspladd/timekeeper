import { useEffect, useReducer } from 'react';
import axios from 'axios';

import { initialState, appStateReducer } from './appStateReducer'
import {
  SET_LOADING,
  SET_USER,
  SET_APP_DATA,
  SET_PROJECT
} from '../constants/actions'

export default function useAppData() {

  const [state, dispatch] = useReducer(appStateReducer, initialState);

  useEffect(() => {
    // Attempt to authenticate a previously-logged-in user.
    axios.post('/api/auth')
      // If the API returns a user object, update the state.
      .then(res => {
        const { user } = res.data;
        user && dispatch({ type: SET_USER, user });
      })

      // And now we're done loading.
      .finally(() => dispatch({ type: SET_LOADING, loading: false }))
  }, []);

  useEffect(() => {
    Promise.all([
      axios.get('/api/projects')
    ])
      .then(allRes => allRes.map(res => res.data))
      .then(all => {
        const [projectsArr] = all;
        dispatch({ type: SET_APP_DATA, projectsArr })
      })
  }, [state.user])

  /********** AUTHENTICATION ************/
  const login = (username, rawPassword) => {
    return axios.post(`/api/auth/login`, { username, rawPassword })
      .then(res => {
        const { user } = res.data;
        user && dispatch({ type: SET_USER, user })
      })
  }

  const logout = () => {
    return axios.post(`/api/auth/logout`)
      .then(() => dispatch({ type: SET_USER, user: null }))
  }

  const authActions = {
    login,
    logout
  }
  /***************************************/

  /********** DATA ***********************/
  const addProject = (project) => {
    return axios.post(`/api/projects`, { project })
      .then(res => dispatch({ type: SET_PROJECT, project: res.data }))
  }

  const updateProject = project => {
    return axios.patch(`/api/projects/${project.id}`, { project })
      .then(res => dispatch({ type: SET_PROJECT, project: res.data }))
  }

  const dataActions = {
    addProject,
    updateProject
  }

  return {
    state,
    authActions,
    dataActions
  }
}