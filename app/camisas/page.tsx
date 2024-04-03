"use client"
import NavBar from "@/app/ui/Home/NavBar";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'

interface Shirt {
  id: string;
  name: string;
  image_url: string;
  price: number;
  sizes: string[];
  colors: string[];
}

export default function Home() {
  const [shirt, setShirt] = useState<Shirt | null>(null);
  const searchParams = useSearchParams()
  const search = searchParams.get('camisa')

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        try {
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
          const selectedShirt = shirtsData.find(shirt => shirt.id === search);

          if (selectedShirt) {
            setShirt(selectedShirt);
          } else {
            console.error("Camisa não encontrada");
          }
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        }
      };

      fetchData();
    }
  }, [search]);

  if (!shirt) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center mt-2 p-4">
        <div className="container mx-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-1">
              <img src={shirt.image_url} alt={shirt.name} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="md:col-span-1 flex flex-col justify-center w-5/6">
              <h2 className="text-3xl font-semibold mb-4">{shirt.name}</h2>
              <p className="text-xl mb-2">Preço: ${shirt.price}</p>
              <p className="text-xl mb-2">Tamanhos disponíveis:</p>
              <select className="border rounded-md px-2 py-1 mb-2">
                <option value="">Selecione o tamanho</option>
                {shirt.sizes.map((size, index) => (
                  <option key={index} value={size}>{size}</option>
                ))}
              </select>
              <p className="text-xl mb-2">Cores:</p>
              <div className="flex items-center mb-2">
                {shirt.colors.map((color, index) => (
                  <div key={index} className={`w-8 h-8 mr-2 rounded-full border bg-${color === 'black' ? 'black' : color.toLowerCase()+"-500"}`}></div>
                ))}                
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300">
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
