import React, { memo, useState } from "react";

function TestNested1({ name, onClick }: any) {
  const [curName, setCurName] = useState("");
  console.log("nested1 render");

  return (
    <React.Fragment>
      <div onClick={onClick}>{name}</div>
    </React.Fragment>
  );
}

export default memo(TestNested1);
