
import React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'



const Home: NextPage = () => {


  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <span>TIK TOK UI VIDEO</span>
      <Link href="/video-page">
        <a>Go to video</a>
      </Link>

    </div>
  )
}

export default Home
