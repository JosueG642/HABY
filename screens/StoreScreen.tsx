import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { colors, globalStyles } from '../theme/theme';

interface Item {
    id: number;
    image: string;
    price: number;
    type: string;
    name: string;
}

// Mapea los IDs de los elementos a las rutas de las imágenes
const imageMap: { [key: number]: any } = {
    1: require('./../assets/items/item1.gif'),
    2: require('./../assets/items/item2.gif'),
    3: require('./../assets/items/item3.gif'),
    4: require('./../assets/items/item4.gif'),
    5: require('./../assets/items/item5.gif'),
    6: require('./../assets/items/item6.gif'),
    7: require('./../assets/items/item7.gif'),
};

export const StoreScreen = () => {
    const items: Item[] = [
        { id: 1, image: './../assets/items/item1.gif', name: 'Lorem Ipsum', price: 1032, type: 'Clothing' },
        { id: 2, image: './../assets/items/item2.gif', name: 'Lorem Ipsum', price: 544, type: 'Clothing' },
        { id: 3, image: './../assets/items/item3.gif', name: 'Lorem Ipsum', price: 1500, type: 'Clothing' },
        { id: 4, image: './../assets/items/item4.gif', name: 'Lorem Ipsum', price: 200, type: 'Clothing' },
        { id: 5, image: './../assets/items/item5.gif', name: 'Lorem Ipsum', price: 700, type: 'Clothing' },
        { id: 6, image: './../assets/items/item6.gif', name: 'Lorem Ipsum', price: 990, type: 'Clothing' },
        { id: 7, image: './../assets/items/item7.gif', name: 'Lorem Ipsum', price: 200, type: 'Clothing' },
    ];

    const renderItem = ({ item }: { item: Item }) => (
        <TouchableOpacity>
            <View style={globalStyles.itemContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Image source={imageMap[item.id]} style={globalStyles.itemImage} />
                <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={globalStyles.mainContainer}>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                style={{ height: Dimensions.get('window').width, width: Dimensions.get('window').width }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    itemPrice: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '900',
        color: colors.heading
    },
    itemName: {
        paddingVertical: 2,
        fontSize: 20,
        fontWeight: '900',
        color: colors.heading
      },
    columnWrapper: {
        justifyContent: 'space-around'
    }
});
