import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postEmail } from "@/redux/actions/emailActions";

import { Field, Form } from "react-final-form";

const FormEmail = () => {
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log("data",data)

    dispatch(postEmail(data.email));
  };

  return (
    <Form onSubmit={onSubmit} className="container-enviar-email">
      {({ handleSubmit, form: { reset, pristine, submitting } }) => {
        return (
          <form onSubmit={handleSubmit} className="form-enviar-email">
            <div className="enviar-email">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                component="input"
              ></Field>
              <button type="submit">Enviar</button>
            </div>
          </form>
        );
      }}
    </Form>
  );
};

export default FormEmail;
