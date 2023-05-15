import { FlatList, ScrollView, StyleSheet, Text, View, SectionList } from 'react-native';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import FeedBack from "./FeedBack";

const allVehicles = [
      { id: 1, name: "Toyota Avalon", capacity: 4 },
      { id: 2, name: "Toyota Camry", capacity: 4 },
      { id: 3, name: "Toyota Corolla", capacity: 5 },
      { id: 4, name: "Toyota Passo", capacity: 4 },
      { id: 5, name: "Toyota Hiace", capacity: 4 },
      { id: 6, name: "Toyota Prius", capacity: 4 },
      { id: 7, name: "Toyota Yaris", capacity: 4 },
      { id: 8, name: "Toyota Fortuner", capacity: 4 },
      { id: 9, name: "Toyota Hilux", capacity: 4 },
      { id: 10, name: "Suzuki Mehran", capacity: 5 },
      { id: 11, name: "Suzuki Khyber", capacity: 4 },
      { id: 12, name: "Suzuki Swift", capacity: 4 },
      { id: 13, name: "Suzuki Alto", capacity: 4 },
      { id: 14, name: "Suzuki Bolan", capacity: 4 },
      { id: 15, name: "Suzuki Liana", capacity: 4 },
      { id: 16, name: "Suzuki Cultus", capacity: 4 },
      { id: 17, name: "Suzuki Wagon-R", capacity: 4 },
      { id: 18, name: "Daihatsu Cuore", capacity: 5 },
      { id: 19, name: "Daihatsu Mira", capacity: 5 },
      { id: 20, name: "Daihatsu Hijet", capacity: 9 },
      { id: 21, name: "Daihatsu Move", capacity: 6 },
];

export default function App() {
  const Item = ({name, capacity, style}) =>{
  return (
     <View>
       <Text style={style}>{name} -- ({capacity})</Text>
     </View>
   );
  }
                   
  const rendervehicleItem =  ({item}) => (<Item name={item.name} capacity={item.capacity} style={styles.menuItem}></Item>);


  const itemSeparatorComponent = () => <View style={styles.menuItem}></View>;


  return (
    <View style={styles.container}>
      <AppHeader heading="Baham" slogan="Reducing your carbon footprint..." />
      <View style={styles.mainContainer}>
        <FlatList
          style={styles.mainContainer}
          data={allVehicles}
          renderItem={rendervehicleItem}
          ItemSeparatorComponent={itemSeparatorComponent}
        />

        <FeedBack />
      </View>
      
      <AppFooter
        copyright="Copyright: Baham by project Dareecha (2023)"
        span="Karachi Insitute of Economics & Technology"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'gold'
  },
  mainContainer: {
    flex: 0.80,
    backgroundColor: 'beige'
  },
  menuItem: {
    textAlign: 'center',
    margin: 10,
    fontSize: 16,
    color: 'maroon'
  }
});