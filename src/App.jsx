import "./App.css";
import LocalDataCarousel from "./components/LocalDataCarousel";
import FetchAlbumCarousel from "./components/FetchAlbumCarousel";
import FetchAlbumChunkCarousel from "./components/FetchAlbumChunkCarousel";
import FetchAlbumChunkAsyncCarousel from "./components/FetchAlbumChunkAsyncCarousel";

function App() {
  return (
    <>
      <h1>React Responsive Carousel Demos</h1>
      <LocalDataCarousel />
      <FetchAlbumCarousel />
      <FetchAlbumChunkCarousel />
      <FetchAlbumChunkAsyncCarousel />
    </>
  );
}

export default App;
