import React from 'react'
import { useSelector } from 'react-redux'
import ListItem from "./ListItem";

export const RepoList = () => {
  const repos = useSelector(state => {return state.RepoReducer.repos;})

  return (
    <div className="list">
      <h2>Repositories</h2>
      {repos instanceof Array && repos.map((i, index) => {
        return (
          <ListItem key={index} header={i.name} />
        )
      })}
    </div>
  )
}