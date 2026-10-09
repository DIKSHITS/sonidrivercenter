
import React from "react";
import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why-section">

      {/* ================================
          WHY CHOOSE US
      ================================= */}

      <div className="why-heading">

        <p className="why-small-title">
          WHY CHOOSE SONI DRIVER CENTER
        </p>

        <h2>
          Your Trusted Travel Partner
        </h2>

        <div className="why-yellow-line"></div>

      </div>


      <div className="why-cards">

        {/* CARD 1 */}
        <div className="why-card">

          <div className="why-icon shield-icon">
            <svg viewBox="0 0 64 64">
              <path
                d="M32 6L52 14V29C52 42 43 52 32 58C21 52 12 42 12 29V14L32 6Z"
                fill="currentColor"
              />

              <path
                d="M22 31L28 37L42 22"
                fill="none"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h3>
            Reliable Service
          </h3>

          <p>
            On-time and professional
            <br />
            service you can trust.
          </p>

        </div>


        {/* CARD 2 */}
        <div className="why-card">

          <div className="why-icon">
            <svg viewBox="0 0 64 64">

              <path
                d="M10 38L15 22C16 19 18 17 21 17H43C46 17 48 19 49 22L54 38"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
              />

              <path
                d="M8 38H56V48H8Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
              />

              <circle
                cx="18"
                cy="49"
                r="4"
                fill="currentColor"
              />

              <circle
                cx="46"
                cy="49"
                r="4"
                fill="currentColor"
              />

            </svg>
          </div>

          <h3>
            Well Maintained Cars
          </h3>

          <p>
            Clean, comfortable
            <br />
            and regularly serviced.
          </p>

        </div>


        {/* CARD 3 */}
        <div className="why-card">

          <div className="why-icon">

            <svg viewBox="0 0 64 64">

              <circle
                cx="23"
                cy="20"
                r="9"
                fill="currentColor"
              />

              <circle
                cx="43"
                cy="20"
                r="9"
                fill="currentColor"
              />

              <path
                d="M7 54C7 41 14 34 23 34C32 34 39 41 39 54"
                fill="currentColor"
              />

              <path
                d="M25 54C25 41 32 34 41 34C50 34 57 41 57 54"
                fill="currentColor"
              />

            </svg>

          </div>

          <h3>
            Experienced Drivers
          </h3>

          <p>
            Verified and trained
            <br />
            drivers for your safety.
          </p>

        </div>


        {/* CARD 4 */}
        <div className="why-card">

          <div className="why-icon">

            <svg viewBox="0 0 64 64">

              <path
                d="M32 58C32 58 51 38 51 23C51 12 42.5 4 32 4C21.5 4 13 12 13 23C13 38 32 58 32 58Z"
                fill="currentColor"
              />

              <circle
                cx="32"
                cy="23"
                r="6"
                fill="white"
              />

            </svg>

          </div>

          <h3>
            Flexible Travel
          </h3>

          <p>
            Local, outstation, airport
            <br />
            and corporate travel.
          </p>

        </div>

      </div>


      {/* ================================
          REVIEWS
      ================================= */}

      <div className="reviews-section">

        <div className="reviews-heading">

          <p className="reviews-small-title">
            WHAT OUR CLIENTS SAY
          </p>

          <h2>
            Happy Customers
          </h2>

          <div className="reviews-yellow-line"></div>

        </div>


        <div className="reviews-container">

          {/* REVIEW 1 */}
          <div className="review-card">

            <div className="stars">
              ★★★★★
            </div>

            <p className="review-text">
              "Very professional service. The driver
              <br />
              was polite and the car was clean.
              <br />
              Highly recommended!"
            </p>

            <div className="review-user no-photo">

              <div className="review-avatar">
                RS
              </div>

              <div>
                <h4>
                  Rohit Sharma
                </h4>

                <span>
                  Kolkata
                </span>
              </div>

            </div>

          </div>


          {/* REVIEW 2 */}
          <div className="review-card">

            <div className="stars">
              ★★★★★
            </div>

            <p className="review-text">
              "Booked a 7 seater for family trip.
              <br />
              Everything was smooth and hassle free.
              <br />
              Great experience!"
            </p>

            <div className="review-user no-photo">

              <div className="review-avatar">
                PD
              </div>

              <div>
                <h4>
                  Priya Das
                </h4>

                <span>
                  Kolkata
                </span>
              </div>

            </div>

          </div>


          {/* REVIEW 3 */}
          <div className="review-card">

            <div className="stars">
              ★★★★★
            </div>

            <p className="review-text">
              "Reliable and safe. I frequently hire
              <br />
              drivers for outstation travel.
              <br />
              Always satisfied."
            </p>

            <div className="review-user no-photo">

              <div className="review-avatar">
                AV
              </div>

              <div>
                <h4>
                  Amit Verma
                </h4>

                <span>
                  Kolkata
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;
