"use client";

import Home from "./home-main/home-main.container";
import HomeContext from "./home.context";

const Container = () => {
  return (
    <HomeContext>
      <Home />
    </HomeContext>
  );
};

export default Container;
