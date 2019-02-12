import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import PeopleListItems from './PeopleListItems'

const PeopleList = (props) => {
    const { peoples, onPress } = props;

    const items = peoples.map((people, index) => {
        return <PeopleListItems key={ index } people={ people } onPress={ onPress }/>
    } );

    return (
        <View style={ styles.container }>
            { items }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    },
});

export default PeopleList;