import React from 'react';

function Contact() {
  return (
    <section
      id="contact"
      className="mt-60 pb-[300px] lg:ml-18 max-w-[800px] text-white py-16 flex flex-col items-center font-[Poppins]"
    >
      <h2 className="text-4xl text-blue-500 font-bold mb-4">Contact Me</h2>
      <p className="text-center text-lg max-w-xl mb-8">
        I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to connect!
      </p>

      {/* Email */}
      <a
        href="mailto:your. mohitgoswami18326@gmail.com"
        className="text-blue-400 hover:underline text-lg mb-6"
      >
        mohitgoswami18326@gmail.com
      </a>

      {/* Social Links */}
      <div className="flex flex-col sm:flex-row gap-4 text-lg text-center underline">
        <a
          href="https://github.com/mohitgoswami18"
          target="_blank"
          className="text-white hover:text-blue-500 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          className="text-white hover:text-blue-500 transition underline"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/_mohit_goswami_"
          className="text-white hover:text-blue-500 transition underline"
        >
          Instagram
        </a>
      </div>
    </section>
  );
}

export default Contact;
