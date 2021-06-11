import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Container from "../components/Container";
import Contents from "../components/Contents";
import styled from "styled-components/native";
import { useState, useEffect } from "react";

const Date = styled.View`
	align-items: center;
`;

const Text = styled.Text`
	font-size: 20px;
	line-height: 28px;
`;

const Details = ({ navigation, route }) => {
	const [text, setText] = useState("");

	useEffect(() => {
		AsyncStorage.getItem("diary").then((data) => {
			const list = JSON.parse(data);
			const diary = list.find((element) => element.id === route.params.id);
			setText(diary.text);
		});
	}, []);

	// navigation.setOptions({ title: route.params.date });
	return (
		<Container>
			<Contents>
				<Date>
					<Text>{route.params.date}</Text>
				</Date>
				<Text>{text}</Text>
			</Contents>
		</Container>
	);
};

export default Details;
