//khi dùng react component nên để jsx, thấy đc logo thằng react, hỗ trợ câu lệnh 
//component nó chỉ là function tên component viết hoa chữ đầu 
//bời vi js nó ko phải html thuần nên hok thể dung từ khóa class nó dẽ trùng vs html nên mún chỉ tới thì phải dùng classname
// Vì JSX bản chất là javascript nên có một số cú pháp trong html bị thay đổi:
// - class => className
// - for => htmlFor
// - Các thuộc tính ở đạng snake-case sẽ được chuyển thành camelCase
//   + tab-index: tabIndex,...

import "./welcome.css";

function Welcome() {
  return (
    <div className="title">
      <h1>Hello Reactjs</h1>
    </div>
  //khi nào nó chạy nó sẽ chuyển qua cú pháp này 
  //   React.cloneElement(
  //     "div", 
  //     {class: "Hello"}, 
  //     React.createElement(
  //       "h1",
  //       null,
  //       "Hello Reactjs"
  //     )
  //   )
  );
}

//nhiều dòng phải để trong ngoặc tròn còn 1 câu lệnh hok cần để trong ngoặc tròn 



//bản chất nó chỉ đơn giãn mô tả nhỏ 1 cái câu lệnh j đó thôi , có khi 1 or nhiều cục bự nó cũng có thể 1 component, tính chất lồng nhau
//cú pháp  

//tạo component bằng class tuy nhiên hiện nay cách này khác ít đc sử dụng 
// import React from "react";
// class Welcome extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello Reacjs</h1>
//       </div>
//     );
//   }
// }

export default Welcome;