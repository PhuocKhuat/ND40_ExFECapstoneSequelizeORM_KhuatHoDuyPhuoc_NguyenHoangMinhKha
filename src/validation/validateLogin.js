import * as Yup from "yup";

export const loginValidation = Yup.object({
  email: Yup.string()
    .min(14, "Your email must be at least 14 characters")
    .email("Invalid email")
    .required("You must fill in this section"),
  password: Yup.string()
    .matches(
      /^(?=.*\d)/,
      "Password must contain one number"
    )
    .required("You must fill in this section"),
  fullName: Yup.string()
    .min(4, "Your full name must be at least 4 characters")
    .required("You must fill in this section"),
  age: Yup.string().required("You must fill in this section"),
});
