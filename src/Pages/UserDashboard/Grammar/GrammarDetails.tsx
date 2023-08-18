

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

interface GrammarItem {
    name: string;
    definition: string;
    example: string;
    simple: string;
    continuous: string;
    perfect: string;
    perfect_continuous: string;
}

interface GrammarDetailsProps {
    item: GrammarItem;
}

const GrammarDetails: React.FC<GrammarDetailsProps> = ({ item }:any) => {
    const { name, definition, example, simple, continuous, perfect, perfect_continuous } = item;

    return (
        <div>
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <h3 className="capitalize">{name}</h3>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>{definition}{simple}</p>
                        <p className="text-yellow-500">{example}{continuous}</p>
                        <p className="text-yellow-500">{perfect}</p>
                        <p className="text-yellow-500">{perfect_continuous}</p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>

        </div>
    );
};

export default GrammarDetails;
