import React, { useState } from 'react';
import { ApiCalls } from '../api/agent';
import { useDispatch, useSelector } from 'react-redux'
import { GET_ORGANIZATIONS, GET_REPOS } from "../reducers/actions";

function Input({label, type = 'text'}) {
  const [username, setUsername] = useState("");
  const [inputError, setError] = useState(false);
  const dispatch = useDispatch();
  const { error, isError } = useSelector(state => {
    return state.OrganizationReducer;
  });

  const getData = (username) => {
    if(!!username) {
      setError(false);
      //move data fetching to PureComponent
      dispatch({ type: GET_ORGANIZATIONS, payload: ApiCalls.getOrgs(username) });
      dispatch({ type: GET_REPOS, payload: ApiCalls.getRepos(username) });
    } else {
      setError(true)
    }
  };

  const setInput = (e) => {
    let value = e.target.value.replace(/\s+/g, '');

    setUsername(value);
  }

  let hasError = isError || inputError;
  let errorMessage = "";
  if(inputError) {
    errorMessage = "*You need to enter a username to search";
  } else if (isError){
    errorMessage = error.message;
  }

  return (
    <label className={'label'}>
      <span>{label}</span>
      {hasError &&
        <span className={'text-danger ml-3'}>
          {errorMessage}
        </span>
      }
      <input className='form-control' type={type} onChange={e => setInput(e)} value={username}/>
      <button className={'btn'} onClick={() => getData(username)}>Search</button>
    </label>
  )
}

export default Input;