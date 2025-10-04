import { ImageBackground, View, Text } from 'react-native';

import { Button } from "@/components/button/";

import BackgroundImg from '../assets/menu.png';

export default function Menu(){
  return (
  <ImageBackground
    source={BackgroundImg}
    className="flex-1"
    resizeMode="cover"
  >
    <View className="flex-1 items-center justify-center">
      <Text className="text-white text-2xl font-bold">
        Seu Conteúdo Aqui
      </Text>
    </View>
  </ImageBackground>
  )
}
