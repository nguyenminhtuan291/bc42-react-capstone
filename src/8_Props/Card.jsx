import React from "react";
//mặc định component props đặt biệt là children , biding giá trị children ở giữa card đóng mở body biding children vào
// optional truyển card quan trọng trong card có props body là children mình gọi component card ra sẽ có thẻ đóng và mở ở bên trong truyền vào  thẻ p 
function Card({ image, children }) {
  return (
    <div className='card'>
      {image && <img src={image} alt="img" />}
      <div className='card-body'>
      {children}
      </div>
    </div>
  )
}

export default Card

//nó sẽ truyển vào để chạy ra thằng tham số 