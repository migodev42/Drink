import * as React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button } from 'react-native';
import type { ParamListBase } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Settings() {
  return <Text></Text>;
}
function History() {
  return <Text></Text>;
}
function Home() {
  const [current, setCurrent] = React.useState(0)
  const onPress = () => {
    setCurrent(prev => prev + 350)
  }
  return <View style={{ padding: 20 }}>
    <Text>Target: {2650}</Text>
    <Text>Current: {current}</Text>
    <View >
      {/* style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }} */}
      <Button title="add" onPress={onPress} color="#ff4d4f" />
    </View>
  </View>;
}

type MaterialTopTabParams = {
  settings: undefined;
  history: undefined;
  home: undefined;
};

const Tab = createMaterialTopTabNavigator<MaterialTopTabParams>();

export default function MaterialTopTabsScreen({ navigation }: StackScreenProps<ParamListBase>) {
  React.useLayoutEffect(() => {
    navigation &&
      navigation.setOptions({
        cardStyle: { flex: 1 },
      });
  }, [navigation]);

  return (
    <Tab.Navigator
      tabBarOptions={{
        // activeTintColor: '#e91e63',
        showIcon: true,
        activeTintColor: 'white',
        indicatorStyle: styles.indicatorStyle,
        labelStyle: { fontSize: 13, width: '100%', textTransform: 'none' }, //https://stackoverflow.com/questions/53420564/react-navigation-header-title-cut-off        
        iconStyle: { flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'flex-end' },
        tabStyle: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
        style: { backgroundColor: '#ff4d4f' },
      }}
      initialRouteName='home'
      backBehavior='initialRoute'
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="water-outline" color={color} size={18} />
        }}
      />
      <Tab.Screen
        name="history"
        component={History}
        options={{
          title: 'Histroy',
          tabBarIcon: ({ color }) => <FontAwesome name="history" color={color} size={18} />
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome name="gear" color={color} size={18} />

        }}
      />
    </Tab.Navigator >
  );
}

const styles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: 'white',
  },
});
