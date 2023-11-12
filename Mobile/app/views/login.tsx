import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type LoginViewProps = PropsWithChildren<{
  title: String;
}>;

function LoginView({title}: LoginViewProps): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text>{title}</Text>
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
