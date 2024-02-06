import { useState } from "App.jsx";
import ContactRow from "./ContactRow";
import {useEffect} from 'react'
//import ContactList from "./components/ContactList";

//Setting up the Table Tab, but needed to be in App instead due to priority
const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

//not sure why this isn't working even when i have imported ContantList 
//When I use 'export default function ContactList' as requested, error falls on the =>
//So I made it a normal function, still an error. . .
const ContactList({ setSelectedContactId, setSelectedConatctId }) => {
    const URL1 = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`;
    const [contacts, setContacts] = useState(dummyContacts);
    console.log("Contacts: ", contacts);

//Fetching Data and useEffect tab
    useEffect(() => {
      async function fetchContacts() {
        try {
          const response = await fetch(URL1);
          const result = await response.json();
          console.log("result is", result);
          setContacts(result);
        } catch (error) {
          console.error(error);
        }
      }
      fetchContacts();
    }, []);

    return (
      //Added a div
      <div>
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {contacts.map((contact) => {
              return (
                <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedConatctId}
                />);
            })}
          </tbody>
        </table>
      </div>
    );
  }
  console.log("Contacts: ", contacts);