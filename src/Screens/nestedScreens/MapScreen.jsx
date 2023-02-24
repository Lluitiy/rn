import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import * as Location from "expo-location";

import { AntDesign } from "@expo/vector-icons";

const MapScreen = ({ route, navigation }) => {
	const data = route?.params;

	const [coords, setCoords] = useState({
		longitude: "",
		latitude: "",
	});
	useEffect(() => {
		(async () => {
			const coords = await Location.geocodeAsync(data.location);
			setCoords((prev) => ({
				...prev,
				longitude: coords[0].longitude,
				latitude: coords[0].latitude,
			}));
		})();

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
	}, [data]);

	return (
		<View style={styles.container}>
			<MapView
				style={{ flex: 1 }}
				initialRegion={{
					latitude: coords?.latitude,
					longitude: coords?.longitude,
					latitudeDelta: 0.1,
					longtitudeDelta: 0.6,
				}}
			>
				<Marker
					coordinate={{
						latitude: coords?.latitude,
						longitude: coords?.longitude,
					}}
				/>
			</MapView>
		</View>
	);
};

export default MapScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
});
