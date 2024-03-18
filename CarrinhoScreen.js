import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CarrinhoScreen = ({ route }) => {
  const { carrinho } = route.params;
  const navigation = useNavigation();

  const calcularTotal = () => {
    let total = 0;
    for (const item of carrinho) {
      total += item.preco;
    }
    return total;
  };

  const totalPedido = calcularTotal();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <FlatList
          data={carrinho}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.view}>
              <Text style={styles.item}>{item.nome}</Text>
              <View style={styles.direcionamento}>
                <Text style={styles.localizacao}>{item.localizacao}</Text>
                <Text style={[styles.preco, styles.alignRight]}>
                  R$ {item.preco.toFixed(2)}
                </Text>
              </View>
            </View>
          )}
        />

        <View>
          <Text style={styles.total}>Total do Pedido: </Text>
          <Text style={styles.dinheiro}>R$ {totalPedido.toFixed(2)}</Text>
        </View>
      </ScrollView>

      <View style={styles.botaoContainer}>
        <Pressable
          style={styles.botaoComprar}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'MeuApp' }],
            });
          }}>
          <Text style={styles.textoComprar}>Comprar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 12,
    fontFamily: 'Helvetica',
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  view: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  localizacao: {
    color: 'lightgray',
    fontSize: 15,
    fontFamily: 'Helvetica',
    marginBottom: 10,
    paddingLeft: 12,
  },
  direcionamento: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 12,
  },
  alignRight: {
    textAlign: 'right',
  },
  total: {
    textAlign: 'center',
    color: 'lightgray',
    fontSize: 15,
    paddingTop: 20,
  },
  dinheiro: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
  },
  botaoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 20,
  },
  botaoComprar: {
    backgroundColor: 'red',
    width: 250,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoComprar: {
    color: 'white',
    textAlign: 'center',
    width: 200,
  },
});

export default CarrinhoScreen;
