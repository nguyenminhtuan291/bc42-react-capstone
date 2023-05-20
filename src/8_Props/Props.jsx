import React from 'react'
import Card from './Card';
import Welcom from './Welcom'
import Button from './Button';
import Product from './Product';
// function Props() {
//   return (
//     <div>
//       <h1>Props</h1>
//       <Welcom name="John" email="john@gmail.com"/>
//       <Welcom name="Alice" email="alice@gmail.com"/>
//       </div>
//   )
// }

// export default Props

//component có thể lồng nhau component cha con cách truyên giống properti input gt value truyển thông qua properti ngay tag component kế thừa 1 cái giao diện 
//truyển 1 properti cho bao nhiều component cũng đc 
//người ta dùng them detrugging , thay vi người ta mở object {trực tiếp thuộc tính đó luôn mún lấy name , email } bỏ props đi rồi để chứ nảm thôi, ghi hok ngoặc nhọn 1 tham số riêng biệt , nếu bỏ 1 ngoặc la 1 tham số 2 thuôc tính
//nếu truyên string thì là "", nếu truyển object thì truyền do biến js thì nên chũng ta dùng dấu ngoặc nhọn or biến destructuring

function Props() {
  let user = {
    name: "Bob",
    email: "bob@gmail.com",
  };

  const handleClick = () => {
    alert("clicked");
  }

  const handleAddToCart = (product) => {
    console.log(product);
  };

  return (
    <div>
      <h1>Props</h1>
      <Welcom name="John" email="john@gmail.com"/>
      <Welcom name="Alice" email="alice@gmail.com"/>
      <Welcom name={user.name} email={user.email}/>

      {/* Children */}
      <Card>
        <h3>User</h3>
        <Welcom name="Alice" email="alice@gmail.com" />
      </Card>

      <hr />

      <Button onClick={handleClick}>Click</Button>

      <Product
        name="Iphone 14"
        price={1500}
        onAddToCart={handleAddToCart}
      />
    </div>
  )
}

export default Props

//truyển hợp div còn nội dung bên trong bên có thẻ đóng the mở , nọi dung nằm giữa thẻ đóng và thẻ mở là children thường là chuỗi số object biến ngoài giá trị binh thường thì mình có thể truyên function , trường hợp nào nó truyền function mún chạy function nó thì onClink khi clcik button nó sẽ chyaj cái hàm này bên ngoài chạy cái handle thì nó sẽ chạy 
//ngoài chuỗi string ra thì dùng số number boolean ...dung ngoặc nhọn 

