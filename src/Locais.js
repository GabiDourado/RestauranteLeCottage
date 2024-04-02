import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, StatusBar } from "react-native";

export default function Locais () {
    return(
       
        
            
    <View style={css.tudo}>
            <View style={css.titulo}>
                    <View style={css.linha}>
                        <Text style={css.tituloPT}>Principais restaurantes</Text>
                    </View>
                    <Text style={css.tituloFR}>Principaux restaurants</Text>
            </View>
            <SafeAreaView style={css.SafaAre}>
            <ScrollView style={css.Scroll}>
            <Image style={css.img} source={{uri: "https://img.odcdn.com.br/wp-content/uploads/2018/12/20181218065336.jpg",}}/>
            <View style={css.lugares}>
                <View style={css.linha2}>
                    <Text style={css.lugar}>Le Cottage - Pindamonhangaba - SP </Text>
                    <Image style={css.point} source={{uri: "https://cdn-icons-png.flaticon.com/512/7705/7705037.png",}}/>
                </View>
                <View style={css.linha2}>
                    <Text style={css.lugar}>Le Cottage - Terespolis - RJ</Text>
                    <Image style={css.point} source={{uri: "https://cdn-icons-png.flaticon.com/512/7705/7705037.png",}}/>
                </View>
                <View style={css.linha2}>
                    <Text style={css.lugar}>Le Cottage - Valinhos - SP</Text>
                    <Image style={css.point} source={{uri: "https://cdn-icons-png.flaticon.com/512/7705/7705037.png",}}/>
                </View>
                <View style={css.linha2}>
                    <Text style={css.lugar}>Le Cottage - Guarulhos - SP</Text>
                    <Image style={css.point} source={{uri: "https://cdn-icons-png.flaticon.com/512/7705/7705037.png",}}/>
                </View>
                <View style={css.linha2}>
                    <Text style={css.lugar}>Le Cottage - Uberlândia - MG</Text>
                    <Image style={css.point} source={{uri: "https://cdn-icons-png.flaticon.com/512/7705/7705037.png",}}/>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
        </View>
        
       
    );
}

const css = StyleSheet.create({
    tudo:{
        backgroundColor: "#FAE0E2",
        height: '100%',
        width: "100%",
        display: 'flex',
        alignItems: 'center'
    },
    tituloPT: {
        fontSize: 23,
        textAlign: 'center',
        
    },
    tituloFR: {
        fontSize: 15,
        textAlign: 'center',
    },
    linha: {
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        textAlign: 'center',
        width:"100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row',
        padding: 10
    },
    titulo: {
        width: '70%',
        margin: 10,
        display: 'flex',
    },
    img: {
        width:"100%",
        height:370,
    },
    point: {
        width: "5%",
        height: 22
    }, 
    lugar:{
        fontSize: 18,
        width: '94%'
    },
    lugares: {
        marginTop: 5,
        width: '100%'
    },
    linha2: {
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        textAlign: 'center',
        width:"100%",
        display: 'flex',
        flexDirection: 'row',
        padding: 10
    },
    SafaAre:{
        flex: 1,
        backgroundColor: "#FAE0E2",
        
    },
    Scroll:{
        backgroundColor: "#FAE0E2",
        width:'100%',
    }
});