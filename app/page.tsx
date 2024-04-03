'use client'

import NavBar from "@/app/ui/Home/NavBar";
import Filters from "@/app/ui/Home/ShirtFilter";
import ShirtCard from "@/app/ui/Home/ShirtCard";
import { useEffect, useState } from "react";

interface Shirt {
  id: number;
  name: string;
  image_url: string;
  price: number;
  sizes: string[];
  colors: string[];
}

export default function Home() {
  const [shirtsData, setShirtsData] = useState<Shirt[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api');
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados');
        }
        const data = await response.json();
        setShirtsData(data.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center mt-2 p-4">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Filters  shirtsData={shirtsData} setShirtsData={setShirtsData} />
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {shirtsData.map((shirt) => (
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
