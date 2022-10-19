import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { addBlog, editBlog, removeBlog } from "./actions/actionBlog";
import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import './assets/sass/style.css'
const store = configureStore();

// store.subscribe(() => {
//   console.log(store.getState());
// });
store.dispatch(addBlog({ title: "Asus", desc: "ZenBook" }));
store.dispatch(addBlog({ title: "Apple", desc: "MacBook" }));
store.dispatch(addBlog({ title: "Acer", desc: "Swift" }));

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));