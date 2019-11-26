import React, { useEffect } from 'react';
import { getDogs } from '../Redux/actions';
import { connect } from 'react-redux';
import { getDogsService, getDogsImagesService } from '../Services/ApiClient';

const Main = ({ dogList, dispatchGetDogs }) => {

  useEffect(() => {
    getDogsService()
      .then(response => {
        const breedNames = Object.keys(response.message)
        breedNames.forEach(breedName => {
          getDogsImagesService(breedName)
            .then(imagesResponse => {
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
      <button onClick={() => {console.log(dogList)}}>TEST</button>
    </div>
  )
};

const mapStateToProps = state => ({
  dogList: state.dogsReducer
});

const mapDispatchToProps = dispatch => ({
  dispatchGetDogs: data => dispatch(getDogs(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
