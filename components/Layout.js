import React from 'react'

const Layout = (props) => {
  return (
    <div className={`content bg-${props.bg}`}>
        {props.children}
    </div>
  )
}

export default Layout