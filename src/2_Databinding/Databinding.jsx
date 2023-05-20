import React from "react";

function Databinding() {
  let msg = "Hello BC42";
  let imgUrl = "https://picsum.photos/200/300";
  let user = {
    name: "Alice",
    email: "alice@gmail.com",
  };

  return (
    <div>
      <h1>{msg}</h1>
      <img src={imgUrl} alt="images" />

      <p>{user.name}</p>
      <input value={user.email} />
    </div>
  );
}

export default Databinding;

// let msg = "Hello BC42"
// `
//   <ul>
//     <li>${msg}</li>
//   </ul>
// `
//chỉ cần xài cặp nhọn hiển thị ra giao diện cho mình mún hiểu biến bọc cho nó ngoặc nhọn , ngoài đưa gt mở thẻ đóng giá trị đc đưa vào thuộc tính của 1 cái thẻ nháy đôi là chuỗi , ngoặc là biến, nhún trực tiếp hok cần dom
//object mình dùng dấu châm mở ngoặc nhọn ra thì nó cho mình viets biểu thức JS