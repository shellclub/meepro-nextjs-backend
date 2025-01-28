import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { HR, List } from "flowbite-react";
import EmailCompose from "./EmailCompose";
import { EmailContext } from '@/app/context/EmailContext/index'


interface fitlerType {
  id?: number;
  filterbyTitle?: string;
  icon?: any;
  name?: string;
  divider?: boolean;
  color?: string;
}
const EmailFilter = () => {
  const filterData: fitlerType[] = [
    {
      id: 2,
      name: "inbox",
      icon: 'tabler:inbox',
    },
    {
      id: 3,
      name: "sent",
      icon: 'tabler:send',
    },
    {
      id: 4,
      name: "draft",
      icon: 'tabler:file-text',
    },
    {
      id: 4,
      name: "spam",
      icon: 'tabler:inbox',
    },
    {
      id: 5,
      name: "trash",
      icon: 'tabler:trash',
    },
    {
      id: 6,
      divider: true,
    },
    {
      id: 1,
      filterbyTitle: "Sort By",
    },
    {
      id: 7,
      name: "starred",
      icon: 'tabler:star',
    },
    {
      id: 8,
      name: "important",
      icon: 'tabler:badge',
    },
    {
      id: 9,
      divider: true,
    },
    {
      id: 13,
      filterbyTitle: "Labels",
    },
    {
      id: 10,
      name: "Promotional",
      icon: 'tabler:bookmark',
      color: "primary",
    },
    {
      id: 11,
      name: "Social",
      icon: 'tabler:bookmark',
      color: "error",
    },
    {
      id: 12,
      name: "Health",
      icon: 'tabler:bookmark',
      color: "success",
    },
  ];


  const { setFilter, filter } = useContext(EmailContext);

  const handleFilterClick = (filterName: string | any) => {
    setFilter(filterName);
  };

  return (
    <>
      <div className="left-part max-w-[235px] h-full w-full ">
        <EmailCompose />
        <List className="my-4">
          {filterData.map((item) => {
            if (item.filterbyTitle) {
              return (
                <h6 className="uppercase text-xs pb-3" key={item.id}>
                  {item.filterbyTitle}
                </h6>
              );
            } else if (item.divider) {
              return (
                <div className="my-4">
                  <HR key={item.id} className="my-6" />
                </div>
              );
            }
            return (
              <List.Item
                key={item.id}
                className={`py-[10px] gap-2 px-4 rounded-md cursor-pointer capitalize  ${filter === item.name ? "text-primary  dark:bg-lightprimary" : "bg-hover rounded-md text-bodytext dark:text-darklink"}`}

                icon={() => (
                  <Icon icon={item.icon} height={18} className={`text-${item.color}`} />
                )}
                onClick={() => handleFilterClick(item.name)}
              >
                {item.name}
              </List.Item>
            );
          })}
        </List>
      </div >
    </>
  );
};

export default EmailFilter;
