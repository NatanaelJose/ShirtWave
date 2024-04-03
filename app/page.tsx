"use client";

import NavBar from "@/app/ui/Home/NavBar";
import Filters from "@/app/ui/Home/ShirtFilter";
import ShirtCard from "@/app/ui/Home/ShirtCard";
import { useEffect, useState } from "react";

const shirtsData = [
  {
    id: "a990c051-62bd-4b76-96e9-c6057c8cc8e1",
    name: "Camisa Azul",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/project1-a2983.appspot.com/o/camisa1.jpg?alt=media&token=29fc5bd2-95ab-4ea7-8212-7d860b80f22a",
    price: 25.99,
    sizes: ["S", "M", "L", "XL"],
    colors: ["blue"],
  },
  {
    id: "421973d2-1a23-458e-a200-c5e45082abe2",
    name: "Camisa Azul",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/project1-a2983.appspot.com/o/camisa2.jpg?alt=media&token=cb260b70-4503-4acb-b76e-76b2c5b7e0b1",
    price: 29.99,
    sizes: ["S", "M", "L", "XL"],
    colors: ["blue"],
  },
  {
    id: "4b155a49-c0ab-4748-bdee-c7fc072cb876",
    name: "Camisa Branca",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/project1-a2983.appspot.com/o/camisa3.jpg?alt=media&token=a28da649-b170-4741-b80e-54519941e9f0",
    price: 22.99,
    sizes: ["S", "M", "L"],
    colors: ["white"],
  },
  {
    id: "a8bc9c56-d914-4ee6-ac74-4aaf7cb724c5",
    name: "Camisa Preta",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/project1-a2983.appspot.com/o/camisa4.jpg?alt=media&token=341265bc-6a69-499c-95f5-68c068372ada",
    price: 27.99,
    sizes: ["S", "M", "L"],
    colors: ["black"],
  },
  {
    id: "6f8c34a0-4d0d-4b19-b7ba-655d75c6432e",
    name: "Camisa Verde",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/project1-a2983.appspot.com/o/camisa5.jpg?alt=media&token=7d89c63e-6483-47ba-8c8c-0332f8be38e8",
    price: 24.99,
    sizes: ["S", "M", "L"],
    colors: ["green"],
  },
  {
    id: "987ff306-b5c1-4594-840c-034e5a7f2c83",
    name: "Camisa Vermelha",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/project1-a2983.appspot.com/o/camisa6.jpg?alt=media&token=c125f154-f1cd-473c-bffb-4f9f1993a427",
    price: 23.99,
    sizes: ["S", "M", "L", "XL"],
    colors: ["red"],
  },
];

export default function Home() {
  const sizeOptions = Array.from(
    new Set(shirtsData.flatMap((shirt) => shirt.sizes))
  );
  const colorOptions = Array.from(
    new Set(shirtsData.flatMap((shirt) => shirt.colors))
  );

  const [filters, setFilters] = useState({
    name: "",
    price: "",
    size: "",
    color: "",
  });

  useEffect(() => {
    let updatedShirts = [...shirtsData];

    if (filters.name) {
      updatedShirts = updatedShirts.filter((shirt) =>
        shirt.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }
    if (filters.price) {
      updatedShirts = updatedShirts.filter(
        (shirt) => shirt.price <= parseFloat(filters.price)
      );
    }
    if (filters.size) {
      updatedShirts = updatedShirts.filter((shirt) =>
        shirt.sizes.includes(filters.size)
      );
    }
    if (filters.color) {
      updatedShirts = updatedShirts.filter((shirt) =>
        shirt.colors.includes(filters.color)
      );
    }
    setFilteredShirts(updatedShirts);
  }, [filters]);

  const [filteredShirts, setFilteredShirts] = useState(shirtsData);

  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center mt-2 p-4">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Filters
              filters={filters}
              setFilters={setFilters}
              sizeOptions={sizeOptions}
              colorOptions={colorOptions}
            />
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredShirts.map((shirt) => (
                  <ShirtCard key={shirt.id} shirt={shirt} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
