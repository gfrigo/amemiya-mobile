import { TouchableOpacity, Text } from "react-native"

type Props = {
  title: string
}

export function Button({ title }: Props){
  return(
    <TouchableOpacity className="w-full h-[52] bg-black rounded-[12] justify-center items-center">
      <Text className="font-medium text-[14px] color-white">
        {title}
      </Text>
    </TouchableOpacity>    
  )
}