import * as Yup from "yup";

export const updateUser = Yup.object({
  fullName: Yup.string()
    .min(4, "Your full name must be at least 4 characters")
    .required("You must fill in this section"),
  age: Yup.number()
    .required("You must fill in this section")
    .integer("Age must be an integer")
    .typeError("Age must be a number")
    .positive("Age must be a positive number"),
  role: Yup.string().required("You must fill in this section").oneOf(['user', 'admin'], 'Invalid role selected'),
});
