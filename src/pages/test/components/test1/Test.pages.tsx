import React, { memo, useState } from "react";

function TestPages1({ name, handleClick }: any) {
  const [curName, setCurName] = useState("");
  console.log("testpage1 render");

  return (
    <React.Fragment>
      <div onClick={handleClick}>{name}</div>
    </React.Fragment>
  );
}

export default memo(TestPages1);
