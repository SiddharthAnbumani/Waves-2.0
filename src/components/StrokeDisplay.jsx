export default function StrokeDisplay({ freestyle, backstroke, butterfly, breaststroke }) {
    return (
      <div className="flex justify-center mt-4">
        <div className="inline-flex space-x-4 py-1 px-4 backdrop-blur-3xl rounded-xl">
  
          {freestyle && (
            <div className="flex flex-col items-center py-6 px-6">
              <h1 className="text-xl text-[#041E42] mb-1 font-semibold">Freestyle</h1>
              <video className="h-40 rounded-xl" src="/final_freestyle.mp4" autoPlay controls loop></video>
            </div>
          )}
  
          {backstroke && (
            <div className="flex flex-col items-center py-6 px-6">
              <h1 className="text-xl text-[#041E42] font-semibold mb-1">Backstroke</h1>
              <video className="h-40  rounded-xl" src="/backstroke_.mp4" autoPlay controls loop></video>
            </div>
          )}
  
          {butterfly && (
            <div className="flex flex-col items-center py-6 px-6">
              <h1 className="text-xl text-[#041E42] font-semibold mb-1">Butterfly</h1>
              <video className="h-40 rounded-xl" src="/fly_.mp4" autoPlay controls loop></video>
            </div>
          )}
  
          {breaststroke && (
            <div className="flex flex-col items-center py-6 px-6">
              <h1 className="text-xl text-[#041E42] font-semibold mb-1">Breaststroke</h1>
              <video className="h-40 rounded-xl" src="/vids/breast.mp4" autoPlay controls loop></video>
            </div>
          )}
  
        </div>
      </div>
    );
  }
  