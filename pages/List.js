import React from "react";
import Container from "../components/Container";
import Contents from "../components/Contents";
import Button from "../components/Button";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";
import _ from "lodash";

const ListItem = styled.TouchableOpacity`
	width: 100%;
	padding: 12px 0;
	border-bottom-color: #999999;
	border-bottom-width: 1px;
	flex-direction: row;

	justify-content: space-between;
`;
const Label = styled.Text`
	font-size: 20px;
`;

const List = ({ navigation }) => {
	const [itemList, setItemList] = useState([]);

	const load = async () => {
		const data = await AsyncStorage.getItem("diary");
		if (data) {
			setItemList(JSON.parse(data));
		}
	};

	useEffect(() => {
		const reload = navigation.addListener("focus", () => {
			load();
		});
		load();
		return reload;
	}, [navigation]);

	return (
		<Container>
			<Contents>
				{_.sortBy(itemList, "date").map((data, index) => {
					return (
						<ListItem
							key={index}
							onPress={() =>
								navigation.navigate("Details", { date: data.date, id: data.id })
							}
						>
							<Label>Diary from {data.date}</Label>
							<Label>{data.text.slice(0, 10).trim()}...</Label>
						</ListItem>
					);
				})}
			</Contents>
			<Button onPress={() => navigation.navigate("Form")}>new</Button>
		</Container>
	);
};

export default List;
