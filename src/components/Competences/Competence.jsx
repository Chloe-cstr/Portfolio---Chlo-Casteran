import './competence.scss';
import { useState } from 'react';

const Competences = () => {
    const skills = [
        { name: "HTML5", category: "Web & Front-End", icon: "fa-brands fa-html5" },
        { name: "CSS3 / SASS", category: "Web & Front-End", icon: "fa-brands fa-css3-alt" },
        { name: "JavaScript", category: "Web & Front-End", icon: "fa-brands fa-js" },
        { name: "React.js", category: "Web & Front-End", icon: "fa-brands fa-react" },
        { name: "Vite", category: "Frameworks / Librairies", icon: "fa-solid fa-bolt" },
        { name: "Git / GitHub", category: "Outils & Environnement", icon: "fa-brands fa-github" },
        { name: "Figma / Maquettes", category: "Outils & Environnement", icon: "fa-brands fa-figma" },
        { name: "Redux", category: "Frameworks / Librairies", icon: "fa-solid    fa-code-compare" }
    ];

    const categories = [...new Set(skills.map(skill => skill.category))]; // créer un tableau qu'avec les categories

    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const filteredSkills = skills.filter(skill => skill.category === activeCategory);

    return(
        <div className="competences">
            <h2 className="competences__title">COMPÉTENCES</h2>
            <div className='competences__category'>
                {categories.map(category => (
                    <h3
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`competences__category__subtitle${activeCategory === category ? ' active' : ''}`}
                    >
                        {category}
                    </h3>
                ))}
            </div>
            <div
                key={activeCategory}
                className="competences__content"
            >
                <ul className="competences__content__skills">
                    {filteredSkills.map(skill => (
                        <li key={skill.name} className="competences__content__skills__item">
                            <i className={`competences__content__skills__item__icon ${skill.icon}`}></i>
                            <h4 className="competences__content__skills__item__name">{skill.name}</h4>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Competences;