import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import apiData from "./contact-api-data";
import "./index.css";
import { useState } from "react";

const schema = yup
  .object({
    name: yup
      .string()
      .min(3, "name must be at least 3 characters long")
      .required(),
    email: yup.string().email().required(),
    message: yup
      .string()
      .min(10, "message must be at least 10 characters long")
      .required(),
  })
  .required();

const ContactForm: () => JSX.Element = () => {
  interface FormValues {
    name: string;
    email: string;
    message: string;
  }

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = ({ name, email, message }) => {
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(apiData.service, apiData.template, templateParams, apiData.key)
      .then(
        (result) => {
          console.log("Success!", result);
          setIsSubmitted((prevState) => !prevState);
          reset();
          setTimeout(() => {
            setIsSubmitted((prevState) => !prevState);
          }, 5000);
        },
        (error) => {
          console.error("Err!", error);
          setIsSubmitted(false);
        }
      );
  };

  return (
    <div id="contact-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input {...register("name")} className="form-control" />
        {!!errors.name?.message && <p>{errors.name?.message}</p>}
        <label htmlFor="name">Email</label>
        <input {...register("email")} className="form-control" />
        {!!errors.email?.message && <p>{errors.email?.message}</p>}
        <label htmlFor="name">Message</label>
        <textarea {...register("message")} className="form-control" />
        {!!errors.message?.message && <p>{errors.message?.message}</p>}
        <input type="submit" className="button-primary" value="Send" />
      </form>
      <div
        className={
          isSubmitted ? "form-submit-status success" : "form-submit-status"
        }
      >
        Your message has been sent successfully!
      </div>
    </div>
  );
};

export default ContactForm;
