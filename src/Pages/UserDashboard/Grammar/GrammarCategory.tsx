
import { FaLeanpub } from 'react-icons/fa';
import GrammarDetails from './GrammarDetails';

interface GrammarItem {
    definition: React.ReactNode;
    id: number;
    title: string;
}

interface GrammarCategoryProps {
    items: GrammarItem[];
    title: string;
}

const GrammarCategory: React.FC<GrammarCategoryProps> = ({ items, title }: any) => {
    return (
        <div className="pt-8">
            <h2 className='text-2xl uppercase font-semibold ps-4 flex gap-2 text-[#047e65]'>{title} <FaLeanpub className="text-slate-500" /> </h2>
            <div className="grid md:grid-cols-2 gap-4 py-4 my-4">
                {items.map((item: any) => (
                    <GrammarDetails key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default GrammarCategory;
