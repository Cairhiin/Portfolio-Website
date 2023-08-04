import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import emailjs from "@emailjs/browser";
// import apiData from "./contact-api-data";
import "./index.css";

const schema = yup
  .object({
    name: yup.string().min(3, "must be at least 3 characters long").required(),
    email: yup.string().email().required(),
    message: yup
      .string()
      .min(10, "must be at least 10 characters long")
      .required(),
  })
  .required();

const ContactForm: () => JSX.Element = () => {
  interface FormValues {
    name: string;
    email: string;
    message: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  /* const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current == null) return;
    emailjs
      .sendForm(apiData.service, apiData.template, form.current, apiData.key)
      .then(
        (result) => {
          setFormInfo({ ...formInfo, error: false });
        },
        (error) => {
          setFormInfo({ ...formInfo, error: true });
        }
      )
      .finally(setTimer);
  }; */

  return (
    <div id="contact-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} className="form-control" />
        <p>{errors.name?.message}</p>
        <input {...register("email")} className="form-control" />
        <p>{errors.email?.message}</p>
        <textarea {...register("message")} className="form-control" />
        <p>{errors.message?.message}</p>
        <input type="submit" className="button-primary" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
