import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Linking } from 'react-native'
import { Title, Paragraph, List, Text, Button } from 'react-native-paper'

const JogoDetalhe = ({navigation, route}) => {
    const [jogo, setJogo] = useState([]);
    useEffect(() => {
        const id = route.params.id

        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
            params: {id: id},
            headers: {
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
              'x-rapidapi-key': '2bb2579d33msh4cf7fbaa5403a6bp1120e5jsnffa0951b4423'
            }
          };
          
          axios.request(options).then(function (res) {
                setJogo(res.data)
              console.log(res.data);
          }).catch(function (error) {
              console.error(error);
          });
        
      //    api.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, config).then((res) => {
      //     setJogo(res.data);
      //     console.log(res.data);
      // })

    }, [])
    return (
        <ScrollView style={styles.back}>
            {jogo.id &&
                <>
                    
                    <Image
                        style={styles.image}
                        source={{ uri: jogo.thumbnail }}
                                />
                    <Title style={styles.title}>{jogo.title}</Title>
                    <List.Section style={{backgroundColor: '#007CBE'}}>
                        <List.Accordion
                          title="Descrição"
                          titleStyle={styles.listTitle}
                          style={styles.toggle}
                          > 
                            <List.Item title="" description={jogo.description} descriptionNumberOfLines={100} descriptionStyle={{color: 'white', fontSize: 13}}/>
                        </List.Accordion>
                    </List.Section>
                    <Paragraph style={styles.paragraph}>
                        Distribuidora: <Text style={styles.textParagraph}>{jogo.publisher}</Text>
                    </Paragraph>
                    <Paragraph style={styles.paragraph}>
                        Desenvolvedora: <Text style={styles.textParagraph}>{jogo.developer}</Text>
                    </Paragraph>
                    <Paragraph style={styles.paragraph}>
                        Genêro: <Text style={styles.textParagraph}>{jogo.genre}</Text>
                    </Paragraph>
                    <Paragraph style={styles.paragraph}>
                        Status: <Text style={styles.textParagraph}>{jogo.status}</Text>
                    </Paragraph>
                    <Paragraph style={styles.paragraph}>
                        Plataforma(s): <Text style={styles.textParagraph}>{jogo.platform}</Text>
                    </Paragraph>
                    <List.Section>
                        <List.Accordion
                          title="Requisitos Minimos"
                          titleStyle={styles.titleRequirements}
                          style={styles.toggle}> 
                            <List.Item 
                                title="SO" 
                                titleStyle={styles.subtitleRequirements} 
                                description={jogo.minimum_system_requirements.os} 
                                descriptionStyle={styles.textRequirements}/>
                            <List.Item 
                                title="Processador" 
                                titleStyle={styles.subtitleRequirements} 
                                description={jogo.minimum_system_requirements.processor} 
                                descriptionStyle={styles.textRequirements}/>
                            <List.Item 
                                title="Memória" 
                                titleStyle={styles.subtitleRequirements} 
                                description={jogo.minimum_system_requirements.memory} 
                                descriptionStyle={styles.textRequirements}/>
                            <List.Item 
                                title="Placa Gráfica" 
                                titleStyle={styles.subtitleRequirements} 
                                description={jogo.minimum_system_requirements.graphics} 
                                descriptionStyle={styles.textRequirements}/>
                            <List.Item 
                                title="Espaço em Memória" 
                                titleStyle={styles.subtitleRequirements} 
                                description={jogo.minimum_system_requirements.storage} 
                                descriptionStyle={styles.textRequirements}/>
                        </List.Accordion>
                    </List.Section>
                    <Button icon="cart" style={styles.buttonLoja} mode="contained" onPress={() => Linking.openURL(jogo.game_url)}>
                      Loja
                    </Button>
                </>
            }
        </ScrollView>
    )
    
}

const styles = StyleSheet.create({
    textParagraph: {
        fontWeight: '400', 
        color: 'white', 
        fontSize: 13
    },
    listTitle: {
        color: 'white', 
        fontWeight: 'bold',
        borderBottomColor: 'rgba(255, 255, 255, 0.5)',
        borderBottomWidth: 1
    },
    titleRequirements: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 0,
        borderBottomColor: 'rgba(255, 255, 255, 0.5)',
        borderBottomWidth: 1
    },
    subtitleRequirements: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 15
    },
    textRequirements: {
        paddingHorizontal:20,
        paddingVertical: 10,
        color: 'white',
        fontSize: 13
    },
    back: {
        backgroundColor: '#007CBE',
        padding: 10,
        
    },
    toggle:{
        backgroundColor: '#007CBE',
        margin: 0,
        padding: 0,
        color: 'white',
    },
    image: {
        height: 200,
        width: '100%',
        marginVertical:10,
        borderRadius: 10,
    },
    paragraph: {
        paddingHorizontal:9,
        paddingVertical: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    title: {
        fontWeight: 'bold',
        paddingTop:10,
        margin: 0,
        color: 'white',
        fontSize: 35,
    },
    buttonLoja: {
        backgroundColor: '#2B2D42',
        width: '50%',
        marginHorizontal: '25%'
    }
})

export default JogoDetalhe;

