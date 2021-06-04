import React from "react";

import Container from "../components/Container";
import Contents from "../components/Contents";
import styled from "styled-components/native";

const Text = styled.Text`
	font-size: 20px;
	line-height: 28px;
`;

const Details = ({ navigation }) => {
	return (
		<Container>
			<Contents>
				<Text>sdaf</Text>
			</Contents>
		</Container>
	);
};

export default Details;
