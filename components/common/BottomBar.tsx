import styles from "../../app/styles/global.module.css";

import { ThemedText } from "./ThemedText";

import Telephone from "../../public/assets/phone-5-512.png";
import MessageIcon from "../../public/assets/email-5-512.png";
import LocationIcon from "../../public/assets/pin-4-512.png";

export const BottomBar: React.FC = () => {
  return (
    <div className={styles.bottombar}>
      <div style={{ display: "flex", flexDirection: "column", rowGap: "1vh" }}>
        <ThemedText imagePosition="left" image={Telephone} imageStyle={styles.bottombar_image} textStyle={styles.bottombar_largeText} text="Call / Text Us" />
        <ThemedText linkable linkType="telephone" link="7322393301" style={{ alignSelf: "center" }} text="Tel: 732-239-3301" textStyle={styles.bottombar_smallText} />
      </div>

      <div className={styles.divider} />

      <div style={{ display: "flex", flexDirection: "column", rowGap: "1vh" }}>
        <ThemedText imagePosition="left" image={MessageIcon} imageHeight={50} imageStyle={styles.bottombar_image} imageWidth={45} textStyle={styles.bottombar_largeText} text="Email Us" />
        <ThemedText linkable linkType="mail" link="azrepairspeoria@gmail.com" style={{ alignSelf: "center" }} text="azrepairspeoria@gmail.com" textStyle={styles.bottombar_smallText} />
      </div>

      <div className={styles.divider} />

      <div style={{ display: "flex", flexDirection: "column", rowGap: "1.5vh" }}>
        <ThemedText imagePosition="left" image={LocationIcon} imageHeight={50} imageStyle={styles.bottombar_image} imageWidth={45} textStyle={styles.bottombar_largeText} text="Location" />
        <ThemedText style={{ alignSelf: "center" }} text="Serving Peoria, AZ, and beyond" textStyle={styles.bottombar_smallText} />
      </div>
    </div>
  );
};
