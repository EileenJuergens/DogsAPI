import { dogsReducer, amountOfImagesReducer } from '../Redux/reducers';

describe('dogsReducer', () => {
  it('should return the initial state', () => {
    expect(dogsReducer(undefined, {})).toEqual([])
  });
  
  it('should handle GET_DOGS', () => {
    const data =  {breedName: "airedale", amountOfImages: 202}
    const dogList = [
      {breedName: "airedale", amountOfImages: 202}
    ]
    expect(dogsReducer([], {type: 'GET_DOGS', data})).toEqual(dogList);
  });
});

describe('amountOfImagesReducer', () => {
  it('should return the initial state', () => {
    expect(amountOfImagesReducer(undefined, {})).toEqual(0)
  });

  it('should handle GET_AMOUNT_OF_IMAGES', () => {
    const data = 209;
    const amountOfImages = 209;
    expect(amountOfImagesReducer(0, {type: 'GET_AMOUNT_OF_IMAGES', data})).toEqual(amountOfImages);
  });
})
