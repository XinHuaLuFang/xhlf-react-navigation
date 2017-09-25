import React from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NavScreen = ({ navigation, content }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{content}</Text>
    <Button
      title="打开抽屉导航"
      onPress={() => navigation.navigate('DrawerOpen')}
    />
    <Button
      title="返回"
      onPress={() => navigation.goBack(null)}
    />
  </View>
);

const ScreenA = ({ navigation }) => (
  <NavScreen
    content="A 页面"
    navigation={navigation}
  />
);
ScreenA.navigationOptions = {
  drawerLabel: 'A 页面',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons
      name="move-to-inbox"
      size={24}
      style={{ color: tintColor }}
    />
  )
};

const ScreenB = ({ navigation }) => (
  <NavScreen
    content="B 页面"
    navigation={navigation}
  />
);
ScreenB.navigationOptions = {
  drawerLabel: 'B 页面',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons
      name="drafts"
      size={24}
      style={{ color: tintColor }}
    />
  )
};

const Drawer = DrawerNavigator({
  ScreeA: { screen: ScreenA },
  ScreenB: { screen: ScreenB }
}, {
  initialRouteName: 'ScreenB',
  contentOptions: {
    activeTintColor: '#e91e63'
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

export default Drawer;