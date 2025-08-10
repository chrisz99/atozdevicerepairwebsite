import { RepairContactForm } from "../../components/common/RepairContactForm";
import localstyles from "../styles/submitrepair.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit a Repair",
  description: "A place to submit a device repair request to A to Z Repairs.",
};

export default function SubmitRepair() {
  return (
    <div className={localstyles.page}>
      <h1 className={localstyles.page_header}>Submit A Repair</h1>
      <p className={localstyles.repairBlurb}>
        When you submit your repair request, I personally review the details and will get back to you within a few hours with an initial assessment.
        <br />
        <br /> Since I don’t maintain a large parts inventory and order parts as needed, repair times can vary depending on part availability and shipping times. Typically, repairs take anywhere from 2 to 7 business days, but some complex repairs or rare parts might take longer.
        <br />
        <br /> I strive to keep you informed every step of the way, providing updates on parts status and expected completion times.
      </p>
      <RepairContactForm />
    </div>
  );
}
