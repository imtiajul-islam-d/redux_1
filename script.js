const showCount = document.querySelector("#count");
const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");

// action identifiers
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

// action 
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value
  }
}
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value
  }
}

// create a initial state
const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  if(action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    }
  }else if(action.type === "decrement") {
    return {
      ...state,
      value: state.value - 1
    }
  } else {
    return state
  }
}

const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  showCount.innerText = state.value.toString();
};

render();
store.subscribe(render);

inc.addEventListener("click", () => {
  store.dispatch({
    type: "increment",
  });
});
dec.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});
