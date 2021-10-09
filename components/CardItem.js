import React from 'react'
import {Text, Image, StyleSheet, Pressable} from "react-native";
import Attribute from "./Attribute";
import {appColors} from "../resources/colors";

const CardItem = ({onPress, card: {title, type, imageSrc}}) => {
    return <Pressable onPress={onPress} style={styles.container}>
        <Image style={styles.image} source={{uri: imageSrc}}/>
        <Text style={styles.title}>{title}</Text>
        <Attribute attribute={type} style={styles.attribute}/>
    </Pressable>
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.secondaryBg,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        padding: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 10,
        margin: 5
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 20
    },
    title: {
        textTransform: 'uppercase',
        color: appColors.textColor,
        fontFamily: "Lato_400Regular"
    },
    attribute: {
        width: 50,
        height: 50
    }
});
export default CardItem;
