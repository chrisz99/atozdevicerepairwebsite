import Image, { StaticImageData } from "next/image";

type ThemedTextProps = {
  text: string;
  image?: StaticImageData;
  textStyle?: string;
  imagePosition?: "left" | "right";
  imageWidth?: number;
  imageHeight?: number;
  imageStyle?: string;
  style?: React.CSSProperties;
  linkable?: boolean;
  link?: string;
  linkType?: "mail" | "telephone";
};

export const ThemedText: React.FC<ThemedTextProps> = ({ text, textStyle, imagePosition, imageHeight, imageWidth, image, imageStyle, style, linkable, linkType, link }) => {
  return (
    <div style={{ flexDirection: "row", display: "flex", alignItems: "center", ...style }}>
      {imagePosition && image && imagePosition === "left" && <Image alt={"Supporting Image"} style={{ marginRight: ".3vw" }} className={imageStyle} src={image} />}
      {linkable && linkType && link && (
        <a href={linkType === "mail" ? "mailto:" : "tel:+" + link} style={{ textDecoration: "none" }}>
          <span style={{ textAlign: "center" }} className={textStyle}>
            {text}
          </span>
        </a>
      )}
      {!linkable && <span className={textStyle}>{text}</span>}

      {imagePosition && image && imagePosition === "right" && <Image alt={"Supporting Image"} style={{ marginRight: ".3vw" }} className={imageStyle} src={image} />}
    </div>
  );
};
