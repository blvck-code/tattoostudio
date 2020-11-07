import { useState } from "react";

export default () => {
  const [form, setForm] = useState({});

  const onChange = (e) => {
    setForm({ ...form, [e.name]: e.value });
  };

  console.log("form", form);

  return { form, onChange };
};
