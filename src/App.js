import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import "./App.css";

const App = () => {
  const API_KEY = "20716529-6250aef7a7e2a5bd68d4632f1";

  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [inputVal, setInputVal] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(inputVal);
    setInputVal("");
  };

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo&per_page=9&page=${currentPage}&pretty=true`
    )
      .then((resp) => resp.json())
      .then((data) => setImages(data.hits));
  }, []);

  return (
    <div className="App">
      <Hero images={images} inputVal={inputVal} setInputVal={setInputVal} />
    </div>
  );
};

export default App;
