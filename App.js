import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    FlatList,
    SafeAreaView,
    StatusBar
} from 'react-native';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
} from '@expo-google-fonts/lato';
import {getCards} from "./api/api"
import CardItem from "./components/CardItem";
import CardDetailsModal from "./components/CardDetailsModal";
import {appColors} from "./resources/colors";

export default function App() {
    const [cards, setCards] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        getCards((responseCards) => {
            setCards(responseCards)
        })
    }, []);

    let [fontsLoaded] = useFonts({
        Lato_300Light,
        Lato_400Regular,
        Lato_700Bold
    });

    if (!fontsLoaded || !cards) {
        return <AppLoading/>;
    } else return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <FlatList
                data={cards}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => {
                    return <CardItem onPress={() => {
                        setSelectedCard(item)
                    }} card={item}/>
                }}/>

            <CardDetailsModal card={selectedCard} dismiss={() => {
                setSelectedCard(null);
            }}/>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: appColors.mainBg,
        flex: 1
    }
});
