interface SectionTitleProps {
  titleLetter: string;
  titleWord: string;
  subtitle?: string;
  variant?: "default" | "minimal" | "elegant" | "modern";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  titleLetter,
  titleWord,
  subtitle,
}) => {
  return (
    <div className="group">
      <div className="text-center space-y-6">
        <div className="relative">
          {/* Decorative top element */}
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#95d3a2]"></div>
              <div className="w-2 h-2 bg-[#eebb2e] rounded-full animate-pulse duration-70"></div>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#359fac]"></div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
            <span className="font-bold bg-gradient-to-r from-[#eebb2e] via-[#95d3a2] to-[#359fac] bg-clip-text text-transparent">
              {titleLetter}
            </span>
            <span className="text-gray-800 ml-2 font-medium">{titleWord}</span>
          </h2>

          {/* Decorative bottom element */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-[#95d3a2] rounded-full animate-pulse"></div>
              <div className="w-12 h-px bg-gradient-to-r from-[#95d3a2] to-[#359fac]"></div>
              <div className="w-1.5 h-1.5 bg-[#eebb2e] rounded-full"></div>
              <div className="w-12 h-px bg-gradient-to-l from-[#359fac] to-[#95d3a2]"></div>
              <div className="w-1 h-1 bg-[#359fac] rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>

        {subtitle && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto italic font-light">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
