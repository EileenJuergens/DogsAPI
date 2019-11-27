const dogsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_DOGS':
      return [...state].concat(action.data)
      default:
        return state;
      };
    };
    
const amountOfImagesReducer = (state = 0, action) => {
  switch(action.type) {
    case 'GET_AMOUNT_OF_IMAGES':
      return state + action.data;
    default:
      return state;
  };
};

export { dogsReducer, amountOfImagesReducer }; 
