import { StyledFilter, StyledInput } from './Filter.styled';

export const Filter = ({ onChangeContacts, filter }) => {
  return (
    <StyledFilter htmlFor="filter">
      Find contacts by name
      <StyledInput
        name="filter"
        value={filter}
        onChange={onChangeContacts}
      ></StyledInput>
    </StyledFilter>
  );
};
