import { useEffect } from "react";
import { Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CommentsScreen = ({ navigation }) => {
	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
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
		});
	}, []);

	return <Text>CommentsScreen</Text>;
};

export default CommentsScreen;
