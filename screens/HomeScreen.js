import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.welcomeMessage}>
          <Text style={styles.welcomeText}>
            Welcome Message
          </Text>
        </View>
        <View style={styles.registrationContainer}>
          <TouchableOpacity style={styles.registrationButton}
            onPress={this.handleCreateAccount}>
            <Text>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registrationButton}
            onPress={this.handleGoogleSignIn}>
            <Text>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>
            Already have an account?{' '}
            <Text style={styles.loginLink}>
              Log in.
            </Text>
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={this.handleViewTermsOfService}>
            <Text style={styles.footerLink}>
              Terms of Service
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleViewPrivacyPolicy}>
            <Text style={styles.footerLink}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  handleCreateAccount() {

  }

  handleGoogleSignIn() {

  }

  handleViewTermsOfService() {

  }

  handleViewPrivacyPolicy() {

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  footerLink: {
    fontSize: 10,
    textDecorationLine: 'underline',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoImage: {
    borderRadius: 100,
    width: 200,
    height: 200,
  },
  welcomeMessage: {
    marginTop: 50,
  },
  welcomeText: {
    fontSize: 25,
  },
  registrationContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  registrationButton: {
    alignItems: 'center',
    minWidth: '70%',
    maxWidth: '70%',
    backgroundColor: '#ebf9ff',
    padding: 20,
    marginTop: 20,
    borderRadius: 100,
  },
  loginContainer: {
    alignItems: 'center',
  },
  loginText: {
    fontSize: 12,
  },
  loginLink: {
    fontSize: 12,
    textDecorationLine: 'underline',
  },
});
