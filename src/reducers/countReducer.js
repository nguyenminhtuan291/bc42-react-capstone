// Hàm reducer nhận vào 2 tham số: giá trị hiện tại của state và action sau đó return về giá trị state mới. (state, action) => newState
// - Khi hàm reducer chạy lần đầu tiên lúc khởi tạo store, giá trị của state sẽ là undefined, ta cần tạo giá trị mặc định cho state bằng default params
// - Thông thường state sẽ là một object/array, ta không được thay đổi trực tiếp giá trị của state mà phải tạo ra một object/array mới để thay đổi và return về object/array mới đó.
// constants.js
const INCREMENT = "count/increment";
const DECREMENT = "count/decrement";

// actions.js
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// reducer.js
function countReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case :
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export default countReducer;
