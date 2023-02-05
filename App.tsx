import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { Routes } from './src/routes/routes';
import { UserProvider } from './src/context/userContext';

export default function App() {
  return (

    <NativeBaseProvider>
      <UserProvider>
        <StatusBar style="auto" />
        <Routes/>
      </UserProvider>
    </NativeBaseProvider>
  );
}
