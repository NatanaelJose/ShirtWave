
export default function Filters() {
  return (
    <div className="md:col-span-1">
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Filtros de Busca</h2>
        <div className="mb-2">
          <label className="block mb-1">Nome:</label>
          <input
            type="text"
            className="w-full border rounded-md px-2 py-1"
            placeholder="Digite o nome da camiseta"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Preço:</label>
          <input
            type="text"
            className="w-full border rounded-md px-2 py-1"
            placeholder="Digite o preço máximo"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Tamanho:</label>
          <select
            className="w-full border rounded-md px-2 py-1"
          >
            <option value="">Selecione o tamanho</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block mb-1">Cor:</label>
          <select
            className="w-full border rounded-md px-2 py-1"
          >
            <option value="">Selecione a cor</option>
            <option value="Azul">Azul</option>
            <option value="Vermelho">Vermelho</option>
            {/* Adicione outras cores conforme necessário */}
          </select>
        </div>
      </div>
    </div>
  );
}
