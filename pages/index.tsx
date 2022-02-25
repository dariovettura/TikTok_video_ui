import type { NextPage } from 'next'
import React from 'react'
import { Audio } from  'react-loader-spinner'
import axios from 'axios'



const Home: NextPage = () => {

  const [videoUrl, setVideoUrl] = React.useState([])
  const [loader,setLoader] = React.useState(true)


  const getVideoUrl = () => {
    return axios.get("/api/get_data")
      .then(res => { setVideoUrl(res.data); setLoader(false) })
      .catch(err => console.error(err))
  }

  const renderContent = () => (
    loader?
    <Audio></Audio>
    :
    videoUrl.map((row,i) => (
      <div key={i} className='video'>
      <video
      
        src={row["acf"]["link"]} autoPlay loop muted playsInline></video>
        </div>)
    )
  )


  React.useEffect(() => {
    getVideoUrl()
  }, [])

  return (
    <div>
   <div className='app_video'>
     
  {renderContent()}
  </div>
    </div>
  )
}

export default Home
