import Image from "next/image";

interface Shirt {
  id: number;
  name: string;
  image_url: string;
  price: number;
  sizes: string[];
  colors: string[];
}

interface ShirtCardProps {
  shirt: Shirt;
}

export default function ShirtCard({ shirt }: ShirtCardProps) {
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-full max-w-md">
      <div className="relative w-full h-96">
        <Image
          src={shirt.image_url}
          alt={shirt.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{shirt.name}</h2>
        <p className="text-gray-600">${shirt.price}</p>
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
  );
}
