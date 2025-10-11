import { useState } from "react";
import { ImageBackground, View, Text } from 'react-native';

import { Button } from "@/components/button/";
import { Input } from '@/components/input';

import BackgroundImg from '../assets/menu.png';
import { EnvelopeIcon, LockKeyIcon } from 'phosphor-react-native'

export default function Menu(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
  <ImageBackground source={BackgroundImg} className="flex-1" resizeMode="cover">
    <View className="flex-1 items-center justify-center">
      <Input
        icon={EnvelopeIcon}
        placeholder="nome.sobrenome@xxx.com"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        icon={LockKeyIcon}
        placeholder="Mínimo de 8 caracteres"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
    </View>
  </ImageBackground>
  )
}
