import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || message.trim() === "") {
      toast.error("Please enter a valid email and message!");
      return;
    }

    // Show success toast
    toast.success("✅ Message Sent!");

    // Optional: Reset form
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="bg-base-200 py-16 px-4 scroll-mt-16">
      <div className=" grid w-[90%] mx-auto md:grid-cols-2 gap-10 items-center">
        {/* Left - Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-primary">
            📞 Get In Touch
          </h2>
          <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:your.email@example.com"
                className="text-blue-600 hover:underline"
              >
                itsjunayed10@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone/Whatsapp:</strong>{" "}
              <a
                href="tel:+8801234567890"
                className="text-blue-600 hover:underline"
              >
                +880 1914 606 160
              </a>
            </p>
            
          </div>
        </div>

        {/* Right - Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            💬 Send Me a Message
          </h2>
          <form onSubmit={handleSend} className="space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Write your message here..."
              className="textarea textarea-bordered w-full h-32 resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary w-full sm:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
