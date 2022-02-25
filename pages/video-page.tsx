import React from 'react'
import { Audio } from  'react-loader-spinner'
import Video from '../components/Video'
import axios from 'axios'

function VideoPage() {
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
       <Video key={i} src={row["acf"]["link"]}></Video>
      )
    ))
  
  
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
  



export default VideoPage
