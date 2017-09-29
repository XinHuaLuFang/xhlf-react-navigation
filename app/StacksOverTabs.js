import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

const ScreenA = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>aaa</Text>
    <Button
      title="点击切换到ScreenB"
      onPress={() => navigation.navigate('ScreenB')}
    />
  </View>
);

const ScreenB1 = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>ScreenB - b1</Text>
    <Button
      title="返回"
      onPress={() => navigation.goBack(null)}
    />
  </View>
);

const ScreenB2 = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Screen - b2</Text>
    <Button
      title="返回B1"
      onPress={() => navigation.goBack(null)}
    />
    <Text style={{height: 10}}/>
     {/*todos: ScreenB的b2直接返回ScreenA*/}
    <Button
      title="返回ScreenA 暂未成功"
      onPress={() => navigation.goBack(ScreenB)}
    />
  </View>
);

const ScreenB = TabNavigator({
  b1: {
    screen: ScreenB1,
    navigationOptions: {
      title: 'bbb1',
      tabBarLabel: 'bbb1'
    }
  },
  b2: {
    screen: ScreenB2,
    navigationOptions: {
      title: 'bbb2',
      tabBarLabel: 'bbb2'
    }
  }
}, {
  tabBarPosition: 'bottom'
});

const StacksOverTabs = StackNavigator({
  ScreenA: {
    screen: ScreenA,
    navigationOptions: {
      title: 'ScreenA'
    }
  },
  ScreenB: {
    screen: ScreenB,
    navigationOptions: {
      header: null
    }
  }
});

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  text: {
    fontSize: 26,
    textAlign: 'center'
  }
});

export default StacksOverTabs;