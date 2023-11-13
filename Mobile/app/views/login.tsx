import {Button, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

import {GoogleSignin} from '@react-native-google-signin/google-signin';

type LoginViewProps = PropsWithChildren<{
  title: String;
}>;

function LoginView({title}: LoginViewProps): JSX.Element {
  let onGoogleLogin = () => {
    GoogleSignin.configure({
      webClientId: '',
      offlineAccess: true,
    });
    GoogleSignin.hasPlayServices()
      .then(hasPlayService => {
        if (hasPlayService) {
          GoogleSignin.signIn()
            .then(userInfo => {
              console.log(userInfo.idToken);
            })
            .catch(e => {
              console.log('ERROR IS: ' + JSON.stringify(e));
            });
        }
      })
      .catch(e => {
        console.log('ERROR IS: ' + JSON.stringify(e));
      });
  };

  return (
    <View style={styles.sectionContainer}>
      <Text>{title}</Text>
      <Button title={'Sign in with Google'} onPress={onGoogleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default LoginView;
