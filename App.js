import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Form from "./pages/Form";
import Details from "./pages/Details";
import List from "./pages/List";

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='List'
					component={List}
					options={{ title: "Diaries" }}
				/>
				<Stack.Screen
					name='Form'
					component={Form}
					options={{ title: "New Diary" }}
				/>
				<Stack.Screen name='Details' component={Details} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
