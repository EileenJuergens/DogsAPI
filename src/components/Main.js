import React, { useEffect } from 'react';
import { getDogs, getAmountOfImages } from '../Redux/actions';
import { connect } from 'react-redux';
import { getDogsService, getDogsImagesService } from '../Services/ApiClient';
import PieChart from './PieChart';

const Main = ({ dogList, amountOfImages, dispatchGetDogs, dispatchgetAmountOfImages }) => {

  useEffect(() => {
    getDogsService()
      .then(response => {
        const breedNames = Object.keys(response.message)
        breedNames.forEach(breedName => {
          getDogsImagesService(breedName)
            .then(imagesResponse => {
              dispatchgetAmountOfImages(imagesResponse.message.length)
              const data = {breedName, amountOfImages: imagesResponse.message.length}
              dispatchGetDogs(data)
            })
            .catch(error => {
              alert(error);
            });
        });
      })
      .catch(error => {
        alert(error);
      });
  },[]);

  return (
    <div>   
      <h1>The cutes ten breed with more images</h1> 
      <PieChart data={dogList} amountOfImages={amountOfImages} />
      <p>The number in the hover is the percentage of the total amount of images</p>
    </div>
  )
};

const mapStateToProps = state => ({
  dogList: state.dogsReducer,
  amountOfImages: state.amountOfImagesReducer
});

const mapDispatchToProps = dispatch => ({
  dispatchGetDogs: data => dispatch(getDogs(data)),
  dispatchgetAmountOfImages: data => dispatch(getAmountOfImages(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
