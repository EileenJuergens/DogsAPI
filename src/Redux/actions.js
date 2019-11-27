export const getDogs = data  => {
  return {
    type: 'GET_DOGS',
    data
  }
}

export const getAmountOfImages = data => {
  return {
    type: 'GET_AMOUNT_OF_IMAGES',
    data
  }
}
