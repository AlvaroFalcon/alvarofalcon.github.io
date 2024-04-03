import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    const serviceId = process.env.REACT_APP_SERVICE_ID ?? "";
    const templateId = process.env.REACT_APP_TEMPLATE_ID ?? "";
    const userId = process.env.REACT_APP_PUBLIC_KEY ?? "";
    emailjs.sendForm(serviceId, templateId, e.currentTarget, userId).then(
      (result) => {
        setStateMessage("Message sent!");
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000);
      },
      (error) => {
        setStateMessage("Something went wrong, please try again later");
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000);
      }
    );

    (e.currentTarget as HTMLFormElement).reset();
  };
  return (
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" disabled={isSubmitting} />
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};
export default ContactForm;
