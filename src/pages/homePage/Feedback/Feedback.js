import React from "react";
import "./styleFeedback.scss";

export default function Feedback() {
  return (
    <section className="text-gray-600 body-font relative feedback">
      <div className="lg:flex block sm:flex-nowrap flex-wrap">
        <div className="lg:w-1/2 md:w-full overflow-hidden sm:mr-10 flex items-end justify-start relative">
          <img alt="cong-dong" src="/imgs/cong-dong.jpg" className="h-full" />
        </div>
        <div className="lg:w-1/2 md:w-4/5 bg-white flex flex-col md:ml-auto w-full md:py-16 mt-8 md:mt-0">
          <div className="container">
            <div className="content">
              <p className="w-4/5 chat">
                "We are excited to announce a community meetup for enthusiasts!
                Join us for an afternoon of engaging conversations, networking,
                and fun activities. Whether you're a veteran or new to the
                community, this is a fantastic opportunity to share experiences,
                exchange ideas, and make new friends. Refreshments will be
                provided, and we have some exciting surprises in store. Come and
                be a part of our vibrant community—let's connect, inspire, and
                grow together. Mark your calendars and see you there!"
              </p>
            </div>
            <div className="flex items-center space-x-4 ceo">
              <div>
                <img
                  alt="avatar"
                  src="/imgs/avatar_molly.png"
                  className="w-24 ms-28"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Molly Hocutt</h3>
                <p>CEO & Founder Lovecats</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
