
import { EmailShareButton, OKShareButton } from "react-share";
import { PiShareFatThin } from 'react-icons/pi';

// ShareButtonTypes.ts
export interface EmailShareButtonProps {
    url: string;
    subject?: string;
    children: React.ReactNode;
}

export interface OKShareButtonProps {
    url: string;
    children: React.ReactNode;
}


const Share = () => {

    const shareUrl = "https://wwwlangmaster50@gmail.com";
    const title = "Check out this website!";
    return (
        <div>
            <EmailShareButton url={shareUrl} subject={title}>
            </EmailShareButton>
            <OKShareButton url={shareUrl} >
                <PiShareFatThin /> 
            </OKShareButton>
        </div>
    );
};

export default Share;