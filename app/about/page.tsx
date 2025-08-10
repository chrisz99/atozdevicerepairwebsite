import Link from "next/link";
import localstyles from "../styles/about.module.css";

export default function Home() {
  return (
    <div className={localstyles.page}>
      <h1 className={localstyles.page_header}>About Us</h1>
      <p className={localstyles.aboutBlurb}>
        At A to Z Repairs, you’re not dealing with a franchise or a middleman, you’re talking directly to the person who will be fixing your device. I’m based in Peoria, Arizona, offering local pickup and drop-off service to make repairs as convenient as possible.
        <br />
        <br />I started as an Apple Authorized Technician, where I gained extensive experience working on everything from MacBooks and iPhones to logic boards and complex diagnostics. But I also saw how many repairs were handled: devices were often declared “non-repairable” and customers were
        charged huge premiums for full part replacements, even when a simple fix might have worked.
        <br />
        <br /> Most chain stores are focused on speed and sales, not you! They might wipe your data without warning, push unnecessary upgrades, or tell you the only option is to replace your entire motherboard. That’s where I do things differently.
        <br />
        <br /> As a solo technician, I specialize in microsoldering and board-level repair, the kind of work most shops won’t even attempt. Whether it’s a no-power issue, water damage, or charging failure, I aim to fix the part that’s broken, not sell you a new one.
        <br />
        <br /> I’m also currently studying Software Development, and I even built this website from scratch. This isn’t just a side hustle, it’s a blend of passion, precision, and professionalism.
        <br />
        <br /> Let me help you get your tech back on track, from A to Z.
      </p>

      <Link href={"/submitrepair"}>
        <button className={localstyles.repairBtn}>Repair Your Device</button>
      </Link>
    </div>
  );
}
