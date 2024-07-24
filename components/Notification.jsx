import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Notification = () => {
    return (
        <View className="bg-[#D2C7FF] p-3 rounded-full flex justify-center items-center "
            style={{
                width: hp(6),
                height: hp(6),
                marginHorizontal: wp(5)
            }}
        >
            <FontAwesome6 name="gripfire" size={35} color="white" />
        </View>
    )
}
const styles = StyleSheet.create({
    
})


export default Notification