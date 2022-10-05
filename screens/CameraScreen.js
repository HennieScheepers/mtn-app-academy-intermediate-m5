import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { SafeAreaView } from "react-native-safe-area-context";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import { Button } from "react-native-web";

export default function CameraScreen() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting Permission...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change in settings.{" "}
      </Text>
    );
  }

  let takePic = async () => {
    let options = {
      quality : 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {

    };

    let savePic = () => {

    };

    return (
      <SafeAreaView style={style.container}>
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64}}/>
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View>
        {" "}
        style={styles.buttonContainer}
        <Button title="Take Pic" onPress={takePic} />
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    backgroundColor: '#fff',
    alignSelf : 'flex-end'
  },
  preview: {
    alignSelf: 'stretch'
  }
});
