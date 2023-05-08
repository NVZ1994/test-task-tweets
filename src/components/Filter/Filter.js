import { Form, Option, Select } from "components/Filter/Filter.styled";

function Filter({ filterHandle }) {
  return (
    <Form>
      <Select name="following" onChange={filterHandle}>
        <Option value="all">Show all</Option>
        <Option value="follow">Follow</Option>
        <Option value="following">Following</Option>
      </Select>
    </Form>
  );
}

export default Filter;
