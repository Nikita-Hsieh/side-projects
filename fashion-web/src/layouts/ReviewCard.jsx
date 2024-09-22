import { ImQuotesLeft } from "react-icons/im"

const ReviewCard = ({ name }) => {
  return (
    <div className="flex flex-col w-full lg:w-2/6 border-2 border-DarkColor p-3 rounded-lg gap-5 hover:bg-PrimaryColor transition cursor-pointer duration-300 ease-in-out">
      <div>
        <ImQuotesLeft size={25} />
        <h1 className="text-xl font-semibold text-ExtraDarkColor pt-4">
          {name}
        </h1>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
        perspiciatis fuga recusandae, ullam nisi debitis porro ratione unde
        nihil, quidem architecto aspernatur eos qui ipsam sit natus sunt in.
        Omnis!
      </p>
    </div>
  )
}

export default ReviewCard
