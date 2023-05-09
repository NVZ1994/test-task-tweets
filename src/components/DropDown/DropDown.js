import { Form, Option, Select } from "components/DropDown/DropDown.styled";

function Filter({ dropDown }) {
  return (
    <Form>
      <Select name="following" onChange={dropDown}>
        <Option value="all">Show all</Option>
        <Option value="follow">Follow</Option>
        <Option value="following">Followings</Option>
      </Select>
    </Form>
  );
}

export default Filter;
