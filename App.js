import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/Home';
import EducationScreen from './components/Education';
import ExperienceScreen from './components/Experience';
import LanguagesScreen from './components/Languages';
import SkillsScreen from './components/Skills';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Education" component={EducationScreen} />
        <Tab.Screen name="Experience" component={ExperienceScreen} />
        <Tab.Screen name="Languages" component={LanguagesScreen} />
        <Tab.Screen name="Skills" component={SkillsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
