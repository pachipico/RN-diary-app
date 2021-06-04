import React from "react";
import Container from "../components/Container";
import Contents from "../components/Contents";
import Button from "../components/Button";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";

const ListItem = styled.TouchableOpacity`
	width: 100%;
	padding: 12px 0;
	border-bottom-color: #999999;
	border-bottom-width: 1px;
`;
const Label = styled.Text`
	font-size: 20px;
`;
const List = ({ navigation }) => {
	const [itemList, setItemList] = useState([]);

	const load = async () => {
		const data = await AsyncStorage.getItem("diaries");
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
				{itemList &&
					itemList.map((data, index) => {
						return (
							<ListItem
								key={index}
								onPress={() => navigation.navigate("Details")}
							>
								<Label>Diary from {data.date}</Label>
							</ListItem>
						);
					})}
			</Contents>
			<Button onPress={() => navigation.navigate("Form")}>new</Button>
		</Container>
	);
};

export default List;
