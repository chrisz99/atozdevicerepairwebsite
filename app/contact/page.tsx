import { Metadata } from "next";
import localstyles from "../styles/contact.module.css";

export const metadata: Metadata = {
  title: "A to Z Repair Contact",
  description: "Contact Information for A to Z Device Repair",
};

export default function ContactPage() {
  return (
    <div className={localstyles.page}>
      <h1 className={localstyles.page_header}>Contact Information</h1>
      <p className={localstyles.contact_blurb}>
        Need expert laptop or desktop computer repair in Peoria, Arizona?
        <br />
        <br /> I specialize in motherboard soldering, logic board diagnostics, power jack repairs, and other advanced electronics work for customers in Peoria, Glendale, Surprise, Sun City, Phoenix, and nearby AZ areas.
        <br />
        <br /> <b>Call or text me at 623-324-4421 and I’ll respond as quickly as possible</b>, usually within a few hours.
        <br />
        <br /> Whether your laptop won’t power on, your desktop needs an upgrade, or your device has a damaged connector, I have the tools and experience to get it running again.
        <br />
        <br /> I also provide phone and tablet repairs including screen replacements, battery swaps, and other mobile device services.
      </p>
    </div>
  );
}
