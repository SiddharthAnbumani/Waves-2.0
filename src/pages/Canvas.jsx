export default function Canvas(){
  return (
    <div className="flex flex-col justify-center items-center">
  <div className="relative w-[800px] h-[400px] rounded-xl overflow-hidden">
    {/* Image with object-cover */}
    <img
      src="contact_1.jpg"
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Overlay with text */}
    <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-start items-center p-6 backdrop-blur-3xl bg-black/30 shadow-2xl">
      <p className="text-white text-xl font-extrabold text-center mb-6">
        GIVEN BELOW IS THE SCHEDULE FOR THE ONGOING LEARN TO SWIM, INCLUDING AN EXCLUSIVE LADIES' TIMING WITH A LADY SWIM COACH.
      </p>

      <div className="flex w-full h-full justify-center gap-4">
        {/* Morning batch */}
        <div className="w-1/2 h-fit py-6 px-4 border rounded-lg">
          <ul className="text-white flex flex-col items-center space-y-3 text-xl font-bold">
            <li className="">MORNING CLASSES</li>
            <li>06.00 A.M - 07.00 A.M</li>
            <li>07.00 A.M - 08.00 A.M</li>
            <li>08.00 A.M - 09.00 A.M</li>
            <li>09.00 A.M - 10.00 A.M</li>
            <li>10.30 A.M - 11.30 A.M</li>
          </ul>
        </div>

        {/* Evening batch */}
        <div className="w-1/2 h-fit py-6 px-4 border rounded-lg">
          <ul className="text-white flex flex-col items-center space-y-3 text-xl font-bold">
            <li>EVENING CLASSES</li>
            <li>03.00 P.M - 04.00 P.M</li>
            <li>04.00 P.M - 05.00 P.M</li>
            <li>05.00 P.M - 06.00 P.M</li>
            <li>06.00 P.M - 07.00 P.M</li>
            <li>07.00 P.M - 08.00 P.M</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
