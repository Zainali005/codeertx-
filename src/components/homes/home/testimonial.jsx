import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const testimonial_data = [
  {
    id: 1,
    user: "/assets/img/testimonial/testi-1.webp",
    name: "Darrell Steward",
    title: "Founder of (Rirax)",
    ratings: [1, 2, 3, 4, 5],
    desc: "Collax was very diligent, polite and extremely customer oriented. I think Monika will go far with that attitude and ...he is such a honest, decent and reliable.",
  },
  {
    id: 2,
    user: "/assets/img/testimonial/testi-2.webp",
    name: "Floyd Miles",
    title: "CEO of (Orix)",
    ratings: [1, 2, 3, 4],
    desc: "Collax was very diligent, polite and extremely customer oriented. I think Monika will go far with that attitude and ...he is such a honest, decent and reliable.",
  },
  {
    id: 3,
    user: "/assets/img/testimonial/testi-3.webp",
    name: "Albert Flores",
    title: "Founder of (Rirax)",
    ratings: [1, 2, 3, 4, 5],
    desc: "Collax was very diligent, polite and extremely customer oriented. I think Monika will go far with that attitude and ...he is such a honest, decent and reliable.",
  },
  {
    id: 4,
    user: "/assets/img/testimonial/testi-1.webp",
    name: "Darrell Steward",
    title: "Founder of (Rirax)",
    ratings: [1, 2, 3, 4, 5],
    desc: "Collax was very diligent, polite and extremely customer oriented. I think Monika will go far with that attitude and ...he is such a honest, decent and reliable.",
  },
];

const testimonial_2_data = [
  {
    id: 1,
    user: "/assets/img/testimonial/testi-4.webp",
    name: "Darrell Steward",
    title: "Founder of (Rirax)",
    ratings: [1, 2, 3, 4, 5],
    desc: "Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a true professional. he is such a honest, decent and reliable. He always provide good service",
  },
  {
    id: 2,
    user: "/assets/img/testimonial/testi-5.webp",
    name: "Floyd Miles",
    title: "CEO of (Orix)",
    ratings: [1, 2, 3, 4],
    desc: "Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a true professional. he is such a honest, decent and reliable. He always provide good service",
  },
  {
    id: 3,
    user: "/assets/img/testimonial/testi-6.webp",
    name: "Albert Flores",
    title: "Founder of (Rirax)",
    ratings: [1, 2, 3, 4, 5],
    desc: "Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a true professional. he is such a honest, decent and reliable. He always provide good service",
  },
  {
    id: 4,
    user: "/assets/img/testimonial/testi-5.webp",
    name: "Darrell Steward",
    title: "Founder of (Rirax)",
    ratings: [1, 2, 3, 4, 5],
    desc: "Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a true professional. he is such a honest, decent and reliable. He always provide good service",
  },
];

const Testimonial = () => {
  return (
    <React.Fragment>
      <div className="tp-testimonial-area fix" id="testimonials">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-testimonial-section-box text-center pb-25">
                <h5 className="tp-subtitle">Client Testimonial</h5>
                <h2 className="tp-title tp-white-text">Customer feedback</h2>
              </div>
            </div>
          </div>
          <div className="tp-testimonial-slider-section d-flex justify-content-center mb-50">
            {/* slider start */}

            <Marquee
              className="gap-4 items-center"
              speed={50}
              pauseOnHover={true}
            >
              {testimonial_data.map((item, i) => (
                <div key={i} className="tp-testimonial-item">
                  <div className="tp-testi-meta d-flex justify-content-between mb-20">
                    <div className="tp-testi-icon-box d-flex align-items-center">
                      <div className="tp-testi-img mr-20">
                        <Image
                          width={61}
                          height={61}
                          src={item.user}
                          alt=""
                          loading="eager"
                        />
                      </div>
                      <div className="tp-testi-client-position">
                        <h3>{item.name}</h3>
                        <h6>{item.title}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="tp-testi-p-text">
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </Marquee>
            {/* slider end */}
          </div>

          {/* slider 2 start */}
          <div className="tp-testimonial-slider-section-2 d-flex justify-content-center">
            <Marquee
              className="gap-4 items-center"
              speed={50}
              direction="right"
              pauseOnHover={true}
            >
              {testimonial_2_data.map((item, i) => (
                <div key={i} className="tp-testimonial-item">
                  <div className="tp-testi-meta d-flex justify-content-between mb-20">
                    <div className="tp-testi-icon-box d-flex align-items-center">
                      <div className="tp-testi-img mr-20">
                        <Image
                          width={61}
                          height={61}
                          src={item.user}
                          alt=""
                          loading="eager"
                        />
                      </div>
                      <div className="tp-testi-client-position">
                        <h3>{item.name}</h3>
                        <h6>{item.title}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="tp-testi-p-text">
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
          {/* slider 2 end */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonial;
