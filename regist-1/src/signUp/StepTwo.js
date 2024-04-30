import { MyTextField } from "../TextField";

const StepTwo = () => {
  return (
    <div>
      <MyTextField type="password" name="password" placeholder="Password" />
      <MyTextField
        type="password"
        name="passwordConfirm"
        placeholder="Confirm password"
      />
    </div>
  );
};

export default StepTwo;
