import { useState } from "react";
import { ContactDbModel } from "./model/contactModel";
import { useFormik } from "formik";
export const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [hasCounted, setHasCounted] = useState(false);
  const [counted, setCounted] = useState(0);
  const formik = useFormik<ContactDbModel>({
    initialValues: {
      name: "",
      others: "",
      children: 0,
      amount: 1,
    },
    onSubmit: async (values, { resetForm }) => {
      const result = await fetch(
        "https://backend333.azurewebsites.net/WeddingContactUs/WeddingContactUsInput",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(values),
        }
      );
      setSubmitted(true);
      await result.json();
      resetForm();
      
    },
  });
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    if (newValue !== "") {
      if (!hasCounted) {
        setHasCounted(true);
        formik.setFieldValue("amount", formik.values.amount + 1);
      }
    } else {
      if (hasCounted) {
        setHasCounted(false);
        formik.setFieldValue("amount", formik.values.amount - 1);
      }
    }
    formik.setFieldValue("others", newValue);
    console.log("change");
  };
  const childrenOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newestValue = Number.parseInt(e.currentTarget.value);
    if (newestValue !== counted) {
      setCounted(newestValue);
      formik.setFieldValue(
        "amount",
        formik.values.amount - counted + newestValue
      );
    }
    console.log(newestValue);
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="contactUsBox">
        <div className="contactLabel">
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <input
            className="contactInput"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          ></input>
        </div>
        <div className="contactLabel">
          <label htmlFor="others">Persons joining</label>
        </div>
        <div>
          <input
            className="contactInput"
            name="others"
            type="text"
            onChange={formik.handleChange}
            onBlur={onChange}
            value={formik.values.others}
          ></input>
        </div>
        <div className="contactLabel">
          <label htmlFor="children">Children</label>
        </div>
        <div>
          <input
            className="contactInput"
            name="children"
            type="number"
            onChange={formik.handleChange}
            onBlur={childrenOnChange}
            value={formik.values.children}
          ></input>
        </div>
        <div className="contactLabel">
          <label htmlFor="amount">Total amount of people</label>
        </div>
        <div>
          <input
            className="contactInput"
            name="amount"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.amount}
          ></input>
          <div className="submitButton">
            <button className="onSubmit" type="submit">
              Submit
            </button>
            {submitted ? `Saved` : ``}
          </div>
        </div>
      </div>
    </form>
  );
};