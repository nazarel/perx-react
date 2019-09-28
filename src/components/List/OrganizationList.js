import React from 'react'
import { useSelector } from 'react-redux'
import ListItem from "./ListItem";

export const OrganizationList = () => {
  const orgs = useSelector(state => { return state.OrganizationReducer.organizations;})

  return (
    <div className="list">
      <h2>Organizations</h2>
      {orgs instanceof Array && orgs.map((i, index) => {
        return (
          <ListItem key={index} header={i.login} content={i.description} image={i.avatar_url} />
        )
      })}
    </div>
  )
}