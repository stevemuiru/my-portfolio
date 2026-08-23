import { FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';

function Contacts() {
    const contacts = [
        { icon: FaEnvelope, url: "mailto:stevembugua26@gmail.com", label: "Email" },
        { icon: FaPhone, url: "tel:+254729222661", label: "Phone" },
        { icon: FaGithub, url: "https://github.com/stevemuiru", label: "Github" }
    ]

    return (
        <section id="contact" className="container py-5 text-center">
            <h2 className="mb-4">Get In Touch</h2>
            <div className="d-flex justify-content-center gap-4 flex-wrap">
                {contacts.map((contact) => ( 
                    <a
                    
                        key={contact.label}
                        href={contact.url}
                        className="text-dark text-decoration-none d-flex flex-column align-items-center"
                    >
                        <contact.icon size={32} />
                        <span className="mt-2">{contact.label}</span>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Contacts