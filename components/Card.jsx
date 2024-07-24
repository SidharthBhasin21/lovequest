import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Card = () => {
    return (
        <View className="bg-black p-4 w-full mt-4 rounded-2xl"
            style={{
                
            }}    
        >
            <Text className="text-white text-xl font-bold tracking-widest ">Hidden Lane Bar</Text>
            <View className="flex flex-row items-center mt-4 justify-between">
                <View className=" ">
                    <Image 
                        style={{
                            width: wp(20),
                            height: hp(5),
                        }}
                        
                        source={require("../assets/images/roundImg.png")}
                    />
                </View>
                <Text className='text-white tracking-wide text-lg w-2/3' style={{fontFamily: "roboto"}}>50+ others are going here tonight. Ready to join in?</Text>
            </View>
            <TouchableOpacity className="bg-[#D2C7FF] rounded p-1 mt-4">
                <Text className="text-black text-center py-1 text-lg tracking-widest">Add to Hotspot</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Card