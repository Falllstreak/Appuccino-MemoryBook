import { Camera } from 'expo-camera';
import React, { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log('📸 Photo URI:', photo.uri);
    }
  };

  if (hasPermission === null) return <View />;
  if (hasPermission === false) return <Text>No access to camera</Text>;

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={cameraRef} />
      <Button title="Snap!" onPress={takePhoto} />
    </View>
  );
}
// Testing style
const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
});
