import * as actions from '../Redux/actions';

describe('actions', () => {
  it('should create an action to get all dogs', () => {
    const data = {
      breedName: "dalmatian", 
      amountOfImages: 2
    };
    const expectedAction = {
      type: 'GET_DOGS',
      data
    };
    expect(actions.getDogs(data)).toEqual(expectedAction);
  });

  it('should create an action to get the amount of images', () => {
    const data = 4;
    const expectedAction = {
      type: 'GET_AMOUNT_OF_IMAGES',
      data
    };
    expect(actions.getAmountOfImages(data)).toEqual(expectedAction);
  });
});
