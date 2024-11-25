import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function SavedPasswords({ route }) {
    const { savedPasswords } = route.params; 

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Senhas Salvas</Text>
            <FlatList 
            data={savedPasswords}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={styles.passwordContainer}>
                    <Text style={styles.passwordText}>{item}</Text>
                </View>
            )}
            
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0F7FA', 
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#00796B', 
    },
    passwordContainer: {
        backgroundColor: '#80CBC4', 
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        width: '100%',
    },
    passwordText: {
        fontSize: 16,
        color: '#fff', 
    },
});
