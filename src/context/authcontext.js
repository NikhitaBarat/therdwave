

import React, { createContext } from 'react'

function Authcontext() {
	const Auth = createContext(false)
  return (
    <div>Authcontext</div>
  )
}

export default Authcontext