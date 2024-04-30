import * as Yup from "yup";

export const validationSchema = [
  Yup.object().shape({
    firstName: Yup.string()
      .required("First name is required")
      .max(20, "Name field should be less than 20 characters"),
    lastName: Yup.string()
      .required("Last name is required")
      .max(20, "Name field should be less than 20 characters"),
    email: Yup.string().email().required("Email is required"),
    phoneNumber: Yup.string()
      .required("This field is compulsory")
      .min(5, "Phone Number field should be more than 5 characters")
  }),

  Yup.object().shape({
    password: Yup.string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    passwordConfirm: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password")], "Password doesn’t match, try again.")
  })
];
