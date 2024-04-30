import { useField } from "formik";

export const MyTextField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>
        {label}
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error" style={{ fontSize: "10px", color: "red" }}>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};
