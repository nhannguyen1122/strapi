import React, { memo, useEffect, useState } from "react";

function TestPages2({ name, handleClick }: any) {
  console.log("testpage2 render");
  return (
    <React.Fragment>
      <div onClick={handleClick}>{name}</div>
    </React.Fragment>
  );
}

export default memo(TestPages2);
