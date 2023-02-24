import { useEffect, useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	FlatList,
	Image,
	TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const PostScreen = ({ route, navigation }) => {
	const data = route?.params?.data;

	const [posts, setPosts] = useState([]);
	useEffect(() => {
		if (data) return setPosts((prev) => [...prev, data]);
	}, [data]);

	return (
		<View style={styles.container}>
			<FlatList
				data={posts}
				keyExtractor={(_, idx) => idx.toString()}
				renderItem={({ item }) => {
					const location = item.location;

					return (
						<View style={styles.wrapper}>
							<View style={styles.imgWrapper}>
								<Image
									source={{ uri: item.photo }}
									style={{
										...styles.img,
										width: "100%",
										height: 200,
									}}
								/>
								<Text style={styles.name}>
									{item.pictureName}
								</Text>
							</View>
							<View style={styles.descriptionWrapper}>
								<TouchableOpacity
									style={styles.commentWrapper}
									onPress={() =>
										navigation.navigate("CommentScreen")
									}
								>
									<Feather
										name="message-circle"
										size={24}
										color="#BDBDBD"
										style={{ ...styles.commentIcon }}
									/>
									<Text style={styles.commentNumber}>0</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.locationWrapper}
									onPress={() =>
										navigation.navigate("MapScreen", {
											location,
										})
									}
								>
									<Feather
										name="map-pin"
										size={24}
										color="#BDBDBD"
										style={styles.pin}
									/>
									<Text style={styles.location}>
										{item.location}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					);
				}}
			/>
		</View>
	);
};

export default PostScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		marginHorizontal: 16,
	},
	wrapper: {
		marginTop: 32,
	},
	imgWrapper: {
		marginBottom: 8,
	},
	img: {
		marginBottom: 8,
	},
	name: {
		color: "#212121",
		fontSize: 16,
	},
	descriptionWrapper: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "baseline",
	},
	commentWrapper: {
		alignItems: "center",
		flexDirection: "row",
	},
	commentIcon: {
		transform: [{ rotateZ: "270deg" }],
		marginRight: 6,
	},
	commentNumber: {
		color: "#BDBDBD",
		fontSize: 16,
	},
	locationWrapper: {
		alignItems: "baseline",
		flexDirection: "row",
	},
	pin: {
		marginRight: 4,
	},
	location: {
		color: "#212121",
		textDecorationLine: "underline",
	},
});
