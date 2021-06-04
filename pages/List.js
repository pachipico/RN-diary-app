import React from "react";
import { View, Text, Button } from "react-native";

const List = ({ navigation }) => {
	return (
		<View>
			<Text>List</Text>
			<Button
				title='to Details'
				onPress={() => navigation.navigate("Details")}
			/>
			<Button title='to Form' onPress={() => navigation.navigate("Form")} />
		</View>
	);
};

export default List;
