import React, { useEffect, useState } from "react";
import SubHeader from "../../Components/SubHeader/SubHeader";
import "./Translator.css";
import axios from "axios";
import {
  BiCopy,
  BiVolumeFull,
} from "react-icons/bi";
import { Helmet } from "react-helmet-async";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowLeftRight } from "react-icons/bs";

type LanguageOption = {
  code: string;
  name: string;
};

const Translator: React.FC = () => {
  const [charCount, setCharCount] = useState<number>(0);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [optionss, setOptionss] = useState<LanguageOption[]>([]);
  const [from, setFrom] = useState<string>("en"); // English
  const [to, setTo] = useState<string>("en"); // Bengali
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
console.log(isSpeaking);
  const handletranslated = () => {
    const params = new URLSearchParams();
    params.append("q", input);
    params.append("source", from);
    params.append("target", to);
    params.append("api_key", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");

    axios
      .post("https://libretranslate.de/translate", params, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        setOutput(res.data.translatedText);
        console.log(res.data);
      });
  };

  useEffect(() => {
    axios
      .get("https://libretranslate.com/languages", {
        headers: { accept: "application/json" },
      })
      .then((res) => {
        setOptionss(res.data);
        console.log(res.data);
      });
  }, []);

  const copyToClipboard = () => {
    const textarea = document.createElement("textarea");
    textarea.value = output;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  // ---------------- speak text -----------------
  const speakText = (textToSpeak: string) => {
    if (!window.speechSynthesis) {
      console.error("Speech synthesis is not supported in this browser");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(utterance);

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    setIsSpeaking(true);
  };

  // ------------ count character ---------------
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const count = text.length;
    setCharCount(count);
    setInput(text);
  };
  
  return (
    <>
      <SubHeader title={"Translator"}></SubHeader>
      <Helmet>
        <title> Translator | Lang Master </title>
      </Helmet>
      <div className="mx-10 gap-6 text-center">
        <div className="w-full bg-base-200 border-2 text-center md:flex items-center gap-6 justify-between px-5 mb-2">
          <div className="p-4 text-xl">
            from({from}):
            <select onChange={(e) => setFrom(e.target.value)}>
              {optionss.map((options) => (
                <option key={options.code} value={options.code}>
                  {options.name}
                </option>
              ))}
            </select>
          </div>
          <BsArrowLeftRight className="text-3xl font-bold hidden md:block" />
          <div className="p-3 text-xl">
            To({to}):
            <select onChange={(e) => setTo(e.target.value)}>
              {optionss.map((options) => (
                <option key={options.code} value={options.code}>
                  {options.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="md:flex w-full gap-3 text-2xl">
          {/* ------------ my written text ------------------ */}
          <div className="w-full">
            <div className="relative">
              <textarea
                onInput={handleInputChange}
                value={input}
                className="bg-base-200 resize-none w-full py-5 px-6 border-2 outline-none"
                rows={8}
                placeholder="type to translate"
                spellCheck={true}
              ></textarea>
              <div
                onClick={() => setInput("")}
                className="absolute top-2 right-2 cursor-pointer hover:bg-base-300 rounded-full p-3 closeLeft"
              >
                <AiOutlineClose className="text-2xl" />
              </div>
            </div>

            <div className="border-2 flex items-center justify-between px-5">
              <BiVolumeFull
                title="listen"
                className="cursor-pointer hover:bg-base-300 rounded-full p-3 m-2 text-6xl VolumeFullactive"
                onClick={() => speakText(input)} // Speak the input text
              />
              <div className="text-xl text-gray-400" style={{ userSelect: 'none' }}>
                Character: {charCount}
              </div>
            </div>
          </div>

          {/* ------------ translated text ------------------ */}
          <div className="w-full">
            <div className="relative">
              <textarea
                readOnly
                className="bg-base-200 resize-none w-full py-5 px-6 border-2 outline-none "
                value={output}
                rows={8}
                placeholder="translated"
              ></textarea>
              <div
                onClick={() => setOutput("")}
                className="absolute top-2 right-2 cursor-pointer hover:bg-base-300 rounded-full p-3 closeLeft"
              >
                <AiOutlineClose className="text-2xl" />
              </div>
            </div>

            <div className="border-2 flex items-center justify-between px-5">
              <BiVolumeFull
                title="speak"
                className="cursor-pointer hover:bg-base-300 rounded-full p-3 m-2 text-6xl VolumeFullactive"
                onClick={() => speakText(output)} // Speak the translated text
              />
              <BiCopy
                onClick={copyToClipboard}
                title="copy"
                className="cursor-pointer hover:bg-base-300 rounded-full p-3 m-2 text-6xl copyclip"
              />
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={handletranslated}
            className="translatebutton text-xl font-semibold bg-[#359fac] text-white mt-6 hover:bg-[#fbeee0] hover:text-[#422800] capitalize"
            role="button"
          >
            translate
          </button>
        </div>
      </div>
    </>
  );
};

export default Translator;
