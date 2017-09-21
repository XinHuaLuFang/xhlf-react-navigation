import React from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NavScreen = ({ navigation, content }) => (
  <ScrollView style={styles.container}>
    <Text>{content}</Text>
    <Button
      title="切换到Home"
      onPress={() => navigation.navigate('Home')}
    />
    <Button
      title="切换到Settings"
      onPress={() => navigation.navigate('Settings')}
    />
    <Button
      title="返回"
      onPress={() => navigation.goBack(null)}
    />
  </ScrollView>
);

const HomeScreen = ({ navigation }) => (
  <NavScreen content="Home Tab" navigation={navigation} />
);
HomeScreen.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-people' : 'ios-people-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  )
};

const PeopleScreen = ({ navigation }) => (
  <NavScreen content="People Tba" navigation={navigation} />
);
PeopleScreen.navigationOptions = {
  tabBarLabel: 'People',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-people' : 'ios-people-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  )
};

const Tab = TabNavigator({
  Home: { screen: HomeScreen },
  People: { screen: PeopleScreen }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true
  }
});

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  }
});

export default Tab;