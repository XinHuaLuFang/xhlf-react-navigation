import React from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';
import { DrawerNavigator, StackNavigator} from 'react-navigation';

const DrawerA1 = ({navigation}) => (
  <View>
    <Text>DrawerA1</Text>
    <Button
      title="Open DrawerA"
      onPress={() => navigation.navigate('DrawerOpen')}
    />
    <Button
      title="跳转至StackBBB"
      onPress={() => navigation.navigate('StackBBB')}
    />
  </View>
);
const DrawerA2 = ({navigation}) => (
  <View>
    <Text>DrawerA2</Text>
    <Button
      title="Open DrawerA"
      onPress={() => navigation.navigate('DrawerOpen')}
    />
  </View>
);
const DrawerB1 = ({navigation}) => (
  <View>
    <Text>DrawerB1</Text>
    <Button
      title="Open DrawerB"
      onPress={() => navigation.navigate('DrawerOpen')}
    />
    <Button
      title="返回"
      onPress={() => navigation.goBack(null)}
    />
  </View>
);
const DrawerB2 = ({navigation}) => (
  <View>
    <Text>DrawerB2</Text>
    <Button
      title="Open DrawerB"
      onPress={() => navigation.navigate('DrawerOpen')}
    />
    <Button
      title="返回"
      onPress={() => navigation.goBack(null)}
    />
  </View>
);

const StackAAA = DrawerNavigator({
  DrawerA1: { screen: DrawerA1 },
  DrawerA2: { screen: DrawerA2 }
});

const StackBBB = DrawerNavigator({
  DrawerB1: { screen: DrawerB1 },
  DrawerB2: { screen: DrawerB2 }
});

const StackHaveSelfDrawer = StackNavigator({
  StackAAA: {
    screen: StackAAA,
    navigationOptions: {
      header: null
    }
  },
  StackBBB: {
    screen: StackBBB,
    navigationOptions: {
      header: null
    }
  }
});
export default StackHaveSelfDrawer;