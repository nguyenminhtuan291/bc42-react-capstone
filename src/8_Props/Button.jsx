import React from "react";

function Button({ children, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

// usage:
// <Button>Click</Button>

//usage
//<button>Click</button>
//tại sao người ta component tạo button tại sao người ta hok xài trực tiếp button để kề thừa styling của thằng button hành vi giao diện đã thiết kế sãn đễ tránh để người ta khai báo cho nóm người chuyển component button người ta chỉ việc tái sử dụng lại thôi 