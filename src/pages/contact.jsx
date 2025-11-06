import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import swal from "sweetalert";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_wiir9cm', 'template_5ix098p', form.current, {
      publicKey: 'ZduBJ0QQC4BugLy81',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        swal({
          title: "Message Sent",
          text: "Message received by Bashaashaa. We’ll reply soon.",
          icon: "success",
          button: "OK",
        });
        form.current.reset(); // clear form after success
      },
      (error) => {
        console.log('FAILED...', error.text);
        swal({
          title: "Oops!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          button: "Close",
        });
      },
    );
};


  

  return (
    <section
      id="contact"
      className="flex justify-center items-center w-full p-10 mt-10 lg:px-20"
      data-aos="zoom-in"
    >
      <div className="bg-black p-4 text-white flex flex-col md:flex-row md:w-2/3">
        {/* Google Map */}
        <div className="w-full md:w-1/2">
          
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d710.5073778501094!2d36.834136699999995!3d7.6693838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17adb987f9bef50d%3A0x2a436dd6080a0f45!2sBashaashaa%20Studio!5e1!3m2!1sen!2set!4v1757842724085!5m2!1sen!2set" 
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            data-aos="zoom-in"
            referrerPolicy="no-referrer-when-downgrade"
            title="Awetu Grand Hotel" 
            className="w-full"

          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col w-full md:w-1/2 justify-center items-center pt-3 md:pt-0 md:my-5">
          <h1
            className="text-3xl mb-2 h1 text-[rgb(11,59,91)]"
            data-aos="fade-down"
          >
            Contact Us
          </h1>

          <form
            ref={form} onSubmit={sendEmail}
            className="flex flex-col gap-4 w-full px-5 m-2"
          >
            <input
              data-aos="fade-down"
              type="text"
              name="name"
              placeholder="Your Name"
              className="border px-4 py-2 rounded-2xl border-white"
              required
            />

            <input
              data-aos="fade-down"
              type="email"
              name="email"
              placeholder="Your Email"
              className="border px-4 py-2 rounded-2xl border-white"
              required
            />

            <textarea
              name="message"
              data-aos="fade-down"
              placeholder="Your Message"
              className="px-4 py-2 w-full h-28 border rounded-2xl border-white"
              required
            />

            <button
              type="submit" value="Send"
              className="border px-4 py-2 rounded-2xl hover:bg-white hover:text-[rgb(11,59,91)] cursor-pointer border-[rgb(11,59,91)] bg-[rgb(11,59,91)]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
