const dogsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_DOGS':
      return [...state].concat(action.data)
      default:
        return state;
      };
};

export {
  dogsReducer
} 
