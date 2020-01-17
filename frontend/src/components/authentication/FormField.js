import React from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const Field = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "teal"
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "teal"
      }
    },
    "& input:valid:focus + fieldset": {
      borderColor: "teal",
      padding: "4px !important" // override inline-style
    }
  }
})(TextField);

function FormField(props) {
  return (
    <div>
      <FormControl style={{ width: "100%" }}>
        <Field
          type={props.type}
          name={props.name}
          label={props.label}
          variant="outlined"
          style={{ width: "100%" }}
          value={props.value}
          onChange={props.handleChange}
          required={true}
        />
      </FormControl>
    </div>
  );
}

export default FormField;
