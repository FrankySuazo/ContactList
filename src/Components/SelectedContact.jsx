import React from "react";
import SelectedContact from "./components/SelectedContact";

    const URL1 = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`;
    const [contacts, setContacts] = useState(dummyContacts);
    console.log(contacts);

    useEffect(() => {
        async function fetchContacts() {
          try {
            const response = await fetch(URL1);
            const result = await response.json();
            setContacts(result);
          } catch (error) {
            console.error(error);
          }
        }
        fetchContacts();
      }, []);
  
      return (
        contacts && (
            <div>
                <h2>{contacts.name}</h2>
                <p>{contacts.phone}</p>
            </div>
        )
      );
    
    //import on line 4 in App, tried as an actual function and did not work, just decided
    // to you it as export default as an 'exit' than an actual function
    export default SelectedContact;