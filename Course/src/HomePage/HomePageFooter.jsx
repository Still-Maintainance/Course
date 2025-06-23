

function HomePageFooter() {
  return (
    <footer className="bg-[#201e3b] text-white text-sm">
      {/* Top CTA Row */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-6 border-b border-gray-700">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Teach the world online</h2>
          <p className="text-gray-300">Create an online video course, reach students across the globe, and earn money</p>
        </div>
        <button className="bg-transparent border border-white px-4 py-2 text-white hover:bg-white hover:text-black transition">
          Teach on Udemy
        </button>
      </div>


      {/* Explore Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6 py-10 border-b border-gray-700">
        {[
          {
            heading: "In-demand Careers",
            items: ["Data Scientist", "Full Stack Web Developer", "Cloud Engineer", "Project Manager", "Game Developer", "See all Career Accelerators"]
          },
          {
            heading: "Certifications by Skill",
            items: ["Cybersecurity Certification", "Project Management Certification", "Cloud Certification", "Data Analytics Certification", "HR Management Certification", "See all Certifications"]
          },
          {
            heading: "Web Development",
            items: ["Web Development", "JavaScript", "React JS", "Angular", "Java"]
          },
          {
            heading: "Data Science",
            items: ["Data Science", "Python", "Machine Learning", "ChatGPT", "Deep Learning"]
          },
          {
            heading: "IT Certifications",
            items: ["Amazon AWS", "AWS Certified Cloud Practitioner", "AZ-900: Microsoft Azure Fundamentals", "AWS Certified Solutions Architect - Associate", "Kubernetes"]
          },
          {
            heading: "Communication",
            items: ["Communication Skills", "Presentation Skills", "Public Speaking", "Writing", "PowerPoint"]
          },
          {
            heading: "Leadership",
            items: ["Leadership", "Management Skills", "Project Management", "Personal Productivity", "Emotional Intelligence"]
          },
          {
            heading: "Business Analytics & Intelligence",
            items: ["Microsoft Excel", "SQL", "Microsoft Power BI", "Data Analysis", "Business Analysis"]
          }
        ].map((section, idx) => (
          <div key={idx}>
            <h4 className="font-bold mb-2">{section.heading}</h4>
            <ul className="space-y-1 text-gray-300">
              {section.items.map((item, index) => (
                <li key={index} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-6 py-10 text-gray-300">
        <div>
          <h4 className="font-bold mb-2">About</h4>
          <ul className="space-y-1">
            <li>About us</li>
            <li>Careers</li>
            <li>Contact us</li>
            <li>Blog</li>
            <li>Investors</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Discover Udemy</h4>
          <ul className="space-y-1">
            <li>Get the app</li>
            <li>Teach on Udemy</li>
            <li>Plans and Pricing</li>
            <li>Affiliate</li>
            <li>Help and Support</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Udemy for Business</h4>
          <ul>
            <li>Udemy Business</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Legal & Accessibility</h4>
          <ul className="space-y-1">
            <li>Accessibility statement</li>
            <li>Privacy policy</li>
            <li>Sitemap</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-between items-center px-6 py-6 text-gray-400 border-t border-gray-700 text-xs">
        <div className="flex items-center gap-2">
          <img src="/img/logo-udemy-inverted.svg" alt="Udemy Logo" className="h-5" />
          <span>© 2025 Udemy, Inc.</span>
        </div>
        <div className="flex gap-6">
          <span>Cookie settings</span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3 19.5V22h6v-.5A10 10 0 0 0 12 2z" /></svg>
            English
          </span>
        </div>
      </div>
    </footer>
  );
}

export default HomePageFooter;
