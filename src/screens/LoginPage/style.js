import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#fff',
  },

  imageBar: {
    margin: 30,
  },
  image: {
    width: 300,
    height: 300,
  },
  textBar: {
    width: '85%',
    justifyContent: 'flex-start',
  },
  loginTextBar: {
    marginVertical: 5,
  },
  loginText: {
    fontSize: 40,
    fontWeight: '500',
    color: '#283b4c',
  },
  continueTextBar: {},
  continueText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#283b4c',
  },

  inputBar: {
    marginTop: '3%',
    width: '90%',
    height: '7%',
  },
  input: {
    width: '75%',
    height: '100%',
    marginLeft: '3%',
  },
  textInputView: {
    width: '95%',
    height: '100%',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f5fb',
  },
  user: {
    width: 24,
    height: 24,
    marginLeft: '5%',
  },
  hide: {
    width: 24,
    height: 24,
    marginRight: '5%',
  },
  iconPosition: {
    position: 'absolute',
    marginTop: '7%',
    marginLeft: '6%',
  },

  lock: {
    width: 24,
    height: 24,
  },

  remindBar: {
    marginTop: '1%',
    marginBottom: '5%',
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  remindMeText: {
    color: '#959597',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: '5%',
  },
  switchIcon: {
    width: 40,
    height: 40,
  },

  buttonBar: {
    width: '85%',
    height: '7%',
  },
  button: {
    backgroundColor: '#283B4C',
    borderRadius: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },

  bottomBar: {
    flexDirection: 'row',
    margin: '2%',
  },
  accountText: {
    color: 'black',
    opacity: 0.5,
    fontSize: 16,
  },
  signUpText: {
    marginHorizontal: '1%',
    color: '#283B4C',
    fontSize: 16,
    fontWeight: '500',
  },
});
