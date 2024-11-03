import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const skillsData = [
  {
    title: 'HTML',
    icon: 'bi bi-file-earmark-code',
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
  },
  {
    title: 'CSS',
    icon: 'bi bi-paint-bucket',
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
  },
  {
    title: 'JavaScript',
    icon: 'bi bi-braces',
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
  },
  {
    title: 'MySQL',
    icon: 'bi bi-database',
    url: 'https://dev.mysql.com/doc/'
  },
  {
    title: 'Git',
    icon: 'bi bi-git',
    url: 'https://git-scm.com/doc'
  },
  {
    title: 'API RESTful',
    icon: 'bi bi-file-code-fill',
    url: 'https://restfulapi.net/'
  },
  {
    title: 'React',
    icon: 'bi bi-filetype-jsx',
    url: 'https://reactjs.org/docs/getting-started.html'
  },
  {
    title: 'SQL',
    icon: 'bi bi-database',
    url: 'https://www.w3schools.com/sql/'
  },
  {
    title: 'Python',
    icon: 'bi bi-filetype-py',
    url: 'https://docs.python.org/3/'
  },
  {
    title: 'C++',
    icon: 'bi bi-c-circle',
    url: 'https://en.cppreference.com/w/'
  },
  {
    title: 'Node.js',
    icon: 'bi bi-filetype-json',
    url: 'https://nodejs.org/en/docs/'
  },
  {
    title: 'Tailwind CSS',
    icon: 'bi bi-paint-bucket',
    url: 'https://tailwindcss.com/docs/installation'
  },
];

function SkillCard({ title, icon, url }) {
  return (
    <Card className="bg-neutral-800 text-white transform transition-transform duration-200 hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer" style={{ width: '18rem' }}>
      <Card.Body className="text-center">
        <a href={url} target="_blank" rel="noopener noreferrer" className={`${icon} text-4xl mb-2`}></a>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

function Skills() {
  return (
    <section id='Resumo' className="bg-zinc-900 p-4 flex flex-col items-center">
        <h2 className="max-w-md mx-auto text-3xl font-bold mb-4 pb-3 border-b-4 my-16 border-orange-500">Minhas Habilidades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} title={skill.title} icon={skill.icon} url={skill.url} />
          ))}
        </div>
    </section>
  );
}

export default Skills;
