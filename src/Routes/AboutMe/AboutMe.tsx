import React from "react";
import "./AboutMe.css";
import Render from "../../Assets/Render.mp4";
import ScrollAnimation from "react-animate-on-scroll";
import { FAQList } from "./FAQList";
import Headshot from "../../Assets/Headshot.png";

const AboutMe: React.FC<any> = () => {
  return (
    <ScrollAnimation
      animateIn="fadeIn"
      animateOut="fadeOut"
      duration={1.5}
      delay={1}
    >
      <section className="AboutMe">
        <div className="left-container">
          <div className="video-container">
            <video width="100%" height="auto" loop autoPlay muted>
              <source src={Render} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="right-container">
          <img src={Headshot} alt="Image of PVPX" />
          <p>
            I started streaming Overwatch in early 2017 while I was a Senior in
            College at UCF. After a few months I graduated college & got
            partnered on Twitch during the same week so I pursued full-time
            streaming. I became known as one of the best Junkrat players in the
            game (peaking 4687sr Rank #6 on Junkrat & Rank #3 on Zarya in Top
            500). After a couple years I moved to Call of Duty Blackout to
            pursue the Battle Royale genre then Apex Legends upon release to
            play Professionally under Cloud9 in early 2019. As of 2020 I'm an
            FPS game focused streamer who strives to compete at the top level
            with a positive community. Feel free to come say hi in chat next
            time I'm live!
          </p>
          <h4>Frequently Asked Questions</h4>
          <hr className="divider" />
          <ul>
            {FAQList.map((QnA) => {
              return (
                <li>
                  <h5>{QnA.Question}</h5>
                  <span dangerouslySetInnerHTML={{ __html: QnA.Answer }}></span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default AboutMe;
