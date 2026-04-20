export default function ProductsCard({product}) {
  return (
    <div className="w-full h-110 text-black bg-white flex flex-col items-center  rounded-[15px] shadow-xl shadow-gray-400 p-[3%]">
      <img src={product.img} alt="" className=" shadow-lg shadow-gray-500 w-[85%] h-[60%] object-cover rounded-[15px]"/>
      <div className="w-full h-[30%] p-[6%]">
        <h1 className="text-[20px]">{product.name}</h1>
        <p>{product. title}</p>
        <div className="flex justify-between mt-[10%]">
          <p className="text-[25]">${product.price}</p>
          <p className="text-[25px]">Rating {product.rating}</p>
        </div>
      </div>
    </div>
  )
}
