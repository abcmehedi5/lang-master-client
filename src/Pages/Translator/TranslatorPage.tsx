import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SubHeader from "../../Components/SubHeader/SubHeader";
import WhiteButton from "../../Components/Buttons/WhiteBtn";

const TranslatorPage: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [axiosSecure] = useAxiosSecure();

  const handleTranslate = async () => {
    if (!input.trim()) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await axiosSecure.post("/translation", {
        text: input,
        targetLanguage: "Bengali",
      });

      setOutput(response.data.translatedText || "");
    } catch (err: any) {
      console.error("Translation Error:", err);
      setError("Failed to translate text. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <SubHeader title="Translator" />

        {/* subtitle */}
        <p className="text-right text-[10px] mb-2">powered by gemini</p>

        {/* Input & Output Wrapper */}
        <div className="w-full">
          {/* Input Card */}
          <div className="grid md:grid-cols-2 w-full h-full gap-10">
            {/* input */}
            <div className="w-full">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type text to translate"
                className="w-full h-full border p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-black resize-none"
                rows={10}
              />
            </div>
            <div className="w-full hidden md:block">
              {/* Output Card */}
              <div
                className="p-4 border rounded-lg shadow-sm bg-gray-50 text-left overflow-auto h-full"
                // style={{ minHeight: "250px" }}
              >
                {output ? (
                  <ReactMarkdown>{output}</ReactMarkdown>
                ) : (
                  <p className="text-gray-400">Translation appears here...</p>
                )}
              </div>
            </div>

            {/* Error */}
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          </div>
          {/* Translate Button */}
          <div className="text-center mt-8 mb-8 md:mb-0">
            <WhiteButton
              onClick={handleTranslate}
              disabled={!input.trim() || isLoading}
              className="bg-gradient-to-r from-[#95d3a2] to-[#359fac] text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? "Translating..." : "Translate"}
            </WhiteButton>
          </div>

          {/* Output Card */}
          <div
            className="block md:hidden p-4 border rounded-lg shadow-sm bg-gray-50 text-left overflow-auto mb-8"
            style={{ minHeight: "250px" }}
          >
            {output ? (
              <ReactMarkdown>{output}</ReactMarkdown>
            ) : (
              <p className="text-gray-400">Translation appears here...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TranslatorPage;
