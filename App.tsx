import theme from './src/theme';
import { Groups } from '@screens/Groups'
import { StatusBar } from 'react-native';
import { NewGroup } from '@screens/NewGroup'
import { Loading } from '@components/Loading';
import { Players } from '@components/Players';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      { fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
