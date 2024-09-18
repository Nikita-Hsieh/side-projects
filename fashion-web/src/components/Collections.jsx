import img from "../assets/img/collection.jpg"

const Collections = () => {
  return (
    <div className="h-screen lg:h-[70vh] flex flex-col justify-center lg:flex-row items-center bg-PrimaryColor mt-14 lg:px-32 px-5">
      {/* Images Section */}
      <div className="flex justify-center w-full lg:w-2/4 pt-6">
        <img src={img} alt="img" style={{ width: "50%" }} />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-2/4 space-y-4 pt-5 lg:text-start">
        <h1 className="text-4xl font-semibold text-ExtraDarkColor">
          Best Summer Collection
        </h1>
        <h3 className="text-lg font-medium text-DarkColor">
          Sales up to 60% off
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi id,
          error obcaecati consequatur aspernatur inventore consectetur magni
          illo dolores et consequuntur alias dolor maxime quibusdam ex ratione
          quod corrupti illum?
        </p>

        <button className="bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default Collections
