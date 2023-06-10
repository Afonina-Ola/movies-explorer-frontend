import React, { useCallback } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[a-zA-Zа-яА-Я\s-]+$/;

export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  console.log(values);

  const handleDefaultValues = (values) => {
    setValues(values);
  };

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (!value.length) {
      setErrors({ ...errors, [name]: "Заполните поле" });
      setIsValid(false);
      setValues({ ...values, [name]: value });
      return;
    } else {
      setErrors({ ...errors, [name]: "" });
      setIsValid(true);
    }

    if (name === "email") {
      if (!emailRegex.test(value)) {
        setErrors({ ...errors, [name]: "Некорректный email" });
        setIsValid(false);
      } else {
        setErrors({ ...errors, [name]: "" });
        setIsValid(true);
      }
    }
    if (name === "name") {
      if (!nameRegex.test(value)) {
        setErrors({ ...errors, [name]: "Некорректное имя пользователя" });
        setIsValid(false);
      } else {
        setErrors({ ...errors, [name]: "" });
        setIsValid(true);
      }
    }
    setValues({ ...values, [name]: value });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    handleDefaultValues,
  };
}
