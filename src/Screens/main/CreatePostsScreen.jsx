import { useEffect, useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Image,
	Keyboard,
	TextInput,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";

import { Camera } from "expo-camera";
import { Feather } from "@expo/vector-icons";

const CreatePostsScreen = ({ navigation }) => {
	const [camera, setCamera] = useState(null);
	const [cameraPermission, setCameraPermission] = useState(null);
	const [isShowKeyboard, setIsShowKeyboard] = useState(false);
	const [data, setData] = useState({
		photo: "",
		pictureName: "",
		location: "",
	});

	const permisionFunction = async () => {
		const cameraPermission = await Camera.requestCameraPermissionsAsync();
		setCameraPermission(cameraPermission.status === "granted");
	};

	useEffect(() => {
		permisionFunction();
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				console.log("Permission to access location was denied");
				return;
			}
			let location = await Location.getCurrentPositionAsync({});
			const latitude = location.coords.latitude;
			const longitude = location.coords.longitude;
			let adress = await Location.reverseGeocodeAsync({
				latitude,
				longitude,
			});

			setData((prev) => ({
				...prev,
				location: `${adress[0].district}, ${adress[0].isoCountryCode}`,
			}));
		})();
	}, [location]);

	const hideKeyboard = () => {
		setIsShowKeyboard(false);
		Keyboard.dismiss();
	};

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setData((prev) => ({ ...prev, photo: result.assets[0].uri }));
		}
	};

	const takePhoto = async () => {
		const picture = await camera.takePictureAsync();
		setData((prev) => ({ ...prev, photo: picture.uri }));
	};

	const onChangePhoto = (isPhoto) => {
		isPhoto ? setData((prev) => ({ ...prev, photo: "" })) : pickImage();
	};

	const submitData = () => {
		hideKeyboard();

		navigation.navigate("PostScreen", { data });
		setData({ photo: "", pictureName: "", location: "" });
	};

	const isData = data.photo && data.pictureName && data.location;
	return (
		<TouchableWithoutFeedback onPress={() => hideKeyboard()}>
			<View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
				<View style={styles.container}>
					<KeyboardAvoidingView behavior="padding">
						{!isShowKeyboard && (
							<>
								{cameraPermission && (
									<Camera
										style={styles.camera}
										ref={setCamera}
									>
										{data.photo && (
											<View style={styles.photoContainer}>
												<Image
													source={{ uri: data.photo }}
													style={{ height: 240 }}
												/>
											</View>
										)}
										{!data.photo && (
											<TouchableOpacity
												style={styles.snap}
												onPress={takePhoto}
											>
												<Image
													source={require("../../../assets/camera.svg")}
													style={{
														...styles.cameraIcon,
														width: 24,
														height: 24,
														color: "#ffffff",
													}}
												/>
											</TouchableOpacity>
										)}
									</Camera>
								)}

								<TouchableOpacity
									activeOpacity={0.8}
									onPress={() => onChangePhoto(data.photo)}
								>
									<Text style={styles.upload}>
										{data.photo
											? "Переснять"
											: "Загрузите фото"}
									</Text>
								</TouchableOpacity>
							</>
						)}
						<View
							style={{
								...styles.inputWrapper,
								marginTop: isShowKeyboard ? 130 : 0,
							}}
						>
							<TextInput
								style={styles.input}
								value={data.pictureName}
								onChangeText={(e) =>
									setData((prev) => ({
										...prev,
										pictureName: e,
									}))
								}
								placeholder={"Название..."}
								placeholderTextColor="#BDBDBD"
								onFocus={() => setIsShowKeyboard(true)}
								onBlur={() => setIsShowKeyboard(false)}
							/>

							<View>
								<TextInput
									style={{ ...styles.input, paddingLeft: 28 }}
									value={data.location}
									onChangeText={(e) =>
										setData((prev) => ({
											...prev,
											location: e,
										}))
									}
									placeholder={"Местность..."}
									placeholderTextColor="#BDBDBD"
									onFocus={() => setIsShowKeyboard(true)}
									onBlur={() => setIsShowKeyboard(false)}
								/>
								<Feather
									name="map-pin"
									size={24}
									color="#BDBDBD"
									style={styles.pin}
								/>
							</View>
						</View>
					</KeyboardAvoidingView>
					<TouchableOpacity
						disabled={!!isData ? false : true}
						onPress={submitData}
						style={{
							...styles.submitBtn,
							backgroundColor: !!isData ? "#FF6C00" : "#F6F6F6",
						}}
					>
						<Text
							style={{
								...styles.submitText,
								color: !!isData ? "#FFFFFF" : "#BDBDBD",
							}}
						>
							Опубликовать
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 16,
	},
	camera: {
		height: 240,

		marginTop: 32,
		marginBottom: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	snap: {
		width: 60,
		height: 60,
		backgroundColor: "rgba(255, 255, 255, 0.3)",
		borderRadius: "50%",
		alignItems: "center",
		justifyContent: "center",
	},
	cameraIcon: {
		// backgroundColor: "#BDBDBD",
		width: 24,
		height: 24,
		fill: "#000000",
	},
	photoContainer: {
		position: "absolute",
		bottom: 0,
		left: 0,

		width: "100%",
		height: 240,
	},
	upload: {
		color: "#BDBDBD",
		fontSize: 16,
		marginBottom: 32,
	},
	inputWrapper: {
		marginBottom: 32,
	},
	input: {
		width: "100%",
		paddingVertical: 16,
		marginBottom: 16,
		color: "#212121",
		borderBottomWidth: 1,
		borderBottomColor: "#BDBDBD",
	},
	pin: {
		position: "absolute",
		top: 13,
	},
	submitBtn: {
		width: "100%",
		paddingVertical: 16,
		paddingHorizontal: 32,
		borderWidth: 1,
		borderRadius: 100,
		borderColor: "transparent",
	},
	submitText: {
		textAlign: "center",
		justifyContent: "center",
	},
});
