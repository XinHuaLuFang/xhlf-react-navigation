import React from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';
import { DrawerNavigator, TabNavigator} from 'react-navigation';

const Home1 = ({navigation}) => (
  <View>
    <Text>Home1</Text>
    <Button
      title="Open Home Drawer"
      onPress={() => navigation.navigate('DrawerOpen')}
    />
  </View>
);

const Home2 = ({navigation}) => (
  <View>
    <Text>Home2</Text>
    <Button
      title="Open Home Drawer"
      onPress={() => navigation.navigate('DrawerOpen')}
    />
  </View>
);
const Message1 = ({navigation}) => (
  <View>
    <Text>Message1</Text>
    <Button
      title="Open Message Drawer"
      onPress={() => navigation.navigate('DrawerOpen')}
    />
  </View>
);
const Message2 = ({navigation}) => (
  <View>
    <Text>Message2</Text>
    <Button
      title="Open Message Drawer"
      onPress={() => navigation.navigate('DrawerOpen')}
    />
  </View>
);
const Home = DrawerNavigator({
  Home1: { screen: Home1 },
  Home2: { screen: Home2 }
});
const Message = DrawerNavigator({
  Message1: { screen: Message1 },
  Message2: { screen: Message2 }
});
const TabHaveSelfDrawer = TabNavigator({
  Home: {
    screen: Home
  },
  Message: {
    screen: Message
  }
}, {
  swipeEnabled: false,
  tabBarPosition: 'bottom'
});

export default TabHaveSelfDrawer;