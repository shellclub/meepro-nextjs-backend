"use client";
import { Icon } from "@iconify/react";
import { Button, HR, Label, List, Radio } from "flowbite-react";
import React, { useState, useContext } from "react";
import { ProductFiterType } from "../../../../(DashboardLayout)/types/apps/eCommerce";
import { ProductContext } from "@/app/context/Ecommercecontext/index";
import { MdCheck } from "react-icons/md";

const ProductFilter = () => {
  const {
    selectedCategory,
    selectCategory,
    sortBy,
    updateSortBy,
    selectedGender,
    selectGender,
    priceRange,
    updatePriceRange,
    selectedColor,
    selectColor,
    products,
    filterReset,
  } = useContext(ProductContext);

  const filterCategory: ProductFiterType[] = [
    {
      id: 1,
      filterbyTitle: "Filter by Category",
    },
    {
      id: 2,
      name: "All",
      sort: "All",
      icon: "tabler:circles",
    },
    {
      id: 3,
      name: "Fashion",
      sort: "fashion",
      icon: "tabler:hanger",
    },
    {
      id: 9,
      name: "Books",
      sort: "books",
      icon: "tabler:notebook",
    },
    {
      id: 10,
      name: "Toys",
      sort: "toys",
      icon: "tabler:mood-smile",
    },
    {
      id: 11,
      name: "Electronics",
      sort: "electronics",
      icon: "tabler:device-laptop",
    },
    {
      id: 6,
      devider: true,
    },
  ];
  const filterbySort = [
    {
      id: 1,
      value: "newest",
      label: "Newest",
      icon: "tabler:ad-2",
    },
    {
      id: 2,
      value: "priceDesc",
      label: "Price: High-Low",
      icon: "tabler:sort-ascending-2",
    },
    {
      id: 3,
      value: "priceAsc",
      label: "Price: Low-High",
      icon: "tabler:sort-descending-2",
    },
    {
      id: 4,
      value: "discount",
      label: "Discounted",
      icon: "tabler:ad-2",
    },
  ];
  const Gender = [
    {
      id: 1,
      radioid: "All",
    },
    {
      id: 2,
      radioid: "Men",
    },
    {
      id: 3,
      radioid: "Women",
    },
    {
      id: 4,
      radioid: "Kids",
    },
  ];
  const filterbyPrice = [
    {
      id: 1,
      lable: "All",
      radioid: "all",
    },
    {
      id: 2,
      lable: "0-50",
      radioid: "0-50",
    },
    {
      id: 3,
      lable: "50-100",
      radioid: "50-100",
    },
    {
      id: 4,
      lable: "100-200",
      radioid: "100-200",
    },
    {
      id: 5,
      lable: "200-99999",
      radioid: "200-99999",
    },
  ];

  const [uniqueColors, setUniqueColors] = useState<string[]>([]);

  const getUniqueColors = () => {
    const allColors = products.flatMap((product) => product.colors);
    return ["All", ...Array.from(new Set(allColors))];
  };

  const filterbyColors = getUniqueColors();

  return (
    <>
      {/* ------------------------------------------- */}
      {/* Left Part */}
      {/* ------------------------------------------- */}

      <div className="w-full border-e border-ld">
        {/* ------------------------------------------- */}
        {/* Category filter */}
        {/* ------------------------------------------- */}
        <List className="my-4 mt-0 pt-4">
          {filterCategory.map((filter) => {
            if (filter.filterbyTitle) {
              return (
                <h6 className="capitalize text-sm py-4 px-6" key={filter.id}>
                  {filter.filterbyTitle}
                </h6>
              );
            } else if (filter.devider) {
              return (
                <div className="my-4">
                  <HR key={filter.id} className="my-6" />
                </div>
              );
            }
            return (
              <List.Item
                key={filter.id}
                className={`py-3 gap-2 px-4  rounded-md  cursor-pointer mx-6 ${
                  selectedCategory === filter.sort
                    ? "text-primary bg-lightprimary dark:bg-lightprimary"
                    : " text-bodytext dark:text-darklink bg-hover"
                }`}
                icon={() => <Icon icon={filter.icon} height={18} />}
                onClick={() => selectCategory(filter.sort as string)}
              >
                {filter.name}
              </List.Item>
            );
          })}
        </List>

        {/* ------------------------------------------- */}
        {/* Sort by */}
        {/* ------------------------------------------- */}
        <List className="mt-0 px-6">
          <h6 className="capitalize text-sm pb-4">Sort By</h6>
          {filterbySort.map((filter) => {
            return (
              <List.Item
                key={filter.id}
                className={`py-3 gap-2 px-4 rounded-md  cursor-pointer ${
                  sortBy === filter.value ? "text-primary bg-lightprimary dark:bg-lightprimary" : "text-bodytext dark:text-darklink bg-hover "
                }`}
                icon={() => <Icon icon={filter.icon} height={18} />}
                onClick={() => updateSortBy(filter.value)}
              >
                {filter.label}
              </List.Item>
            );
          })}
        </List>
        <HR className="my-6" />
        {/* ------------------------------------------- */}
        {/* Filter By Gender */}
        {/* ------------------------------------------- */}
        <div className="mt-0 px-6">
          <h6 className="capitalize text-sm pb-4">By Gender</h6>
          {Gender.map((gen) => {
            return (
              <div
                key={gen.id}
                className={`py-3 gap-2 bg-hover px-4 rounded-md text-bodytext dark:text-darklink cursor-pointer `}
              >
                <div className="flex items-center gap-3 ">
                  <Radio
                    id={gen.radioid}
                    name="gender"
                    value={gen.radioid}
                    className="cursor-pointer"
                    onChange={(e) => selectGender(e.target.value)}
                    checked={selectedGender === gen.radioid}
                  />
                  <Label
                    htmlFor={gen.radioid}
                    className="cursor-pointer text-bodytext dark:text-darklink font-normal text-sm"
                  >
                    {gen.radioid}
                  </Label>
                </div>
              </div>
            );
          })}
        </div>
        <HR className="my-6" />
        {/* ------------------------------------------- */}
        {/* Filter By Pricing */}
        {/* ------------------------------------------- */}
        <div className="mt-0 px-6">
          <h6 className="capitalize text-sm pb-4">By Pricing</h6>
          {filterbyPrice.map((price) => {
            return (
              <div
                key={price.id}
                className={`py-3 gap-2 bg-hover px-4 rounded-md text-bodytext dark:text-darklink cursor-pointer`}
              >
                <div className="flex items-center gap-3 ">
                  <Radio
                    id={price.lable}
                    name="pricing"
                    value={price.lable}
                    className="cursor-pointer"
                    onChange={(e) => updatePriceRange(e.target.value)}
                    checked={priceRange === price.lable}
                  />
                  <Label
                    htmlFor={price.lable}
                    className="cursor-pointer text-bodytext dark:text-darklink font-normal text-sm"
                  >
                    {price.lable}
                  </Label>
                </div>
              </div>
            );
          })}
        </div>
        <HR className="my-6" />
        {/* ------------------------------------------- */}
        {/* Filter By Colors */}
        {/* ------------------------------------------- */}
        <div className="mt-0 px-6">
          <h6 className="capitalize text-sm pb-4">By Colors</h6>
          <div className="flex flex-row flex-wrap  gap-2 mb-7">
            {filterbyColors.map((theme, index) => (
              <label
                className=" h-6 w-6 rounded-full cursor-pointer flex items-center justify-center"
                style={{
                  backgroundColor: theme !== "All" ? theme : "#fff",
                  border: theme === "All" ? "1px solid #ccc" : "none",
                }}
                onClick={() =>
                  selectedColor === theme
                    ? selectColor("All")
                    : selectColor(theme)
                }
              >
                {selectedColor === theme && (
                  <MdCheck  size={16} className="text-gray-500 " />
                )}
              </label>
            ))}
          </div>
          <HR className="my-6" />
          <Button
            color={"primary"}
            className="w-full rounded-md"
            onClick={() => {
              filterReset();
            }}
          >
            Reset Filter
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
