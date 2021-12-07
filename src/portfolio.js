const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'http://localhost:3000',
  title: 'MZ.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mohammad Zarei',
  role: 'Web Developer & Graphic Designer',
  description:
    "Since beginning my journey as a web developer nearby 4 years ago, I've done web and graphics designing for small businesses and collaborated with talented and creative people to create digital products.",
  resume: 'https://drive.google.com/file/d/17ldRw3zJ4C0kSBstW7sSRC7xmPSjiici/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/zarei-mohammad/',
    github: 'https://github.com/shayanzarei',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Question & Answer',
    description:
      'my first full stack project to ask questions and answer to it ',
    stack: ['nodejs', 'EJS', 'MongoDB' , 'View' , "express"],
    livePreview: 'https://github.com/shayanzarei/master-class-impactWeek',
  },
  {
    name: 'Taste Of Persia',
    description:
      'Web designing for iranian restaurant in Den Haag ',
    stack: ['HTML', 'CSS', 'WordPres', 'SEO'],

    livePreview: 'https://www.tasteofpersia.restaurant/',
  },
  {
    name: 'Arjan Klussen Bedrijf',
    description:
      'Web Designing for painting company in Rotterdam',
    stack: ['HTML', 'CSS', 'WordPres', 'SEO'],

    livePreview: 'https://arjanklussenbedrijf.nl/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'Bootstrap',
  'JavaScript',
  'React',
  'Nodejs',
  'MongoDB',
  'EJS',
  'WordPress',
  'Git',
  'Adobe PhotoShop',
  'Logo & Product Designing',
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'info@mohammadzarei.nl',
}

export { header, about, projects, skills, contact }
