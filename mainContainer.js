import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';


//screens
import HomeScreen from './screens/homeScreen';
import ProfileScreen from './screens/profileScreen';
import PolicyScreen from './screens/policyScreen';
import SupportScreen from './screens/supportScreen';

//Screen names
const homeName = 'Home';
const profileName  = 'Profile';
const policyName = 'Policy';
const supportName = 'Support';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions = {({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn  = route.name;

                        if(rn === homeName){
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn===profileName){
                            iconName = focused ? 'person-circle' : 'person-circle-outline'
                        } else if (rn === policyName){
                            iconName = focused ? 'newspaper' : 'newspaper-outline'
                        } else if (rn === supportName){
                            iconName = focused ? 'help' : 'help-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    }
                })}
                tabBarOptions = {{
                    activeTintColor:'#1B2C56',
                    style: { padding: 10, height: 80}
                }}
                >
                
                <Tab.Screen name={homeName} component= { HomeScreen } options={ {title : "Home" , headerTitleAlign:'center' } }/>
                <Tab.Screen name={profileName} component= { ProfileScreen } options={{ headerTitleAlign:'center' }} />
                <Tab.Screen name={policyName} component= { PolicyScreen } options={{ headerTitleAlign:'center' }} />
                <Tab.Screen name={supportName} component= { SupportScreen } options={{ headerTitleAlign:'center' }} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}