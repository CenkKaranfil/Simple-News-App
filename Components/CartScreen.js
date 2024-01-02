import React from 'react'
import { View, StyleSheet, Button, Text, Image, FlatList } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import {
    removeFromCart,
    resetCart,
    selectCart,
} from "../redux/CartReducer";



const CartScreen = ({ navigation }) => {

    const Cart = useSelector(selectCart);
    const dispatch = useDispatch();

    const handleRemove = (e) => {
        dispatch(removeFromCart(e))
    };

    const handleReset = () => {
        dispatch(resetCart());
    };



    const renderCart = ({ item }) => {
        return (
            <View style={styles.card}>
                <Image style={styles.image} source={item.image} />
                <Text style={styles.text}> {item.name} </Text>
                <Text style={styles.text}> {item.price} </Text>
                <Button
                    title="Remove"
                    key={item.key}
                    onPress={() => handleRemove(item)}

                />
            </View>)

    };


    return (
        <View style={styles.container}>
            <FlatList
                data={Cart}
                numColumns={2}
                renderItem={renderCart}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <View style={styles.topButtons} >
                        <Button title="Checkout" />
                        <Button title="Remove all" onPress={handleReset} />
                    </View>

                }
            />
        </View>

    )
}

export default CartScreen;

export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    card: {
        flex: 0.5,
        margin: 8,
        marginTop: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        marginHorizontal: 8,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

    },
    text: {
        fontSize: 18,


    },
    topButtons: {
        margin: 18,
        justifyContent: 'space-around',
        flexDirection: 'row',



    },


});
