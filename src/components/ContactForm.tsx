import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ShadowedComponent from "./ShadowedComponent";
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
      <div className={"flex flex-col gap-5 py-10"}>
        <div className={"flex gap-5"}>
          <div className={"flex flex-col gap-1.5"}>
            <label className={"text-white"}>Name</label>
            <ShadowedComponent>
              <input type="text" name="user_name" className={"text-black"} />
            </ShadowedComponent>
          </div>
          <div className={"flex flex-col gap-1.5"}>
            <label className={"text-white"}>Email</label>
            <ShadowedComponent>
              <input type="email" name="user_email" className={"text-black"} />
            </ShadowedComponent>
          </div>
        </div>
        <div className={"flex flex-col gap-1.5"}>
          <label className={"text-white"}>Message</label>
          <ShadowedComponent className={"w-full"}>
            <textarea
              name="message"
              className={"text-black w-full h-[200px]"}
            />
          </ShadowedComponent>
        </div>
        <input
          type="submit"
          value="Send"
          disabled={isSubmitting}
          className={
            "border w-fit py-2 px-4 rounded-xl text-2xl text-green-500 border-solid border-green-500 hover:text-white hover:bg-green-500 hover:scale-125 scale-100 ease-in-out transition-all hover:shadow hover:shadow-green-500 cursor-pointer"
          }
        />
        {stateMessage && <p>{stateMessage}</p>}
      </div>
    </form>
  );
};
export default ContactForm;
