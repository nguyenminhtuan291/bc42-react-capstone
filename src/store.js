import {configureStore} from"@reduxjs/toolkit";
import countReducer from "./reducers/countReducer";
import todoReducer from "./reducers/todoReducer";
import baucuaReducer from "./reducers/baucuaReducer";
import userReducer from "./reducers/userReducer";

// import countReducer from "./reducers/countReducer";
import countReducer from "./slices/countSlice";
// Hàm reducer nhận vào 2 tham số: giá trị hiện tại của state và action và return về giá trị state mới. (state, action) => newState
// - Khi hàm reducer chạy lần đầu tiên lúc khởi tạo store, giá trị của state sẽ là undefined, ta cần tạo giá trị mặc định cho state bằng default params
// - Thông thường state sẽ là một object/array, ta không được thay đổi trực tiếp giá trị của state mà phải tạo ra một object/array mới
// function reducer(state = { count: 0 }, action) {
//   console.log("reducer:", state, action);

//   switch (action.type) {
//     case "increment":
//       return { ...state, count: state.count + 1 };
//     case "decrement":
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// //tạo redux store nắm giữ cái state của ứng dụng 
// const store = configureStore(
//   {
//     reducer: reducer,
//   }
// );

// redux middleware
// const loggerMiddleware = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log("Hello");
//     };
//   };
// };
//ham arrow function thi => dai dien cho return dau mui ten 
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("[loggerMiddleware]", action);

  next(action);
}; 

// async middleware
const asyncMiddleware = (store) => (next) => (action) => {
  // Kiểm tra xem action có phải là một function hay không
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }

  // action là một object bình thường
  next(action);
};

function countReducer(state = { count: 0 }, action) {
  console.log("reducer:", state, action);

  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// function todoReducer(state = { todos: [] }, action) {
//   switch (action.type) {
//     case "todo/add_todo":
//       return { ...state, todos: [...state.todos, action.payload] };
//     default:
//       return state;
//   }
// }

function todoReducer(state = { todos: [] }, action) {
  switch (action.type) {
    case "todo/add_todo": {
      const newTodos = [...state.todos, action.payload];
      return { ...state, todos: newTodos };
    }
    case "todo/delete_todo": {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos: newTodos };
    }
    case "todo/update_todo": {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }

        return todo;
      });

      return { ...state, todos: newTodos };
    }
    default:
      return state;
  }
}

// Tạo redux store nắm giữ state của ứng dụng
const store = configureStore({
  reducer: {
    countReducer: countReducer,
    todoReducer,
    baucuaReducer,
    userReducer,
  },
  // Mặc định configureStore đã hỗ trợ một vài middleware trong có có redux-thunk
  // redux-thunk: mặc định redux chỉ nhận action là một plain object, redux thunk là middleware cho phép viết action là một function nhận vào 2 tham số là dispatch và getState cho phép ta viết async logic
  // middleware: [loggerMiddleware, asyncMiddleware],
  //next action no se noi theo thu tu 
});
//giải thích các hàm của redux
// store.subscribe(callback): Hàm theo dõi sự thay đổi state của store, bất cứ khi nào state thay đổi, nó sẽ gọi tới hàm callback
store.subscribe(() => {
  // store.getState(): Hàm dùng để lấy ra state hiện tại của store
  console.log("Giá trị state của store:", store.getState());
});

// Cách duy nhất để cập nhật state trong store là dùng hàm dispatch để gửi một action
// action là một plain object, có 1 key bắt buộc là type dùng để mô tả ta muốn thay đổi state như thế nào
store.dispatch({ type: "increment" }); // {count: 1}
store.dispatch({ type: "increment" }); // {count: 2}
store.dispatch({ type: "decrement" }); // {count: 1}

export default store;

//lấy giá trị của hàm là store.getState (), hàm láy giá trị state hiện tại của store

//store.subscribe()  theo dõi state trong store nó sẽ gọi hàm call back của thằng subcribe

// function fetchData(dispatch, getState) {
//   // Xử lý call API
//   setTimeout(() => {
//     dispatch({ type: "GET_DATA_SUCCESS", payload: "OK" });
//   }, 5000);
// }

// store.dispatch(fetchData);
