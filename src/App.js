import React, { useState } from 'react';

// Main App component
const App = () => {
  // State to manage current page for simple routing
  const [currentPage, setCurrentPage] = useState('home');

  // Function to render the correct page component based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'insights': // Now Thought Leadership Hub
        return <ThoughtLeadershipHubPage />;
      case 'project-sparker': // New Page
        return <ProjectSparkerPage />;
      case 'policy-brief': // New Page
        return <PolicyBriefPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="font-inter antialiased">
      <Header setCurrentPage={setCurrentPage} />
      <main className="min-h-screen bg-gray-50">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

// Header Component
const Header = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Projects', 'page': 'projects' },
    { name: 'Thought Leadership', page: 'insights' }, // Renamed from Insights
    { name: 'Project Sparker', page: 'project-sparker' }, // New
    { name: 'Policy Brief AI', page: 'policy-brief' }, // New
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <header className="bg-[#0A1D37] text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Site Name */}
        <div className="flex items-center">
          {/* Logo from uploaded file - Path updated to be absolute from root */}
          <img
            src="/Circular_framed_logo-removebg-preview.png" // Corrected path (leading slash added)
            alt="Nexus Bwaina Logo"
            className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-[#C6A94B]"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/40x40/C6A94B/0A1D37?text=NB"; }}
          />
          <button
            onClick={() => setCurrentPage('home')}
            className="text-2xl font-bold hover:text-[#C6A94B] transition-colors duration-300 focus:outline-none"
          >
            Nexus Bwaina
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => setCurrentPage(item.page)}
              className="relative text-lg font-medium hover:text-[#C6A94B] transition-colors duration-300
                         after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#C6A94B]
                         hover:after:w-full after:transition-all after:duration-300 focus:outline-none"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0A1D37] pb-4">
          <div className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setCurrentPage(item.page);
                  setIsMenuOpen(false);
                }}
                className="block text-lg font-medium text-white hover:text-[#C6A94B] transition-colors duration-300 focus:outline-none"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-[#0A1D37] text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Nexus Bwaina Advisory & Consulting. All rights reserved.
        </p>
        <p className="mt-2 text-xs italic">"Quaerite Prudentium" – Seek Wisdom</p>
      </div>
    </footer>
  );
};

// HomePage Component (No changes here, keeping it as is from previous iteration)
const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0A1D37] text-white py-20 md:py-32 flex flex-col items-center justify-center overflow-hidden rounded-b-lg shadow-xl">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1D37] to-blue-900 opacity-90"></div>
        {/* Decorative pattern (optional) */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Nexus Bwaina <br className="md:hidden"/> Advisory & Consulting
          </h1>
          <p className="mt-4 text-lg sm:text-xl italic font-light text-gray-200">
            “Quaerite Prudentium” – Seek Wisdom
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-gray-200">
            Guiding leaders and organizations towards transformative growth through strategic insights and sustainable solutions.
          </p>
          <button className="mt-10 px-8 py-3 bg-[#C6A94B] text-[#0A1D37] font-semibold rounded-full shadow-lg hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-75">
            Explore Our Services
          </button>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-[#0A1D37] mb-12">Our Core Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Strategic Advisory"
            description="We guide policymakers, districts, and agencies on transformative strategies rooted in governance, ROI, and sustainable impact."
            icon="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 11.586V6z"
          />
          <ServiceCard
            title="Infrastructure & Development"
            description="From design to execution, we manage projects for public and private infrastructure, aligning with national development plans."
            icon="M19 11H5a1 1 0 01-1-1V6a1 1 0 011-1h14a1 1 0 011 1v4a1 1 0 01-1 1zm-1 6H6a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1z"
          />
          <ServiceCard
            title="Digital Tools & Platforms"
            description="Custom systems like TrackFusion360 and PlanTrack for efficient procurement, finance, and project monitoring across PNG."
            icon="M9.75 12h.008v.008H9.75V12zm-3 0h.008v.008H6.75V12zm-3 0h.008v.008H3.75V12zm9-7.5h.008v.008H12.75V4.5zm3 0h.008v.008h-.008V4.5zm3 0h.008v.008h-.008V4.5zM21 8.25h-6.75V4.5h6.75v3.75zm0 1.5H12.75v3.75H21v-3.75zm0 1.5H12.75v3.75H21v-3.75zM12 21.75H3.75V18h8.25v3.75zm0 1.5H3.75v-3.75h8.25v3.75z"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#F4F4F4] py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0A1D37] mb-8">Why Choose Nexus Bwaina?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            We combine deep local understanding with global best practices to deliver tailored solutions that genuinely empower our clients. Our commitment to excellence, integrity, and measurable impact sets us apart.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Local Expertise"
              description="Deep understanding of PNG's unique socio-economic landscape."
              icon="M17.25 6.75H6.75A.75.75 0 006 7.5v9a.75.75 0 00.75.75h10.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75z"
            />
            <FeatureCard
              title="Global Standards"
              description="Adherence to international best practices in advisory and consulting."
              icon="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
            />
            <FeatureCard
              title="Measurable Impact"
              description="Solutions designed to deliver tangible, sustainable results."
              icon="M13 14H11V9h2v5zm.06-8.5H10V4.5h3.06L12.5 7.06z"
            />
            <FeatureCard
              title="Client-Centric"
              description="Tailored approaches that prioritize your specific needs and goals."
              icon="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#C6A94B] text-[#0A1D37] py-16 text-center rounded-t-lg shadow-xl">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Future?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Partner with Nexus Bwaina Advisory & Consulting for strategic guidance that drives success.
          </p>
          <button className="px-10 py-4 bg-[#0A1D37] text-white font-semibold rounded-full shadow-lg hover:bg-blue-900 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-800 focus:ring-opacity-75">
            Get in Touch Today
          </button>
        </div>
      </section>
    </div>
  );
};

// Reusable Service Card Component
const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform duration-300 border border-gray-100">
    <div className="text-[#C6A94B] mb-4 flex justify-center">
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d={icon} />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-[#0A1D37] text-center mb-3">{title}</h3>
    <p className="text-gray-700 text-center">{description}</p>
  </div>
);

// Reusable Feature Card Component
const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-100">
    <div className="text-[#C6A94B] mb-3 flex justify-center">
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d={icon} />
      </svg>
    </div>
    <h4 className="text-lg font-semibold text-[#0A1D37] mb-2">{title}</h4>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);


// AboutPage Component (No changes here)
const AboutPage = () => {
  return (
    <div className="bg-white py-16">
      <section className="container mx-auto px-6 mb-16">
        <h1 className="text-4xl font-bold text-[#0A1D37] text-center mb-8">About Nexus Bwaina</h1>
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
          Nexus Bwaina Advisory and Consulting is a premier firm dedicated to empowering
          organizations and governments across Papua New Guinea and the broader Pacific region.
          We provide strategic guidance and practical solutions to navigate complex challenges
          and seize opportunities for sustainable growth.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#0A1D37] mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to foster impactful development and effective governance by providing
              insightful advisory services. We aim to build capacity, promote transparency, and
              drive economic progress for the communities we serve.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-[#0A1D37] mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be the trusted partner of choice for transformative change, recognized for our
              integrity, expertise, and commitment to delivering exceptional, measurable results
              that contribute to a prosperous and resilient Pacific.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F4] py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0A1D37] text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              title="Integrity"
              description="Upholding the highest ethical standards in all our interactions and recommendations."
            />
            <ValueCard
              title="Excellence"
              description="Committing to delivering superior quality and innovative solutions."
            />
            <ValueCard
              title="Impact"
              description="Focusing on creating tangible and lasting positive change."
            />
            <ValueCard
              title="Collaboration"
              description="Working closely with clients and stakeholders for shared success."
            />
            <ValueCard
              title="Adaptability"
              description="Responding effectively to evolving challenges and opportunities."
            />
            <ValueCard
              title="Stewardship"
              description="Responsible management of resources and commitment to sustainability."
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#0A1D37] text-center mb-12">Our Team</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          Our team comprises seasoned professionals with diverse expertise in public policy,
          infrastructure, finance, and digital innovation. We are united by a passion for
          making a difference and a deep understanding of the unique challenges and opportunities
          in the Pacific region.
        </p>
        {/* Placeholder for team member cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <TeamMemberCard name="John Doe" title="Lead Strategist" />
          <TeamMemberCard name="Jane Smith" title="Infrastructure Lead" />
          <TeamMemberCard name="Alex Wong" title="Digital Solutions Architect" />
          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
  );
};

// Reusable Value Card Component
const ValueCard = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-[#C6A94B] hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-semibold text-[#0A1D37] mb-3">{title}</h3>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
);

// Reusable Team Member Card Component
const TeamMemberCard = ({ name, title }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
    <img
      src={`https://placehold.co/120x120/F4F4F4/0A1D37?text=${name.split(' ')[0][0]}${name.split(' ')[1][0]}`}
      alt={`${name} profile`}
      className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-[#C6A94B]"
    />
    <h4 className="text-xl font-semibold text-[#0A1D37]">{name}</h4>
    <p className="text-md text-gray-600">{title}</p>
    <p className="text-sm text-gray-500 mt-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
);

// ServicesPage Component (No changes here)
const ServicesPage = () => {
  return (
    <div className="bg-white py-16">
      <section className="container mx-auto px-6 mb-16">
        <h1 className="text-4xl font-bold text-[#0A1D37] text-center mb-8">Our Services</h1>
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
          Nexus Bwaina Advisory and Consulting offers a comprehensive suite of services designed
          to address the unique needs of governments, public agencies, and private organizations
          in Papua New Guinea and the Pacific.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceDetailCard
            title="Strategic Advisory & Policy Development"
            description="We assist leaders in crafting robust strategies and policies that drive
                         sustainable development and good governance. Our expertise includes
                         economic planning, public sector reform, and capacity building programs."
            points={[
              "Policy analysis and formulation",
              "Strategic planning and execution",
              "Governance and institutional strengthening",
              "Economic development strategies",
            ]}
          />
          <ServiceDetailCard
            title="Infrastructure & Project Management"
            description="From conception to completion, we provide end-to-end project management
                         for critical infrastructure development. We ensure projects are delivered
                         on time, within budget, and to the highest quality standards."
            points={[
              "Feasibility studies and design review",
              "Project planning and scheduling",
              "Risk management and quality assurance",
              "Contract administration and oversight",
            ]}
          />
          <ServiceDetailCard
            title="Digital Transformation & Solutions"
            description="Leveraging technology to enhance efficiency and transparency, we develop
                         custom digital tools and platforms. This includes systems for financial
                         management, procurement, and real-time project monitoring."
            points={[
              "Custom software development (e.g., TrackFusion360)",
              "Digital strategy and roadmap development",
              "Data analytics and reporting tools",
              "ICT infrastructure advisory",
            ]}
          />
          <ServiceDetailCard
            title="Financial Management & Investment Guidance"
            description="We offer expert advice on financial management, public finance, and investment
                         strategies to maximize return on investment and ensure fiscal prudence.
                         This includes PFM reforms and investment appraisal."
            points={[
              "Public Financial Management (PFM) reforms",
              "Budget planning and execution support",
              "Investment appraisal and due diligence",
              "Financial risk assessment",
            ]}
          />
          <ServiceDetailCard
            title="Capacity Building & Training"
            description="Empowering human capital through tailored training programs and workshops.
                         We focus on enhancing skills in governance, project management, financial
                         literacy, and digital proficiency."
            points={[
              "Leadership and governance training",
              "Project management certification support",
              "Financial literacy workshops",
              "Customized skills development programs",
            ]}
          />
          <ServiceDetailCard
            title="Research & Market Analysis"
            description="Providing actionable insights through comprehensive research and market
                         analysis. Our reports help clients make informed decisions for
                         sustainable growth and competitive advantage."
            points={[
              "Sector-specific market research",
              "Socio-economic impact assessments",
              "Policy brief and whitepaper development",
              "Feasibility studies and due diligence",
            ]}
          />
        </div>
      </section>

      {/* Call to Action for Services */}
      <section className="bg-[#C6A94B] text-[#0A1D37] py-12 text-center rounded-t-lg shadow-lg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Find the Right Solution for You</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our tailored advisory and consulting services can help
            your organization achieve its strategic objectives.
          </p>
          <button className="px-8 py-3 bg-[#0A1D37] text-white font-semibold rounded-full shadow-lg hover:bg-blue-900 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-800 focus:ring-opacity-75">
            Request a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

// Reusable Service Detail Card Component
const ServiceDetailCard = ({ title, description, points }) => (
  <div className="bg-white rounded-lg shadow-xl p-8 border-t-8 border-[#C6A94B] hover:shadow-2xl transition-shadow duration-300 flex flex-col">
    <h3 className="text-2xl font-bold text-[#0A1D37] mb-4">{title}</h3>
    <p className="text-gray-700 mb-6 flex-grow">{description}</p>
    <ul className="list-disc list-inside text-gray-600 space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-start">
          <svg className="w-4 h-4 text-[#C6A94B] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);


// ProjectsPage Component (No changes here)
const ProjectsPage = () => {
  const projects = [
    {
      title: "National Digital Governance Framework",
      category: "Digital Transformation",
      description: "Assisted the government in developing a comprehensive digital governance framework to streamline public services and improve transparency.",
      image: "https://placehold.co/400x250/0A1D37/C6A94B?text=Digital+Project",
    },
    {
      title: "Rural Electrification Initiative",
      category: "Infrastructure Development",
      description: "Managed the planning and initial phase of a large-scale project to bring sustainable energy to remote communities.",
      image: "https://placehold.co/400x250/0A1D37/C6A94B?text=Energy+Project",
    },
    {
      title: "Public Financial Management Reform",
      category: "Strategic Advisory",
      description: "Provided advisory services for the implementation of a new public financial management system to enhance fiscal discipline.",
      image: "https://placehold.co/400x250/0A1D37/C6A94B?text=Financial+Project",
    },
    {
      title: "Sustainable Agriculture Value Chain",
      category: "Economic Development",
      description: "Conducted a feasibility study and developed a strategy for strengthening a key agricultural value chain for local farmers.",
      image: "https://placehold.co/400x250/0A1D37/C6A94B?text=Agriculture+Project",
    },
    {
      title: "Urban Water Supply Upgrade",
      category: "Infrastructure Development",
      description: "Oversaw the design and initial procurement for a major upgrade to the urban water supply network in a provincial capital.",
      image: "https://placehold.co/400x250/0A1D37/C6A94B?text=Water+Project",
    },
    {
      title: "Capacity Building for District Administrations",
      category: "Capacity Building",
      description: "Delivered a series of training workshops on governance, project planning, and financial oversight for district-level officials.",
      image: "https://placehold.co/400x250/0A1D37/C6A94B?text=Training+Project",
    },
  ];

  return (
    <div className="bg-white py-16">
      <section className="container mx-auto px-6 mb-16">
        <h1 className="text-4xl font-bold text-[#0A1D37] text-center mb-8">Our Projects</h1>
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
          Discover some of our impactful projects where we've partnered with clients to deliver
          transformative results across various sectors in Papua New Guinea and beyond.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </section>

      {/* Call to Action for Projects */}
      <section className="bg-[#F4F4F4] text-[#0A1D37] py-12 text-center rounded-t-lg shadow-lg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Got a Project in Mind?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We are always eager to take on new challenges and help bring your vision to life.
            Reach out to discuss your project requirements.
          </p>
          <button className="px-8 py-3 bg-[#C6A94B] text-[#0A1D37] font-semibold rounded-full shadow-lg hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-75">
            Discuss Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

// Reusable Project Card Component
const ProjectCard = ({ title, category, description, image }) => (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover"
      onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x250/0A1D37/C6A94B?text=Project`; }}
    />
    <div className="p-6">
      <h3 className="text-xl font-bold text-[#0A1D37] mb-2">{title}</h3>
      <p className="text-sm text-[#C6A94B] mb-3 font-semibold">{category}</p>
      <p className="text-gray-700 text-sm">{description}</p>
      <button className="mt-4 text-[#C6A94B] hover:underline text-sm font-semibold">
        Read More
      </button>
    </div>
  </div>
);


// ThoughtLeadershipHubPage Component (Formerly InsightsPage)
const ThoughtLeadershipHubPage = () => {
  const articles = [
    {
      title: "The Future of Digital Governance in PNG",
      date: "June 15, 2024",
      excerpt: "Exploring the challenges and opportunities for digital transformation in Papua New Guinea's public sector...",
      image: "https://placehold.co/400x250/0A1D37/C6A94B?text=Digital+Gov",
    },
    {
      title: "Sustainable Infrastructure: A Path to Economic Resilience",
      date: "May 28, 2024",
      excerpt: "An in-depth look at how sustainable infrastructure projects can foster long-term economic stability and community well-being.",
      image: "https://placehold.co/400x250/0A1D37/C6A94B?text=Infrastructure",
    },
    {
      title: "Leveraging Data for Better Policy Making",
      date: "April 10, 2024",
      excerpt: "How robust data analytics can empower policymakers to make informed decisions and optimize resource allocation.",
      image: "https://placehold.co/400x250/0A1D37/C6A94B?text=Data+Policy",
    },
  ];

  const whitepapers = [
    {
      title: "White Paper: Advanced PFM Reforms for Developing Economies",
      date: "July 1, 2024",
      excerpt: "A detailed analysis of advanced Public Financial Management reforms and their impact on fiscal sustainability.",
      link: "https://docs.google.com/document/d/1_YOUR_GOOGLE_DRIVE_DOCUMENT_ID_HERE/export?format=pdf", // Placeholder Google Drive Link
    },
    {
      title: "White Paper: Best Practices in Digital Citizen Services",
      date: "June 20, 2024",
      excerpt: "Exploring global best practices for implementing effective digital platforms for citizen engagement and service delivery.",
      link: "https://docs.google.com/document/d/1_YOUR_SECOND_GOOGLE_DRIVE_DOCUMENT_ID_HERE/export?format=pdf", // Placeholder Google Drive Link
    },
  ];

  const [emailForSubscription, setEmailForSubscription] = useState('');
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  const handleSubscription = (e) => {
    e.preventDefault();
    setSubscriptionMessage('Thank you for your interest! We will send subscription details and updates on new whitepapers to your email.');
    // In a real application, this would trigger an email or redirect to a subscription page.
    setEmailForSubscription(''); // Clear the input
  };

  return (
    <div className="bg-white py-16">
      <section className="container mx-auto px-6 mb-16">
        <h1 className="text-4xl font-bold text-[#0A1D37] text-center mb-8">Thought Leadership Hub</h1>
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
          Dive into our collection of insightful articles and exclusive white papers,
          offering in-depth analysis and expert perspectives on critical issues in
          governance, development, and technology.
        </p>

        {/* Articles Section */}
        <h2 className="text-3xl font-bold text-[#0A1D37] text-center mb-10">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((post, index) => (
            <BlogPostCard
              key={index}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              image={post.image}
            />
          ))}
        </div>
      </section>

      {/* White Papers Section */}
      <section className="bg-[#F4F4F4] py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0A1D37] text-center mb-10">Exclusive White Papers</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
            Download our in-depth white papers and research reports.
            These documents are stored on Google Drive for easy access.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whitepapers.map((paper, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl p-6 border-t-4 border-[#C6A94B]">
                <h3 className="text-xl font-bold text-[#0A1D37] mb-2">{paper.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{paper.date}</p>
                <p className="text-gray-700 mb-4">{paper.excerpt}</p>
                {/* Link directly to Google Drive PDF */}
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2 bg-[#0A1D37] text-white text-sm font-semibold rounded-full hover:bg-blue-900 transition-colors duration-300"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414zM10 3a1 1 0 011 1v7a1 1 0 11-2 0V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Download Whitepaper
                </a>
              </div>
            ))}
          </div>

          {/* Subscription Form - now for notifications */}
          <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#0A1D37] text-center mb-4">Stay Updated: Subscribe for New Whitepaper Alerts</h3>
            <form onSubmit={handleSubscription} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-grow shadow-sm border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#C6A94B]"
                value={emailForSubscription}
                onChange={(e) => setEmailForSubscription(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-[#C6A94B] text-[#0A1D37] font-semibold py-2 px-6 rounded-full shadow-md hover:bg-yellow-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Subscribe
              </button>
            </form>
            {subscriptionMessage && (
              <p className="text-center mt-4 text-sm text-green-600">{subscriptionMessage}</p>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action for Thought Leadership */}
      <section className="bg-[#C6A94B] text-[#0A1D37] py-12 text-center rounded-t-lg shadow-lg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Stay Ahead with Our Insights</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get the latest thinking and in-depth analysis from Nexus Bwaina Advisory.
          </p>
          <button className="px-8 py-3 bg-[#0A1D37] text-white font-semibold rounded-full shadow-lg hover:bg-blue-900 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-800 focus:ring-opacity-75">
            Read More Articles
          </button>
        </div>
      </section>
    </div>
  );
};

// Reusable Blog Post Card Component (Used for Articles in Thought Leadership)
const BlogPostCard = ({ title, date, excerpt, image }) => (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover"
      onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x250/0A1D37/C6A94B?text=Article+Image`; }}
    />
    <div className="p-6">
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <h3 className="text-xl font-bold text-[#0A1D37] mb-3">{title}</h3>
      <p className="text-gray-700 text-sm mb-4">{excerpt}</p>
      <button className="mt-4 text-[#C6A94B] hover:underline text-sm font-semibold">
        Read More
      </button>
    </div>
  </div>
);


// ProjectSparkerPage Component (New AI-powered tool)
const ProjectSparkerPage = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedProject, setGeneratedProject] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generateProjectIdea = async () => {
    setIsLoading(true);
    setError('');
    setGeneratedProject('');

    try {
      const chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: `Generate a detailed project idea for Nexus Bwaina Advisory based on the following prompt: "${prompt}". Focus on public sector, infrastructure, or digital transformation in Papua New Guinea or the Pacific. Include project title, objective, key activities, expected outcomes, and target beneficiaries.` }] });

      const payload = { contents: chatHistory };
      const apiKey = ""; // Canvas will automatically provide this at runtime
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setGeneratedProject(text);
      } else {
        setError('Failed to generate project idea. Please try again.');
        console.error('API response structure unexpected:', result);
      }
    } catch (err) {
      setError('An error occurred while connecting to the AI. Please try again.');
      console.error('Fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white py-16">
      <section className="container mx-auto px-6 mb-16">
        <h1 className="text-4xl font-bold text-[#0A1D37] text-center mb-8">Project Sparker AI</h1>
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
          Ignite your next big idea! Use our AI-powered Project Sparker to generate innovative
          project concepts tailored for the public sector, infrastructure, or digital
          transformation in PNG and the Pacific.
        </p>

        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-xl border border-gray-100">
          <div className="mb-6">
            <label htmlFor="project-prompt" className="block text-gray-700 text-sm font-bold mb-2">
              Enter your project idea prompt:
            </label>
            <textarea
              id="project-prompt"
              rows="5"
              className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#C6A94B] focus:border-transparent transition-all duration-200 resize-y"
              placeholder="e.g., 'A project to improve healthcare access in rural areas using mobile technology'"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={generateProjectIdea}
            className="w-full bg-[#0A1D37] hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-full shadow-lg
                       focus:outline-none focus:ring-4 focus:ring-blue-800 focus:ring-opacity-75
                       transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading || !prompt.trim()}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </span>
            ) : 'Spark a Project Idea'}
          </button>

          {error && (
            <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <p className="font-semibold">Error:</p>
              <p>{error}</p>
            </div>
          )}

          {generatedProject && (
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold text-[#0A1D37] mb-4">Generated Project Idea:</h2>
              <pre className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed text-base">
                {generatedProject}
              </pre>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

// PolicyBriefPage Component (New AI-powered tool)
const PolicyBriefPage = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedBrief, setGeneratedBrief] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generatePolicyBrief = async () => {
    setIsLoading(true);
    setError('');
    setGeneratedBrief('');

    try {
      const chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: `Generate an outline or key points for a policy brief on the following topic: "${prompt}". Focus on a policy relevant to governance, public finance, or social development in Papua New Guinea or the Pacific. Include a brief introduction, problem statement, policy options, recommendations, and conclusion.` }] });

      const payload = { contents: chatHistory };
      const apiKey = ""; // Canvas will automatically provide this at runtime
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setGeneratedBrief(text);
      } else {
        setError('Failed to generate policy brief. Please try again.');
        console.error('API response structure unexpected:', result);
      }
    } catch (err) {
      setError('An error occurred while connecting to the AI. Please try again.');
      console.error('Fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white py-16">
      <section className="container mx-auto px-6 mb-16">
        <h1 className="text-4xl font-bold text-[#0A1D37] text-center mb-8">Policy Brief AI</h1>
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
          Craft compelling policy insights with AI assistance. Generate outlines and key arguments
          for policy briefs on critical issues facing Papua New Guinea and the Pacific.
        </p>

        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-xl border border-gray-100">
          <div className="mb-6">
            <label htmlFor="policy-prompt" className="block text-gray-700 text-sm font-bold mb-2">
              Enter your policy brief topic prompt:
            </label>
            <textarea
              id="policy-prompt"
              rows="5"
              className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#C6A94B] focus:border-transparent transition-all duration-200 resize-y"
              placeholder="e.g., 'Policy options for improving climate change resilience in coastal communities of PNG'"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={generatePolicyBrief}
            className="w-full bg-[#0A1D37] hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-full shadow-lg
                       focus:outline-none focus:ring-4 focus:ring-blue-800 focus:ring-opacity-75
                       transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading || !prompt.trim()}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </span>
            ) : 'Generate Policy Brief'}
          </button>

          {error && (
            <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <p className="font-semibold">Error:</p>
              <p>{error}</p>
            </div>
          )}

          {generatedBrief && (
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold text-[#0A1D37] mb-4">Generated Policy Brief:</h2>
              <pre className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed text-base">
                {generatedBrief}
              </pre>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};


// ContactPage Component (Updated with email and WhatsApp)
const ContactPage = () => {
  const [formStatus, setFormStatus] = useState(''); // 'success', 'error', 'submitting', ''

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus('submitting');
    // Simulate an API call
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // Simulate success/failure
      if (isSuccess) {
        setFormStatus('success');
        event.target.reset(); // Clear form fields on success
      } else {
        setFormStatus('error');
      }
    }, 1500);
  };

  return (
    <div className="bg-white py-16">
      <section className="container mx-auto px-6 mb-16">
        <h1 className="text-4xl font-bold text-[#0A1D37] text-center mb-8">Contact Us</h1>
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
          We'd love to hear from you! Whether you have a question about our services,
          need a consultation, or just want to say hello, our team is ready to assist.
        </p>

        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#C6A94B] focus:border-transparent transition-all duration-200"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#C6A94B] focus:border-transparent transition-all duration-200"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#C6A94B] focus:border-transparent transition-all duration-200"
                placeholder="Inquiry about strategic advisory"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#C6A94B] focus:border-transparent transition-all duration-200 resize-y"
                placeholder="Tell us how we can help you..."
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#0A1D37] hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-full shadow-lg
                           focus:outline-none focus:ring-4 focus:ring-blue-800 focus:ring-opacity-75
                           transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus === 'success' && (
                <p className="text-green-600 text-sm font-semibold">
                  Message sent successfully! We'll be in touch soon.
                </p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-600 text-sm font-semibold">
                  Failed to send message. Please try again later.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      <section className="bg-[#F4F4F4] py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0A1D37] mb-8">Our Location & Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#C6A94B]">
              <h3 className="text-xl font-semibold text-[#0A1D37] mb-3">Office Address</h3>
              <p className="text-gray-700">Level 10, Innovation Tower</p>
              <p className="text-gray-700">123 Business Avenue</p>
              <p className="text-gray-700">Port Moresby, NCD, PNG</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#C6A94B]">
              <h3 className="text-xl font-semibold text-[#0A1D37] mb-3">Connect With Us</h3>
              <p className="text-gray-700">Email: <a href="mailto:bwaina@outlook.com" className="text-blue-600 hover:underline">bwaina@outlook.com</a></p>
              <p className="text-gray-700">Phone: +675 7012 3456</p>
              <p className="text-700">WhatsApp: <a href="https://wa.me/67579378699" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">+675 7937 8699</a></p>
              <div className="flex justify-center space-x-4 mt-4">
                {/* Placeholder social media icons */}
                <a href="#" className="text-[#0A1D37] hover:text-[#C6A94B] transition-colors duration-300">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zm.5-11H5V5.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V8zM19 19h-3v-6.25c0-3.8-4-3.5-4 0V19h-3V8h3v1.75s1.75-2 4-2c2.25 0 4 1.75 4 4V19z" />
                  </svg>
                </a>
                <a href="#" className="text-[#0A1D37] hover:text-[#C6A94B] transition-colors duration-300">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.85.37-1.77.62-2.73.73.96-.58 1.7-1.5 2.04-2.59-.9.54-1.9.93-2.94 1.15-1.02-1.09-2.48-1.77-4.1-1.77-3.1 0-5.61 2.51-5.61 5.61 0 .44.05.87.14 1.28C7.68 9.53 4.09 7.74 1.67 4.96c-.47.81-.74 1.75-.74 2.76 0 1.95.99 3.67 2.49 4.68-.92-.03-1.79-.28-2.55-.7v.07c0 2.72 1.93 4.98 4.49 5.5.47.13.97.2 1.48.2.36 0 .7-.04 1.04-.1.71 2.22 2.77 3.84 5.21 3.89-1.92 1.5-4.34 2.4-6.99 2.4-.46 0-.91-.03-1.35-.08C2.9 20.35 6 22 9.49 22c7.2 0 11.15-5.96 11.15-11.15 0-.17-.01-.34-.01-.5-.77-.56-1.73-.97-2.77-1.14z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;