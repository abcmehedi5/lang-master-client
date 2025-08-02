import "./SectionTItle.css";
interface SectionTitleProps {
  titleLetter: string;
  titleWord: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  titleLetter,
  titleWord,
}) => {
  return (
    <div className="text-center">
      <h1 className="title text-4xl font-bold text-gray-800">
        <span className="text-orange-500">{titleLetter}</span>
        <span>{titleWord}</span>
      </h1>
      <div className="horizontal-line mx-auto my-2 w-16 border-t-2 border-purple-400"></div>
    </div>
  );
};

export default SectionTitle;
