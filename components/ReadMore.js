import React from 'react'
import {View, Text, StyleSheet, Image} from "react-native";
import {seeMore} from "../resources/images";
import {appColors} from "../resources/colors";

const ReadMore = ({...props}) => {
    return <View style={[props.style, styles.container]}><Text style={styles.text}>Read More</Text>
        <Image style={styles.icon} source={seeMore}/>
    </View>
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontFamily: "Lato_700Bold",
        fontSize: 14,
        color: appColors.readMore,
        marginTop: -3
    },
});
export default ReadMore;
