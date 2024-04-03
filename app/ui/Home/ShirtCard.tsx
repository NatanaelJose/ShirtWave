import Image from "next/image";
import Link from "next/link";

interface Shirt {
  id: string;
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
          fill
          className="object-cover"
          sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 100vw"
          priority
        />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{shirt.name}</h2>
        <p className="text-gray-600">${shirt.price}</p>
        <div className="flex justify-center mt-2">
          <button className="bg-blue-500 text-white rounded-md px-3 py-1 mr-2 hover:bg-blue-600 transition-colors duration-300">
            Adicionar ao Carrinho
          </button>
          <Link
            href={`/camisas?camisa=${shirt.id}`}
            className="bg-gray-200 text-gray-800 flex items-center rounded-md px-3 py-1 hover:bg-gray-300 transition-colors duration-300"
          >
            Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}
