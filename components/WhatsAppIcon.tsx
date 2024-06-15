"use client";

import Image from "next/image";
import React from "react";
import whatsapp from "../public/whatsapp.png";

const WhatsAppIcon = () => {
  const handleClick = () => {
    window.open("https://wa.me/9724989843", "_blank");
  };

  return (
    <div
      className="fixed bottom-5 right-5 w-16 h-16  rounded-full flex items-center justify-center shadow-lg cursor-pointer z-50"
      onClick={handleClick}
    >
      <Image
        src={whatsapp}
        alt="WhatsApp"
        height={36}
        width={36}
        className="w-16 h-16 rounded-full"
      />
    </div>
  );
};

export default WhatsAppIcon;
