import { FaFacebook } from "react-icons/fa6"
import { RiInstagramLine, RiTwitterLine } from "react-icons/ri"
import { Link as ScrollLink } from "react-scroll" // Renaming Link from react-scroll to ScrollLink
import { Link as RouterLink } from "react-router-dom" // Renaming Link from react-router-dom to RouterLink

const Footer = () => {
  return (
    <footer className="bg-PrimaryColor txet-ExtraDarkColor rounded-t-3xl mt-8 md:mt-9">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <h1 className="font-semibold text-3xl pb-4">StyleNestle</h1>
      </div>
      <div className="flex gap-5 ml-3">
        {/* Facebook, Twitter, and Instagram icons */}
        <FaFacebook
          size={32}
          className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
        />
        <RiTwitterLine
          size={32}
          className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
        />
        <RiInstagramLine
          size={32}
          className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
        />
      </div>
      {/* <div>
        <h1 className="font-medium text-lg pb-4 pt-5 md:pt-0">Shop</h1>
        <div className="flex flex-col gap-2">
          <RouterLink
            to="/"
            className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            key="product"
          >
            Product
          </RouterLink>
          <ScrollLink
            to="overview-section"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            key="overview"
          >
            Overview
          </ScrollLink>
          <RouterLink
            to="/pricing"
            className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            key="pricing"
          >
            Pricing
          </RouterLink>
        </div>
      </div> */}
    </footer>
  )
}

export default Footer
