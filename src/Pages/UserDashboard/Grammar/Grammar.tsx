import * as React from 'react'; // Import React
import useGrammar from '../../../hooks/useGrammar';
import GrammarCategory from './GrammarCategory';

const Grammar: React.FC = () => {
    const [grammar] = useGrammar();
    const tense = grammar.filter((item: { category: string; }) => item.category === 'tense');
    const parts_of_speech = grammar.filter((item: { category: string; }) => item.category === 'parts_of_speech');
    const genders = grammar.filter((item: { category: string; }) => item.category === 'genders');


    return (
        <div>
            <GrammarCategory items={tense} title={"tense"} />
            <GrammarCategory items={parts_of_speech} title={"parts_of_speech"} />
            <GrammarCategory items={genders} title={"genders" }/>
        </div>
    );
};

export default Grammar; 
