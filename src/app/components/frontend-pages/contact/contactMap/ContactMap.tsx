import React from "react";

const ContactMap = () => {
  return (
    <>
      <div className="container-md mx-auto px-4 -mt-[180px]">
        <div className="overflow-hidden rounded-base ">
          <div>
            <iframe
              width="100%"
              height="440"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=newyork+(My%20Businnewyoess%20Name)&amp;t=p&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMap;