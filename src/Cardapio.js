import { FlatList, View, StyleSheet, Text, ScrollView, SafeAreaView, VirtualizedList } from "react-native";
import Pratos from "./Pratos";

export default function Cardapio () {
    const dados = [
        {
            id: "01",
            foto: "https://img.saborosos.com.br/imagens/bife-a-parmegiana.jpg",
            nome: "Parmegiana",
            preco: 40.00
        },
        {
            id: "02",
            foto: "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/9367969f6efd0f47249a4b1c2ef9ded5.jpg",
            nome: "Ratatouille",
            preco: 38.00
        },
        {
            id: "03",
            foto: "https://dxm.dam.savencia.com/api/wedia/dam/transform/fix635d9eidk6tmu7z7fbsiop9kk74dp4k5cimo/original?",
            nome: "Soupe a l'oignon",
            preco: 40.00
        },
        {
            id: "04",
            foto: "https://cdn.deliway.com.br/blog/base/d3f/ad7/d36/creme-brulee.jpg",
            nome: "Crème brûlée",
            preco: 38.00
        },
        {
            id: "05",
            foto: "https://veja.abril.com.br/wp-content/uploads/2019/11/foie-gras.jpg?crop=1&resize=1212,909",
            nome: "Foie Gras",
            preco: 40.00
        },
        {
            id: "06",
            foto: "https://www.sabornamesa.com.br/media/k2/items/cache/b17c53c18ff7ca8e1552342fd3800fee_XL.jpg",
            nome: "Boeuf Bourguignon",
            preco: 38.00
        },
        {
            id: "07",
            foto: "https://images.immediate.co.uk/production/volatile/sites/30/2012/01/coq-au-vin-3740fe3.jpg?quality=90&resize=556,505",
            nome: "Coq au vin",
            preco: 40.00
        },
        {
            id: "08",
            foto: "https://static.itdg.com.br/images/1200-675/0cd951a2f8cf36784b06eaf9540ce1b2/322251-original.jpg",
            nome: "Quiche Lorraine",
            preco: 38.00
        },
        {
            id: "09",
            foto: "https://media.gazetadopovo.com.br/bomgourmet/2015/06/patoconfit33an-77a0e800.jpg",
            nome: " Confit de pato",
            preco: 40.00
        },
        {
            id: "10",
            foto: "https://www.foodandwine.com/thmb/LlnnhX5MveKwpXxCMbT5CSvl1PY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tarte-Tatin-FT-RECIPE0923-5fbf820c33ea4c12b23ff00c78f63471.jpg",
            nome: "Tarte Tatin",
            preco: 38.00
        },
        {
            id: "11",
            foto: "https://gastronomos.fr/wp-content/uploads/2018/08/aula-de-macaron-em-paris.jpg",
            nome: "Macaron",
            preco: 40.00
        },
        {
            id: "12",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxw0KSmKxWz0L_ZCmGtzPkw6wcYOP99VJI8YBd4n90A&s",
            nome: "Chateaubriand",
            preco: 38.00
        },
    ]
    return(
        <View style={css.container}>
            <View style={css.titulo}>
                <View style={css.linha}>
                    <Text style={css.tituloPT}>Principais</Text>
                </View>
                <Text style={css.tituloFR}>Principal</Text>
            </View>
            <View style={css.scroll}>
                    <FlatList 
                    data={dados}
                    renderItem={({item}) => <Pratos
                                                nome={item.nome}
                                                preco={'R$ ' + item.preco}
                                                foto={item.foto}
                                                />}
                    keyExtractor={item => item.id}
                    contentContainerStyle={css.container}
                    />
            </View>
        </View>
    );
}
const css = StyleSheet.create({
    container: {
      width:"100%",
      height:"100%",
      display: 'flex',
      backgroundColor: "#FAE0E2",
      alignItems:'center'
    },
    tituloPT: {
        fontSize: 20,
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
    },
    titulo: {
        width: '70%',
        margin: 15,
    },
    scroll : {
        height: "89.2%",
        display: 'flex',
        alignItems:'center',
    }
  });

