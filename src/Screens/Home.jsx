import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, MaterialIcons, AntDesign } from "@expo/vector-icons";

import CreatePostsScreen from "./main/CreatePostsScreen";
// import DefaultPostScreen from "./nestedScreens/DefaultPostScreen";
import ProfileScreen from "./main/ProfileScreen";
import PostScreen from "./main/PostsScreen";

const MainTab = createBottomTabNavigator();

function Home({ navigation }) {
	return (
		<MainTab.Navigator>
			<MainTab.Screen
				name="PostScreen"
				component={PostScreen}
				options={{
					title: "Публикации",
					headerStyle: {
						borderBottomColor: "#BDBDBD",
						borderBottomWidth: 1,
					},
					headerRight: () => (
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
						<Feather name="grid" size={size} color={color} />
					),
				}}
			/>
			<MainTab.Screen
				name="Create"
				component={CreatePostsScreen}
				options={{
					title: "Создать публикацию",

					headerStyle: {
						borderBottomColor: "#BDBDBD",
						borderBottomWidth: 1,
					},
					headerLeft: (props) => (
						<AntDesign
							name="arrowleft"
							size={24}
							style={{
								marginLeft: 15,
								color: "rgba(33, 33, 33, 0.8)",
							}}
							onPress={() => {
								navigation.goBack();
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
}

export default Home;
