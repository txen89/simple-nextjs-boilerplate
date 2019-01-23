import React from "react";
import dynamic from "next/dynamic";

const HomeView = dynamic(() => import("@/views/home"));

class Home extends React.Component {
  render() {
    return <HomeView />;
  }
}

export default Home;
