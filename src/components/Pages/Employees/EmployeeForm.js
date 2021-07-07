import { Controls } from "../../controls/Controls";
import { Grid } from "@material-ui/core";
import { useForm, Form } from "../../useForm";

import * as employeeService from "../../../services/employeeService";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "others", title: "Others" },
];

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

function EmployeeForm() {
  const validate = () => {
    let temp = {};
    temp.fullName = values.fullName ? "" : "This field is required";
    temp.email = /\S+@\S+\.\S+/.test(values.email) ? "" : "Provide vaild email";

    temp.mobile = values.mobile.length > 9 ? "" : "Should be 10 digits";

    temp.departmentId = values.departmentId ? "" : "This field is required";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(initialFValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) alert("dlf");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.name}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
          />

          <Controls.Input
            name="mobile"
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="city"
            label="City"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            value={values.gender}
            onChange={handleInputChange}
            label="Gender"
            items={genderItems}
          />

          <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
          />

          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />

          <Controls.Checkbox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button type="submit" text="Submit" />

            <Controls.Button text="Reset" color={"default"} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
