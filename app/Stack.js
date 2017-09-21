import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const NavScreen = ({ navigation, content }) => (
  <ScrollView>
    <Text style={styles.text}>{content}</Text>
    <Button
      title="跳转至玛尔扎哈的资料页"
      onPress={() => navigation.navigate('Profile', { name: '玛尔扎哈' })}
    />
    <Button
      title="跳转至 photos"
      onPress={() => navigation.navigate('Photos', { name: '古力娜扎' })}
    />
    <Button
      title="返回"
      onPress={() => navigation.goBack(null)}
    />
  </ScrollView>
);

const HomeScreen = ({ navigation }) => (
  <NavScreen navigation={navigation} content="aaa" />
);
HomeScreen.navigationOptions = {
  title: 'Home'
};

const ProfileScreen = ({ navigation }) => (
  <NavScreen
    navigation={navigation}
    content={`${navigation.state.params.mode === 'edit' ? '正在编辑 ' : '这是 '}${navigation.state.params.name}的资料`}
  />
);
ProfileScreen.navigationOptions = props => {
  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state;
  return {
    headerTitle: `${params.name}的资料!`,
    headerRight: (
      <Button
        title={params.mode === 'edit' ? '确定' : '编辑'}
        onPress={() => setParams({ mode: params.mode === 'edit' ? '' : 'edit'})}
      />
    )
  }
};

const PhotosScreen = ({ navigation }) => (
  <NavScreen
    navigation={navigation}
    content={`${navigation.state.params.name}的相片`}
  />
);
PhotosScreen.navigationOptions = {
  title: '相片'
};

const Stack = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Photos: { screen: PhotosScreen }
});

const styles = StyleSheet.create({
  text: {
    margin: 14
  }
});

export default Stack;