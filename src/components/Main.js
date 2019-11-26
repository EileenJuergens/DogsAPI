import React, { useEffect } from 'react';
import { fetchDogs } from '../Services/ApiClient';
import { connect } from 'react-redux';
import { setDogs } from '../actions';
import Dog from './Dog';
const uuidv1 = require('uuid/v1');


const Main = ({ dogList, setDogs }) => {
  
  useEffect(() => {
    async function retrieveDogs () {
      let data = await fetchDogs()
      setDogs(data.message)
    }
    retrieveDogs()
  },[])

  const rows = () => {
    return Object.keys(dogList).map(dog => 
      <Dog key={uuidv1()} dog={dog}/>)  
  }
  
  return (
    <div>
      {rows()}
    </div>
  )
};

const mapStateToProps = state => ({
  dogList: state.dogList
});
const mapDispatchToProps = dispatch => ({
  setDogs: (dogList) => dispatch(setDogs(dogList))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
