import { MyTextField } from "../TextField";

const StepOne = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <MyTextField type="text" name="firstName" placeholder="First name" />
      <MyTextField type="text" name="lastName" placeholder="Last name" />
      <MyTextField type="email" name="email" placeholder="Email" />
      <MyTextField type="text" name="phoneNumber" placeholder="Phone number" />
    </div>
  );
};

export default StepOne;