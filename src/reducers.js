const initialState = {
  dogList: []
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DOGS':
      return {
        ...state,
        dogList: action.dogList
      };
    default:
      return state;
  };
};

export default reducers;
