import { useEffect, useState } from "react";
import { ValidatorType, ErrorType, TokenType, ErrorFields } from "./types";

export const useForm = <T,>(initialState: T, validators: ValidatorType<T>) => {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<ErrorType<T>>({});
  const [token, setToken] = useState<TokenType | null>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  type Fields = keyof T;

  useEffect(() => {
    if (token) {
      setErrors((prevErrors) => ({ ...prevErrors, hChaptcha: [] }));
    }
  }, [token, setErrors]);

  const getErrors = (name: ErrorFields<T>) => {
    return errors[name];
  };

  const getStatus = (name: Fields): "succes" | "error" | "idle" => {
    const errors = getErrors(name);
    if (!errors) {
      return "idle";
    }
    if (errors.length === 0) {
      return "succes";
    }
    return "error";
  };

  const getErrorMessages = (
    name: ErrorFields<T>
  ): string[] | undefined | string => {
    const errors = getErrors(name);
    if (errors && errors.length > 0) {
      return errors;
    }
    return undefined;
  };

  const getFirstErrorMessage = (name: ErrorFields<T>): string | undefined => {
    const errors = getErrorMessages(name);
    if (errors && errors.length > 0) {
      return errors[0];
    }
    return undefined;
  };

  const validate = (name: Fields, newValues: T): [ErrorType<T>, boolean] => {
    const err: string[] = [];
    let hasError = false;
    validators[name]?.forEach((validator) => {
      const value = newValues[name] as any;
      const errorMessage = validator(value);
      if (errorMessage) {
        err.push(errorMessage);
        hasError = true;
      }
    });
    return [{ ...errors, [name]: err }, hasError];
  };

  const changeHandler = (name: Fields, value: string) => {
    const newValues = { ...values, [name]: value };
    const [newErrors] = validate(name, newValues);
    setErrors(newErrors);
    setValues(newValues);
  };

  const submit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setStatus("loading");

    const newErrors: ErrorType<T> = {};
    let isValid = true;
    Object.keys(values).forEach((value) => {
      const name = value as Fields;
      const [err, hasError] = validate(name, values);
      if (hasError) isValid = false;
      Object.assign(newErrors, err);
    });

    if (token === null) {
      isValid = false;
      newErrors.hChaptcha = ["The hChaptcha token must be provided!"];
    }

    setErrors(newErrors);

    if (!isValid) {
      newErrors.form = ["Form is invalid!"];
      setStatus("error");
      return;
    }

    const hToken = token ? token.token : undefined;

    const data = {
      ...values,
      token: hToken,
    };

    const response = await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    setErrors(responseData.errors);

    if (response.status === 200) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return {
    getFirstErrorMessage,
    getStatus,
    status,
    setToken,
    changeHandler,
    submit,
  };
};