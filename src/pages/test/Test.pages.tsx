import React, { useCallback, useEffect, useState } from "react";
import TestNested1 from "./components/test-nested/Test-nested1";
import TestNested2 from "./components/test-nested/Test-nested2";
import TestPages1 from "./components/test1/Test.pages";
import TestPages3 from "./components/test1/Test3.pages copy";
import TestPages2 from "./components/test2/Test2.pages";

function TestPages() {
  const [test1Name, setTest1Name] = useState("");
  const [test2Name, setTest2Name] = useState("");
  const [stateless, setStateless] = useState("");
  const [nestedObj, setNestedObj] = useState({
    nested1: {
      name: {
        identity: 1,
      },
    },
    nested2: {
      name: 2,
    },
  });

  useEffect(() => {
    console.log("testpage render");
  }, []);

  const setName1 = (name: string) => {
    console.log("test1func");

    setTest1Name(Math.random().toString());
  };

  const setName2 = (name: string) => {
    console.log("test2func");

    setTest2Name(Math.random().toString());
  };

  const handleClickFromPage1 = useCallback(() => {
    console.log("click from insite page1");

    setTest1Name(Math.random().toString());
  }, []);

  const handleClickFromPage2 = useCallback(() => {
    console.log("click from insite page2");
    // setTest2Name(Math.random().toString());
    setStateless(null);
  }, []);

  const handleClickFromPage2WithoutUsecb = () => {
    console.log("click from inside page2 without rendering");
  };

  const testNested1 = () => {
    setNestedObj({
      ...nestedObj,
      nested1: {
        name: {
          identity: nestedObj.nested1.name.identity + 1,
        },
      },
    });
  };

  const testNested2 = () => {
    setNestedObj({
      ...nestedObj,
      nested2: {
        name: nestedObj.nested2.name + 1,
      },
    });
  };

  const onClickNested1 = useCallback(() => {
    setStateless("nested1");
  }, []);

  const onClickNested2 = useCallback(() => {
    setStateless("nested2");
  }, []);

  return (
    <React.Fragment>
      {/* <button onClick={() => setName1("test1")}>settes1</button>
      <button onClick={() => setName2("tes2")}>settes2</button> */}

      <button onClick={() => testNested1()}>testNested1</button>
      <button onClick={() => testNested2()}>testNested2</button>
      {/* <TestPages1
        handleClick={handleClickFromPage1}
        name={test1Name}
      ></TestPages1>
      <TestPages2
        handleClick={handleClickFromPage2}
        name={test2Name}
      ></TestPages2> */}
      <TestPages3 count={stateless} />

      <TestNested1
        onClick={onClickNested1}
        name={nestedObj.nested1.name.identity}
      />

      <TestNested2 onClick={onClickNested2} name={nestedObj.nested2.name} />
    </React.Fragment>
  );
}

export default TestPages;
