
import Navbar from "./components/Navbar";
import Search from "./components/search";
import clouds from "./assets/clouds.mp4";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

   
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 h-full w-full object-cover -z-10"
      >
        <source src={clouds} type="video/mp4" />
      </video>

     
      <div className="fixed inset-0 bg-black/20 -z-10"></div>

     
      <div className="relative z-10 min-h-screen">
        <Navbar />
        <Search />
      </div>

    </div>
  );
}

export default App;
