import React, { useContext, useState } from "react";
import "./Twitch.css";
import { Context } from "../../../../Context";
import ScrollAnimation from "react-animate-on-scroll";
import { Heading } from "../";
import Loader from "react-spinners/DotLoader";

const Twitch: React.FC<any> = () => {
  const [isChatRendered, toggleChat] = useState(false);
  const { twitchStream, twitchVod, twitchFollowers } = useContext(Context);
  const liveStatus = twitchStream?.data.length > 0 ? true : false;

  const renderChat = () => {
    return (
      <div className="chat animate__animated animate__zoomIn">
        <iframe
          frameBorder="0"
          scrolling="yes"
          id="PVPX"
          src="https://www.twitch.tv/embed/PVPX/chat?parent=pvpx.vercel.app&parent=pvpx.live"
          height="100%"
          width="100%"
        ></iframe>
      </div>
    );
  };

  const renderLiveStream = () => {
    return (
      <>
        <div className="Twitch-Container">
          <i className="fab fa-twitch"></i>
          <iframe
            title="PVPX's Live Stream"
            src={`https://player.twitch.tv/?channel=pvpx&parent=pvpx.vercel.app&parent=pvpx.live&muted=true&autoplay=true`}
            allowFullScreen={true}
            frameBorder="0"
            scrolling="no"
            height="100%"
            width="100%"
          />
        </div>
        {isChatRendered ? renderChat() : ""}
      </>
    );
  };

  // const renderPastBroadcast = () => {
  //   return (
  //     <>
  //       <div className='Twitch-Container'>
  //         <i className='fab fa-twitch'></i>
  //         <iframe
  //           title="PVPX's Live Stream"
  //           src={`https://player.twitch.tv/?video=v${twitchVod.data[0].id}&parent=localhost&parent=pvpx.vercel.app&parent=pvpx.live&muted=true&autoplay=true`}
  //           allowFullScreen={true}
  //           frameBorder='0'
  //           scrolling='no'
  //           height='100%'
  //           width='100%'
  //         />
  //       </div>
  //     </>
  //   );
  // };

  const HeadingObject = {
    Icon: "fa-twitch",
    Heading: "PVPX",
    HeadingValue: twitchFollowers?.total,
    HeadingLabel: "Followers",
    Link: "https://www.twitch.tv/pvpx/",
    DataRetrieved: twitchFollowers ? true : false,
  };

  const showChatText = () => {
    return (
      <>
        <i className="far fa-eye"></i>
        <span>show chat</span>
      </>
    );
  };

  const hideChatText = () => {
    return (
      <>
        <i className="far fa-eye-slash"></i>
        <span>hide chat</span>
      </>
    );
  };

  return (
    <ScrollAnimation animateIn="fadeIn" duration={2.5} delay={2}>
      <section className="Twitch">
        <Heading {...HeadingObject} />
        <div className="container">
          {twitchStream ? (
            <>
              {renderLiveStream()}
              <div className="twitch-btns">
                {liveStatus ? (
                  <button
                    onClick={() => toggleChat(!isChatRendered)}
                    type="button"
                  >
                    {isChatRendered ? hideChatText() : showChatText()}
                  </button>
                ) : (
                  ""
                )}
                <a
                  className="main"
                  href="https://www.twitch.tv/subs/pvpx/"
                  target="blank_"
                >
                  <i className="far fa-star"></i>
                  <span>subscribe</span>
                </a>
                <a
                  className="secondary"
                  href="https://www.twitch.tv/pvpx"
                  target="blank_"
                >
                  <i className="far fa-heart"></i>
                  <span>follow</span>
                </a>
              </div>
            </>
          ) : (
            <Loader color={"#d79d00"} size={60} />
          )}
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Twitch;
