import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="writing-words" options={{ title: 'Words for Writing' }} />
      <Stack.Screen name="idioms" options={{ title: 'Idioms' }} />
      <Stack.Screen name="verbs" options={{ title: 'Verbs' }} />
      <Stack.Screen name="barChart" options={{ title: 'Bar Chart' }} />
      <Stack.Screen name="lineChart" options={{ title: 'Line Chart' }} />
      <Stack.Screen name="pieChart" options={{ title: 'Pie Chart' }} />
      <Stack.Screen name="maps" options={{ title: 'Maps' }} />
      <Stack.Screen name="process" options={{ title: 'Process' }} />
      <Stack.Screen name="life-cycle" options={{ title: 'Life Cycle' }} />
      <Stack.Screen name="usa-question" options={{ title: 'USA-Question' }} />
    </Stack>
  );
}
