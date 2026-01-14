// import { Text, View, ImageBackground, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
// import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   background: {
//     flex: 1,
//     justifyContent: "center",
//     width: "100%",
//     height: Dimensions.get("window").height,
//   },
//   companyLogo: {
//     width: "100%",
//     alignItems: "center",
//     padding: 20,
//     marginBottom: 50,
//   },
//   textGroup: {
//     alignItems: "center",
//   },
//   textLarge: {
//     color: "white",
//     fontWeight: "800",
//     fontSize: 40,
//     textAlign: "center",
//     marginBottom: 12,
//   },
//   textSmall: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "200",
//     textAlign: "center",
//   },
//   transparentButton: {
//     borderColor: "white",
//     borderWidth: 2,
//     borderRadius: 40,
//     paddingVertical: 15,
//     paddingHorizontal: 5,
//     alignItems: "center",
//     fontSize: 20,
//     flex: 1,
//   },
//   button: {
//     borderColor: "white",
//     borderWidth: 2,
//     borderRadius: 40,
//     paddingVertical: 15,
//     paddingHorizontal: 5,
//     alignItems: "center",
//     fontSize: 20,
//     backgroundColor: "white",
//     flex: 1,
//   },
//   buttonGroup: {
//     flexDirection: "row",
//     gap: 20,
//     paddingHorizontal: 20,
//   },
// });

// export default function Index() {
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={{ flex: 1 }}>
//         <ImageBackground
//           source={require("@/assets/images/background-image.png")}
//           style={styles.background}
//           resizeMode="cover">
//           <View style={styles.companyLogo}>
//             <Image source={require("@/assets/images/Logo.png")} />
//           </View>
//           <View style={styles.textGroup}>
//             <Text style={styles.textLarge}>Find your favorite place here</Text>
//             <Text style={styles.textSmall}>The best prices for over 2 </Text>
//             <Text style={styles.textSmall}>million properties worldwide</Text>
//           </View>
//           <View style={styles.buttonGroup}>
//             <TouchableOpacity style={styles.button}>
//                 <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.transparentButton}>
//                 <Text style={styles.textSmall}>Sign In</Text>
//             </TouchableOpacity>
//             <View style={{ alignItems: "center", paddingVertical: 20 }}>
//                 <Text style={{ color: "white" }}>Continue to home</Text>
//             </View>
//           </View>
//         </ImageBackground>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// }

import { router } from 'expo-router';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BACKGROUNDIMAGE, HEROLOGO } from '@/constants';
import { styles } from '@/styles/_mainstyle';

export default function Index() {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={BACKGROUNDIMAGE}
                style={styles.backgroundImageContainer}
                resizeMode="cover"
            >
                <View style={styles.logoContainer}>
                    <Image source={HEROLOGO} />
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Find your favorite place here</Text>

                    <View style={styles.titleSubTextContainer}>
                        <Text style={styles.titleSubText}>
                            The best prices for over 2
                        </Text>
                        <Text style={styles.titleSubText}>
                            million properties worldwide
                        </Text>
                    </View>
                </View>

                <View style={styles.buttonGroup}>
                    <TouchableOpacity
                        style={styles.buttonPrimary}
                        onPress={() => router.push('/join')}
                    >
                        <Text style={styles.buttonPrimaryText}>Join here</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonSecondary}
                        onPress={() => router.push('/signin')}
                    >
                        <Text style={styles.buttonSecondaryText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleSubText}>Continue to home</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}
