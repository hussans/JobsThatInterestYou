'use client'
import { useState } from 'react';
import Modal from './components/Modal';

interface Company {
  name: string;
  culture: string;
  skillsRequired: string;
  goals: string;
  currentSkills: string;
  logoSrc: string;
  jobLink?: string;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const companies: Company[] = [
    {
      name: 'Apple',
      culture: 'Innovative environment where diversity of thought inspires innovation. Focus on making a positive impact through technology with competitive pay ($143K-$264K), stock options, health benefits, and education reimbursement.',
      skillsRequired: 'Vue/React frontend technologies, RESTful APIs, unit testing, TDD, performance optimization, CI/CD knowledge, and excellent communication skills.',
      goals: 'Contribute to Apple\'s Developer Publications team, helping implement new ways to support developers with documentation and tools like Swift DocC.',
      currentSkills: 'Experience with frontend frameworks and RESTful API integration.',
      logoSrc: '/apple-icon.png',
      jobLink: 'https://jobs.apple.com/en-us/details/200588178/frontend-developer-developer-publications?team=SFTWR'
    },
    {
      name: 'Pinterest',
      culture: 'Collaborative environment focused on inspiration. Offers hybrid work model, competitive benefits, and promotes work-life balance.',
      skillsRequired: 'React, TypeScript, CSS, design systems, accessibility standards, and performance optimization.',
      goals: 'Develop innovative UI components that inspire millions of users while collaborating with designers and product managers.',
      currentSkills: 'Experience with React, TypeScript and responsive web design.',
      logoSrc: '/pinterest-icon.png',
      jobLink: 'https://www.pinterestcareers.com/jobs/6482543/senior-front-end-design-engineer/?gh_jid=6482543'
    },
    {
      name: 'Google',
      culture: 'Innovative environment focused on developing technologies that change how billions of users connect and interact. Offers competitive compensation ($166K-$244K + bonus + equity + benefits) with opportunities to switch teams and projects as you and the business grow.',
      skillsRequired: 'Software development experience, data structures/algorithms, front-end frameworks, full-stack development, API development, testing and launching software products, and software design/architecture.',
      goals: 'Work on critical projects across the full-stack, designing, developing, testing, deploying, maintaining, and enhancing software solutions that shape the web experience for millions of users.',
      currentSkills: 'Experience with cloud technologies and front-end frameworks.',
      logoSrc: '/google-icon.webp',
      jobLink: 'https://www.google.com/about/careers/applications/jobs/results/120124063153562310-senior-software-developer-front-end-google-workspace?q=frontend&location=San%20Francisco%2C%20CA%2C%20USA'
    },
    {
      name: 'Notion',
      culture: 'Mission-driven company focused on making software toolmaking ubiquitous, allowing everyone to tailor their software to solve any problem. Hybrid work model with 2 anchor days (Mon & Thu) and competitive compensation ($130K-$250K per year). Values diversity and fosters a collaborative environment.',
      skillsRequired: '6+ years experience building Android apps, proficiency with Kotlin, understanding of UI/networking/threading, willingness to learn web stack (TypeScript, React), pragmatic problem-solving, and empathetic communication.',
      goals: 'Create delightful, intuitive mobile experiences that give everyone the building blocks to create their own tools, while improving performance, reliability, and polish of Notion\'s Android app.',
      currentSkills: 'Experience in typescript and react.',
      logoSrc: '/notion-icon.png',
      jobLink: 'https://job-boards.greenhouse.io/notion/jobs/6151801003'
    },
    {
      name: 'Discord',
      culture: 'Collaborative environment focused on making it easier for 200+ million monthly users to connect around gaming and shared interests. Offers competitive compensation ($196K-$220.5K + equity + benefits) with a remote-friendly approach.',
      skillsRequired: 'React, TypeScript, React Native, accessibility expertise, design system experience, cross-platform development, and strong written communication skills.',
      goals: 'Build and maintain the Mana design system, author accessible components across platforms, create internal tools like Figma plugins, and provide guidance to teams on design system implementation.',
      currentSkills: 'Experience with frontend development and component design.',
      logoSrc: '/discord-icon.png',
      jobLink: 'https://discord.com/jobs/7946170002'
    },
  ];

  const handleLogoClick = (company: Company) => {
    setSelectedCompany(company);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCompany(null);
  };

  return (
    <div className="bg-black min-h-screen w-full px-50 py-8">
      <header>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-[NeueMontreal-Medium] text-white text-5xl">
            JOBS THAT INTEREST YOU
          </h1>
          <p className="font-[NeueMontreal-Regular] text-white text-xl">
            A CodeStack Academy Assignment
          </p>
          <p className="font-[NeueMontreal-Medium] text-white pt-5">
            Hassan Sajid
          </p>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden mt-50">
          <div className="inline-flex w-[200%] animate-loop-scroll">
            <div className="flex w-full items-center justify-around">
              <button
                className="mx-4 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused]"
                onClick={() => handleLogoClick(companies[0])}
              >
                <img
                  src={companies[0].logoSrc}
                  alt={`${companies[0].name} Icon`}
                  className="h-24 w-auto"
                />
              </button>
              <button
                className="mx-4 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused]"
                onClick={() => handleLogoClick(companies[1])}
              >
                <img
                  src={companies[1].logoSrc}
                  alt={`${companies[1].name} Icon`}
                  className="h-24 w-auto"
                />
              </button>
              <button
                className="mx-4 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused]"
                onClick={() => handleLogoClick(companies[2])}
              >
                <img
                  src={companies[2].logoSrc}
                  alt={`${companies[2].name} Icon`}
                  className="h-24 w-auto"
                />
              </button>
              <button
                className="mx-4 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused]"
                onClick={() => handleLogoClick(companies[3])}
              >
                <img
                  src={companies[3].logoSrc}
                  alt={`${companies[3].name} Icon`}
                  className="h-24 w-auto"
                />
              </button>
              <button
                className="mx-4 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused]"
                onClick={() => handleLogoClick(companies[4])}
              >
                <img
                  src={companies[4].logoSrc}
                  alt={`${companies[4].name} Icon`}
                  className="h-40 w-auto"
                />
              </button>
            </div>

            <div className="flex w-full items-center justify-around">
              <button
                className="mx-4 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused]"
                onClick={() => handleLogoClick(companies[0])}
              >
                <img
                  src={companies[0].logoSrc}
                  alt={`${companies[0].name} Icon`}
                  className="h-24 w-auto"
                />
              </button>
              <button
                className="mx-4 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused]"
                onClick={() => handleLogoClick(companies[1])}
              >
                <img
                  src={companies[1].logoSrc}
                  alt={`${companies[1].name} Icon`}
                  className="h-24 w-auto"
                />
              </button>
              <button
                className="mx-4 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused]"
                onClick={() => handleLogoClick(companies[2])}
              >
                <img
                  src={companies[2].logoSrc}
                  alt={`${companies[2].name} Icon`}
                  className="h-24 w-auto"
                />
              </button>
              <button
                className="mx-4 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused]"
                onClick={() => handleLogoClick(companies[3])}
              >
                <img
                  src={companies[3].logoSrc}
                  alt={`${companies[3].name} Icon`}
                  className="h-24 w-auto"
                />
              </button>
              <button
                className="mx-4 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused]"
                onClick={() => handleLogoClick(companies[4])}
              >
                <img
                  src={companies[4].logoSrc}
                  alt={`${companies[4].name} Icon`}
                  className="h-40 w-auto"
                />
              </button>
            </div>
          </div>
        </section>
        <footer>
          <div className="flex justify-center mt-25">
            <p className="font-[NeueMontreal-Regular] text-white text-xl"> Click On A Logo </p>
          </div>
        </footer>
      </main>

      {selectedCompany && (
        <Modal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          companyInfo={selectedCompany} 
        />
      )}
    </div>
  );
}