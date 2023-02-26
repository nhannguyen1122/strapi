import React, { memo, useEffect, useState } from "react";

function TestPages3({ count }) {
  console.log("test3 render");

  return (
    <React.Fragment>
      <div>{count}</div>
    </React.Fragment>
  );
}

export default memo(TestPages3);
