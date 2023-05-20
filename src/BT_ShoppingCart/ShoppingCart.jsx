import React, { useState } from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

function ShopingCart() {
  //state quản lý sản phẩm đang được chọn để xem chi tiết 
  const [selectedProduct, setSelectedProduct] = useState(null);
  //state quản lý trang thái ẩn/hiện của giỏ hàng tương tác vs giao diện để trạng thái lưu lại tương tác người dùng 
  const [isOpen, setIsOpen] = useState(false);

  //state quản lý các sản phẩm để thêm vào giỏ hàng
  const [carts, setCarts] =useState([])
  //giống trường hợp getproduct state đưa sản phảm component con đưa vao gio hàng mảng là array mún thêm vào stressoverlater tạo ra aẩy object mới rồi mình thay đổi trên đó 


  const handleGetProduct = (product) => {
    // Giá trị product chỉ tồn tại bên trong hàm handleGetProduct
    // ?:
    // Giá trị product chỉ tồn tại bên trong hàm handleGetProduct
    // ?: Làm thế nào để đưa giá trị product xuống component ProductDetails
    // => Lưu giá trị của product vào state
    setSelectedProduct(product);
  };
  //ko mún hiển thị nhiều lần tăng số lượng sp lên hok put lên nhiều lần mún 1 sán phẩm số lg là 10 kiểm tra sản phẩm tồn thêm số lf mà chưa tốn tại thì thêm vào và set số lg là 1 , kiểm tra dung findindex

  const handleAddToCart = (product) => {
    // Tìm xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
    const index = carts.findIndex((item) => item.id === product.id);

    if (index === -1) {
      // Chưa tồn tại => Thêm sản phẩm vào giỏ hàng và đặt số lượng là 1
      const newProduct = { ...product, quantity: 1 };
      setCarts([...carts, newProduct]);
    } else {
      // Đã tồn tại => Tăng số lượng của sản phẩm lên 1
      const newCarts = [...carts];
      newCarts[index].quantity += 1;
      setCarts(newCarts);
    }
  };

  const handleDeleteProductFromCart = (productId) => {
    const newCarts = carts.filter((item) => item.id !== productId);
    setCarts(newCarts);
  };
  //component đang quản lý state nên có quyền thây đổi , cầm hàm truyền xún component con
  
  const handleUpdateQuantity = (productId, quantity) => {
    const newCarts = carts.map(item => {
      if (item.id === productId) {
        return {...item, quantity:item.quantity + quantity};
      }

      return item;
    });

    setCarts(newCarts);
  };
  //tính tổng số lương sản phẩm trong giỏ hàng;, biến bt hok dùng state gt biến đc tính toán từ giá trị state nếu state thay đổi component thay đổi nên biến thay đổi nên biên sthay đổi , cần tính toán dựa trên state thì mình sẽ thay đổi thằng 
  const totalItem = carts.reduce((total, item) => {
   return total + item.quantity;
  }, 0);

  return (
    <div className="container">
      <h1 className="text-center">FPT Shop</h1>
      <div className="d-flex justify-content-end mb-3">
        {/* gọi đến hàm seter, click vào true để hiện giỏ hàng lên nếu mình set lúc đầu là fasle   */}
        <button className="btn btn-danger" onClick={() => setIsOpen(true)}>Giỏ hàng {totalItem > 0 && <span className="ms-2">({totalItem})</span>} </button>
      </div>
      <ProductList products={data} onSelectProduct={handleGetProduct} onAddToCart={handleAddToCart} />
      <ProductDetails product={selectedProduct} />
      <Cart carts={carts} onUpdateQuantity={handleUpdateQuantity} onDelete={handleDeleteProductFromCart} isOpen={isOpen} onClose={() => setIsOpen(false)}/> 

      {/* có quyền tắt khai báo props là function = khi component con gọi thì mình set lại isopen là false viết gộp theo dạng inline chọn component đặt state rất quan trọng cái nào component ddawjrt gt khởi tạo thì đặt thằng giá trị cao nhất , truyền từ thằng con đc mà phức tạp hơn nhiều   */}
    </div>
  );
}

export default ShopingCart;

//truyền thông qua props rồi gắn lai button, xử lý hàm xóa sản phẩm đó ra , gắn hàm xử lý ở shopping cart ,đặt tên tham số là OnremoveProductcart 
//giao diện hiện ra thì phụ thuộc vao state component phụ thuộc vào gt state cart button xóa giỏ hàng hok đc quyền thay đổi props th này click xoa giỏ hàng sẽ viết hàm xử lsy xóa ở component cha truyền xuống con để bấm thằng con xử lý thằng thằng chá, khi truyền props đưa con thăng con gọi, xóa chỉ cần product id là được gọi hàm kèm theo id xóa sếp cart kích hoạt nó sẽ đc hiển thị lại gt cập nhập sự thay đổi đó 
//tăng giảm số lg trực tiếp tron giỏ hàng thẻ id item quantity thêm 2 button 
