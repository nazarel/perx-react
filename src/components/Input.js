import React, { useState } from 'react';
import { ApiCalls } from '../api/agent';
import { useDispatch } from 'react-redux'
import { GET_ORGANIZATIONS, GET_REPOS } from "../reducers/actions";

function Input({label, type = 'text'}) {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch()

  const getData = (username) => {
    dispatch({ type: GET_ORGANIZATIONS, payload: ApiCalls.getOrgs(username) });
    dispatch({ type: GET_REPOS, payload: ApiCalls.getRepos(username) });
  };

  return (
    <label className={'label'}>
      {label}
      <input className='form-control' type={type} onChange={e => setUsername(e.target.value)} value={username}/>
      <button onClick={() => getData(username)}>Submit</button>
    </label>
  )
}

export default Input;