import React from "react";
import Child from "./Child";
// import trong css
// bản chất nó sẽ đưa lên heading nghĩa là import 1 css trong compoment nếu dùng các compoment khác nó vẫn hiểu nếu để class heading trùng vs class đã setup
import "./Style.css"

// import module css
import styles from "./style.module.css";

// chuỗi ngẫu nhiên đc sinh ra, đưa cho key mình muốn là heading mình lấy object . rồi đến key 

function Style() {
  return (
    <div>
      <h1>Style</h1>

      {/* Inline style chuyển qua bên react thì nó chuyển sang chữ thường  */}
      <h1 style={{ backgroundColor: "red", color: "white" }}>Hello Reactjs</h1>

      {/* Class  quy tắc bem đẻ khai báo để trùng lặp vs các class với nhau , nhiều file css người ta sẽ hiểu cho class cùng tên đều như nhau trùng vs tên class vs nhau người ta dùng pp css modul người ta tạo file css style.module.css gọi tới mà ta định nghĩa ngẫu nhiên tránh trung lặp tên class */}
       <h1 className="heading">Hello BC42</h1>
       <Child/>

       {/* CSS Module */}
       <h1 className={styles.heading}>Hello CSS Module</h1>
    </div>
  );
}
// thay vì css bình thường thì mình biến nó thành sass là npm i -D sass sửa file scss nhớ sửa đường link scss biên dịch css thành scss hok cần extxtendsion -d sẽ cài thư viện vào dev de tham gia quá trình build mà kết quả sau cùng nó sẽ hok hiện ra , combo nó dùng nhiều nhất scss đi với css module cho ứng dụng react , 1 componeetn sẽ có 1 css module , nó sẽ import module sẽ chấm tới component này thôi 
// style có nhiều class thì chấm ra thôi styles.content cùng 1 thẻ có nhiều class thì dùng dấu huyển nối chuỗi <h1 className={`${styles.heading} ${styles.content}`}>Child CSS Module</h1> thêm cái chuỗi vào và mình nối lại với nhau 

export default Style;
