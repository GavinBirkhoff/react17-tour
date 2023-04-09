import { useState } from "react";
import { useLatest } from "../../hooks";

const FuncCom = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(()=>{
    console.log('initial count value');
    return 0
  });
  const latestCountRef = useLatest(count);
  const handleClick = () => {
    // setCount 执行3次
    // let i = 1;
    // setCount(++i); // 0
    // console.log(count);
    // setCount(++i); // 0
    // console.log(count);
    // setCount(++i); // 0
    // console.log(count);
    // console.log(i); // 4
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  const handleSyncClick = () => {
    // setCount 执行3次
    setCount((count) => {
      console.log(count, "inner"); // step1
      return count + 1;
    });
    console.log(count); // 0 step2
    setCount((count) => {
      console.log(count, "inner"); // step5
      return count + 1;
    });
    console.log(count); // 0 step3
    setCount((count) => {
      console.log(count, "inner"); // step6
      return count + 1;
    });
    console.log(count); // 0 step4
  };
  const handleSyncClick2 = () => {
    setTimeout(() => {
      // 闭包
      //   setCount(count + 1);
      //   setCount(count + 1);
      //   setCount(count + 1);
      let i = 1;
      setCount(++i); // 0
      console.log(latestCountRef.current);
      setCount(++i); // 0
      console.log(latestCountRef.current);
      setCount(++i); // 0
      console.log(latestCountRef.current);
      console.log(i,'i'); // 4
    }, 0);
  };
  const handleSyncClick3 = () => {
    // setCount 执行3次
    setCount2((count) => {
      console.log(count, "inner"); // step1
      return count + 1;
    });
    console.log(count2); // 0 step2
    setCount2((count) => {
      console.log(count, "inner"); // step5
      return count + 1;
    });
    console.log(count2); // 0 step3
    setCount2((count) => {
      console.log(count, "inner"); // step6
      return count + 1;
    });
    console.log(count2); // 0 step4
  };
  return (
    <div>
      <h1>函数组件</h1>
      <button onClick={handleClick}>异步{count}</button>
      <button onClick={handleSyncClick}>同步{count}</button>
      <button onClick={handleSyncClick2}>同步out{count}</button>
      <button onClick={handleSyncClick3}>同步2{count2}</button>
    </div>
  );
};

export default FuncCom;
