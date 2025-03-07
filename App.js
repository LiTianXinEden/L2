import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native';
import Movie from './components/Movie'

const AllMovies = () => {
  return (
      <ScrollView>

        <Text></Text>
        <Text></Text>

        <Movie title = "Doctor Sleep" year ={2019} icon_name="skull" poster={require("./img/doctor-sleep.jpg")} />
          <Movie title = "Midway" year ={2020} icon_name="person-rifle" poster={require("./img/midway.jpg")} />
      </ScrollView>
  );
};


export default AllMovies;
