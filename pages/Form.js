import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Contents from "../components/Contents";
import styled from "styled-components/native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Label = styled.Text`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 12px;
`;

const Input = styled.TextInput`
	width: 100%;
	border: 1px solid #666666;
	padding: 8px;
	margin-bottom: 12px;

	font-size: 20px;
`;

const Form = ({ navigation }) => {
	const [date, setDate] = useState("");
	const [text, setText] = useState("");

	const store = async () => {
		if (date.replace(/(\s*)/g, "") === "") {
			return;
		}
		if (text.replace(/(\s*)/g, "") === "") {
			return;
		}
		let list = await AsyncStorage.getItem("diary");
		if (list === null) {
			list = [];
		} else {
			list = JSON.parse(list);
		}
		list.push({
			date,
			text,
			id: list.length,
		});
		console.log(list);
		await AsyncStorage.setItem("diary", JSON.stringify(list));
		navigation.goBack();
	};

	return (
		<Container>
			<Contents>
				<Label>Date</Label>
				<Input
					value={date}
					placeholder='YYYY-MM-DD'
					onChangeText={(value) => {
						setDate(value);
					}}
				/>
				<Label>Contents</Label>
				<Input
					value={text}
					multiline={true}
					style={{ height: 200 }}
					onChangeText={(value) => {
						setText(value);
					}}
				/>
			</Contents>
			<Button onPress={store}>Save</Button>
		</Container>
	);
};

export default Form;
