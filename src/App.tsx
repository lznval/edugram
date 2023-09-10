import React from 'react';
import DialogWidget from "./components/dialog";
import FormWidget from "./components/form";

function App() {
  return (
      <div className="App">
        <FormWidget
            backgroundColor="#f0f0f0"
            buttonColor="blue"
            textColor="blue"
        />
        <DialogWidget
            backgroundColor="#ffcccc"
            bannerImageSrc="https://via.placeholder.com/300x200"
            promoCode="COUPON123"
            partnerWebsiteUrl="https://partner-website.com"
            delay={5000}
        />
      </div>
  );
}

export default App;
