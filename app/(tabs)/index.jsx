import {
    ActivityIndicator,
    ImageBackground,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";
import bgImg from "../../assets/images/bgImg.png";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SearchBar from "../../components/SearchBar";
import Map from "../../components/Map";
import Explore from "../../components/Explore";
import Card from "../../components/Card";
import { useFonts } from "expo-font";

const maps = () => {
    const [fontsLoaded] = useFonts({
        'roboto': require('../../assets/fonts/Roboto-Regular.ttf'),
    });
    
    
    if (!fontsLoaded) {
        return <ActivityIndicator />;
    }
    return (
        <SafeAreaView>
            <StatusBar hidden={true}/>
            <ImageBackground
                source={bgImg}
                resizeMode="cover"
                style={styles.container}
            >
                <SearchBar />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewContent}
                >
                    <Map />
                    <Explore />
                    <Card />
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default maps;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: wp(5),
        width: wp(100),
        height: hp(100),
        paddingTop: hp(7),
    },
    scrollViewContent: {
        paddingBottom: hp(9),
    },
    text: {
        backgroundColor: "pink",
        fontSize: 42,
        marginTop: 20,
        fontFamily: 'roboto',
    },
});
