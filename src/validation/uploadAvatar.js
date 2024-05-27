import * as Yup from "yup";

export const uploadAvatar = Yup.object().shape({
  avatar: Yup.mixed()
    .required("You must fill in this section")
    .test("fileSize", "The file is too large", (value) => {
      return value && value.size <= 2000000; // 2MB
    })
    .test("fileFormat", "Unsupported Format", (value) => {
      return (
        value && ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
      );
    }),
});
