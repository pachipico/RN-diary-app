import React from "react";

import Container from "../components/Container";
import Contents from "../components/Contents";
import styled from "styled-components/native";

const Text = styled.Text`
	font-size: 20px;
	line-height: 28px;
`;

const Details = ({ navigation, route }) => {
	navigation.setOptions({ title: route.params.date });
	return (
		<Container>
			<Contents>
				<Text>{route.params.text}</Text>
			</Contents>
		</Container>
	);
};

export default Details;
