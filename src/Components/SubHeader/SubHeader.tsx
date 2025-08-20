const SubHeader = ({ title }: any) => {
  return (
    <div className="h-20 my-7 md:h-32 rounded-md bg-gradient-to-r from-[#95d3a2] to-[#359fac] flex items-center justify-center relative overflow-hidden">
      <span className="animate-updown md:h-40 md:w-40 rounded-full bg-white absolute top-2 left-20 opacity-20"></span>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <span className="animate-updown h-40 w-40 rounded-full bg-white opacity-30 absolute right-20 top-6"></span>
    </div>
  );
};

export default SubHeader;
