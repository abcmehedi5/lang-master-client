import { Link } from "react-router-dom";
import { Play, ExternalLink, CheckCircle } from "lucide-react";
import WhiteButton from "../../../Components/Buttons/WhiteBtn";

const Lessons = () => {
  const features = [
    "Interactive Learning Experience",
    "Progress Tracking System", 
    "Expert-Curated Content",
    "Community Support"
  ];

  return (
    <section className="pt-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#95d3a2] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#359fac] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Section */}
          <div 
            className="space-y-8"
            data-aos="fade-zoom-in"
            data-aos-duration="1000"
          >
            {/* Header */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Why You'll Love Learning with{" "}
                <span className="bg-gradient-to-r from-[#95d3a2] to-[#359fac] bg-clip-text text-transparent">
                  LangMaster
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your English skills with our innovative learning platform. 
                Experience interactive lessons designed by language experts.
              </p>

              {/* Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 group hover:bg-white/50 p-2 rounded-lg transition-all duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-[#95d3a2] group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Card */}
            <div 
              data-aos="fade-in"
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                  
                  {/* Video Thumbnail */}
                  <div className="relative group cursor-pointer flex-shrink-0">
                    <div className="relative w-full lg:w-64 h-40 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                      <iframe
                        width="100%"
                        height="100%"
                        className="rounded-xl"
                        src="https://www.youtube.com/embed/csXPyyKX94Y?si=anRfkoEFShOFNxRA"
                        title="LangMaster Learning Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Play className="w-6 h-6 text-gray-800 ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Discover Effective Online Learning 🎓
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Watch this comprehensive guide to understand how our platform 
                        transforms traditional language learning into an engaging digital experience.
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-500">Video from</span>
                      <a
                        className="inline-flex items-center gap-1 text-[#359fac] hover:text-[#2a7a85] font-medium transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/@collegeofartsletters"
                      >
                        Michigan State University
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link to="/about-us">
                <WhiteButton 
                  variant="default"
                  className="bg-gradient-to-r from-[#95d3a2] to-[#359fac] text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Discover Our Story
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </WhiteButton>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div 
            className="relative flex justify-center lg:justify-end"
            data-aos="fade-zoom-in"
            data-aos-duration="1000"
          >
            {/* Background Gradient Shape */}
            <div className="relative">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#95d3a2]/20 to-[#359fac]/20 rounded-[3rem] scale-110 blur-2xl animate-pulse"></div>
              
              {/* Main Container */}
              <div 
                className="relative bg-gradient-to-br from-[#b2f5c1]/50 to-[#95d3a2]/30 backdrop-blur-sm border border-white/50 group hover:scale-105 transition-transform duration-700"
                style={{ borderRadius: "60% 40% 70% 30%" }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]"></div>
                
                {/* Main Image */}
                <img
                  className="relative z-10 h-[400px] lg:h-[500px] w-full object-contain filter drop-shadow-2xl group-hover:drop-shadow-3xl transition-all duration-500"
                  src="https://i.ibb.co/GpgYBSQ/7753413-removebg-preview.png"
                  alt="Interactive learning illustration"
                  loading="lazy"
                />

                {/* Floating Elements */}
                <div className="absolute top-8 right-8 w-4 h-4 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
                <div className="absolute bottom-16 left-8 w-3 h-3 bg-white rounded-full animate-pulse opacity-70"></div>
                <div className="absolute top-1/2 left-4 w-2 h-2 bg-[#359fac] rounded-full animate-ping opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lessons;