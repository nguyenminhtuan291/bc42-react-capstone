

// Component bản chất là một function return về một JSX mô tả giao diện sẽ được hiển thị

import CustomHooks from "./13_CustomHooks/CustomHooks";
import ReduxThunk from "./15_ReduxThunk/ReduxThunk";
import Databinding from "./2_Databinding/Databinding";
import ConditionalRendering from "./3_ConditionalRendering/ConditionalRendering";
import Event from "./5_Event/Event";
import Style from "./6_Style/Style";
import State from "./7_State/State";
import Props from "./8_Props/Props";
import Effect from "./9_Effect/Effect";
import SelectCar from "./BT_SelectCar/SelectCar";
import ShoeShop from "./BT_ShoeShop/ShoeShop";
import ShoppingCart from "./BT_ShoppingCart/ShoppingCart";
// import UserManagement from "./BT_UserManagement/UserManagement";
// import List from "./_List/List";

import { BrowserRouter, Router, Routes, Link, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ArticleList from "./18_Routing/ArticleList";
import ArticleDetails from "./18_Routing/ArticleDetails";
import ReactBootstrap from "./19_ReactBootstrap/ReactBootstrap";

// import Welcome from "./1_Component/Welcome";
// import Home from "./BT_HomeLayout/Home";

// function App() {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// }

// export default App;

// import MSILayout from "./BT_MSILayout/MSILayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>

        <Route path="/" element={<Home />} />
        <Route path="/shoe-shop" element={<ShoeShop />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />

        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
        </Route>
        {/* de duoi cung tat ca cai route khac, nếu hok nhập cái path mình k đinh nghĩa   */}
        <Route path="react-bootstrap" element={<ReactBootstrap />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


//đã có viết sẵn html ban đầu thì qu extendsion html to JSX nó sẽ chuyển đổi cái giao hiện qua html thuần qua JSX , copy rồi bấm chuột phải bấm convert to html nếu có cài extendsion
//có thể dùng trang web transform.tools/html-to-JSX

//tính chât tái sử dụng 
