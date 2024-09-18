import ProductCard from "../layouts/ProductCard"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const Features = () => {
  const data = [
    {
      id: 0,
      img: "src/assets/img/product1.jpg",
      name: "Product 1",
      price: "190.00",
      discount: "20% off",
    },
    {
      id: 1,
      img: "src/assets/img/product2.jpg",
      name: "Product 2",
      price: "200.00",
      discount: "20% off",
    },
    {
      id: 2,
      img: "src/assets/img/product3.jpg",
      name: "Product 3",
      price: "250.00",
      discount: "20% off",
    },
    {
      id: 3,
      img: "src/assets/img/product4.jpg",
      name: "Product 4",
      price: "100.00",
      discount: "20% off",
    },
    {
      id: 4,
      img: "src/assets/img/product5.jpg",
      name: "Product 5",
      price: "180.00",
      discount: "20% off",
    },
    {
      id: 5,
      img: "src/assets/img/product2.jpg",
      name: "Product 2",
      price: "200.00",
      discount: "20% off",
    },
    {
      id: 6,
      img: "src/assets/img/product3.jpg",
      name: "Product 3",
      price: "250.00",
      discount: "20% off",
    },
    {
      id: 7,
      img: "src/assets/img/product4.jpg",
      name: "Product 4",
      price: "100.00",
      discount: "20% off",
    },
    {
      id: 8,
      img: "src/assets/img/product5.jpg",
      name: "Product 5",
      price: "180.00",
      discount: "20% off",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col justify-center pt-24">
      {/* Heading Section */}
      <h1 className="font-semibold text-4xl text-center text-ExtraDarkColor">
        Exclusive Products
      </h1>

      {/* Card Section */}
      <div className="flex flex-wrap justify-center gap-5 pt-8">
        {data.map((item) => (
          <div className="md:w-2/4 lg:w-1/4">
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
