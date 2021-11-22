import React from 'react';
import { StyleSheet, ScrollView, Text, Image } from 'react-native';
import { Button, Paragraph, Title } from 'react-native-paper';


const Home = ({navigation}) => {

    return (
        <ScrollView style={styles.back}>
            <Title style={styles.title}>
                Bem vindo ao Game Finder
            </Title>
            <Image
                style={styles.image}
                source={require('../../assets/img/welcome.png')}
            />
            <Paragraph style={{ textAlign: 'justify', paddingHorizontal: 20, color: 'white' }}>
                Caso você tenha baixado esse aplicativo mas não saiba o que está fazendo aqui. 
                Este aplicativo tem a incrível utilidade de apresentar a melhor categoria de jogos, JOGOS FREE TO PLAY(Jogos de graça).
                Então aperta o botão e vamos começar!
            </Paragraph>
            <Button
                margin={10}
                mode="contained"
                style={{ marginHorizontal: 55,marginTop:25, padding: 5, backgroundColor: '#2B2D42' }}
                onPress={() => navigation.push('Jogos')}
            >
                COMEÇAR
            </Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',  
        paddingVertical: 15, 
        color: 'white', 
        fontWeight: 'bold',
        fontSize: 25,
    },
    back: {
        backgroundColor: '#007CBE',
        padding: 10,
    },
    image: {
        height: 200,
        width: '100%',
        marginVertical:10,
    }
  });
  
export default Home;