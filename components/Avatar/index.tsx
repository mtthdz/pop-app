import { Image } from "react-native";
import { SAV } from "./Avatar.styles";

interface AvatarProps {
  image?: null | string;
  size: 's' | 'm' | 'l';
}

const getSizeStyle = (size: string) => {
  switch (size) {
    case 's':
      return { width: 32, height: 32 };
    case 'm':
    default:
      return { width: 54, height: 54 };
    case 'l':
      return { width: 96, height: 96 };
  }
};

export default function Avatar({ image, size }: AvatarProps ) {
  const sizeStyle = getSizeStyle(size);
  const avatarImage = image ? image : 'https://placecage.vercel.app/placecage/g/200/300';

  return <Image style={[SAV.container, sizeStyle]} source={{ uri: avatarImage }} />;
};
