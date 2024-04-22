import React from "react";
import Image from "next/image";
import {
  FeatureOne,
  FeatureThree,
  FeatureTwo,
  Featurefour,
  Featurefive,
  Featuresix,
} from "../../../svg";

const feature_contents = {
  feature_img: "/assets/img/feature/fea-1.webp",
  subtitle: "Why Choose us",
  title: `Experienced and proven, we're your ideal `,
  highlight_text: "development",
  feature_lists: [
    {
      id: 1,
      icon: <FeatureOne />,
      title: "Top-tier quality",
      subtitle: (
        <>
          Unleash the power of quality with our design and development
          solutions. Our team consistently delivers outstanding work that raises
          the bar for excellence.
        </>
      ),
    },
    {
      id: 2,
      icon: <FeatureTwo />,
      title: "One Team, One Goal",
      subtitle: (
        <>
          Avoid the complexities of managing agencies and freelancers. Our
          independent in-house team provides a streamlined process from concept
          to launch.
        </>
      ),
      // subtitle:<>We provide a dedicated team of developers to work exclusively on each project, ensuring that our clients receive personalized attention and focused efforts to achieve their project goals.</>,
    },
    {
      id: 3,
      icon: <Featurefour />,
      title: "Eliminate the hiring hassle",
      subtitle: (
        <>
          Avoid the stress of hiring or firing with Xecutors. Signup and let us
          handle the talent you need for your success.
        </>
      ),
    },
    {
      id: 4,
      icon: <Featurefive />,
      title: "Delivered as promised",
      subtitle: (
        <>
          Experience the power of precision with Xecutors delivery. We never
          compromise on quality and always deliver on our promises. Are you
          ready to see results?
        </>
      ),
    },
    {
      id: 5,
      icon: <FeatureThree />,
      title: "Transparent Pricing Models",
      subtitle: (
        <>
          Keep your budget in check with our straightforward pricing. No hidden
          fees or surprises. Pause your subscription anytime.
        </>
      ),
    },
    {
      id: 6,
      icon: <Featuresix />,
      title: "Confidentiality Assured",
      subtitle: (
        <>
          We value your ideas and take confidentiality seriously. Our team is
          bound by strict contracts and we handle legal matters upfront.
        </>
      ),
    },
  ],
};

const { feature_img, feature_lists, highlight_text, subtitle, title } =
  feature_contents;

const FeatureArea = () => {
  return (
    <div
      className="tp-feature-arae pt-100 pb-100 p-relative border-b"
      id="whychoose"
    >
      <div className="ce-chose-shape d-none d-lg-block">
        <img src="/assets/img/hero/hero-shape-4.webp" alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-12  wow tpfadeRight"
            data-wow-duration=".5s"
            data-wow-delay=".7s"
          >
            <div className="tp-fea-right-side">
              <div className="tp-fea-section-box">
                <h5 className="tp-subtitle pb-10 text-center">{subtitle}</h5>
                <h2 className="max-w-title tp-title-sm pb-65 text-center">
                  {title}
                  <span className="tp-section-highlight">
                    {highlight_text}
                    <svg
                      width="240"
                      height="11"
                      viewBox="0 0 240 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0L240 11H0V0Z"
                        fill="var(--tp-theme-primary)"
                      />
                    </svg>
                  </span>{" "}
                  partner
                </h2>
              </div>
              <div className="fea-wrapper-main fea-wrapper-grid">
                {feature_lists.map((list, i) => {
                  const { icon, id, subtitle, title } = list;
                  return (
                    <div key={id} className="tp-feature-list d-flex">
                      <div className={`tp-feature-list__icon-img mr-25`}>
                        {icon}
                      </div>
                      <div className="tp-feature-list__content">
                        <h4>{title}</h4>
                        <p>{subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default FeatureArea;
