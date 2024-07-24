import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SearchBar = () => {
    return (
        <View className="border-black border-2 rounded-2xl p-3 flex flex-row w-full justify-between mt-4"
            style={{
                height: hp(7)
            }}
        >
            <View className='flex-1 flex-row items-center gap-1'>
                <AntDesign name="search1" size={30} color="black" />
                <TextInput className="text-xl italic w-auto" placeholder='Where to?'/>
            </View>
            
            <View className="flex flex-row items-center justify-evenly bg-black  w-1/3 px-2 gap-1 rounded-full"> 
                <Text className="text-white">Tomorrow</Text>
                <View className="flex justify-center bg-[#D2C7FF] rounded-full items-center w-4 h-4 p-0.5">
                    <AntDesign name="down" size={10} color="#black" />
                </View>
            </View>

            
        </View>
    )
}
const styles = StyleSheet.create({
    
})


export default SearchBar