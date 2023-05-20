import React from 'react'

function ShoeItem({ item }) {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{item.name}</h3>
        <p className="card-text">{item.price}</p>
        <button className="btn btn-dark">Add To Cart</button>
      </div>
    </div>
  );
}

export default ShoeItem


//nhớ cặp ngoặc nhọn trước rồi khai báo item là object 1 trong 12 component mỗi thằng sẽ có 1 dự liệu khác nhau 