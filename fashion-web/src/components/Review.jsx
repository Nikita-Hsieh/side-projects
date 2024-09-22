import ReviewCard from "../layouts/ReviewCard"

const Review = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5">
      <h1 className="font-semibold text-center text-ExtraDarkColor text-4xl lg:mt-14 mt-24  ">
        Feedback
      </h1>

      {/* Review Card Section */}
      <div className="flex flex-col items-center xl:flex-row gap-5 justify-center py-4 my-8">
        <ReviewCard name="Victoria Pacini" />
        <ReviewCard name="Norman Lee" />
        <ReviewCard name="Jack Keevi" />
        <ReviewCard name="Nicole Anna" />
      </div>
    </div>
  )
}

export default Review
