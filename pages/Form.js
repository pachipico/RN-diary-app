import React from "react";
import { View, Text, Button } from "react-native";

const Form = ({ navigation }) => {
	return (
		<View>
			<Text>Form</Text>
			<Button title='to List' onPress={() => navigation.navigate("List")} />
		</View>
	);
};

export default Form;
