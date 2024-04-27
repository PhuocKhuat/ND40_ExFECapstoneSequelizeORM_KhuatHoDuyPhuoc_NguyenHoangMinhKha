import { Field, Form, Formik } from "formik";
import React from "react";
import "./styleCommentInfo.scss";
import { useSelector } from "react-redux";
import { LikeOutlined } from "@ant-design/icons";

export default function CommentInfo() {
  const { commentInfo } = useSelector((state) => state.reducerDetail);
  console.log("🚀 ~ CommentInfo ~ commentInfo:", commentInfo);

  const renderCommentList = () =>
    commentInfo.map((item) => (
      <div className="mr-3">
        <div className="flex gap-4">
          <div>
            <img
              alt="logo-user"
              src="/imgs/student6.jpg"
              className="imgComment"
            />
          </div>
          <div>
            <div>
              <p>{item.user.fullName}</p>
            </div>
            <div>
              <p>{item.contentInfo}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-3">
          <div>
            <p>{item.dateCreated}</p>
          </div>
          <div>
            <LikeOutlined />
          </div>
        </div>
      </div>
    ));

  return (
    <div className="commentInfo">
      <div>
        <div className="mt-6 pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex items-center">
            <span className="mr-3 text-black text-2xl">Preview</span>
            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
          </div>
          <div className="ml-6">
            {renderCommentList()}
            <br />
            <div>
              <span className="h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <Formik>
                  <Form>
                    <Field
                      type="text"
                      className="text-black rounded-3xl outline-none comment z-50 relative left-40"
                    />
                  </Form>
                </Formik>
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">
            $58.00
          </span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Button
          </button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
