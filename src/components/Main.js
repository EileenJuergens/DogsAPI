import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dog from './Dog';
const uuidv1 = require('uuid/v1');
// import { connect } from 'react-redux';
// import { setDogs } from '../actions';
// import ApiClient from '../Services/ApiClient';

const Main = () => {
  const [ dogs, setDogs ] = useState([]); 
  
  useEffect(() => {
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        setDogs(response.data.message)
      })
  }, [])

  const rows = () => {
    return Object.keys(dogs).map(dog => 
      <Dog key={uuidv1()} dog={dog}/>)  
  }
  
  return (
    <div>
      {rows()}
    </div>
  )
};

// const mapStateToProps = state => ({
//   dogList: state.dogList
// });
// const mapDispatchToProps = dispatch => ({
//   setDogs: (dogList) => dispatch(setDogs(dogList))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Main);
export default Main;
