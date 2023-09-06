import { useEffect, useState } from "react";
import SubHeader from "../../Components/SubHeader/SubHeader";
import "./Translator.css";
import axios from "axios";
import { BsArrowLeftRight } from "react-icons/bs";
import { BiCopy, BiVolumeFull } from "react-icons/bi";

const Translator = () => {
  const [charCount, setCharCount] = useState(0);
  const [optionss, setOptionss] = useState([]);
  const [to, setTo] = useState("en");
  const [from, setFrom] = useState("en");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const translated = () => {
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

  // curl -X 'GET' \'https://libretranslate.com/languages' \ -H 'accept: application/json'

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
    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.value = output;
    document.body.appendChild(textarea);

    // Select the text within the textarea
    textarea.select();

    // Execute the copy command
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Notify the user that the text has been copied
    // alert("Copied to clipboard");
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    const count = text.length;
    setCharCount(count);
    setInput(text); 
  };

  // Define your component's JSX
  return (
    <>
      <SubHeader title={"Translator"}></SubHeader>
      <div className="mx-10 gap-6 text-center">
        <div className="w-full bg-base-200 border-2 flex items-center gap-6 justify-between mt-7 px-5 mb-2">
          <div className="p-4 text-xl">
            from({from}):
            <select onChange={(e) => setFrom(e.target.value)}>
              {optionss.map((options) => (
                <option key={optionss.code} value={options.code}>
                  {options.name}
                </option>
              ))}
            </select>
          </div>
          <BsArrowLeftRight className="text-3xl font-bold" />
          <div className="p-3 text-xl">
            To({to}):
            <select onChange={(e) => setTo(e.target.value)}>
              {optionss.map((options) => (
                <option key={optionss.code} value={options.code}>
                  {options.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="md:flex w-full gap-5 text-2xl">
          <div className="w-full">
            <textarea
              onInput={handleInputChange}
              value={input}
              className="bg-base-200 resize-none w-full py-5 px-6 border-2"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="type to translate"
              spellCheck="true"
            ></textarea>
            <div className="border-2 flex items-center justify-between px-5">
              <BiVolumeFull 
                title="listen"
                className="cursor-pointer hover:bg-base-300 rounded-full p-3 m-2 text-6xl VolumeFullactive"
              />
              <div className="text-xl text-gray-400">
                Character: {charCount}
              </div>
            </div>
          </div>
          <div className="w-full">
            <textarea
              className="bg-base-200 resize-none w-full py-5 px-6 border-2"
              value={output}
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="translated"
            ></textarea>
            <div className="border-2 flex items-center justify-between px-5">
              <BiVolumeFull
                title="listen"
                className="cursor-pointer hover:bg-base-300 rounded-full p-3 m-2 text-6xl VolumeFullactive"
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
          {/* Apply the buttonStyles object as inline styles */}
          <button
            onClick={(e) => translated()}
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
