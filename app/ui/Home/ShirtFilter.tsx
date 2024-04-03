import React, { ChangeEvent, useEffect, useState } from "react";

interface Shirt {
  id: number;
  name: string;
  image_url: string;
  price: number;
  sizes: string[];
  colors: string[];
}

interface FiltersProps {
  shirtsData: Shirt[];
  setShirtsData: React.Dispatch<React.SetStateAction<Shirt[]>>;
}

export default function Filters({ shirtsData, setShirtsData }: FiltersProps) {
  const [filters, setFilters] = useState({
    name: "",
    price: "",
    size: "",
    color: ""
  });

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>, filterName: string) => {
    const newFilterValue = event.target.value;
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: newFilterValue
    }));
  };

  useEffect(() => {
    let filteredShirts = [...shirtsData];

    if (filters.name) {
      filteredShirts = filteredShirts.filter(shirt =>
        shirt.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    if (filters.price) {
      filteredShirts = filteredShirts.filter(shirt => shirt.price <= parseFloat(filters.price));
    }

    if (filters.size) {
      filteredShirts = filteredShirts.filter(shirt => shirt.sizes.includes(filters.size));
    }

    if (filters.color) {
      filteredShirts = filteredShirts.filter(shirt => shirt.colors.includes(filters.color));
    }

    if (
      filters.name !== "" ||
      filters.price !== "" ||
      filters.size !== "" ||
      filters.color !== ""
    ) {
      setShirtsData(filteredShirts);
    }
  }, [filters, shirtsData, setShirtsData]);

  const colorOptions = Array.from(new Set(shirtsData.flatMap((shirt) => shirt.colors)));
  const sizeOptions = Array.from(new Set(shirtsData.flatMap((shirt) => shirt.sizes)));

  return (
    <div className="md:col-span-1">
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Search Filters</h2>
        <div className="mb-2">
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            className="w-full border rounded-md px-2 py-1"
            placeholder="Enter shirt name"
            value={filters.name}
            onChange={(e) => handleFilterChange(e, "name")}
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Price:</label>
          <input
            type="number"
            className="w-full border rounded-md px-2 py-1"
            placeholder="Enter maximum price"
            value={filters.price}
            onChange={(e) => handleFilterChange(e, "price")}
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Size:</label>
          <select
            className="w-full border rounded-md px-2 py-1"
            value={filters.size}
            onChange={(e) => handleFilterChange(e, "size")}
          >
            <option value="">Select size</option>
            {sizeOptions.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <label className="block mb-1">Color:</label>
          <select
            className="w-full border rounded-md px-2 py-1"
            value={filters.color}
            onChange={(e) => handleFilterChange(e, "color")}
          >
            <option value="">Select color</option>
            {colorOptions.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
