import React, { memo, useState } from "react";

function TestNested2({ name, onClick }: any) {
  const [curName, setCurName] = useState("");
  console.log("nested2 render");

  return (
    <React.Fragment>
      <div onClick={onClick}>{name}</div>
    </React.Fragment>
  );
}

export default memo(TestNested2);
