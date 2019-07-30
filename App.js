//import * as React from 'react';

import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { Text, View, StyleSheet } from 'react-native';

import Constants from 'expo-constants';
 
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }
 
  render(){
    return (
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2001-01-01"
        maxDate="2019-07-30"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 20,
            top: 20,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 70,
            top: 20
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}

<script language="javascript">
var birthdate = new Date("1990/1/1");
var cur = new Date();
var diff = cur-birthdate; // This is the difference in milliseconds
var age = Math.floor(diff/31557600000);  
 // Divide by 1000*60*60*24*365.25
</script>


  class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}> <script language="javascript"> document.write (age);
        </script>
         </Text>
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'red',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});



