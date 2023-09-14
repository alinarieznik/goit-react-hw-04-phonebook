import { StyledListItem, StyledButton, StyledList } from './ContactList.styled';

export const ContactList = ({ options, onDelete }) => {
  return (
    <StyledList>
      {options.map(option => (
        <StyledListItem key={option.id}>
          <p>
            {option.name}: {option.number}
          </p>
          <StyledButton type="button" onClick={() => onDelete(option.id)}>
            Delete
          </StyledButton>
        </StyledListItem>
      ))}
    </StyledList>
  );
};
