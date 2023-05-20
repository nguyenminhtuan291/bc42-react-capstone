import React from 'react'

import data from "./data.json"
import ShoeItem from './ShoeItem';

console.log(data);

function ShoeShop() {
  return (
    <div className="container">
      <h1 className="text-center">Shoe Shop</h1>

      <div className="row">
        {data.map((item) => {
          return (
            <div key={item.id} className="col-sm-4">
              <ShoeItem item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}


export default ShoeShop

//duyeejt qua mảng của js thì ta dùng phương thức map để làm việc danh sách vs mảng , tách nhỏ dùng dữ liệu ngoài sử dung cơ chế truyển từ cha đên con props, value là cái biến item bên ngoài truyền vô 