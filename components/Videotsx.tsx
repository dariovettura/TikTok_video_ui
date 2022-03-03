import * as React from "react";

import { InView, useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";

interface VideoProps {
  src: string,

}

const Videotsx: React.FC<VideoProps> = ({ src }) => {
  const videoRef = React.useRef<any>(null);
  // const [inView, setInView] = React.useState(false);
  const [muted, setMuted] = React.useState(true);


  const [ref, inView] = useInView({
    threshold: 1,
  })

  //   React.useEffect(()=>{

  //     if(inView)
  //     {setPlay(true);
  //     console.log("acceso")}
  //     else{setPlay(false);
  //     console.log("spento")}
  // },[inView])

  //   console.log(inView)
  return (



    <div ref={ref} className="video">
      <div className="v-top-bar">
        <button onClick={()=>setMuted(!muted)}> unmute</button>
      </div>
      <ReactPlayer
        config={{ youtube: { playerVars: { disablekb: 1 } } }}

        volume={0.5}
        muted={muted}
        className="video_player"
        url={src}
        playsinline
        playing={inView}
        loop
      />
      <h2>Element is inside the viewport: {inView.toString()}</h2>
    </div>
    //    <video

    //    ref={ref}
    //    className="video_player"
    //    src={src}
    //    playsInline

    //    loop
    //  ></video>





  );
}

export default Videotsx;