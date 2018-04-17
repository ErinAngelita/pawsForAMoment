import React from 'react';
import {  Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Pets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfPets: [],
      firstImage: '',
    }
  }

  petInfo(e) {
    petHeight = 500;
    console.log('hey guys im ' + petHeight);
  }

  componentDidMount() {
    let data = this.props.parentState.data;
    let listOfPets = [];
    for(let i = 0; i < data.length; i++) {
      listOfPets.push((
        <TouchableOpacity
          style={styles.petButton}
          onPress={(e) => this.petInfo(e)}
        >
          <Image
            source={{uri: data[i].image}}
            style={styles.petImage}
          />
          <Text style={styles.petButtonText}>{data[i].petname}</Text>
        </TouchableOpacity>
      ))
    }
    this.setState({
      listOfPets: listOfPets
    })
  }

  render() {
    console.log(this.state.firstImage)
    return(
      <View>
        {this.state.listOfPets}
        <Text
          onPress={() => console.log(this.state.listOfPets)}>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  petButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#edeeef',
    marginBottom: 10,
  },
  petButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  petImage: {
    width: 80,
    height: 80,
  }
});
