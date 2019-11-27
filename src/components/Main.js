import React, { useEffect } from 'react';
import { getDogs, getAmountOfImages } from '../Redux/actions';
import { connect } from 'react-redux';
import { getDogsService, getDogsImagesService } from '../Services/ApiClient';
import PieChart from './PieChart';

const Main = ({ dogList, amountOfImages, dispatchGetDogs, dispatchgetAmountOfImages }) => {

  useEffect(() => {
    getDogsService()
      .then(response => {
        const breedNames = Object.keys(response.message);
        breedNames.forEach(breedName => {
          getDogsImagesService(breedName)
            .then(imagesResponse => {
              dispatchgetAmountOfImages(imagesResponse.message.length);
              const data = {breedName, amountOfImages: imagesResponse.message.length};
              dispatchGetDogs(data);
            })
            .catch(error => alert(error));
        });
      })
      .catch(error => alert(error));
  },[]);

  return (
    <div >   
      <h1>The ten breeds with the most uploaded images</h1> 
      <PieChart data={dogList} amountOfImages={amountOfImages} />
      <br/>
      <p>The number while hover over a part in the pie chart is the percentage of images that were uploaded for this breed measured on the total amount of images ({amountOfImages}) from all breeds.</p>
    </div>
  );
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
