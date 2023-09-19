import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import useUser from "../../hooks/useUser";
import signature from "../../assets/signature.png";
import awardImage from "../../assets/AWARD ICON.png";
const Certificate = () => {
  const [singleUser] = useUser();
  const componentRef = useRef<HTMLDivElement | null>(null);
  const generatePDF = () => {
    const a4Width = 210; // Width of A4 page in mm
    const a4Height = 297; // Height of A4 page in mm

    // The HTML element you want to convert to PDF
    const element: any = componentRef.current;

    html2canvas(element, { scale: 2 }).then((canvas) => {
      const scaleFactor = Math.min(
        a4Width / canvas.width,
        a4Height / canvas.height
      );

      const pdf = new jsPDF("portrait", "mm", [a4Width, a4Height]);
      pdf.addImage(
        canvas.toDataURL("image/png"),
        "PNG",
        0,
        0,
        canvas.width * scaleFactor,
        canvas.height * scaleFactor
      );

      pdf.save("page.pdf");
    });
  };

  const today = new Date();

  // Extract day, month, and year components
  const day = String(today.getDate()).padStart(2, "0"); // Add leading zero if necessary
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Add 1 to the month since it's zero-based
  const year = today.getFullYear();

  // Create the formatted date string
  const formattedDate = `${month}/${day}/${year}`;

  return (
    <div className="text-center italic max-w-screen-xl mx-auto">
      <div
        ref={componentRef}
        className="mx-auto my-12 p-6 bg-white shadow-lg rounded-l w-[210mm] h-[297mm] flex flex-col justify-center items-center"
        id="content-to-pdf"
      >

        <div className="w-8.5/11 h-11/5 md:mx-auto mx-2 bg-white p-20 shadow-lg border-4 border-blue-500 relative">
          <div className="md:w-[80px] mx-auto justify-center flex opacity-10">
            <img className=" absolute bottom-0 " src={awardImage} alt="" />
          </div>
          <div className="border-2 border-blue-500  border-dashed rounded-md absolute inset-0 z-0"></div>
          <div className="relative ">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-blue-500 fontYellowtail">
                Certificate of Completion
              </h1>
              <p className="mt-5 font-mono italic mb-2">
                This certificate is awarded to
              </p>
              <h2 className="text-5xl font-bold  text-gray-700 mb-4  fontLobster">
                {singleUser?.name}
              </h2>
              <p className="font-mono">for successfully completing the</p>
              <h2 className="text-3xl font-bold uppercase text-red-500 font-mono mt-3">
                english basic conversation
              </h2>
              <p className="font-mono">course.</p>
            </div>
            <div className="mt-4">
              <p className="font-mono italic">
                <strong> {singleUser?.name}</strong> has demonstrated a high
                level of proficiency in the following areas:
              </p>
              <ul className="list-none">
                <li className=" mt-4 text-pink-500 font-bold font-mono">
                  English Grammar & English Spoken
                </li>
              </ul>
              <p className="font-mono italic mt-2">
                We are confident that <strong>{singleUser?.name}</strong> will
                continue to excel in their chosen field.
              </p>
            </div>
            <div className="mt-4">
              <p className="mb-12">{formattedDate}</p>
            </div>
            <div className=" flex justify-between items-center mt-20">
              <div>
                <p>Presented by:</p>
                <h2 className="text-4xl font-bold text-blue-500 font-mono fontLobster ">
                  Lang Master
                </h2>
              </div>

              {/* singnature */}
              <div>
                <img
                  className="w-[80px] h-[40px] mx-auto"
                  src={signature}
                  alt=""
                />
                <hr />
                <p className="">CEO, Lang Master</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={generatePDF} className="defaultBtn">
        Download PDF
      </button>
    </div>

  );
};

export default Certificate;
