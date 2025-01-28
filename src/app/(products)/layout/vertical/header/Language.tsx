"use client";
import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CustomizerContext } from "@/app/context/customizerContext";
import Image from "next/image";
import { Dropdown } from "flowbite-react";
import engflag from "/public/images/flag/icon-flag-en.svg";
import cnflag from "/public/images/flag/icon-flag-cn.svg";
import frflag from "/public/images/flag/icon-flag-fr.svg";
import saflag from "/public/images/flag/icon-flag-sa.svg";

const Languages = [
  {
    flagname: "English (UK)",
    icon: engflag,
    value: "en",
  },
  {
    flagname: "中国人 (Chinese)",
    icon: cnflag,
    value: "ch",
  },
  {
    flagname: "français (French)",
    icon: frflag,
    value: "fr",
  },

  {
    flagname: "عربي (Arabic)",
    icon: saflag,
    value: "ar",
  },
];

export const Language = () => {
  const { i18n } = useTranslation();

  const { isLanguage, setIsLanguage } = useContext(CustomizerContext);
  const currentLang =
    Languages.find((_lang) => _lang.value === isLanguage) || Languages[1];

  useEffect(() => {
    i18n.changeLanguage(isLanguage);
  }, [isLanguage]);
  return (
    <>
      <div className="relative group/menu px-15">
        <Dropdown
          label=""
          className="w-56  rounded-sm"
          dismissOnClick={false}
          renderTrigger={() => (
                <span className="relative  after:absolute after:w-10 after:-top-1/2 after:h-10 after:rounded-full hover:after:bg-lightprimary  rounded-full flex justify-center items-center cursor-pointer group-hover/menu:after:bg-lightprimary ">
              <Image
                src={currentLang.icon}
                alt="language"
                className="rounded-full h-5 w-5 shrink-0 object-cover cursor-pointer"
              />
            </span>
          )}
        >
          {Languages.map((item, index) => (
            <Dropdown.Item
              className="flex gap-3 items-center py-3 px-6 bg-hover group w-full"
              key={index}
              onClick={() => setIsLanguage(item.value)}
            >
              <Image
                src={item.icon}
                alt="flag"
                className="rounded-full object-cover h-5 w-5"
              />
              <span className="text-sm text-muted dark:text-darklink group-hover:text-primary font-medium leading-[25px]" >{item.flagname}</span>
            </Dropdown.Item>
          ))}
        </Dropdown>
      </div>
    </>
  );
};
