import React, {useState} from 'react';
import {
  StyleSheet, Text, View,
  Image, ScrollView, Pressable,
  Modal, Alert} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Turtle Pizza</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardLeft}>
            <Image
              style={styles.image}
              source={{
                uri: "https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272__480.jpg",
              }}
            />
            <Text>Pepperoni</Text>
          </View>
          <View>
            <Text style={styles.bold}>450 KGS</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text>Order total <Text style={styles.bold}>450 KGS</Text></Text>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>checkout</Text>
        </Pressable>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal}>
          <ScrollView>
            <View style={styles.modalTop}>
              <Text style={styles.modalTitle}>Your order:</Text>
              <View style={[styles.modalDish, styles.modalCard]}>
                <View style={styles.modalPrice}>
                  <Text>Pepperoni x 1</Text>
                </View>
                <View style={styles.modalPrice}>
                  <Text>450 KGS</Text>
                  <Button style={styles.deleteBtn}
                          type="clear"
                    icon={
                      <Icon
                        name="trash"
                        size={30}
                      />
                    }
                  />
                </View>
              </View>
              <View style={styles.modalDish}>
                <Text>Delivery: </Text>
                <Text>150 KGS</Text>
              </View>
              <View style={styles.modalDish}>
                <Text>Total: </Text>
                <Text>600 KGS</Text>
              </View>
            </View>
          </ScrollView>
          <View>
            <Pressable
              style={[styles.button, styles.buttonCancel]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.btnText}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonOrder]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.btnText}>Order</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  header: {
    paddingTop: 50,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    marginBottom: 20
  },
  headerText: {
    fontSize: 20
  },
  card: {
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
    marginRight: 10
  },
  bold: {
    fontWeight: 'bold'
  },
  footer: {
    paddingBottom: 40,
    paddingTop: 20,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#2296f3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2
  },
  buttonOpen: {
    opacity: 0.5
  },
  buttonCancel: {
    backgroundColor: "red",
    marginBottom: 5,
  },
  buttonOrder: {
    backgroundColor: "#2196F3",
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff'
  },
  textStyle: {
    color: '#fff'
  },
  modal: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#fff'
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 30
  },
  modalTop: {
    paddingTop: 30
  },
  modalDish: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10
  },
  modalPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteBtn :{
    width: 'auto',
    height: 'auto'
  },
  modalCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50
  }
});

