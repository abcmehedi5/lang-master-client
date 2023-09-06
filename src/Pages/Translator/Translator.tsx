import { useEffect, useState } from "react";
import SubHeader from "../../Components/SubHeader/SubHeader";
import './Translator.css'
import axios from "axios";

const Translator = () => {

  const [optionss, setOptionss] = useState([])
  const [to, setTo] = useState('en')
  const [from, setFrom] = useState('ga')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')


  const translated = ()=>{

    const params = new URLSearchParams();
    params.append('q', input);
    params.append('source', from);
    params.append('target', to);
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');


    axios.post('https://libretranslate.de/translate', params ,
    {headers:{'accept': 'application/json', 'Content-Type':'application/x-www-form-urlencoded'}}
    ).then(res => {
      setOutput(res.data.translatedText)
      console.log(res.data)
    })
  }

  // curl -X 'GET' \'https://libretranslate.com/languages' \ -H 'accept: application/json'

  useEffect(()=>{
    axios.get('https://libretranslate.com/languages', 
    {headers:{'accept': 'application/json'}}
    ).then((res) => {
      setOptionss(res.data)
      console.log(res.data)
    })
  },[])


  // Define your component's JSX
  return (
    <>
      <SubHeader title={'Translator'}></SubHeader>
      <div className="mx-10 gap-6 text-center space-y-8">
        <div>
          from({from}):
          <select onChange={e=>setFrom(e.target.value)}>
            {optionss.map(options => <option key={optionss.code} value={options.code}>{options.name}</option>)}
          </select>
          To({to}):
          <select onChange={e=>setTo(e.target.value)}>
            {optionss.map(options => <option key={optionss.code} value={options.code}>{options.name}</option>)}
          </select>
        </div>
        <div className="flex w-full gap-3">
         <div  className="w-full">
         <textarea 
         onInput={e=>setInput(e.target.value)}
         className="bg-base-200 w-full" name="" id="" cols="30" rows="10" placeholder="type to translate"></textarea>
         </div>
        <div className="w-full">
          <textarea className="bg-base-200 w-full" value={output} name="" id="" cols="30" rows="10" placeholder="translated"></textarea>
        </div>
        </div>
        <div>
          {/* Apply the buttonStyles object as inline styles */}
          <button onClick={e=>translated()}  className="translatebutton" role="button">translate</button>
        </div>
        </div>
     
    </>
  );
};

export default Translator;