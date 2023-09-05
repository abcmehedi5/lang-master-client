import { FacebookProvider, CustomChat } from "react-facebook";
const Support = () => {
  return (
    <div>
      <h1>Support</h1>
      <FacebookProvider appId={`${import.meta.env.VITE_APP_ID}`} chatSupport>
        <CustomChat
          pageId={`${import.meta.env.VITE_PAGE_ID}`}
          minimized={true}
        />
      </FacebookProvider>
    </div>
  );
};

export default Support;
