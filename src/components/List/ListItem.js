import React, { useState, useEffect } from 'react';

const ListItem = ({image, header, content}) => {

  return (
    <div className="card flex">
      {!!image &&
        <div>
          <img className={'avatar'} src={image}/>
        </div>
      }
      <div>
        <h3>{header}</h3>
        <div className="text-muted">
          {content}
        </div>
      </div>
    </div>
  )
}

export default ListItem;