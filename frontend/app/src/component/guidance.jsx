export default function Guidance() {
  return (
    <div className="mt-8 text-gray-500">
      <h1 className="text-center">GUIDANCE</h1>

      <p className="mt-5 max-w-4xl text-center mx-auto m-2">
        This advisory provides real-time information about your surroundings,
        including safety alerts, weather updates, and location details.
        Use the map to navigate and stay informed about potential risks in your area.
        Click on the 'Report' button to notify us of any suspicious activities or hazards you encounter.
        <br /><br />
        Enjoy Your Travel & Stay safe!
      </p>

      {/* DOs & DON'Ts */}
      <div className="mt-8 flex justify-center gap-16">

        {/* DOs */}
        <div>
          <h2 className="mb-4 font-semibold text-center">DOs</h2>
          <ul className="pl-0 space-y-3">
            <li className="flex gap-3">
              <img
                src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000"
                className="w-6 h-6 shrink-0 mt-1"
              />
              <span>Greet shop keepers</span>
            </li>

            <li className="flex gap-3">
              <img
                src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000"
                className="w-6 h-6 shrink-0 mt-1"
              />
              <span>Give good rates for your rides</span>
            </li>

            <li className="flex gap-3">
              <img
                src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000"
                className="w-6 h-6 shrink-0 mt-1"
              />
              <span>Compliment food you enjoy</span>
            </li>
          </ul>
        </div>

        {/* DON'Ts */}
        <div>
          <h2 className="mb-4 font-semibold text-center">DON’Ts</h2>
          <ul className="pl-0 space-y-3">
            <li className="flex gap-3">
              <img
                src="https://img.icons8.com/?size=100&id=q1Jjtn2vD7XR&format=png&color=000000"
                className="w-6 h-6 shrink-0 mt-1"
              />
              <span>Do not feed stray animals</span>
            </li>

            <li className="flex gap-3">
              <img
                src="https://img.icons8.com/?size=100&id=q1Jjtn2vD7XR&format=png&color=000000"
                className="w-6 h-6 shrink-0 mt-1"
              />
              <span>Avoid unsafe areas at night</span>
            </li>

            <li className="flex gap-3">
              <img
                src="https://img.icons8.com/?size=100&id=q1Jjtn2vD7XR&format=png&color=000000"
                className="w-6 h-6 shrink-0 mt-1"
              />
              <span>Do not engage with aggressive touts</span>
            </li>
          </ul>
        </div>

       
      </div>
    <ul className="max-w-4xl mx-auto mt-8 flex justify-center gap-4 text-sm text-gray-700">
  <li className="px-4 py-2 rounded-lg border flex items-center gap-2">
    🚓 <span>Police Emergency</span>
    <span className="font-semibold">119</span>
  </li>

  <li className="px-4 py-2 rounded-lg border flex items-center gap-2">
    🚑 <span>Ambulance / Fire</span>
    <span className="font-semibold">110</span>
  </li>

  <li className="px-4 py-2 rounded-lg border flex items-center gap-2">
    🚨 <span>DMC</span>
    <span className="font-semibold">117</span>
  </li>
</ul>

    </div>
  );
}
