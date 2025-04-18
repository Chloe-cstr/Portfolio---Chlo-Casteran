import Logo from '../../assets/images/logo.png';
import './header.scss'
import { useState, useEffect } from "react";

const Header = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
            });
        },
        {
            threshold: 0.6, // quand 60% de la section est visible
        }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const navItems = [
        { label: "PRÉSENTATION", href: "#presentation" },
        { label: "SERVICES", href: "#services" },
        { label: "COMPÉTENCES", href: "#competences" },
        { label: "RÉALISATIONS", href: "#realisations" },
        { label: "CONTACT", href: "#contact" },
    ];

    return (
        <header className="header">
        <img src={Logo} alt="Logo" className="header__logo" />
        <nav className="header__nav">
            <ul className="header__nav__list">
                {navItems.map((item) => (
                    <li className="header__nav__item" key={item.href}>
                        <a
                        href={item.href}
                        className={`header__nav__item__maj ${
                            activeSection === item.href.slice(1) ? "active" : ""
                        }`}
                        >
                        {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
        </header>
    );
};

export default Header;