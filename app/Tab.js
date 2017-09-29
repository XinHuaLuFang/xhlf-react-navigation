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
    <Text style={styles.text}>{content}</Text>
    <Button
      title="切换到Home"
      onPress={() => navigation.navigate('Home')}
    />
    <Button
      title="切换到People"
      onPress={() => navigation.navigate('People')}
    />
    <Button
      title="切换到Chat"
      onPress={() => navigation.navigate('Chat')}
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
      name={focused ? 'ios-home' : 'ios-home-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  )
};

const PeopleScreen = ({ navigation }) => (
  <NavScreen content="People Tab" navigation={navigation} />
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

const ChatScreen = ({ navigation }) => (
  <NavScreen content="Chat Tab" navigation={navigation} />
);
ChatScreen.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  )
};

const SettingsScreen = ({ navigation }) => (
  <NavScreen content="Settings Tab" navigation={navigation} />
);
SettingsScreen.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-settings' : 'ios-settings-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  )
};

const Tab = TabNavigator({
  Home: { screen: HomeScreen },
  People: { screen: PeopleScreen },
  Chat: { screen: ChatScreen },
  Settings: { screen: SettingsScreen }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    upperCaseLabel: false
  }
});

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  text: {
    height: 120,
    lineHeight: 75,
    fontSize: 30,
    textAlign: 'center'
  }
});

export default Tab;