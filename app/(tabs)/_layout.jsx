import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Button } from 'react-native';
import Notification from '../../components/Notification';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function TabLayout() {
    return (
        <Tabs 
            screenOptions={{ tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false,
            tabBarStyle: { 
                backgroundColor: '#D2C7FF', 
                height: hp(8),
            },
            tabBarBackgroundColor: 'blue',
        }}>
        <Tabs.Screen
            name="ticket"
            options={{
            headerShown: false,
            tabBarIcon: ({ color,focused }) => <FontAwesome size={35} name="ticket" color={focused? '#FFF':"#E6E0FF"} />,
            }}
        />
        <Tabs.Screen
            name="index"
            options={{
            title: '',
            headerTransparent: true,
            headerStatusBarHeight: hp(2) ,
            headerRight: () => (
                <Notification />
            ),
            tabBarIcon: ({ color,focused }) => <FontAwesome size={35} name="map-marker" color={focused? '#FFF':"#E6E0FF"} />,

            }}
        />
        <Tabs.Screen
            name="matches"
            options={{
            title: '',
            headerShown: false,
            tabBarIcon: ({ color,focused }) => <FontAwesome size={35} name="heart" color={focused? '#FFF':"#E6E0FF"} />,
            }}
        />
        <Tabs.Screen
            name="chats"
            options={{
            title: '',
            headerShown: false,
            tabBarIcon: ({ color,focused }) => <FontAwesome size={35} name="comment" color={focused? '#FFF':"#E6E0FF"} />,
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
            title: '',
            headerShown: false,
            tabBarIcon: ({ color,focused }) => <FontAwesome size={35} name="user" color={focused? '#FFF':"#E6E0FF"} />,
            }}
        />
        </Tabs>
    );
}
