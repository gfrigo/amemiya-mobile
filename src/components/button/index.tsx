import { TouchableOpacity, Text } from "react-native"

type ButtonProps = {
  title: string
}

export function Button({ title }: ButtonProps){
  return(
    <TouchableOpacity className="w-full h-[52] bg-black rounded-[12] justify-center items-center">
      <Text className="font-medium text-[14px] color-white">
        {title}
      </Text>
    </TouchableOpacity>    
  )
}