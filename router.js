import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	MaterialCommunityIcons,
	Feather,
	MaterialIcons,
	AntDesign,
} from "@expo/vector-icons";

import LoginScreen from "./src/Screens/auth/LoginScreen";
import RegistrationScreen from "./src/Screens/auth/RegistrationScreen";
import PostsScreen from "./src/Screens/main/PostsScreen";
import CreatePostsScreen from "./src/Screens/main/CreatePostsScreen";
import ProfileScreen from "./src/Screens/main/ProfileScreen";

import Home from "./src/Screens/Home";

import { ReactComponent as SVG } from "./assets/grid.svg";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
	if (!isAuth) {
		return (
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
		);
	}
	return (
		<MainTab.Navigator
			screenOptions={{ tabBarShowLabel: false }}
			initialRouteName="Create"
		>
			<MainTab.Screen
				name="Posts"
				component={PostsScreen}
				options={{
					title: "Публикации",
					headerRight: (props) => (
						<MaterialIcons
							name="logout"
							size={24}
							style={{
								marginRight: 15,
								color: "#BDBDBD",
							}}
							onPress={() => {
								console.log("LogOut");
							}}
						/>
					),
					tabBarIcon: ({ focused, size, color }) => (
						<MaterialCommunityIcons
							name="postage-stamp"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<MainTab.Screen
				name="Create"
				component={CreatePostsScreen}
				options={{
					title: "Создать публикацию",
					headerLeft: (props) => (
						<AntDesign
							name="arrowleft"
							size={24}
							style={{
								marginLeft: 15,
								color: "rgba(33, 33, 33, 0.8)",
							}}
							onPress={() => {
								console.log("LogOut");
							}}
						/>
					),
					tabBarIcon: ({ focused, size, color }) => (
						<Feather
							name="plus"
							size={size}
							color={"white"}
							style={{
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: "#FF6C00",
								borderWidth: 1,
								borderColor: "#FF6C00",
								borderRadius: 20,
							}}
						/>
					),
				}}
			/>
			<MainTab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ focused, size, color }) => (
						<Feather name="user" size={size} color={color} />
					),
					headerShown: false,
				}}
			/>
		</MainTab.Navigator>
	);
};
