import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Tabs } from 'expo-router';

const { width } = Dimensions.get('window');

const CustomTabBar = ({ state }) => {
  const navigation = useNavigation();

  const tabs = [
    { name: '(WordResource)', label: 'W'},
    { name: 'grammar', label: 'G'},
    { name: 'index', label: 'H'},
    { name: 'ielts',  label: 'I'},
    { name: 'speaking', label: 'S'},
  ];

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab, index) => {
        const isActive = state.index === index;
        return (
          <TouchableOpacity
            key={tab.name}
            style={[
              styles.tabButton,
              isActive ? styles.activeTabButton : styles.inactiveTabButton,
            ]}
            onPress={() => navigation.navigate(tab.name)}
          >
            <Text style={[styles.tabText, isActive && styles.activeTabText]}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: true}} tabBar={props => <CustomTabBar {...props} />}>
      <Tabs.Screen name="(WordResource)" />
      <Tabs.Screen name="grammar" />
      <Tabs.Screen name="index" />
      <Tabs.Screen name="ielts" />
      <Tabs.Screen name="speaking" />

      {/* Your screen components go here */}
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    top: 800,
    left: 25,
    width: width - 50,
    backgroundColor: "white",
    borderColor: "black",
	borderRadius: 4,
    borderWidth: 2,
    height: 80,
  },
  
  tabButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#119d79',
    borderWidth: 2,
    borderColor: "black",
    position: "relative",
    top: 10,
    elevation: 10, // Add shadow effect for Android
  },
  
  activeTabButton: {
    backgroundColor: '#fff',
    transform: [{ translateY: -5 }, { scale: 1.1 }],
    borderWidth: 2,
    borderColor: "black",
  },
  
  inactiveTabButton: {
    backgroundColor: '#119d79',
    borderWidth: 2,
    borderColor: "black",
  },
  
  tabText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 25,
  },
  
  activeTabText: {
    color: '#119d79',
    fontSize: 35,
  },
});

export default TabLayout;
