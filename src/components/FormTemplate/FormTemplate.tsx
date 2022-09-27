import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

interface Prop extends React.PropsWithChildren {
  // className?: string | object
}

export default function UITemplate({children}: Prop) {

  useEffect(() => {
    console.log(children)
  })
  
  return (
    <div className="menu-form inner">
        {children}
    </div>
  )
}

