import React from "react";
import "./styleIntroduction.scss";

export default function Introduction() {
  return (
    <section className="text-gray-600 body-font overflow-hidden introduction">
      <div className="container py-24 mx-auto">
        <div className="mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-xl title-font text-purple-500 tracking-widest font-bold">
              We are The Best
            </h2>
            <h1
              className="text-gray-900 title-font font-bold mb-4"
              style={{ fontSize: "70px" }}
            >
              Effective cat care
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-indigo-500 border-b-2 py-2 text-lg px-1">
                Description
              </a>
            </div>
            <p className="leading-relaxed mb-4">
              Ensure your cat's health by providing balanced nutrition, regular
              vet check-ups, and plenty of playtime and affection.
            </p>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Nutritious</span>
              <span className="ml-auto text-gray-900">Grain feed, milk, soup,...</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Service</span>
              <span className="ml-auto text-gray-900">Spa, bathe,...</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Home care</span>
              <span className="ml-auto text-gray-900">Contact us with 0938549042</span>
            </div>
            <div>
              <button className="flex text-white bg-indigo-500 border-0 py-4 px-7 focus:outline-none rounded-3xl text-lg uppercase hover:text-indigo-500 hover:bg-indigo-200">
                Get started
              </button>
            </div>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-3xl"
            src="/imgs/co-gai-om-meo.png"
          />
        </div>
      </div>
    </section>
  );
}
