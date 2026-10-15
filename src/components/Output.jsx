
function Output({ weatherData }) {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl text-white">

      <h1 className="text-3xl font-bold text-center mb-8">
        Weather Report
      </h1>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Weather:</h2>
        <p className="text-2xl">
          {weatherData ? weatherData.weather[0].main : ""}
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Temperature:</h2>
        <p className="text-2xl font-bold text-sky-300">
          {weatherData ? `${weatherData.main.temp}°C` : ""}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Description:</h2>
        <p className="text-lg capitalize">
          {weatherData ? weatherData.weather[0].description : ""}
        </p>
      </div>

    </div>
  );
}

export default Output;
