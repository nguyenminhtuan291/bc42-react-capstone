import React from 'react'

function Product({ name, price, onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart({ name, price });
  };

  return (
    <h3>
      {name} - {price}$ - <button onClick={handleAddToCart}>Add To Cart</button>
    </h3>
  );
}

export default Product;

//hàm thêm sản phảm nằm ở component cha nhận tham số product   const handleAddToCart = (product) => {
  //   console.log(product);
  // }; đinh nghĩa drop thường hay đặt handel xử lý , drop hay là on và tên action đằng sau ko có cặp ngoặc tròn là nó gọi hàm luôn rồi giống như xử lý hàm ở onclick vậy 
  //component có thế chạy , truyển ngược dữ liệu trả về thằng cha , es 6 key vs value giống nhau thì mình rút gọn truyền cái object trực tiếp ,phân biệt đc mình gọi thuộc tinh biến có sẵn 2 chiều tạo const product = {name, price}, nhận const{name, price }detructủing