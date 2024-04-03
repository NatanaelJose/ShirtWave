import { useState, useEffect } from "react";

interface FiltersProps {
  filters: {
    name: string;
    price: string;
    size: string;
    color: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      name: string;
      price: string;
      size: string;
      color: string;
    }>
  >;
  sizeOptions: string[];
  colorOptions: string[];
}

export default function Filters({
  filters,
  setFilters,
  sizeOptions,
  colorOptions,
}: FiltersProps) {
  const handleFilterChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    filterName: string
  ) => {
    const newFilterValue = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: newFilterValue,
    }));
  };

  return (
    <div className="md:col-span-1">
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Filtros de Busca</h2>
        <div className="mb-2">
          <label className="block mb-1">Nome:</label>
          <input
            type="text"
            className="w-full border rounded-md px-2 py-1"
            placeholder="Digite o nome da camisa"
            value={filters.name || ""}
            onChange={(e) => handleFilterChange(e, "name")}
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Preço:</label>
          <input
            type="number"
            className="w-full border rounded-md px-2 py-1"
            placeholder="Digite o preço máximo"
            value={filters.price}
            onChange={(e) => handleFilterChange(e, "price")}
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Tamanho:</label>
          <select
            className="w-full border rounded-md px-2 py-1"
            value={filters.size}
            onChange={(e) => handleFilterChange(e, "size")}
          >
            <option value="">Selecione o tamanho</option>
            {sizeOptions.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <label className="block mb-1">Cor:</label>
          <select
            className="w-full border rounded-md px-2 py-1"
            value={filters.color}
            onChange={(e) => handleFilterChange(e, "color")}
          >
            <option value="">Selecione a cor</option>
            {colorOptions.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Aplicar Filtros
        </button>
      </div>
    </div>
  );
}
