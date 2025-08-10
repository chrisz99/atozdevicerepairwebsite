import Link from "next/link";
import localstyles from "../styles/pricing.module.css";

export default function Pricing() {
  return (
    <div className={localstyles.page}>
      <h1 className={localstyles.page_header}>Pricing Guidelines</h1>

      <div style={{ alignItems: "center" }}>
        <p className={localstyles.warranty_maintext}>
          All repairs come with a 90-day warranty covering workmanship and replacement parts.
          <br />
          <br /> If your device experiences issues related to the original repair within this period, I’ll re-diagnose the issue free of charge.
        </p>
        <p className={localstyles.warranty_header}>
          <br />
          What's Covered?
        </p>

        <ul className={localstyles.warranty_list}>
          <li>Faulty or defective parts I installed</li>
          <li>Issues directly related to the original repair</li>
        </ul>

        <p className={localstyles.warranty_header}>
          <br />
          What's Not Covered?
        </p>

        <ul className={localstyles.warranty_list}>
          <li>
            Physical damage<strong> (e.g., drops, cracks, bent frames)</strong>
          </li>
          <li>Liquid damage after the repair</li>
          <li>Issues unrelated to the original repair</li>
        </ul>
      </div>

      <table className={localstyles.pricing_table}>
        <thead>
          <tr>
            <th>Service</th>
            <th>Price Range</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Diagnostics</td>
            <td>$35 - $75</td>
            <td className={localstyles.pricing_table_desc}>
              This fee will be applicable in situations where we don't know what is going on with the device.
              <br />
              <br /> Any diagnostic fee paid will be applicable torwards the price of repair.
              <br />
              <br /> The price ranges for type of issue / length of time it will take to diagnose.
            </td>
          </tr>
          <tr>
            <td>Phone Screen Replacement</td>
            <td>$135 - $300</td>
            <td className={localstyles.pricing_table_desc}>Depends on model, and chosen quality of parts</td>
          </tr>
          <tr>
            <td>Battery Replacement</td>
            <td>$135 - $200</td>
            <td className={localstyles.pricing_table_desc}>Depends on model</td>
          </tr>
          <tr>
            <td>Back Glass Replacement</td>
            <td>$135 - $250</td>
            <td className={localstyles.pricing_table_desc}>Depends on model, and chosen quality of parts</td>
          </tr>
          <tr>
            <td>Operating System Reinstall</td>
            <td>$65</td>
            <td className={localstyles.pricing_table_desc}>Windows, macOS, or mobile OS</td>
          </tr>
          <tr>
            <td>Logic Board Repair / Soldering</td>
            <td>$120 - $300</td>
            <td className={localstyles.pricing_table_desc}>Complex repairs. Generally involving a device that does not power on.</td>
          </tr>
          <tr>
            <td>Data Recovery (Simple)</td>
            <td>$65 - $120</td>
            <td className={localstyles.pricing_table_desc}>Basic data recovery tasks</td>
          </tr>
        </tbody>
      </table>

      <Link href={"/submitrepair"}>
        <button className={localstyles.repairBtn}>Repair Your Device</button>
      </Link>
    </div>
  );
}
