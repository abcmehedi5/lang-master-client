import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

interface ShareProps {
  id: string;
}

const Share: React.FC<ShareProps> = ({ id }) => {
  const shareUrl = `https://langmaster.netlify.app/singleBlogCard/${id}`;

  return (
    <div>
      <FacebookShareButton url={shareUrl} quote={'status'} hashtag={'#blog'}>
        <FacebookIcon size={35} round={true}/>
      </FacebookShareButton>
      <WhatsappShareButton url={shareUrl} >
        <WhatsappIcon size={35} round={true}/>
      </WhatsappShareButton>
      <LinkedinShareButton url={shareUrl} >
        <LinkedinIcon size={35} round={true}/>
      </LinkedinShareButton>
    </div>
  );
};

export default Share;
