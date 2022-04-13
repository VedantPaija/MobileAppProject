import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native-web';
import AppButton from './App/assets/components/AppButton';
import AppColours from './App/assets/config/AppColours';

export default function App() {
  return (
    //<ImageBackground style={styles.background} source={require('./App/assets/memory.jpg')}>
      <View style={styles.container}>
        <AppButton title="Click here"></AppButton>
      </View>
    //</ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColours.DutchWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //background: {
  //  flex: 1,
  //}
});
