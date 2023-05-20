import React from "react";

function ConditionalRendering() {
  // isLoggedIn thể hiện xem user đã đăng nhập hay chưa
  let isLoggedIn = true;
  // content chứa JSX dựa vào điều kiện của biến isLoggedIn
  let content = null;

  let isActive = false;

  if (isLoggedIn) {
    content = <h1>Welcome to Cybersoft</h1>;
    // content = <Dashboard />
  } else {
    content = <h1>Login to Cybersoft</h1>;
  }


  return (
    <div>
      {content}

      {/* Nếu muốn hiển thị theo điều kiện bên trong JSX ta dùng toán tử bậc 3 */}
      {isActive ? <h3>Activated</h3> : <h3>Unactivated</h3>}

      {/* Trong trường hợp chỉ muốn kiểm tra điều kiện đúng để hiển thị */}
      {/* {isActive ? <h3>Activated</h3> : null} */}
      {isActive && <h3>Activated</h3>}
    </div>
  );
}

export default ConditionalRendering;

//kỹ thuật hiển thị giao diện khi người ta cho điều kiện biến user nó đã login ra chưa , usẻr dã login nó sẽ hiển thi ra chưa 
//hiển thị ra 1 phần nhỏ xíu hok hiển thị to bự thì minh dùng toán tử bậc 3 = {đưa đk vào nếu isactive là true thì nó sẽ đưa ra dầu chám hỏi :}
//ko dùng if else đc nên phải dùng toán tử bậc 3, {mới truyển comment zô đc viêt tắt ctrl + /}

//mún kiểm tra true hiển thị giao diện viết theo toán tử bậc 3 , nếu fasle thì nó bỏ qua cái phần false thì nó sẽ cho giá trị là null, sử dụng toán tử ? và , sử dụng toán tử và bỏ phần đuôi, && toán tử vá trong hép gán nó tìm falsy value đầu tiền or gt cuối cũng  nếu fasle nó lụm giá trị flase