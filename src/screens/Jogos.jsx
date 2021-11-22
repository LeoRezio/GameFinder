import React, { useEffect, useState } from 'react'
import { ScrollView, Image, View , StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import { Title, Paragraph, Button, DataTable } from 'react-native-paper'
import api from '../service/apiJogos'

const Jogos = ({navigation}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
       load()
    }, []);

    const load = () => {
        return (
            api.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`).then((res) => {
            let updateData = data.concat(res.data);
            console.log(res.data);
            setData(updateData);
            console.log(updateData);
       })
        )
    }

    return (
    <ScrollView style={styles.back}>
        <Title style={{ textAlign: 'center', paddingHorizontal:20,  paddingTop: 15, color: 'white', fontWeight: 'bold'}}>Boa sorte para encontrar seu jogo!</Title>
        <FlatList
            data= {data}
            renderItem = {({ item }) =>(
                        <View style={styles.card} key={item.id}>
                            <TouchableOpacity
                                  onPress={() => navigation.push('Jogo', { id: item.id })}>
                                 <Title style={styles.title}>
                                     {item.title}
                                 </Title>
                                 <Image
                                     style={styles.image}
                                     source={{ uri: item.thumbnail }}
                                    />
                                 <Paragraph style={styles.paragraph}>
                                     {item.short_description}
                                 </Paragraph>
                             </TouchableOpacity>
                        </View>
            )}
            onEndReached={load}
            onEndReachedThreshold={0.05}
            initialNumToRender={10}
            />
    </ScrollView>
    )

}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        paddingLeft:10,
        paddingTop:10,
        margin: 0,
    },
    card: {
        marginVertical:20,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: '#E6E6FF',
        width: '100%'
    },
    back: {
        backgroundColor: '#007CBE',
        padding: 10,
    },
    image: {
        height: 200,
        width: '100%',
        marginVertical:10,
    },
    paragraph: {
        paddingHorizontal:10,
        paddingBottom: 10,
    }
  });

export default Jogos;