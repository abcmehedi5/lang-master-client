import React, { useState } from "react";
import { Send, Mail, Phone, MapPin, User, MessageCircle } from "lucide-react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <SectionTitle titleLetter="C" titleWord="ontact" />
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's create something amazing
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contact Info Section */}
          <div className="relative">
            {/* Animated Paper Plane */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 z-20">
              <div className="animate-bounce">
                <Send className="w-12 h-12 text-blue-500 transform rotate-45" />
              </div>
            </div>

            {/* Contact Image with Info Cards */}
            <div className="relative bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl overflow-hidden shadow-2xl">
              <div className="h-96 bg-gradient-to-br from-blue-200 via-cyan-200 to-teal-200 relative">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-8 left-8 w-16 h-16 bg-white rounded-full"></div>
                  <div className="absolute top-20 right-12 w-8 h-8 bg-blue-300 rounded-full"></div>
                  <div className="absolute bottom-16 left-16 w-12 h-12 bg-cyan-300 rounded-full"></div>
                  <div className="absolute bottom-8 right-8 w-6 h-6 bg-teal-300 rounded-full"></div>
                </div>

                {/* Contact Info Cards */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Email</p>
                      <p className="text-sm font-semibold text-gray-800">
                        langmaster50@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute top-32 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <Phone className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Phone</p>
                      <p className="text-sm font-semibold text-gray-800">
                        +8801792960108
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        Visit Us
                      </p>
                      <p className="text-sm font-semibold text-gray-800">
                        Dhaka, Banani
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating geometric shapes */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="w-32 h-32 border-4 border-white/30 rounded-full animate-spin"
                    style={{ animationDuration: "20s" }}
                  ></div>
                  <div
                    className="absolute inset-4 border-2 border-blue-300/50 rounded-full animate-spin"
                    style={{
                      animationDuration: "15s",
                      animationDirection: "reverse",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Send Us a Message
                </h3>
                <p className="text-gray-600">
                  We'd love to hear from you anytime
                </p>
              </div>

              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-[#359fac] focus:bg-white focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-500"
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-[#359fac] focus:bg-white focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-500"
                  />
                </div>

                <div className="relative group">
                  <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                    <MessageCircle className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                    rows={4}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-[#359fac] focus:bg-white focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-500 resize-none"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#95d3a2] to-[#359fac]  text-white font-semibold py-4 px-8 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
