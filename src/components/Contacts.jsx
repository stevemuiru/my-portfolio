import { FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';

function Contacts() {
    const contacts = [
        {icon : FaEnvelope, url: "mailto:stevembugua26@gmail.com", label: "Email"},
        {icon : FaPhone, url : "tel:+254729222661", label: "Phone"},
        {icon : FaGithub, url : "https://github.com/stevemuiru", label: "Github"}
    ]

    return (
        <ul>
            {contacts.map((contact) => (
             <li key ={contact.label}>
                <contact.icon />
                <a href={contact.url}>{contact.label}</a>
             </li>
            ))}
        </ul>
    )
}

export default Contacts