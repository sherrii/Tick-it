import React from "react";
import Link from "next/link";

const Service = () => {
  return (
    <div className="service__area service__bg z-index-1 pt-120 pb-90 service-bg-two" id="service">
      <div className="container" >
        <div className="row tik">
          <div className="col-12">
            <div className="section__title-wrapper text-center mb-65">
              <span className="section__subtitle">
              What we offer
              </span>
              <h2 className="section__title">
                Our Services
              </h2>
            </div>
          </div>
          <div className="row  tik" data-aos="fade-left" data-aos-delay="300">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service__item mb-30">
                <div className="service__thumb include__bg service-two-cmn"></div>
                <div className="service__icon transition-3">
                <svg width="70" height="70" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z" fill="#E3C372" stroke="#BD681F" stroke-width="2" stroke-linejoin="round"/><path d="M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M33.2216 33.2217L41.7069 41.707" stroke="#BD681F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div className="service__content">
                  <h3>
                    <Link href="service">Track</Link>
                  </h3>
                  <p>
                  Effortlessly monitor your parking and traffic tickets' status.

                  </p>
                </div>
                <div className="service__link">
                  <Link href="service">
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service__item mb-30">
                <div className="service__thumb include__bg service-two-cmn"></div>
                <div className="service__icon transition-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="63.448"
                    height="75"
                    viewBox="0 0 63.448 75"
                  >
                    <g
                      id="Group_26741"
                      data-name="Group 26741"
                      transform="translate(-1030 -1643)"
                    >
                      <path
                        id="ppc"
                        d="M26.814,0A26.77,26.77,0,0,1,53.352,30.518a25.7,25.7,0,0,1-.763,3.632,1.361,1.361,0,0,1-2.148.714l-2.295-1.569a1.361,1.361,0,0,1-.519-1.52,21.289,21.289,0,0,0,.427-2.441,21.612,21.612,0,0,0,.146-2.545A21.362,21.362,0,1,0,22.359,47.7a1.373,1.373,0,0,1,1.08,1.221l.214,2.783a1.366,1.366,0,0,1-1.715,1.422,26.477,26.477,0,0,1-7.532-2.6A26.794,26.794,0,0,1,26.814,0Z"
                        transform="translate(1029.949 1643)"
                        fill="#BD681F"
                      ></path>
                      <path
                        id="ppc-2"
                        data-name="ppc"
                        d="M51.045,74.792a2.2,2.2,0,0,1-1.5.134,2.075,2.075,0,0,1-1.282-.964L42.891,64.7l-5.115,5.743a6.567,6.567,0,0,1-2.3,1.715,3.052,3.052,0,0,1-1.752.2,2.338,2.338,0,0,1-1.52-1.086,4.327,4.327,0,0,1-.568-1.947L29.512,41.577a15.216,15.216,0,1,1,9.2-5.493l23.09,15.8a4.358,4.358,0,0,1,1.4,1.465,2.313,2.313,0,0,1,.177,1.831,2.966,2.966,0,0,1-1.044,1.41,6.457,6.457,0,0,1-2.637,1.135h-.037l-7.5,1.605,5.341,9.3a2.081,2.081,0,0,1,.2,1.581,2.228,2.228,0,0,1-.928,1.288.2.2,0,0,1-.061.037l-5.542,3.2-.122.055ZM28.9,33.643l-.116-1.453V32.1a1.459,1.459,0,0,1,.134-.665,1.55,1.55,0,0,1,.494-.61.97.97,0,0,1,.3-.146,1.483,1.483,0,0,1,.647-.073,1.63,1.63,0,0,1,.61.189,1.068,1.068,0,0,1,.177.11l.555.378a6.915,6.915,0,0,0,.232-1.9v-.647a4.333,4.333,0,0,0-.458-2.014,3.369,3.369,0,0,0-1.361-1.4,4.486,4.486,0,0,0-2.264-.519h-1.3a1.52,1.52,0,0,1-.952-.25.9.9,0,0,1-.311-.751v-.183a.922.922,0,0,1,.238-.684,1.221,1.221,0,0,1,.659-.305,5.2,5.2,0,0,1,.97-.049c.61,0,1.288,0,2.032.049s1.416.073,2.014.122V19.763c-.378-.092-.8-.177-1.276-.262s-.977-.159-1.514-.214c-.25-.031-.507-.049-.769-.061V17.7h-2.1v1.526a4.883,4.883,0,0,0-2.551.995,3.906,3.906,0,0,0-1.282,3.2v.61a4.164,4.164,0,0,0,1.166,3.326,5.182,5.182,0,0,0,3.424.995h1.031a1.16,1.16,0,0,1,.708.214.732.732,0,0,1,.305.61v.232a.812.812,0,0,1-.214.61,1.367,1.367,0,0,1-.647.311,5.139,5.139,0,0,1-1.068.1H24.953c-.525,0-1.044-.031-1.556-.055s-.989-.061-1.428-.1v2.991c.336.092.684.171,1.05.238s.739.122,1.135.171.8.092,1.221.116h.183v1.66h2.1V33.813a10.613,10.613,0,0,0,1.257-.171ZM49.733,71.7a.22.22,0,0,0,.153,0h.055l4.968-2.783a.3.3,0,0,0,.1-.146.153.153,0,0,0,0-.116L49.269,58.343h0a.964.964,0,0,1-.11-.281.946.946,0,0,1,.739-1.111l8.417-1.41h0A4.419,4.419,0,0,0,60.1,54.8a1.1,1.1,0,0,0,.391-.476.427.427,0,0,0-.043-.372,2.252,2.252,0,0,0-.751-.739l-27.9-18.707.439,6.317,1.886,27.2a2.228,2.228,0,0,0,.262,1.025.421.421,0,0,0,.269.214,1.05,1.05,0,0,0,.61-.1A4.376,4.376,0,0,0,36.787,68l5.194-6.506h0a1.166,1.166,0,0,1,.232-.189.94.94,0,0,1,1.288.342l6.14,10a.14.14,0,0,0,.1.055Z"
                        transform="translate(1029.949 1643)"
                        fill="#f8d458"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="service__content">
                  <h3>
                    <Link href="service">Pay</Link>
                  </h3>
                  <p>
                    Swiftly settle your fines securely through online payment.
                  </p>
                </div>
                <div className="service__link">
                  <Link href="service">
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service__item mb-30">
                <div className="service__thumb include__bg service-two-cmn"></div>
                <div className="service__icon transition-3">
                 <svg width="70" height="70" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 19H43V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V19Z" fill="#E3C372" stroke="#BD681F" stroke-width="2" stroke-linejoin="round"/><path d="M5 9C5 7.89543 5.89543 7 7 7H41C42.1046 7 43 7.89543 43 9V19H5V9Z" stroke="#BD681F" stroke-width="2" stroke-linejoin="round"/><path d="M16 4V12" stroke="#BD681F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 4V12" stroke="#BD681F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 34H34" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 34H20" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 26H34" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 26H20" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div className="service__content">
                  <h3>
                    <Link href="service">Schedule</Link>
                  </h3>
                  <p>
                  Seamlessly reschedule your hearing date with handy reminders.
                  </p>
                </div>
                <div className="service__link">
                  <Link href="service">
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service__item mb-30">
                <div className="service__thumb include__bg service-two-cmn"></div>
                <div className="service__icon transition-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="49.925"
                    height="75"
                    viewBox="0 0 49.925 75"
                  >
                    <g
                      id="Group_27412"
                      data-name="Group 27412"
                      transform="translate(-535 -1727)"
                    >
                      <path
                        id="attract-customers"
                        d="M44.6,41.049V33.5H32.705v7.545ZM32.223,44.394a.94.94,0,0,1,1.428-.244,1.276,1.276,0,0,1,.214,1.63L32.07,48.545a.946.946,0,0,1-1.434.244,1.288,1.288,0,0,1-.214-1.636l1.8-2.765ZM43.21,45.841a1.3,1.3,0,0,1,0-1.654.94.94,0,0,1,1.453,0l2.216,2.527a1.294,1.294,0,0,1,0,1.66.94.94,0,0,1-1.453,0L43.2,45.841ZM37.43,45.78a1.032,1.032,0,1,1,2.045,0v3.107a1.032,1.032,0,1,1-2.045,0ZM4.761,44.394a.94.94,0,0,1,1.428-.244A1.276,1.276,0,0,1,6.4,45.78L4.6,48.551a.94.94,0,0,1-1.428.244A1.276,1.276,0,0,1,2.96,47.16l1.831-2.765Zm10.987,1.447a1.3,1.3,0,0,1,0-1.654.94.94,0,0,1,1.453,0l2.216,2.527a1.294,1.294,0,0,1,0,1.66.94.94,0,0,1-1.453,0l-2.222-2.533ZM9.968,45.78a1.1,1.1,0,0,1,1.019-1.19,1.1,1.1,0,0,1,1.025,1.19v3.107a1.111,1.111,0,0,1-.989,1.166,1.093,1.093,0,0,1-1.032-1.16V45.786Zm34.61-18.7V18.837A18.764,18.764,0,0,0,39.066,5.53h0a21.116,21.116,0,0,0-28.494,0h0A18.782,18.782,0,0,0,5.017,18.837v8.234H16.908V18.837a6.9,6.9,0,0,1,2.026-4.883h0a9.573,9.573,0,0,1,5.854-2.02,9.411,9.411,0,0,1,5.854,2.02h0a6.916,6.916,0,0,1,2.045,4.883v8.234ZM5.017,33.5v7.6H16.908V33.5Z"
                        transform="translate(535.243 1727)"
                        fill="#BD681F"
                      ></path>
                      <path
                        id="attract-customers-2"
                        data-name="attract-customers"
                        d="M34.384,65.166c-.378-.61-1.087-1.416-1.087-2.118a1.135,1.135,0,0,1,.763-1.032C34.024,61.406,34,60.8,34,60.222V59.166a3.925,3.925,0,0,1,.122-.659,3.766,3.766,0,0,1,1.685-2.136,4.676,4.676,0,0,1,.916-.439c.58-.208.3-1.184.934-1.221a8.466,8.466,0,0,1,4.883,2.35,3.772,3.772,0,0,1,.971,2.442L43.448,62.1a.867.867,0,0,1,.61.537c.2.818-.647,1.831-1.044,2.49s-1.758,2.545-1.758,2.564a.537.537,0,0,0,.122.3c2.167,2.973,8.546,1.1,8.546,7.014H27.468c0-5.915,6.36-4.041,8.546-7.014.11-.153.159-.238.153-.311s-1.6-2.3-1.74-2.527Zm-27.468,0c-.378-.61-1.087-1.416-1.087-2.118a1.135,1.135,0,0,1,.763-1.032c-.037-.61-.061-1.221-.061-1.795V59.166a3.925,3.925,0,0,1,.122-.659,3.766,3.766,0,0,1,1.685-2.136,4.675,4.675,0,0,1,.916-.439c.61-.208.3-1.184.934-1.221a8.484,8.484,0,0,1,4.883,2.35,3.772,3.772,0,0,1,.971,2.442L15.98,62.1a.867.867,0,0,1,.61.537c.2.818-.647,1.831-1.044,2.49s-1.758,2.545-1.758,2.564a.537.537,0,0,0,.122.3c2.167,2.973,8.546,1.1,8.546,7.014H0c0-5.915,6.36-4.041,8.546-7.014.11-.153.159-.238.153-.311s-1.6-2.3-1.74-2.527Z"
                        transform="translate(535 1727)"
                        fill="#f8d458"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="service__content">
                  <h3>
                    <Link href="service">Fight</Link>
                  </h3>
                  <p>
                  Engage a professional attorney to skillfully battle your tickets.
                  </p>
                </div>
                <div className="service__link">
                  <Link href="service">
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service__item mb-30">
                <div className="service__thumb include__bg service-two-cmn"></div>
                <div className="service__icon transition-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="75.95"
                    height="75"
                    viewBox="0 0 75.95 75"
                  >
                    <g
                      id="Group_27411"
                      data-name="Group 27411"
                      transform="translate(-922 -1727)"
                    >
                      <path
                        id="data-scientist"
                        d="M50.552,62.4c2.169,6.382,11.241,6.623,13.283,0,5.018,4.517,12.979,1.142,14.114,10.219A2.431,2.431,0,0,1,75.412,75H38.969a2.431,2.431,0,0,1-2.537-2.379C37.51,63.988,45.8,66.677,50.552,62.4Zm-1.89-11.7a1.611,1.611,0,0,0-.768.241.685.685,0,0,0-.266.3,1.123,1.123,0,0,0-.089.5,5.113,5.113,0,0,0,.977,2.341l2.055,3.267a17.369,17.369,0,0,0,2.747,3.6,5.506,5.506,0,0,0,3.87,1.561A5.709,5.709,0,0,0,61.3,60.9a18.4,18.4,0,0,0,2.823-3.851l2.309-3.806c.469-1.066.634-1.719.457-2.036-.089-.178-.406-.241-.92-.216a2.3,2.3,0,0,1-1.269-.038l.933-2.633a17.985,17.985,0,0,1-10.543-2.975c-1.129-.717-1.465-1.541-2.588-1.459a3.806,3.806,0,0,0-2.125,1.155,5.481,5.481,0,0,0-1.224,2.4l.685,3.286a2.233,2.233,0,0,1-1.167,0Zm18.4-.945a1.611,1.611,0,0,1,1.047.85c.343.7.2,1.732-.444,3.21h0l-.038.082-2.347,3.832a19.138,19.138,0,0,1-3.058,4.142,6.978,6.978,0,0,1-5.03,1.992,6.807,6.807,0,0,1-4.777-1.9,18.174,18.174,0,0,1-2.981-3.876L47.38,54.815a6.045,6.045,0,0,1-1.18-3.026,2.455,2.455,0,0,1,.209-1.116,2.119,2.119,0,0,1,.749-.863,2.683,2.683,0,0,1,.539-.273,36.659,36.659,0,0,1-.082-4.808,8.19,8.19,0,0,1,.247-1.332,7.9,7.9,0,0,1,3.47-4.44,9.643,9.643,0,0,1,1.9-.907c3.946-1.427,9.173-.634,11.97,2.379a7.968,7.968,0,0,1,2.011,5.037l-.133,4.269Z"
                        transform="translate(920 1727)"
                        fill="#BD681F"
                        fillRule="evenodd"
                      ></path>
                      <path
                        id="data-scientist-2"
                        data-name="data-scientist"
                        d="M3.87,25.571H60.162V4.5a.565.565,0,0,0-.19-.444.577.577,0,0,0-.444-.19H4.5a.565.565,0,0,0-.444.19.488.488,0,0,0-.19.444Zm56.293,3.248H3.87v41.8a.577.577,0,0,0,.19.444.565.565,0,0,0,.444.19l23.2-.063h0a1.9,1.9,0,0,1,0,3.806H4.5a4.517,4.517,0,0,1-3.172-1.332A4.4,4.4,0,0,1,0,70.5V4.5A4.4,4.4,0,0,1,1.332,1.332,4.4,4.4,0,0,1,4.5,0H59.465a4.517,4.517,0,0,1,3.172,1.332A4.4,4.4,0,0,1,63.969,4.5V31.642a1.9,1.9,0,0,1-3.806,0ZM20.743,9.369h4.041a.241.241,0,0,1,.254.254V23.75a.241.241,0,0,1-.254.254H20.743a.241.241,0,0,1-.26-.254V9.623a.241.241,0,0,1,.26-.254Zm9.217,5.367h4.047a.241.241,0,0,1,.254.254V23.7a.241.241,0,0,1-.254.254H29.961a.241.241,0,0,1-.254-.254V14.99a.273.273,0,0,1,.254-.254Zm18.447,0h4.041a.241.241,0,0,1,.26.254V23.7a.241.241,0,0,1-.26.254H48.408a.241.241,0,0,1-.254-.254V14.99A.273.273,0,0,1,48.408,14.736ZM39.184,9.369h4.041a.241.241,0,0,1,.26.254V23.75a.241.241,0,0,1-.26.254H39.184a.241.241,0,0,1-.254-.254V9.623a.241.241,0,0,1,.254-.254ZM11.526,11.311h4.041a.241.241,0,0,1,.26.26V23.75a.241.241,0,0,1-.26.254H11.526a.241.241,0,0,1-.254-.254V11.571c-.051-.159.1-.26.254-.26Zm13.7,40.6L36.1,52.1a11.647,11.647,0,0,1-5.113,9.661l-5.76-9.883Zm-.6-3.324L24.505,35.9v-.844l.831.063h0a15.282,15.282,0,0,1,3.007.514A14.387,14.387,0,0,1,38.835,48.845l.063.831h-.837l-12.6-.381H24.74l-.127-.768Zm1.535-.768,11.07.317A13.093,13.093,0,0,0,30.386,38,13.956,13.956,0,0,0,26.7,36.729c-.216-.038-.438-.076-.634-.1l.127,11.133Zm-4.6,2.931,6.2,10.784a12.426,12.426,0,1,1-6.7-23.2Z"
                        transform="translate(922 1727)"
                        fill="#f8d458"
                        fillRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="service__content">
                  <h3>
                    <Link href="service">Appeal</Link>
                  </h3>
                  <p>
                  Get expert help to appeal unfair fines for a better outcome.
                  </p>
                </div>
                <div className="service__link">
                  <Link href="service">
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service__item mb-30">
                <div className="service__thumb include__bg service-two-cmn"></div>
                <div className="service__icon transition-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="77.497"
                    height="75"
                    viewBox="0 0 77.497 75"
                  >
                    <g
                      id="Group_26745"
                      data-name="Group 26745"
                      transform="translate(-1685 -1768)"
                    >
                      <path
                        id="talk"
                        d="M24.7,0H47.66a5.512,5.512,0,0,1,5.5,5.5V19.9a5.512,5.512,0,0,1-5.5,5.5H34.2l-8.344,7.183a.927.927,0,0,1-1.305-.1.94.94,0,0,1-.221-.631l.448-6.42H24.7a5.512,5.512,0,0,1-5.5-5.5V5.5A5.512,5.512,0,0,1,24.7,0ZM55.859,11.2a5.4,5.4,0,0,1,2.794,1.488A4.932,4.932,0,0,1,60.236,16.3V28.645a5.4,5.4,0,0,1-5.367,5.411h-.2l.574,7.492-9.839-7.726H30.392l5.443-5.531H51.3a4.585,4.585,0,0,0,4.572-4.572V11.2Zm-28.45,4.825a.933.933,0,0,1,0-1.86H41.057a.933.933,0,0,1,0,1.86Zm0-6.162a.946.946,0,0,1,0-1.892h17.7a.946.946,0,1,1,0,1.892Zm20.245-8.01H24.7A3.658,3.658,0,0,0,21.052,5.5V19.9A3.658,3.658,0,0,0,24.7,23.549h1.066a.927.927,0,0,1,.921,1l-.359,5.2,6.887-5.922a.94.94,0,0,1,.631-.271H47.654A3.658,3.658,0,0,0,51.3,19.9V5.5A3.658,3.658,0,0,0,47.654,1.854Z"
                        transform="translate(1684.796 1768)"
                        fill="#f8d458"
                        fillRule="evenodd"
                      ></path>
                      <path
                        id="talk-2"
                        data-name="talk"
                        d="M32.486,56.218c1.3-2.088,1.766-5.38.353-7.568-.568-.877-.341-2.3-.341-3.5,0-11.983-20.964-11.983-20.964,0,0,1.5.341,2.523-.467,3.727-1.381,1.993-.669,5.525.492,7.36,1.179,3.431,5.676,5.424,1.829,8.993S1.57,64.329,0,75H77.5c-1.432-8.621-8.2-4.232-11.012-8.054-2.378-3.191.631-3.841,1.564-6.628.933-1.469,1.507-4.308.4-5.909-.631-.952-.378-1.942-.378-3.153,0-9.643-16.429-9.643-16.429,0,0,.959.183,2.264-.271,2.964-1.135,1.766-.757,4.415.284,6.086.769,2.706,3.866,3.986,1.892,6.71s-6.553,2.2-9.391,3.847c-3-3.677-10.059-2.308-13.206-5.8-3.494-3.879.536-5.235,1.564-8.829Z"
                        transform="translate(1685 1768)"
                        fill="#BD681F"
                        fillRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="service__content">
                  <h3>
                    <Link href="service">Clear Record</Link>
                  </h3>
                  <p>
                  Improve your driving record and lower insurance rates.
                  </p>
                </div>
                <div className="service__link">
                  <Link href="service">
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
