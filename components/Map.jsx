import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { EvilIcons } from '@expo/vector-icons';

const Map = () => {
    return (
        <View 
            className="bg-slate-300 mt-6 rounded-2xl overflow-hidden"
            style={{
                width: '100%',
                height: hp(50),
                borderRadius: 20,
            }}
        >
        <MapView 
            className="w-full h-full" 
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
        
        </View>
    )
}

export default Map