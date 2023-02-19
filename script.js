const showCount = document.querySelector("#count");
const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");

// action identifiers
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// action
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// create a initial state
const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
};

const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  showCount.innerText = state.value.toString();
};

render();
store.subscribe(render);

inc.addEventListener("click", () => {
  store.dispatch(increment(5));
});
dec.addEventListener("click", () => {
  store.dispatch(decrement(5));
});
