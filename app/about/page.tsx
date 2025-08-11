import Link from "next/link";
import localstyles from "../styles/about.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About A to Z Repairs | Computer, Laptop, and Microsoldering in Peoria, AZ",
  description: "Learn about A to Z Repairs in Peoria, Arizona. We specialize in laptop repair, desktop repair, microsoldering, and logic board repair, with phone and tablet repair as a secondary service.",
};

export default function Home() {
  return (
    <div className={localstyles.page}>
      <h1 className={localstyles.page_header}>About A to Z Repairs – Peoria, AZ</h1>
      <p className={localstyles.aboutBlurb}>
        At A to Z Repairs, you’re not dealing with a franchise or a middleman you’re speaking directly with the technician who will repair your device. Based in Peoria, Arizona, I offer local pickup and drop-off service for hassle-free computer, laptop, and motherboard repair.
        <br />
        <br />
        My background as an Apple Authorized Technician gave me years of experience repairing everything from MacBooks and PCs to logic boards and complex hardware issues. I saw how many shops quickly label devices as “non-repairable” and push expensive part replacement sometimes wiping important
        data in the process. That’s not how I operate.
        <br />
        <br />
        Unlike chain repair stores, I focus on board-level repair and microsoldering the advanced fixes that most shops won’t attempt. Whether it’s no power, charging port replacement, water damage repair, or motherboard troubleshooting, I aim to fix the exact problem instead of replacing entire
        assemblies.
        <br />
        <br />
        I also offer phone and tablet repair as a secondary service, including screen replacement, battery swaps, and more.
        <br />
        <br />
        In addition to electronics repair, I’m studying Software Development and I even built this website from scratch. A to Z Repairs is more than a business; it’s the combination of passion, precision, and professionalism.
        <br />
        <br />
        If you need reliable computer, laptop, or motherboard repair, including advanced microsoldering services, I’m here to help. I serve customers throughout Peoria, Glendale, Surprise, Phoenix, Sun City, and the surrounding Arizona areas. Let’s get your tech back on track, from A to Z.
      </p>

      <Link href={"/submitrepair"}>
        <button className={localstyles.repairBtn}>Repair Your Device</button>
      </Link>
    </div>
  );
}
