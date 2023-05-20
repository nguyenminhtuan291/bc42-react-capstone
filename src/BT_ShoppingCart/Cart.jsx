import React from 'react'
//khai báo ra danh sách giỏ hàng , duyệt mảng để hienr thị ra giao diện trong modal body , tạo ra table có phần heading mã 

function Cart({carts, onDelete, isOpen, onClose, onUpdateQuantity}) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex={-1}
      >
        <div className="modal-dialog modal-lg" >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ Hàng</h5>
              <button className="btn-close" onClick={onClose} />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          <img
                            src={item.image}
                            alt={item.name}
                            width="70px"
                            height="70px"
                          />
                        </td>
                        <td>
                          <button className="btn btn-primary" onClick={() => onUpdateQuantity(item.id, -1)} disabled={item.quantity ===1}>-</button>
                          <span className="mx-2">{item.quantity}</span>
                          <button className="btn btn-primary" onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                        </td>
                        <td>{item.price}</td>
                        <td>{item.quantity * item.price}</td>
                        <td>
                          <button className="btn btn-danger" onClick={() => onDelete(item.id)}>Xoá</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  )
}

export default Cart

//thẻ rỗng cho phép grap css bên trong trong giao diện nó sẽ bỏ qua hok hiền lên giao diện , tác dụng của thẻ rỗng là hok mún mình tạo thẻ dư div 
//tạo ra lớp overlapr mờ đằng sau <div className="modal-backdrop fade show" /> 2 thẻ div riêng biệt vs nhau nên mình bọc thẻ rỗng ở ngoài , nếu hok có thẻ rỗng ở ngoài thì nó sẽ báo lỗi 
//modal có thể bât tắt đc giao diện thay đổi bơi sự tương tác vs người dùng, quản lý trạng thái bật tắt thì mình lưu bằng state, state là biến boolean chỉ 2 giá trị bất tắt lưu , có bao nhiu nơi tương tác vs gt state đó , nut close tắt modal component cart có tuongw tác , nút giỏ hàng sử dung gt state nó 2 nơi dùng đặt gt state có component cao nhất trường hợp này là shopping cart, nếu thằng nhiều component thì mình sẽ đặt ơ thằng cáo nhất 

//isOpen cho phép modal hiển thị hok , nếu hok hiển thị thi kiếm tra 
// if (!isOpen) {
//   return null;
// } nãy xử lý button thi isopen thành true render component cha vs giỏ hàng, isopen thì sẽ đi thằng true thì nó sẽ hok đi vào thằng ì trên , button 
//cần biết id để nó biết xóa sản phẩm nào nên mình truyền vào nó 1 cái item.id 
//viết hàm xử lý ở component cha rồi truyền vào thằng con 
//shopee trừ hành vi xóa , desbale khi item quanlity bằng 1 