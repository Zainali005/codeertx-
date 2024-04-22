import Link from "next/link";
import React, { useState } from "react";
import useModal from "../../../hooks/use-modal";
import VideoModal from "../../common/modals/modal-video";
import Calendaly from "../../contact/calendaly";

const hero_contents = {
  shapes: [{ img: "hero-shape-4" }, { num: "-two", img: "hero-shape-4.1" }],
  title: (
    <>
      Exquisite design and development at a{" "}
      <font class="tp-section-highlight">
        fraction
        <svg
          width="247"
          height="12"
          viewBox="0 0 247 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-0.000488281 0L247 12H-0.000488281V0Z"
            fill="var(--tp-theme-primary)"
          ></path>
        </svg>
      </font>{" "}
      of the cost.
    </>
  ),
  text: `Create exceptional products faster and easier than ever before with our scalable design and advanced next-gen development solutions.`,
  btn_text: `Book a Free Call`,
  video_title: "Behind the scenes",
  video_id: "LJbkLdtEW00",
};

const { btn_text, shapes, social_links, text, title, video_id, video_title } =
  hero_contents;

const HeroArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  const [showCalendaly, setShowCalendaly] = useState(false);

  const handleBookCall = () => {
    setShowCalendaly(true);
  };

  return (
    <React.Fragment>
      <div className="tp-hero-area-two pt-120 p-relative fix">
        <div className="tp-hero-yellow-shape d-none d-lg-block"></div>
        {shapes.map((s, i) => (
          <div
            key={i}
            className={`ce-hero-shape${s.num ? s.num : ""} d-none d-lg-block`}
          >
            <img src={`/assets/img/hero/${s.img}.webp`} alt="" />
          </div>
        ))}
        <div className="container">
          <div className="row revert-mobile">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-hero-section-box tp-hero-section-box-four pt-170 pb-100">
                <h3
                  className="tp-hero-bd-title text-black wow tpfadeUp"
                  data-wow-duration=".3s"
                  data-wow-delay=".6s"
                >
                  {title}
                </h3>
                <p
                  className="wow tpfadeUp"
                  data-wow-duration=".5s"
                  data-wow-delay=".7s"
                >
                  {text}
                </p>
                <div
                  className="tp-hero-three-button-box d-flex align-items-center wow tpfadeUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".9s"
                >
                  <button onClick={handleBookCall} className="tp-btn mr-20">
                    {btn_text}
                  </button>
                  <Link href="#Package-Plan">
                    <a className="tp-btn outline mr-20">See Pricing</a>
                  </Link>
                  <div className="tp-hero-paly-button-four"></div>
                </div>

                <div className="hero-section-quote">
                  <span>
                    <i class="fas fa-info-circle"></i> Includes a discovery
                    call, project audit, initial design & development discussion
                  </span>
                </div>

                <div className="row">
          <div className="quote-section small">
            <p> It's not about ideas. It's about making ideas happen.</p> <h4>Steve Jobs</h4>
        
          </div>
        </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow fadeInRight"
              data-wow-duration=".7s"
              data-wow-delay=".9s"
            >
              <div className="tp-hero-right-img-four pb-120 pt-90">
                <img src={"/assets/img/hero/hero-5.webp"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={video_id}
      />
      {/* video modal end */}

      {showCalendaly && (
        <div className="BookCallModal">
          <div className="BookCallContainer">
          <Calendaly />
          <div className="closeFrame" onClick={() => setShowCalendaly(false)}> close</div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default HeroArea;
