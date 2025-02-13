import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import ContactLinks from './components/ContactLinks';
import profileImg from '../public/profile.jpeg';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen px-8 pt-8 pb-4 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)] bg-gray-900 text-white">
      <header className="flex flex-col gap-4 items-center text-lg max-w-2xl">
        <Image
          className="rounded-full w-36"
          src={profileImg}
          alt="Profile Picture"
          sizes="288px"
          priority
        />
        <div className="flex flex-row gap-4 items-center">
          <h1 className="text-4xl font-bold">Christos Papoutsakis</h1>
          <ContactLinks />
        </div>
        <p className="self-start">
          Hi, I&apos;m Christos Papoutsakis, a software engineer based in
          Athens, Greece.
        </p>
        <p>
          I hold an{' '}
          <span className="font-bold">
            MEng in Electrical & Computer Engineering
          </span>{' '}
          (5-year degree) from National Technical University of Athens (NTUA)
          and have over <span className="font-bold">7 years</span> of
          professional experience, including international work in Sophia
          Antipolis, France.
        </p>
        <p>
          My time working in France not only exposed me to cultural diversity
          but also significantly enhanced my collaboration and communication
          skills in an international setting. Currently, as a freelancer, I
          specialize in building web applications with modern technologies and
          frameworks such as{' '}
          <span className="font-bold">TypeScript, React & Next.js</span>.
        </p>
        <p>
          I’m always eager to take on new and exciting challenges. If you have
          an interesting opportunity, feel free to get in touch!
        </p>
      </header>
      <main className="flex flex-col gap-8 row-start-2 max-w-2xl">
        <section className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <ul className="list-inside list-disc flex flex-col gap-2 font-[family-name:var(--font-geist-mono)]">
            <li>
              <span className="font-bold">Freelancer</span> - Software Engineer
              - Athens, Greece (Sep 2024 - Present)
              <p className="text-gray-400 text-sm">
                Developing web apps in{' '}
                <span className="font-bold">TypeScript, React & Next.js</span>{' '}
                for various businesses and individual professionals in
                industries such as arts, entertainment, education and digital
                marketing, delivering tailored solutions to meet their specific
                needs.
              </p>
            </li>
            <li>
              <span className="font-bold">Sitecore</span> - Software Engineer -
              Athens, Greece (Dec 2021 - Aug 2024)
              <div className="flex flex-col gap-2 text-gray-400 text-sm">
                <p>
                  Built web apps in{' '}
                  <span className="font-bold">TypeScript, React & Next.js</span>{' '}
                  using the company&apos;s wide suite of products such as XM
                  Cloud, Content Hub and CDP/ Personalize.
                </p>
                <p>
                  Created a mobile app in{' '}
                  <span className="font-bold">React Native</span> leveraging the
                  Content Hub ONE SDK & APIs in order to showcase the
                  capabilities of the platform.
                </p>
                <p>
                  Integrated Sitecore Search into the web apps in order to
                  benefit from AI-powered search capabilities.
                </p>
                <p>
                  Collaborated with cross-functional teams in order to implement
                  new features using Sitecore OrderCloud, the leading headless
                  ecommerce solution, improving user experience and performance.
                </p>
              </div>
            </li>
            <li>
              <span className="font-bold">Freelancer</span> - Software Engineer
              - Athens, Greece (Oct 2020 - Nov 2021)
              <p className="text-gray-400 text-sm">
                Developed web apps using{' '}
                <span className="font-bold">TypeScript, Angular & Node.js</span>{' '}
                for clients in various sectors including hospitality and online
                learning.
              </p>
            </li>
            <li>
              <span className="font-bold">Alcmeon</span> - Software Engineer -
              Sophia Antipolis, France (Jun 2019 - Sep 2020)
              <div className="flex flex-col gap-2 text-gray-400 text-sm">
                <p>
                  Grew the company&apos;s SaaS platform by building new
                  components in{' '}
                  <span className="font-bold">
                    TypeScript, Angular & Material
                  </span>
                  .
                </p>
                <p>
                  Contributed to the development of a mobile app in{' '}
                  <span className="font-bold">TypeScript, Angular & Ionic</span>{' '}
                  for the company&apos;s flagship product.
                </p>
              </div>
            </li>
            <li>
              <span className="font-bold">Alten</span> - Software Engineer -
              Sophia Antipolis, France (Oct 2018 - May 2019)
              <p className="text-gray-400 text-sm">
                Created web apps using{' '}
                <span className="font-bold">TypeScript & Angular</span> in the
                company&apos;s labs for internal use by its own employees.
              </p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Recent Projects</h2>
          <ul className="flex flex-col gap-2 list-inside list-disc font-[family-name:var(--font-geist-mono)]">
            <li>
              <Link
                href="https://theatroexarchis.gr"
                className="text-blue-300 font-bold hover:underline"
                target="_blank"
              >
                Exarchis Theater
              </Link>{' '}
              - A <span className="font-bold">React/ Next.js</span> project
              containing the website of Exarchis, a theater venue in Athens,
              Greece.
              <Link
                href="https://github.com/chrwcd7/exarchis-theater"
                className="ml-4"
                target="_blank"
                aria-label='GitHub Repository for "Exarchis Theater"'
              >
                <FontAwesomeIcon icon={faGithub} className="inline w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-blue-300 font-bold hover:underline"
              >
                {' '}
                Portfolio
              </Link>{' '}
              - The personal portfolio website found right here, written in{' '}
              <span className="font-bold">React/ Next.js</span>.
              <Link
                href="https://github.com/chrwcd7/portfolio"
                className="ml-4"
                target="_blank"
                aria-label='GitHub Repository for "Portfolio"'
              >
                <FontAwesomeIcon icon={faGithub} className="inline w-4 h-4" />
              </Link>
            </li>
          </ul>
        </section>
        <section className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="mb-2">You can reach out to me via these channels</p>
          <ContactLinks showLabel />
        </section>
      </main>
      <footer className="row-start-3 flex flex-col flex-wrap items-center justify-center">
        <p>&copy; 2025 Christos Papoutsakis.</p>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
}
