import localstyles from "../app/styles/home.module.css";
//Photo Imports
import ApplePhoto from "../public/assets/apple-logo.png";
import GooglePhoto from "../public/assets/google.png";
import WindowsPhoto from "../public/assets/windows.png";
import AndroidPhoto from "../public/assets/android.png";
import SamsungPhoto from "../public/assets/samsung.png";
import ColumnPhoto from "../public/assets/shopPhoto.jpg";
import MicroscopePhoto from "../public/assets/microscope.png";
import CooperationPhoto from "../public/assets/cooperation.png";
import LocationPhoto from "../public/assets/locationpin.png";
import HardDiskPhoto from "../public/assets/harddisk.png";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React from "react";

type ImageBadgeProps = {
  src: StaticImageData;
  label: string;
};

export default function Home() {
  return (
    <div>
      {/* <NavBar /> */}

      {/* Banner Section with Services */}
      <div className={localstyles.banner}>
        <span className={localstyles.banner_text}>🧠 Logic Board & Microsoldering Repairs</span>
        <span className={localstyles.banner_text}>📱 Screen & Battery Replacements</span>
        <span className={localstyles.banner_text}>🔒 Unlocks & OS Reinstalls</span>
        <span className={localstyles.banner_text}>🛡️ Virus & Malware Removal</span>
        <span className={localstyles.banner_text}>💾 Data Backup, Recovery, Transfer</span>
        <span className={localstyles.banner_text}>⚙️ General Diagnostics</span>
      </div>

      {/* Column Section 1 ( Welcome Message ) */}
      <div className={localstyles.welcome_column}>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <div className={localstyles.welcome_column_image_container}>
            <Image className={localstyles.welcome_column_image} unoptimized src={ColumnPhoto} alt="My Workstation Photo" />
          </div>

          <div className={localstyles.welcome_column_content}>
            <h1 className={localstyles.welcome_column_header} style={{ paddingBottom: "2vh" }}>
              Welcome to A-Z Repairs - Built on Expertise and Trust
            </h1>

            <h3 className={localstyles.mobileHide} style={{ marginBottom: "3vh" }}>
              At A to Z Repairs, you're not just getting a quick fix, you’re getting years of experience backed by professional training. <br /> <br /> I started my career as an Apple Authorized Technician, where I gained hands-on experience working on everything from iPhones and iPads to MacBooks
              and logic board-level diagnostics. Over the years, I’ve expanded beyond Apple to include a wide range of PC, tablet, and mobile device repairs from micro soldering to custom board work. <br /> <br /> Whether your device has water damage, charging issues, a cracked screen, or won't turn
              on at all, I’ve seen it—and fixed it. I treat every repair like it’s my own device, with honesty, care, and precision. Let me help you get your tech back on track, from A to Z.
            </h3>
            <Link href={"/submitrepair"}>
              <button className={localstyles.repairBtn}>Repair Your Device</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Version of Welcome Content */}
      <div className={localstyles.welcome_column_content_mobile}>
        <h3 className={localstyles.welcome_blurb}>
          At A to Z Repairs, you're not just getting a quick fix, you’re getting years of experience backed by professional training. <br /> <br /> I started my career as an Apple Authorized Technician, where I gained hands-on experience working on everything from iPhones and iPads to MacBooks and
          logic board-level diagnostics. Over the years, I’ve expanded beyond Apple to include a wide range of PC, tablet, and mobile device repairs from micro soldering to custom board work. <br /> <br /> Whether your device has water damage, charging issues, a cracked screen, or won't turn on at
          all, I’ve seen it—and fixed it. I treat every repair like it’s my own device, with honesty, care, and precision. Let me help you get your tech back on track, from A to Z.
        </h3>
        <Link href={"/submitrepair"}>
          <button className={localstyles.repairBtn_Mobile}>Repair Your Device</button>
        </Link>
      </div>

      {/* Column Section 2 ( Trust Section ) */}
      <div className={localstyles.banner2}>
        <h1 className={localstyles.why_column_header}>Why Choose Us?</h1>
        <div className={localstyles.why_column_content}>
          <ImageBadge src={MicroscopePhoto} label={"While other shops / authorized service centers simply replace entire parts (or tell you it can’t be fixed), we go deeper.\n\nWith micro soldering and logic board repair experience, we can often fix what others won’t even try."} />
          <ImageBadge src={CooperationPhoto} label={"We’re not a corporate franchise, and that’s a good thing.\n\nTechs are often under pressure to push upgrades or warranty replacements.\n\nI give you honest, technical answers, not sales pitches."} />
          <ImageBadge src={LocationPhoto} label={"Based in Peoria, Arizona. When you support A to Z Repairs, you’re supporting a local business."} />
          <ImageBadge src={HardDiskPhoto} label={"Apple and many repair chains wipe your device as part of the repair or replacement.\n\nWe work to preserve your data whenever possible because we know how valuable it is."} />
        </div>
      </div>

      {/* Column Section 3 ( What We Service ) */}
      <div className={localstyles.banner3}>
        <h1 className={localstyles.why_column_header}>Brands We Service</h1>
        <div className={localstyles.what_column_content} style={{ flexDirection: "row", display: "flex", columnGap: "3vw" }}>
          <ImageBadge src={ApplePhoto} label={"Apple"} />
          <ImageBadge src={SamsungPhoto} label={"Samsung"} />
          <ImageBadge src={AndroidPhoto} label={"Android"} />
          <ImageBadge src={GooglePhoto} label={"Google"} />

          <ImageBadge src={WindowsPhoto} label={"And Many More"} />
        </div>
      </div>

      {/* <BottomBar /> */}
    </div>
  );
}

const ImageBadge: React.FC<ImageBadgeProps> = ({ label, src }) => {
  return (
    <div className={localstyles.imageBadge}>
      <Image unoptimized src={src} alt={typeof label === "string" ? label : ""} className={localstyles.imageBadge_Image} />
      <p className={localstyles.imageBadge_Text}>
        {typeof label === "string"
          ? label.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))
          : label}
      </p>
    </div>
  );
};
