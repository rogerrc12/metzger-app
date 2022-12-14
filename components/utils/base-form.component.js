import { FielderProvider, useForm } from "fielder";
import React from "react";

const BaseForm = ({ children }) => {
  const myForm = useForm();

  return <FielderProvider value={myForm}>{children}</FielderProvider>;
};

export default BaseForm;
