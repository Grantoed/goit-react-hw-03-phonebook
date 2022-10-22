import {
  ContactsList,
  ContactsItem,
  FilterLabel,
  FilterInput,
  DeleteBtn,
} from './Contacts.styled';
import { nanoid } from 'nanoid';

export const Contacts = ({
  contacts,
  filterValue,
  handleChange,
  handleDelete,
}) => {
  return (
    <>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id="filter"
        name="filter"
        value={filterValue}
        onChange={handleChange}
      />
      <ContactsList>
        {contacts.map(contactItem => {
          return (
            <ContactsItem key={nanoid(4)}>
              {contactItem.name}: {contactItem.number}
              <DeleteBtn
                type="button"
                onClick={() => handleDelete(contactItem.id)}
              >
                Delete
              </DeleteBtn>
            </ContactsItem>
          );
        })}
      </ContactsList>
    </>
  );
};
