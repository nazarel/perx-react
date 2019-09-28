import React, { useState } from 'react';
import ListItem from "./ListItem";

const List = ({title = "List Title", items = []}) => {
  return (
    <div className="list">
      <h2>{title}</h2>
      {items instanceof Array && items.map((i, index) => {
        return (
          <ListItem key={index} header={i.header} content={i.content} />
        )
      })}
    </div>
  )
}

export default List;