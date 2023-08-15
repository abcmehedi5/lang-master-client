import React, { ReactNode, useState } from 'react';

import { useQuery, QueryClient } from 'react-query';

import axios from 'axios';

import { SiSololearn, SiGrammarly } from 'react-icons/Si';
import { BsGenderTrans } from 'react-icons/bs';
import { GiTwirlyFlower } from 'react-icons/gi';

import learn from "../../../assets/learn.webp"



//Typescript
interface GrammarItem {
  examples: ReactNode;
  name: string;
  definition: string;
  simple: string;
  continuous: string;
  perfect: string;
  perfect_continuous: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const queryClient = new QueryClient();


const Grammar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GrammarItem | null>(null);


  const handleLinkClick = (item: GrammarItem) => {
    setSelectedItem(item);
  };


  // Query && axios
  const { data, isLoading, isError } = useQuery('grammarData', async () => {
    const response = await axios.get('../../../../public/grammar.json');
    return response.data;
  });


  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error loading data.</p>;
  }



  const { tense, parts_of_speech: partsOfSpeech, genders } = data[0];
  


  return (

    <div className='bg-gradient-to-r from-indigo-100 from-10% via-sky-100 via-30% to-emerald-50 to-90% ... '>
    {/* drawer-open */}
    <div className="drawer drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">

        <div className="p-4 w-2/3">
          <div className="mx-auto"><img src={learn} alt="Learn" className=' w-2/3 h-1/3' /></div>
          {selectedItem && (
            <div>
              <h2 className='text-3xl font-bold text-[#0b4e69] gap-2 flex py-4'>{selectedItem?.name} <GiTwirlyFlower className="text-yellow-600" /></h2>
              <h3 className='text-xl  py-4'>{selectedItem?.definition} {selectedItem?.simple}</h3>
              <p className='text-base font-mono'> {selectedItem?.examples} {selectedItem?.continuous}</p>
              <p className='text-base font-mono'> {selectedItem?.perfect}</p>
              <p className='text-base font-mono'> {selectedItem?.perfect_continuous}</p>
            </div>
          )}
        </div>
      </div>

      {/* drawer-side */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu md:p-4 w-32 md:w-72 h-full text-base-content">
          {/* tense */}
          <h2 className="font-semibold lg:text-2xl text-yellow-600 py-4 flex gap-2">
            <SiSololearn /> <button>
            Tense
            </button>
          </h2>
          {Object.keys(tense).map((tenseKey) => (
            <div key={tenseKey}>
              <button
                className="lg:text-lg text-slate-800 ps-2 font-semibold"
                onClick={() => handleLinkClick(tense[tenseKey])}
              >
                {tenseKey}
              </button>
            </div>
          ))} 
          
          {/* parts_of_speech */}
          <h2 className="font-semibold lg:text-2xl text-yellow-600 py-4 flex gap-2">
            <SiGrammarly /> Parts of Speech
          </h2>
          {Object.keys(partsOfSpeech).map((speechKey) => (
            <div key={speechKey}>
              <button
                className="lg:text-lg text-slate-800  ps-2 font-semibold"
                onClick={() => handleLinkClick(partsOfSpeech[speechKey])}
              >
                {speechKey}
              </button>
            </div>
          ))}

          {/* genders */}
          <h2 className="font-semibold lg:text-2xl text-yellow-600 py-4 flex gap-2">
            <BsGenderTrans /> Genders
          </h2>
          {Object.keys(genders).map((genderKey) => (
            <div key={genderKey}>
              <button
                className="lg:text-lg text-slate-800  ps-2 font-semibold"
                onClick={() => handleLinkClick(genders[genderKey])}
              >
                {genderKey}
              </button>
            </div>
          ))}
        </ul>
      </div >
    </div >
  </div>

  );
};



export default Grammar;

