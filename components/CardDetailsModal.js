import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Modal,
    Pressable
} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import Attribute from "./Attribute";
import ReadMore from "./ReadMore";
import {appColors} from "../resources/colors";

const CardDetailsModal = ({card, dismiss}) => {
    return <Modal transparent visible={card !== null} animationType="fade">
        <Pressable style={styles.fullScreenOverlay} onPress={() => {
            dismiss();
        }}>
            <Pressable>
                <LinearGradient
                    style={styles.gradientBackground}
                    colors={appColors.cardDetailsBg}>
                    <Image style={styles.image} source={{uri: card?.imageSrc}}/>
                    <View style={styles.descriptionContainer}>
                        <View style={styles.attributeContainer}>
                            <Attribute style={styles.attribute} attribute={card?.type}/>
                        </View>
                        <Text style={styles.title}>{card?.title}</Text>
                        <Text numberOfLines={3} ellipsizeMode='tail'
                              style={styles.description}>{card?.description}</Text>
                        <ReadMore style={styles.readMore}/>
                    </View>
                </LinearGradient>
            </Pressable>
        </Pressable>
    </Modal>
};
const styles = StyleSheet.create({
    fullScreenOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.mainBgTransparent,
    },
    gradientBackground: {
        width: 286,
        borderRadius: 12,
        padding: 2,
        flexDirection: 'column'
    },
    image: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: 282,
        height: 285,
        resizeMode: 'cover'
    },
    descriptionContainer: {
        backgroundColor: appColors.mainBg,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: "column",
        paddingBottom: 14,
        paddingEnd: 14
    },
    attributeContainer: {
        width: 46,
        height: 46,
        borderRadius: 23,
        marginTop: -17,
        backgroundColor: appColors.mainBg,
        justifyContent: "center",
        alignItems: "center"
    },
    attribute: {
        width: 22,
        height: 22
    },
    title: {
        fontFamily: "Lato_700Bold",
        fontSize: 18,
        color: appColors.textColor,
        marginStart: 12,
        marginBottom: 4
    },
    description: {
        fontFamily: 'Lato_300Light',
        fontSize: 14,
        color: appColors.textColor,
        marginStart: 12,
        marginBottom: 14
    },
    readMore: {
        marginStart: 12
    }
});
export default CardDetailsModal;
