import React from "react";
import ReactPlayer from 'react-player'
import VisibilitySensor from 'react-visibility-sensor';
import { useInView } from 'react-intersection-observer'
import { InView } from 'react-intersection-observer';


const Player = (props) => {
  const videoRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);


 
  const [inView, setInView] = React.useState(false)

  return (
    <div className="video">
     

    <InView className="video" onChange={setInView}>
        {({ ref, inView = inView}) => (
            <ReactPlayer
            controls
            ref={ref}
            className="video_player"
            url={props.src}
            playsinline
            playing={inView}
            loop
         />
        
        )}
      </InView>
     
    </div>
  );
};

export default Player;
