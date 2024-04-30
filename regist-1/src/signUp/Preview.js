import { useField } from "formik";

const Preview = (props) => {
  const [meta] = useField(props.name);
  const { value } = meta;
  return (
    <div>
      <h3>Confirm sign up details</h3>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>First name</p>
          <p>{value?.firstName}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Last name</p>
          <p>{value?.lastName}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Email address</p>
          <p>{value?.email}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Phone number</p>
          <p>{value?.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
