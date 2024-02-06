//Setting up the Table tab, for the ContactList.jsx
export default function ContactRow({ setSelectedContactId, contact }) {
    return (
        <tr
        onClick={() => {
          //wasn't sure if props needed contact.id or not. . . 
          setSelectedContactId();
        }}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
}
