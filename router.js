import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./src/Screens/auth/LoginScreen";
import RegistrationScreen from "./src/Screens/auth/RegistrationScreen";

import Home from "./src/Screens/Home";
import CommentsScreen from "./src/Screens/nestedScreens/CommentsScreen";
import MapScreen from "./src/Screens/nestedScreens/MapScreen";

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

export const useRoute = (isAuth) => {
	return (
		<>
			{isAuth ? (
				<MainStack.Navigator initialRouteName="Home">
					<MainStack.Screen
						name="Home"
						component={Home}
						options={{ headerShown: false }}
					/>

					<MainStack.Screen
						name="CommentScreen"
						component={CommentsScreen}
						options={{
							title: "Комментарии",

							headerStyle: {
								borderBottomColor: "#BDBDBD",
								borderBottomWidth: 1,
							},
						}}
					/>

					<MainStack.Screen name="MapScreen" component={MapScreen} />
				</MainStack.Navigator>
			) : (
				<AuthStack.Navigator initialRouteName="Register">
					<AuthStack.Screen
						name="Registration"
						component={RegistrationScreen}
						options={{ headerShown: false }}
					/>
					<AuthStack.Screen
						name="Login"
						component={LoginScreen}
						options={{ headerShown: false }}
					/>
				</AuthStack.Navigator>
			)}
		</>
	);
};
