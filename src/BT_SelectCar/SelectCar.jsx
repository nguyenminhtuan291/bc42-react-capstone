import React, { useState } from "react";

function SelectCar() {
  // State dùng để lưu trữ đường dẫn hình ảnh của xe sẽ được hiển thị ra UI
  const [carUrl, setCarUrl] = useState("./img/black-car.jpg");

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <img src={carUrl} alt="car" width="100%" height="auto" />
        </div>
        <div className="col-md-4">
          <ul class="list-group">
            <li
              class="list-group-item d-flex"
              onClick={() => setCarUrl("./img/black-car.jpg")}
            >
              <img src="./img/icon-black.jpg" alt="icon-black" width="50px" />
              <h3 className="ms-2">Crystal Black</h3>
            </li>
            <li
              class="list-group-item d-flex"
              onClick={() => setCarUrl("./img/steel-car.jpg")}
            >
              <img src="./img/icon-steel.jpg" alt="icon-steel" width="50px" />
              <h3 className="ms-2">Modern Steel</h3>
            </li>
            <li
              class="list-group-item d-flex"
              onClick={() => setCarUrl("./img/silver-car.jpg")}
            >
              <img src="./img/icon-silver.jpg" alt="icon-silver" width="50px" />
              <h3 className="ms-2">Lunar Silver</h3>
            </li>
            <li
              class="list-group-item d-flex"
              onClick={() => setCarUrl("./img/red-car.jpg")}
            >
              <img src="./img/icon-red.jpg" alt="icon-red" width="50px" />
              <h3 className="ms-2">Rallye Red</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SelectCar;


//cái mà thay đổi là hình ảnh , giá trị mình mún lưu state thì giá trị đường dẫn hình ảnh , mà mình mún thay đổi giá đường dẫn trong state nếu có sẵn layout thì tạo 1 function layout
//lắng nghe sự kiện cho phép user click vào cái gì cho phép user click 4 cái li, thì có 4 cái onclick , cho phép lắng nghe sự kiện cho 4 li này , cái thay đổi là hình ảnh , lưu trữ state , cái quyết định cái xe gì thì nó đường dẫn , mình sẽ import cái userstate khởi tạo, rồi đẻ giá trị mặc định là nó màu đen, cái userstate cso 2 phần tử, detrufftoring 1 phần tử img , giá trị thay đổi setCar , onclick xe màu đen viết 1 hàm xử lý chung , xử lý trực tiếp , vì setCar user cần truyên tham số nên gọi tới 1 hàm ẩn danh, nó gọi hàm setcar ue cho mình nó là đường dẫn , nó ko hạt cứng mình mún nó động thì mình nhún carurl , giá trị của thuộc url là giá trị của thằng state 
//đinh nghĩa đúng giao diện của mình , thao tác hiển thị giao diện thì thằng react nó chịu trách nhiệm hiện lại cho mình 