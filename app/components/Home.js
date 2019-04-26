import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>My Notepad</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>


                </ScrollView>

                <View style={styles.footer}>
                    <TextInput 
                        placeholder='> Note'
                        style={styles.textInput}
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>

                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>                    
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        width: '100%',
        height: '10%',
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerText: {
        textAlign: 'center',
    },

    footer: {
        backgroundColor: '#333'
    },

    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#333',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },

    addButtonText: {
        color: '#FFF',
        fontSize: 24,
    }
});
