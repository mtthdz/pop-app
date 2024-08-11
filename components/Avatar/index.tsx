import { Image } from "react-native";
import { SAV } from "./Avatar.styles";

interface AvatarProps {
  image?: null | string;
  size: 's' | 'm' | 'l';
}

const getSizeStyle = (size: string) => {
  switch (size) {
    case 'xs':
      return { width: 24, height: 24 };
    case 's':
      return { width: 40, height: 40 };
    case 'm':
    default:
      return { width: 52, height: 52 };
    case 'l':
      return { width: 96, height: 96 };
  }
};

export default function Avatar({ image, size }: AvatarProps ) {
  const sizeStyle = getSizeStyle(size);
  const avatarImage = image ? image : 'https://placecage.vercel.app/placecage/g/200/300';

  return <Image style={[SAV.container, sizeStyle]} source={{ uri: avatarImage }} />;
};
