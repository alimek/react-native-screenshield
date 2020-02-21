import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ScreenShield, { ProtectedView } from 'react-native-screenshield';

const image = require('./small.png');

export default function App() {
  const [isChanged, setChanged] = React.useState(false);
  const [init, setInit] = React.useState(false);

  setTimeout(() => setChanged(true), 10000);

  React.useEffect(() => {
    if (!init) {
      ScreenShield.init(
        'MEYCIQDuCaxILBm5H2mwB3di5dKOpP1nyAkUD6n+Wq4j8goRagIhAIqd0HR5uldk9gE9ych25iKo9jkPIBrOjIPAnfBFDBoB'
      );
    }
    setInit(true);
  }, [init]);

  return (
    <View style={styles.container}>
      <Text>
        Is initialized: {ScreenShield.isInitialized() ? 'True' : 'False'}
      </Text>
      {!isChanged ? (
        <ProtectedView source={image} style={{ width: 100, height: 100 }} />
      ) : (
        <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
