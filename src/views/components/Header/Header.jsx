import React from 'react'

function Header({ tasks }) {
  return (
    <>
      {tasks.length ?
        (
          <div>OPEN</div>
        )
        :
        (
          <div>CLOSE</div>
        )
      }
      <p>{tasks.length}</p>
    </>
  )
}

export default Header