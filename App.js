import React from 'react';
import Amplify from "@aws-amplify/core";
import config from './src/aws-exports';

import AppNavigation from './src/AppNavigation';

Amplify.configure(config);

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App () {
  return <AppNavigation />;
}