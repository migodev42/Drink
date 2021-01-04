import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import type { ParamListBase } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function Settings() {
  return <Text>Settings</Text>
}
function History() {
  return <Text>History</Text>
}
function Home() {
  return <Text>Home</Text>
}

type MaterialTopTabParams = {
  settings: undefined;
  history: undefined;
  home: undefined;
};

const Tab = createMaterialTopTabNavigator<MaterialTopTabParams>();

export default function MaterialTopTabsScreen({
  navigation,
}: StackScreenProps<ParamListBase>) {
  React.useLayoutEffect(() => {
    navigation && navigation.setOptions({
      cardStyle: { flex: 1 },
    });
  }, [navigation]);

  return (
    <Tab.Navigator
      tabBarOptions={{
        // activeTintColor: '#e91e63',
        activeTintColor: 'white',
        indicatorStyle: styles.indicatorStyle,
        labelStyle: { fontSize: 12, width: '100%'}, //https://stackoverflow.com/questions/53420564/react-navigation-header-title-cut-off
        style: { backgroundColor: '#ff4d4f' },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        // options={{ title: <Text>HOME</Text>}}
      />
      <Tab.Screen
        name="history"
        component={History}
      // options={{ title: 'Histroy' }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
      // options={{ title: 'Settings' }}
      />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: 'white',
  },
});