import React from "react";
import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReduxContainer from "./pages/redux-intergration/Redux.pages";
import TodoListReduxPages from "./pages/redux-intergration/redux/todo-list/TodoListRedux.pages";

import AuthGuard from "./shared/components/auth/AuthGuard.component";
import AuthComponent from "./shared/components/auth/AuthWrapper.component";

const LoginRoute = lazy(() => import("./pages/login/Login.pages"));
const TodoRoute = lazy(() => import("./pages/todo/TodoList.pages"));
const ReviewRoute = lazy(() => import("./pages/review/Review.pages"));
const TestRoute = lazy(() => import("./pages/test/Test.pages"));

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <AuthComponent>
          <Routes>
            <Route path="/login" element={<LoginRoute />}></Route>
            <Route
              path="/todo-list"
              element={
                <AuthGuard>
                  <TodoRoute />
                </AuthGuard>
              }
            />
            <Route
              path="/imoji"
              element={
                <AuthGuard>
                  <ReviewRoute />
                </AuthGuard>
              }
            />
            <Route path="/test" element={<TestRoute />} />
            <Route path="/redux" element={<ReduxContainer />} />
            <Route path="/*" element={<div>this is 404</div>} />
          </Routes>
        </AuthComponent>
      </React.Fragment>
    </div>
  );
}

export default App;
