import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#212529] flex justify-center items-center p-4 text-gray-300"
    >
      <form
        action=""
        className="flex flex-col max-w-[600px] w-full text-gray-800"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#023e7d]  text-gray-300 ">
            Contact
          </p>
          <p className="my-4  text-gray-300">
            // Submit the form below or shoot me a an email -
            gabriel@gabrieltomsic.com
          </p>
        </div>
        <input
          className="my-4 p-2 bg-gray-200 rounded-md"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="my-4 p-2 bg-gray-200 rounded-md"
          type="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          className="my-4 p-2 bg-gray-200 rounded-md"
          name="message"
          id=""
          rows="10"
          placeholder="Write your message here..."
        ></textarea>
        <button className="text-white border-2 hover:bg-[#023e7d] hover:border-[#023e7d] px-4 py-3 mx-8 duration-300">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
