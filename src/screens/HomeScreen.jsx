import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Foundation from "@expo/vector-icons/Foundation";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";


export default function HomeScreen() {
  // Les propriétés d'afficher et cacher les password
  const [showP, setShowP] = useState(false);
  const [visibleP, setVisibleP] = useState(true);

  //  Route 
  const navigation = useNavigation();

  return (
    // Bloc couleur bleu
    <View className="bg-[#4c41dd] h-full relative">
      <View className="mb-[20%]">
        {/* Icon setting */}
        <TouchableOpacity 
          onPress={() => navigation.navigate("Setting")}
          style={{ padding: "15", marginTop: "10%" }}>
          <Ionicons name="settings" size={24} color="white" />
        </TouchableOpacity>

        {/* Montant et visibilité */}
        <View className="text-center flex flex-row mx-['25%']">
          <TextInput
            value="200.000F"
            secureTextEntry={visibleP}
            editable={false}
            selectTextOnFocus={false}
            className="tracking-widest text-[white] text-center text-[2.5rem] font-extrabold"
          />
          {/* Affiche et cacher le mdp */}
          <TouchableOpacity
            onPress={() => {
              setVisibleP(!visibleP);
              setShowP(!showP);
            }}
            style={{ top: 20 }}
          >
            <Ionicons
              name={showP === false ? "eye-outline" : "eye-off-outline"}
              size={25}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bloc Couleur blanche */}
      <View className="bg-white h-full rounded-t-[25] pt-32 px-5 relative">
        <View className="flex flex-row justify-between">
          <View>
            <View className="bg-[#e0e5ff] h-[28%] w-[90%] rounded-full">
              <Ionicons
                name="person"
                size={35}
                color="#0d1c99"
                className="px-3 py-2"
              />
            </View>
            <Text className="font-extrabold">Transfert</Text>
          </View>

          <View>
            <View className="bg-[#fff7d4] h-[28%] w-[85%] rounded-full">
              <Foundation
                name="shopping-cart"
                size={40}
                color="#de6b34"
                className="px-3 py-2"
              />
            </View>
            <Text className="font-extrabold">Paiements</Text>
          </View>

          <View>
            <View className="bg-[#fcf1ef] h-[28%] w-[95%] rounded-full">
              <FontAwesome
                name="bank"
                size={30}
                color="#ff474a"
                className="px-3 py-3"
              />
            </View>
            <Text className="font-extrabold text-center">Banque</Text>
          </View>

          <View>
            <View className="bg-[#ffdef3] h-[28%] w-[95%] rounded-full">
              <MaterialCommunityIcons
                name="cash-register"
                size={40}
                color="#ff66d2"
                className="px-3 py-2"
              />
            </View>
            <Text className="font-extrabold text-center">Coffre</Text>
          </View>
        </View>

        {/* barre gris */}
        <View className="bg-slate-100 mx-[-15px] mt-[-30%]">
          <Text></Text>
        </View>

        {/* Les textes  */}
        <View>
            <View className="flex flex-row justify-between mt-7">
              <Text className="font-bold text-[1.2rem] text-[#170380]">Paiement Arouna Kiosque</Text>
              <Text className="font-bold text-[1.2rem] text-[#170380]">-500F</Text>
            </View>
            <View>
            <Text className="text-[1.2rem] text-[#c5c5c5]">19 déc., 19:14</Text>
            </View>
        </View>
        <View>
            <View className="flex flex-row justify-between mt-7">
              <Text className="font-bold text-[1.2rem] text-[#170380]">Paiement Basiboli</Text>
              <Text className="font-bold text-[1.2rem] text-[#170380]">-500F</Text>
            </View>
            <View>
              <Text className="text-[1.2rem] text-[#c5c5c5]">15 déc., 22:04</Text>
            </View>
        </View>
        
        <View>
            <View className="flex flex-row justify-between mt-7">
              <Text className="font-bold text-[1.2rem] text-[#170380]">Paiement Magazin Grâce</Text>
              <Text className="font-bold text-[1.2rem] text-[#170380]">-2000F</Text>
            </View>
            <View>
              <Text className="text-[1.2rem] text-[#c5c5c5]">15 déc., 08:05</Text>
            </View>
        </View>

        <View>
            <View className="flex flex-row justify-between mt-7">
              <Text className="font-bold text-[1.2rem] text-[#170380]">A Vianney 01 02 03 04 05</Text>
              <Text className="font-bold text-[1.2rem] text-[#170380]">-1500F</Text>
            </View>
            <View>
              <Text className="text-[1.2rem] text-[#c5c5c5]">10 déc., 09:30</Text>
            </View>
        </View>
      </View>

      {/* Carte wave */}
      <View className="absolute fixed-1 left-8">
        <Image
          source={require("../../assets/images/carte_wave.png")}
          style={{
            height: 170,
            width: 300,
            marginTop: "50%",
          }}
        />
      </View>
    </View>
  );
}
