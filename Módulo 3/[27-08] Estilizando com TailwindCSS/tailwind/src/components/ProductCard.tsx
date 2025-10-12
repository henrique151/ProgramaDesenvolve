export default function ProductCard() {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSaxsHqSjGvE3T7zhTUR4pYSFrLoL4v72QSbuFKIU4jKc5Brm6l7Q-8ijO6PkwHUYwgOb5A6XpQJmGgZzNG0RWp3SpPqawIsBST9H_id0V6mRLgYeoR88OtazxMLFQq&usqp=CAc" alt="Product Image" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Nome do Produto</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quas beatae enim fuga ullam laboriosam dolorem? Alias corporis perferendis aut recusandae et blanditiis nisi tempore minus! Voluptate at quos maiores maxime minus a velit mollitia illum non nihil beatae eos dolorem sed quaerat omnis, numquam fugit? Animi vitae excepturi nostrum?
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">R$999,00</span>
                <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-800 mr-2 mb-2">Em Estoque</span>
            </div>
            <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    )
}
