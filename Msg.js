import React, {Component} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Linking,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import SendSMS from 'react-native-sms';

export default class Msg extends Component {
  constructor(props) {
    super(props);
    this.state = {mobileNumber: ''};
    {
      bodySMS: '';
    }
  }

  initiateSMS = () => {
    SendSMS.send(
      {
        // Message body
        body: 'hello hamza',
        // Recipients Number
        recipients: ['03164558585', '03228434863'],
        // An array of types
        // "completed" response when using android
        successTypes: ['sent', 'queued'],
      },
      (completed, cancelled, error) => {
        if (completed) {
          console.log('SMS Sent Completed');
        } else if (cancelled) {
          console.log('SMS Sent Cancelled');
        } else if (error) {
          console.log('Some error occured');
        }
      },
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.titleText}>
            Example to Send Text SMS on Button Click in React Native
          </Text>
          <Text style={styles.titleTextsmall}>Enter Mobile Number</Text>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() => this.initiateSMS()}>
            <Text style={styles.buttonTextStyle}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});
