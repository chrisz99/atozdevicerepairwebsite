import { useRef } from "react";
import localstyles from "../../app/styles/submitrepair.module.css";

export const RepairContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent auto submission before values are updated
    const form = formRef.current;
    if (form) {
      const name = form.elements.namedItem("name") as HTMLInputElement;
      const model = form.elements.namedItem("device_model") as HTMLInputElement;
      const subject = form.elements.namedItem("_subject") as HTMLInputElement;
      const deviceType = form.elements.namedItem("device_type") as HTMLInputElement;
      const autoResponse = form.elements.namedItem("_autoresponse") as HTMLInputElement;

      subject.value = `Repair Submission from ${name.value} - ${deviceType.value} - ${model.value}`;
      autoResponse.value = `Hi ${name.value},\n\nThank you for submitting a repair request with A-Z Repairs. We’ve received your information and will get back to you as soon as possible.\n\nIf you have any urgent questions, feel free to email us directly at azrepairspeoria@gmail.com or text/call at 732-239-3301.`;

      // Submit the form manually after updates
      form.submit();
    }
  };

  return (
    <div>
      <form className={localstyles.contact_container} ref={formRef} action="https://formsubmit.co/azrepairspeoria@gmail.com" encType="multipart/form-data" method="POST" onSubmit={handleSubmit}>
        {/* <input type="hidden" name="_captcha" value="false" /> */}
        <input type="hidden" name="_template" value="basic" />
        <input type="hidden" name="_autoresponse" value="Thank you for submitting a repair with A-Z Repairs." />

        <input type="hidden" name="_subject" value="Repair Submission" />

        <label className={localstyles.contact_input_container}>
          Name:
          <input className={localstyles.contact_input} type="text" name="name" required />
        </label>

        <div style={{ flexDirection: "row", display: "flex", columnGap: "1vw" }}>
          <label className={localstyles.contact_input_container}>
            Phone Number:
            <input className={localstyles.contact_input} type="tel" name="phone" required />
          </label>

          <label className={localstyles.contact_input_container}>
            Email:
            <input className={localstyles.contact_input} type="email" name="email" required />
          </label>
        </div>

        <div style={{ flexDirection: "row", display: "flex", columnGap: "1vw" }}>
          <label className={localstyles.contact_input_container}>
            Device Type:
            <select className={localstyles.contact_input} name="device_type" required>
              <option value="">Select a device</option>
              <option value="Phone">Phone</option>
              <option value="Tablet">Tablet</option>
              <option value="Laptop">Laptop</option>
              <option value="Desktop">Desktop</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label className={localstyles.contact_input_container}>
            Device Model:
            <input className={localstyles.contact_input} type="text" name="device_model" required />
          </label>
        </div>

        <label className={localstyles.contact_input_container}>
          ( Optional ) Device Serial:
          <input className={localstyles.contact_input} name="device_serial" />
        </label>

        <label className={localstyles.contact_input_container}>
          Describe the Issue: ( Try to be as specific as possible, and honesty helps both of us here )
          <textarea
            placeholder={`When did the issue start?\nDoes it power on?\nDoes it make any sounds?\nDoes the device charge?\nDoes the device have physical damage / liquid damage?\nHas any repair been done before?\nDoes the device charge / hold a charge?\nDoes touch functions still work?\nDoes the device get hot?`}
            className={localstyles.contact_input_multiarea}
            name="device_issue"
            rows={4}
            required
          />
        </label>

        <label className={localstyles.contact_input_container}>
          ( Optional ) Image Upload:
          <input className={localstyles.contact_input} type="file" name="attachment" multiple accept="image/png, image/jpeg" />
        </label>

        <button className={localstyles.submit_btn} type="submit">
          Submit Repair Request
        </button>
      </form>
    </div>
  );
};
