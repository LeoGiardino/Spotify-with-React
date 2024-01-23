import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar'
import Player from './Player'

export default function Body() {
  return (
    <>
    <div class="container-fluid">
      <div class="row">
        <Main />
        <Sidebar />
        <Player />
      </div>
    </div>
    </>

  )
}
