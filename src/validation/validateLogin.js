import * as Yup from "yup";

export const loginValidation = Yup.object({
  email: Yup.string()
    .min(14, "Your email must be at least 14 characters")
    .email("Invalid email")
    .required("You must fill in this section"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and must be at least 8 characters long"
    )
    .required("You must fill in this section"),
  fullName: Yup.string()
    .min(4, "Your full name must be at least 4 characters")
    .required("You must fill in this section"),
  age: Yup.string().required("You must fill in this section"),
});
