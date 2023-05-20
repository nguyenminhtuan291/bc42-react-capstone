import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

//import redux store
import store from './store';
// import component Provider từ react-redux để kết nối redux store với component của react
import { Provider } from "react-redux";

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//npm i bootstrap qua bên json cập nhập bản rồi qua bản index.js import link import "bootstrap/dist/css/bootstrap.min.css"; là chạy đc boostrap json check coi xem bootstrap "bootstrap": "^5.2.3",
//mún chạy hiển thị trong react thì chạy terminal ctrl ` npm rnpun start
// mún cài đặt react thì mình dùng câu lệch trên terminal npx create-react-app bc42-react
//cài trong google chorme react developer tool nó sẽ xuất component nó sẽ hướng cái nhìn tổng quan react 

//lên github tạo 1 resposible mới vd đặt tên BC42 bt create => nên tạo project mưới chuyển làm bài tập mở terminal lên folder destop  npx create-react-app bc42-baitap => mở vscode folder tạo ra , link project vs respon trên github app css app.text logo xóa , trong app js trong bài cũ , git add, git commit i. init , copy tren git dong dai nhat m git pút -u orgin master day lên github , mún làm bài tập 1 check out 1 branch mới git checkout -b baitapbuoi 1 , tạo folder mới layout, git add. , git commit -m "baitapbuoi 1" git push -u origin baitap_buoi 1 , hok can merge master, link bai tạp chuyen qua branch bai buoi 1 nop link, buoi 2 reset ve lại nhu cu checkout lai master, git checkout master, git checkout -b baitap_buoi 2, cu check out lam dang o bai tạp 2 , thi git checkout -b baitap-buoi1 

//folder riêng copy cần git pull copy thử mục qua soure là đc , 1 cái lấy soure về , nghỉ mất code 
//mún xài rfce thì mình phải cài extendsion es7+react
//ca