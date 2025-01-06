import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInUp, BounceIn, FadeInLeft } from 'react-native-reanimated';

export default function Setting() {
  //Route
  const navigation = useNavigation();

  return (
    <View className="bg-[#eeeeee] h-full">
      <View className="px-5 pt-16 pb-8">
        {/* Bouton Retour */}
        <View className="flex flex-row">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text className="font-extrabold text-[1.4rem] ml-10">Paramètres</Text>
        </View>
      </View>

      <ScrollView>
        <View>
          {/* Comptes */}
          <View>
            <Text className="text-[1.1rem] text-[#949494] ml-6">Comptes</Text>
            <Animated.View entering={BounceIn.delay(400).springify()} className="bg-white flex flex-row my-4 mx-5 p-6 rounded-[15] gap-[13]">
              <Ionicons name="person-add-sharp" size={24} color="black" />
              <Text className="text-[1.1rem]">Ajouter un autre compte</Text>
            </Animated.View>
          </View>

          {/* Partager */}
          <View className="mt-3">
            <Text className="text-[1.1rem] text-[#949494] ml-6">Partager</Text>
            <Animated.View entering={FadeInUp.delay(800).springify()} className="bg-white my-4 mx-5 p-6 rounded-[15] gap-[13]">
              <View className=" flex flex-row gap-[13]">
                <Ionicons name="share-social-sharp" size={24} color="black" />
                <Text className="text-[1.1rem]">
                  Inviter un ami à rejoindre Wave
                </Text>
              </View>

              <View className=" flex flex-row gap-[13]">
                <Ionicons name="sparkles-sharp" size={24} color="black" />
                <Text className="text-[1.1rem]">
                  Utiliser le code promotionnel
                </Text>
              </View>
            </Animated.View>
          </View>

          {/* Supports */}
          <View className="mt-8">
            <Text className="text-[1.1rem] text-[#949494] ml-6">Support</Text>
            <View className="bg-white my-3 mx-5 p-6 rounded-[15] gap-[13]">
              <View className=" flex flex-row gap-[13]">
                <Ionicons name="call-sharp" size={24} color="black" />
                <Text className="text-[1.1rem]">
                  Contactez le service client
                </Text>
              </View>

              <View className=" flex flex-row gap-[13]">
                <Ionicons name="newspaper-sharp" size={24} color="black" />
                <Text className="text-[1.1rem]">Vérifiez votre plafond</Text>
              </View>

              <View className=" flex flex-row gap-[13]">
                <Ionicons name="location-sharp" size={24} color="black" />
                <Text className="text-[1.1rem]">
                  Touvez les agents à proximité
                </Text>
              </View>
            </View>
          </View>

          {/* Sécurité */}
          <View className="mt-8">
            <Text className="text-[1.1rem] text-[#949494] ml-6">Sécurité</Text>
            <View className="bg-white my-3 mx-5 p-6 rounded-[15] gap-[13]">
              <View className=" flex flex-row gap-[13]">
                <Ionicons name="phone-portrait-outline" size={24} color="black" />
                <Text className="text-[1.1rem]">Vos appareils connectés</Text>
              </View>

              <View className=" flex flex-row gap-[13]">
                <Ionicons name="key-sharp" size={24} color="black" />
                <Text className="text-[1.1rem]">
                  Modifiez votre code secret
                </Text>
              </View>
            </View>
          </View>

          {/* se donncecter */}
          <View>
            <View className="bg-white flex flex-row my-10 mx-5 p-6 rounded-[15] gap-[13]">
              <Ionicons name="log-in" size={24} color="black" />
              <Text className="text-[1.1rem]">Se déconnecter (01 02 03 04 05)</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
