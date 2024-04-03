import Image from "next/image";
import NavBar from "@/app/ui/Home/NavBar";

export default function Home() {
  const shirtsData = [
    {
      id: 1,
      name: "Camiseta Azul",
      image: "/blue-shirt.jpg",
      price: 25.99,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Azul"],
    },
    {
      id: 2,
      name: "Camiseta Vermelha",
      image: "/red-shirt.jpg",
      price: 19.99,
      sizes: ["S", "M", "L"],
      colors: ["Vermelho"],
    },
    // Adicione mais camisetas conforme necessário
  ];

  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-4">
            Nossa Coleção de Camisetas
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shirtsData.map((shirt) => (
              <div
                key={shirt.id}
                className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md"
              >
                <Image
                  src={shirt.image}
                  alt={shirt.name}
                  width={300}
                  height={300}
                />
                <div className="text-center mt-2">
                  <h2 className="text-xl font-semibold">{shirt.name}</h2>
                  <p className="text-gray-600">${shirt.price.toFixed(2)}</p>
                  <div className="flex justify-center mt-2">
                    <button className="bg-blue-500 text-white rounded-md px-4 py-2 mr-2 hover:bg-blue-600">
                      Adicionar ao Carrinho
                    </button>
                    <button className="bg-gray-200 text-gray-800 rounded-md px-4 py-2 hover:bg-gray-300">
                      Detalhes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
