import ProductCard from "../layouts/ProductCard"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const Shop = () => {
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
  ]

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-1 4">
      {/* Heading Section */}
      <div>
        <h1 className="font-semibold text-4xl text-center text-ExtraDarkColor">
          Best Sellers
        </h1>
      </div>

      {/* Carousel Section */}
      <div className="mt-8">
        <Slider {...settings}>
          {data.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Shop
