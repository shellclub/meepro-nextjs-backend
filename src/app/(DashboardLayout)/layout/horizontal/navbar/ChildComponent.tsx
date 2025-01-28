import React, { useState } from 'react';
import Link from 'next/link';
import { IconChevronDown } from '@tabler/icons-react';
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { useTranslation } from 'react-i18next';
const ChildComponent = ({ item, isActive, handleMouseEnter, handleMouseLeave, onClick }: any) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const pathname = usePathname();

    const handleSubMenuEnter = () => {
        setIsSubMenuOpen(true);
    };

    const handleSubMenuLeave = () => {
        setIsSubMenuOpen(false);
    };
    const { t } = useTranslation();
    return (
        <div
            className="relative group"
            onMouseEnter={handleSubMenuEnter}
            onMouseLeave={handleSubMenuLeave}
            onClick={onClick}
        >
            <Link href={item.href}>
                <p
                    className={`w-full ${item.href === pathname
                        ? 'text-primary dark:text-primary leading-normal hover:text-primary'
                        : 'group-hover/nav:bg-lightprimary group-hover/nav:text-primary'
                        } py-1 px-3 rounded-full flex gap-3 items-center text-ld opacity-80 hover:text-primary`}
                >

                    <span className='flex gap-3 items-center w-full'>
                        <Icon icon={`${item.icon}`} height={18} className='shrink-0' />
                        <span className='line-clamp-1 leading-normal max-w-36 overflow-hidden'>{t(`${item.title}`)}</span>
                        {item.children && <IconChevronDown size={18} className='ms-auto shrink-0'  />}
                    </span>
                </p>
            </Link>
            {isSubMenuOpen && item.children && (
                <div className="absolute left-full rtl:right-full  top-0 mt-0 w-56 bg-white dark:bg-dark rounded-md shadow-lg ">
                    <ul className="p-3 flex flex-col gap-2">
                        {item.children.map((child: any) => (
                            <li key={child.id}>
                                {child.children ? (
                                    <ChildComponent
                                        item={child}
                                        isActive={isActive}
                                        handleMouseEnter={handleMouseEnter}
                                        handleMouseLeave={handleMouseLeave}
                                    />
                                ) : (
                                    <Link href={child.href}>
                                        <p className={`group/menu  hover:text-primary ${child.href == pathname
                                            ? "!text-primary "
                                            : 'group-hover/nav:bg-lightprimary group-hover/nav:text-primary'
                                            } py-1 px-3 rounded-full flex gap-2 items-center text-ld opacity-80 hover:text-primary`}>
                                            <span className={`leading-normal ${child.href == pathname ? 'bg-primary dark:bg-primary' : 'bg-dark dark:bg-white' } group-hover/menu:bg-primary  rounded-full mx-1.5 h-[6px] w-[6px]`}></span>
                                            {t(`${child.title}`)}
                                        </p>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ChildComponent;

