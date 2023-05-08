import { FormWrapper, Option, Select } from "components/Filter/Filter.styled";

function Filter({ filterHandle }) {
  return (
    <FormWrapper>
      <Select name="following" onChange={filterHandle}>
        <Option value="all">show all</Option>
        <Option value="follow">follow</Option>
        <Option value="following">following</Option>
      </Select>
    </FormWrapper>
  );
}

export default Filter;
