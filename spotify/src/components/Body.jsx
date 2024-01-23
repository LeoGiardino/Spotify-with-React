import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar'
import Player from './Player'

export default function Body() {
  return (
    <>
    <h1>Body</h1>
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
