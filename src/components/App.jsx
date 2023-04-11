import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Div, WrapPhonebook, Title, WrapContacts, Contacts } from './AppStyled';

export default function App() {
  return (
    <Div>
      <WrapPhonebook>
        <Title>Phonebook</Title>
        <ContactForm />
      </WrapPhonebook>
      <WrapContacts>
        <Contacts>Contacts</Contacts>
        <Filter />
        <ContactList />
      </WrapContacts>
    </Div>
  );
}
