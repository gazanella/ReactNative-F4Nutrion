import { FlatList, Dimensions } from "react-native";
import { DEVELOPERS } from "../../services/data/developers";
import ProfileBox from "./Box/ProfileBox";

export default function ProfileList() {
  /* Define o modo de rolagem entre os perfis dos desenvolvedores. */
  const { width } = Dimensions.get("window");
  const perfilCenter = DEVELOPERS.map((y, posX) => posX * (width * 0.8) + posX  * 40 )
  return ( 
    <FlatList
      data={DEVELOPERS}
      keyExtractor={(dev) => dev.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item: dev }) => <ProfileBox dev={dev} />}
      horizontal
      snapToOffsets={perfilCenter}
      snapToAlignment={"start"}
      scrollEventThrottle={16}
      decelerationRate="fast"
      style={{ marginTop: "5%" }}
    />
  );
}
