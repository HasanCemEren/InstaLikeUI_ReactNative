import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import React from 'react';
import Styles from './style.js';
import {Icons, Images} from '../../assets';
import style from './style.js';
const index = () => {
  return (
    <SafeAreaView>
      <View style={Styles.background}>
        <View style={Styles.imageBar}>
          <Image source={Images.image1} style={Styles.image} />
        </View>

        <View style={Styles.textBar}>
          <View style={Styles.loginTextBar}>
            <Text style={Styles.loginText}>Register</Text>
          </View>
          <View style={Styles.continueTextBar}>
            <Text style={Styles.continueText}>Please register to login.</Text>
          </View>
        </View>

        <View style={Styles.inputBar}>
          <View style={Styles.textInputView}>
            <Image source={Icons.user} style={Styles.user} />
            <TextInput style={Styles.input} placeholder="Username" />
          </View>
        </View>

        <View style={Styles.inputBar}>
          <View style={Styles.textInputView}>
            <Image source={Icons.telephone} style={Styles.user} />
            <TextInput style={Styles.input} placeholder="Mobile Number" />
          </View>
        </View>

        <View style={Styles.inputBar}>
          <View style={Styles.textInputView}>
            <Image source={Icons.lock} style={Styles.user} />
            <TextInput style={Styles.input} placeholder="************" />
            <Image source={Icons.hide} style={Styles.hide} />
          </View>
        </View>

        <View style={Styles.remindBar}>
          <Text style={Styles.remindMeText}>Reminder me nexttime</Text>
          <Image source={Icons.switch_} style={Styles.switchIcon} />
        </View>

        <View style={Styles.buttonBar}>
          <TouchableHighlight style={Styles.button}>
            <Text style={Styles.signText}>Sign Up</Text>
          </TouchableHighlight>
        </View>

        <View style={Styles.bottomBar}>
          <Text style={Styles.accountText}>Already have account?</Text>
          <Text style={Styles.signUpText}>Sign In</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
