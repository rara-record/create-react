import {Component} from "./app.js";

const React = (() => {
  let _states = [] // 여러 개의 state를 들고 있기 위해서는 배열로 관리
  let currentStateIndex = 0;  // 현재 처리중인 상태의 인덱스

  const render = (Component) => {
    currentStateIndex = 0;
    const C = Component()
    C.render()

    return C
  }

  const useState = (initialValue) => {
   if (_states[currentStateIndex] === undefined) {
     _states[currentStateIndex] = initialValue;
   }

   const currentIndex = currentStateIndex; // 각 useState 호출에 대한 고유한 상태 인덱스를 고정시키기 위함
    const setState = (newValue) => {
      if (Object.is(_states[currentIndex], newValue)) return
      _states[currentIndex] = newValue;
      render(Component); // 상태 변경 후 컴포넌트 재렌더링
    }

     return [_states[currentStateIndex++], setState];
  };

  return { render, useState };
})();

export default React;