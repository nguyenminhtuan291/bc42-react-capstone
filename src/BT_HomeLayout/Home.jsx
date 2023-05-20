
//bấm rfce xong tag ra nó sẽ hiện ra cấu trúc này ra luôn 
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <div className="w-25">
          <Sidebar />
        </div>
        <div className="w-75">
          <Content />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;


//component có tính chất lồng nhau vào thằng home gọi 4 thằng còn lại tên component thôi 
