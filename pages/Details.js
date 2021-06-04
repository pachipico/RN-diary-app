import React from "react";
import { View, Text, Button } from "react-native";

const Details = ({ navigation }) => {
	return (
		<View>
			<Text>Details</Text>
			<Button title='to List' onPress={() => navigation.navigate("List")} />
			<Button title='to Form' onPress={() => navigation.navigate("Form")} />
		</View>
	);
};

export default Details;
