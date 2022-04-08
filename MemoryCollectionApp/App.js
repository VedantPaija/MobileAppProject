import { StyleSheet, Text, View } from 'react-native';
import AppButton from './App/assets/components/AppButton';
import AppColours from './App/assets/config/AppColours';

export default function App() {
  return (
    <View style={styles.container}>
      <AppButton title="Click here"></AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColours.DutchWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
