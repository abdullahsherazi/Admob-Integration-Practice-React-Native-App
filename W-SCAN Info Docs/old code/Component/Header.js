import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        paddingTop: 10,
        backgroundColor: '#58d68d',
        alignItems:'flex-start',
        justifyContent: 'flex-start'
        
    },
    headerTitle: {
        color: 'black',
        fontSize: 30,
        alignContent:"stretch",
    }
});

export default Header;