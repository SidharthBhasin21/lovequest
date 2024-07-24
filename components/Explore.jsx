import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Explore = () => {
    return (
        <View className= "mt-4 flex flex-row items-center justify-between"
            style={{
                width: wp(90),
            }}
        >
            
            <Text className="text-2xl font-bold tracking-tighter">Explore Now</Text>
            
            <View className="flex flex-row items-center justify-between bg-black rounded-full p-2" 
                style={{
                    width: wp(45),
                }}
            >
                <Text className="text-white ">Bars & Restaurants</Text>
                <TouchableOpacity className="bg-purple-200 rounded-full p-1">
                    <AntDesign name="down" size={10} color="#black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Explore