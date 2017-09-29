import React from 'react';
import {
  AppRegistry
} from 'react-native';

import Stack from './app/Stack';
import Tab from './app/Tab';
import Drawer from './app/Drawer';
import StacksInTabs from './app/StacksInTabs';
import StacksOverTabs from './app/StacksOverTabs';

AppRegistry.registerComponent('xhlfReactNavigation', () => StacksOverTabs);