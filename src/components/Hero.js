import React from "react";
import Container from "./Container";
import Search from "./Search";
import Card from "./Card";

const Hero = (props) => {
  const { inputVal, setInputVal, handleSearch, images } = props;
  return (
    <section className="hero">
      <Search
        inputVal={inputVal}
        setInputVal={setInputVal}
        handleSearch={handleSearch}
      />
      <Container>
        <Card images={images} />
        <div className="btnContainer">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
