import Buttons from "./buttons"
import Alerts from "./alerts";

export default function Map() {
    return(
        <>
        <div className="relative bg-gray-200 w-7xl h-128 flex items-center justify-center m-auto rounded-2xl">
        map here
        <div className="absolute top-4 right-6 flex cursor-pointer font-semibold text-red-500">report <img src="https://img.icons8.com/?size=100&id=20844&format=png&color=000000" width={25} className="ml-1"/> </div>
       <div className="absolute bottom-4 right-6 flex flex-col items-center space-y-2">
        <div className="bg-gray-600 p-2 text-white rounded-3xl w-40 text-center">
            Advice: 100
        </div>
        <div className="bg-gray-600 p-2 text-white rounded-3xl w-40 text-center">
            Safety Index: 100
        </div>
        </div>

        <div className="absolute top-4 left-6">
            <img
    src="https://img.icons8.com/?size=100&id=byhkZFCWAF9y&format=png&color=000000"
    alt="weather"
    className="w-7 h-7 rounded-full"
  />
        </div>


        <div className="absolute bottom-4 left-6 flex items-center space-x-4">
        <div>
      <h1 className="text-lg font-semibold">You are at Park</h1>
      <p className="text-sm text-gray-600">A park area</p>
         </div>
        <Buttons>Refetch</Buttons>
        </div>
        <Alerts />


        </div>

        </>
    );
}