"use client";
import React, { useContext } from "react";
import { ChildItem } from "../Sidebaritems";
import { Sidebar } from "flowbite-react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from 'react-i18next';
import { CustomizerContext } from "@/app/context/customizerContext";

interface NavItemsProps {
  item: ChildItem;
  isMenuItem?:boolean
}
const NavItems: React.FC<NavItemsProps> = ({ item,isMenuItem }) => {
  const pathname = usePathname();
  const { t } = useTranslation();
  const {setIsMobileSidebar} = useContext(CustomizerContext);
  const handleMobileSidebar = () => {
       setIsMobileSidebar(false)
  }
  return (
    <>
      <Sidebar.Item
        href={item.url}
        as={Link}
        className={`${item.disabled?"opacity-50 cursor-default hover:bg-transparent hover:text-link":item.url == pathname
          ? "!text-white bg-primary mb-0.5 hover:bg-primary hover:text-white"
          : "text-link bg-transparent group/link "
          }  `}
      >
        <span onClick={handleMobileSidebar} className="flex gap-3.5 align-center items-center leading-normal truncate">
          {item.icon ? (
            <Icon icon={item.icon} className={`${item.color} my-0.5`} height={20} stroke="1" />
          ) : (
            <Icon icon="tabler:circle" className={`text-xs shrink-0 ${item.url == pathname
              ? "text-primary": ""
              }`} stroke="1" />
          )}
          {!isMenuItem? <div className="max-w-36 truncate hide-menu flex-1">{t(`${item.name}`)}
          </div>:<div className={`max-w-36 truncate hide-menu flex-1 ${item.url == pathname?"text-primary":""}`}>{t(`${item.name}`)}
          </div>}
        </span>
      </Sidebar.Item>
    </>
  );
};

export default NavItems;
