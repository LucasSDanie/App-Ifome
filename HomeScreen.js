import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const hamburguer = {
  uri: 'https://cdn.pixabay.com/photo/2022/04/20/14/39/burger-7145332_1280.png',
};

const coxinha = {
  uri: 'https://static.itdg.com.br/images/1200-630/12d6edf758753748df23c3b69a2258fc/279010-original.jpg',
};

const hotDog = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT02Ts2dYkQ0iCib08zlXyN_IeD2u1oXB4MlQ&usqp=CAU',
};

const sushi = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8KOPGBRRdiAvIHPpU3l1O7fpcfLVulU0x2RbW9JCpg&s',
};

const listaDeComidas = [
  {
    nome: 'Big Mac',
    imagem: hamburguer,
    preco: 30.9,
    localizacao: 'McDonalds - Kobrasol',
  },
  {
    nome: 'Coxinha do Jeferson',
    imagem: coxinha,
    preco: 5.0,
    localizacao: 'Jeff`s Lanchonete',
  },
  {
    nome: 'Hot Dog do Paulão',
    imagem: hotDog,
    preco: 12.5,
    localizacao: 'Paulão Hot Dog',
  },
  {
    nome: 'Sushi',
    imagem: sushi,
    preco: 25.3,
    localizacao: 'Sushi Takimoto',
  },
];

const TelaInicial = ({ navigation }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidadeNoCarrinho, setQuantidadeNoCarrinho] = useState(0);

  const adicionarAoCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
    setQuantidadeNoCarrinho(quantidadeNoCarrinho + 1);
  };

  const renderItem = ({ item }) => (
    <View style={styles.espacamento}>
      <View style={styles.item}>
        <Image source={item.imagem} style={styles.imagem} />
        <View>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.localizacao}>{item.localizacao}</Text>
          <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
          <Pressable
            style={styles.botaoComprar}
            onPress={() => adicionarAoCarrinho(item)}>
            <Text style={styles.textoComprar}>Comprar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.carrinho}>
        <Pressable
          style={styles.carrinhoContainer}
          onPress={() => navigation.navigate('Carrinho', { carrinho })}>
          <Icon name="shopping-cart" size={30} color="red" />
          {quantidadeNoCarrinho > 0 && (
            <View style={styles.quantidadeNoCarrinho}>
              <Text style={styles.textoQuantidade}>
                {quantidadeNoCarrinho}Itens
              </Text>
            </View>
          )}
        </Pressable>
      </View>
      <FlatList
        data={listaDeComidas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
  },
  imagem: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  preco: {
    fontSize: 20,
    fontFamily: 'Helvetica',
    paddingBottom: 5,
    paddingTop: 5,
    fontWeight: 'bold',
  },
  localizacao: {
    color: 'lightgray',
    fontSize: 15,
    fontFamily: 'Helvetica',
  },
  botaoComprar: {
    backgroundColor: 'red',
    width: 140,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoComprar: {
    color: 'white',
    textAlign: 'center',
  },
  espacamento: {
    padding: 10,
  },
  carrinho: {
    textAlign: 'right',
    paddingLeft: 200,
  },
  carrinhoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantidadeNoCarrinho: {
    marginLeft: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  textoQuantidade: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default TelaInicial;
