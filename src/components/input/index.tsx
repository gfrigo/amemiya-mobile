import React from "react"
import { View, TextInput, TextInputProps } from "react-native"
import { IconProps } from "phosphor-react-native"

type InputProps = TextInputProps & {
  icon: React.ElementType<IconProps>;
  placeholder: string;
};

export function Input({ icon: Icon, placeholder, ...rest }: InputProps){
  return(
    <View className="flex-row items-center border border-gray-200 rounded-[12] px-[20] py-[8] bg-white-100">
      <Icon size={24} color="#8A8A99" weight="regular"/>
      <TextInput
        className="flex-1 text-base text-black ml-[6]"
        placeholder={placeholder}
        placeholderTextColor="#8A8A99"
        {...rest}
      />
    </View>
  )
}