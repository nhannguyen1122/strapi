import React, { useEffect } from "react";
import getDetail from "./login.api";

function LoginPages() {
  useEffect(() => {
    TestApi();
  }, []);

  const TestApi = () => {
    getDetail().then((data) => console.log("dataa", data));
  };

  return (
    <React.Fragment>
      <div>this is LoginPages</div>
    </React.Fragment>
  );
}

export default LoginPages;
