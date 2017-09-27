import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

const ScreenA = ({ navigation }) => (
  <View style={styles.container}>
    <Button
      title="跳转到ScreenB"
      onPress={() => navigation.navigate('ScreenB')}
    />
  </View>
);

const ScreenB = ({ navigation }) => (
  <View style={styles.container}>
    <Button
      title="跳转到BBB"
      onPress={() => navigation.navigate('BBB')}
    />
    <Text style={{height: 10}}/>
    <Button
      title="返回"
      onPress={() => navigation.goBack()}
    />
  </View>
);

const MainTab = StackNavigator({
  ScreenA: {
    screen: ScreenA,
    navigationOptions: {
      headerTitle: 'ScreenA',
      headerTitleStyle: {
        textAlign: 'center'
      }
    }
  },
  ScreenB: {
    screen: ScreenB,
    navigationOptions: {
      title: 'ScreenB'
    }
  }
});

const SettingsTab = ({ navigation }) => (
  <View style={styles.container}>
    <Text>这是BBB页面</Text>
    <Text style={{height: 10}}/>
    <Button
      title="切换到AAA"
      onPress={() => navigation.navigate('AAA')}
    />
    <Text style={{height: 10}}/>
    <Button
      title="切换到AAA的ScreenA"
      onPress={() => navigation.navigate('ScreenA')}
    />
    <Text style={{height: 10}}/>
    <Button
      title="切换到AAA的ScreenB"
      onPress={() => navigation.navigate('ScreenB')}
    />
  </View>
);

const StacksInTabs = TabNavigator({
  AAA: {
    screen: MainTab,
    navigationOptions: {
      tabBarLabel: 'AAA'
    }
  },
  BBB: {
    screen: SettingsTab,
    navigationOptions: {
      tabBarLabel: 'BBB'
    }
  }
}, {
  tabBarPosition: 'bottom'
});

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

export default StacksInTabs;