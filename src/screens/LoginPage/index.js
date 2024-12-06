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
            <Text style={Styles.loginText}>Login</Text>
          </View>
          <View style={Styles.continueTextBar}>
            <Text style={Styles.continueText}>Please Sign in to continue.</Text>
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
            <Text style={Styles.signText}>Sign In</Text>
          </TouchableHighlight>
        </View>

        <View style={Styles.bottomBar}>
          <Text style={Styles.accountText}>Don't have account?</Text>
          <Text style={Styles.signUpText}>Sign Up</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
