"use client"

import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

function UpButton() {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
        {
            isVisible && (
                
                <button onClick={scrollToTop} className="bottom-8 right-8 max-md:right-6 max-md:bottom-6 fixed rounded-md z-50 bg-emerald-900 hover:bg-emerald-800 text-white w-12 h-12 text-center cursor-pointer"><FaArrowUp className="w-full text-2xl" /></button>
            )
        }
    </>
  )
}

export default UpButton