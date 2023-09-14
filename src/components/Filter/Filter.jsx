import { StyledFilter, StyledInput } from './Filter.styled';

export const Filter = ({ onChangeContacts, filter }) => {
  return (
    <StyledFilter htmlFor="filter">
      Find contacts by name
      <StyledInput
        name="filter"
        value={filter}
        onChange={e => {
          onChangeContacts(e.currentTarget.value);
        }}
      ></StyledInput>
    </StyledFilter>
  );
};
