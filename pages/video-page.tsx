import React from 'react'
import { Audio } from  'react-loader-spinner'
import Player from '../components/Player'
import axios from 'axios'
import { GetStaticPropsResult } from 'next'
import Videotsx from "../components/Videotsx"

interface VideoProps{
    video?:any[],
  
}


const VideoPage: React.FC<VideoProps> = ({video})=>{
    const [videoUrl, setVideoUrl] = React.useState(video)
    const [loader, setLoader] = React.useState(true)
  
  
    // const getVideoUrl = () => {
    //   return axios.get("/api/get_data")
    //     .then(res => { setVideoUrl(res.data);  })
    //     .catch(err => console.error(err))
    // }
  
   
  
    const renderContent = () => (
      !video?
      <Audio></Audio>
      :
      video?.map((row,i) => (
        <Videotsx key={i} src={row["acf"]["link"]}></Videotsx>
    
      )
    ))
  
  
    React.useEffect(() => {
   if(video)
      setLoader(false)
    }, [])
  
    return (
      <div>
     <div className='app_video'>
  
    {renderContent()}
    </div>
      </div>
    )
  }
  export async function getStaticProps(): Promise<GetStaticPropsResult<VideoProps>>  {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
  
   
  
    const url =
    "https://www.dariovettura.com/dance/wp-json/wp/v2/posts";
  
    //const result = await Axios.get(url);
    //const menu =  result.data
  
    const res = await fetch(url);
   
    const video = await res.json();
  
    //  const res = await fetch('https://.../posts')
    // const posts = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        video,
    
      },
      revalidate: 1,
    };
  }



export default VideoPage
