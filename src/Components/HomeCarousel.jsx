export default function HomeCarousel({carousel}) {
  return (
    <div className="homecarousel w-full h-full text-white bg-gray-900  rounded-[15px] shadow-2xl shadow-gray-900 p-[4%]">
      <img src={carousel.img} alt="" className="w-full h-[60%] object-cover rounded-[15px]"/>
      <div className="w-full h-[40%] p-[6%]">
        <h1 className="homecarousel text-[23px]">{carousel.name}</h1>
        <p>{carousel. title}</p>
        <div className="flex justify-between mt-[20%]">
          <p className="homecarousel text-[25]">${carousel.price}</p>
          <p className="homecarousel text-[25px]">Rating {carousel.rating}</p>
        </div>
      </div>
    </div>
  )
}
