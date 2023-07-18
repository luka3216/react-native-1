import {
  SectionList,
  SectionListProps,
  SectionListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

export default function MenuSectionItems() {
  const renderItem: SectionListProps<{
    name: string;
    price: string;
  }>["renderItem"] = ({ item: { name, price } }) => (
    <View style={styles.itemView}>
      <Text style={styles.itemText}>{name}</Text>
      <Text style={styles.itemText}>{price}</Text>
    </View>
  );

  const renderSectionHeader: SectionListProps<{
    name: string;
    price: string;
  }>["renderSectionHeader"] = ({section: {title}}) => <Text style={styles.title}>{title}</Text>;

  return (
    <SectionList
      sections={menuItemsToDisplay}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={({name, price}) => name + price}
    />
  );
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: 'yellow',
        textAlign: 'center',
        fontSize: 20,
    },
    itemView: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemText: {
        color: 'yellow',
        fontSize: 16,
    }
})
