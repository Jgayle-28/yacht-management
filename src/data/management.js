import { PiFiles } from 'react-icons/pi'
import { RiTreasureMapLine } from 'react-icons/ri'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { FaChartLine } from 'react-icons/fa6'
import { IoMegaphoneOutline } from 'react-icons/io5'
import { GoChecklist } from 'react-icons/go'
import { MdOutlineDirectionsBoatFilled } from 'react-icons/md'
import { HiOutlinePresentationChartBar } from 'react-icons/hi2'
import { GoShieldCheck } from 'react-icons/go'
import { GiGearHammer } from 'react-icons/gi'
import { FaUsersLine } from 'react-icons/fa6'
import { FaChampagneGlasses } from 'react-icons/fa6'

export const managementTabs = [
  {
    tabName: 'Yacht Management',
    icon: <PiFiles />,
    img: '',
    info: [
      `At Ethos Yacht Management, we understand that owning a yacht is more than just an investment—it’s a personal journey, filled with adventure and unforgettable moments. Our mission is to make that journey as smooth and rewarding as possible by managing every aspect of your yacht with the same care and passion as if it were our own. `,
      `We don’t just maintain yachts; we nurture them. Our dedicated team of certified marine technicians works tirelessly to ensure your vessel is always in prime condition, ready for you to create lasting memories on the open water. From routine maintenance to unexpected repairs, we handle it all, so you can focus on enjoying your yacht, worry-free.`,
      `What truly drives us at Ethos is our commitment to honesty, transparency, and ensuring your yacht is a thriving asset. Whether it’s managing safety protocols, navigating paperwork, or offering cost-effective charter solutions, our goal is to not only take care of your yacht but to help it flourish. We believe in building relationships based on trust, and we make sure you’re kept informed and involved in every decision, so you always know exactly what’s happening with your yacht.`,
      `Your investment is as important to us as it is to you. With our personalized approach and state-of-the-art monitoring systems, we’re constantly finding ways to optimize your yacht’s performance and profitability, turning your passion into a valuable, long-term asset.`,
      `At Ethos, we pour our heart and soul into what we do because we care about your experience. We’re here to make sure your yacht ownership is as enjoyable and stress-free as possible, while ensuring your yacht continues to bring you joy—and value—for years to come.`,
    ],
  },
  {
    tabName: 'Charter Management',
    icon: <RiTreasureMapLine />,
    img: '',
    info: [
      `<b className='font-md'>Q: How can Ethos Yacht Management simplify my yacht charter experience?</b>`,
      `<p className='mt-2'><b>A:</b> Ethos Yacht Management offers a comprehensive charter service that takes the stress out of running yacht charters. We handle everything from paperwork and regulatory compliance to crew management, maintenance, and marketing, allowing you to enjoy the benefits of yacht ownership without the time-consuming responsibilities.</p>`,

      `<b className='font-md'>Q: How does Ethos help maximize charter revenue?</b>`,
      `<p className='mt-2'><b>A:</b>  With our deep knowledge of the yacht charter market, we effectively market your yacht, handle inquiries, and manage bookings, ensuring your vessel stays consistently booked and profitable. Our goal is to optimize your yacht’s earning potential while maintaining it to the highest standards.</p>`,

      `<b className='font-md'>Q: Who takes care of yacht maintenance during charters?</b>`,
      `<p className='mt-2'><b>A:</b> We do! Our network of trusted professionals handles all aspects of yacht care, from regular inspections and cleaning to necessary repairs and upgrades. This ensures your yacht is always in top condition for guests.</p>`,

      `<b className='font-md'>Q: What about legal requirements and paperwork?</b>`,
      `<p className='mt-2'><b>A:</b> Ethos manages all administrative tasks, permits, and regulatory compliance, so your yacht operates smoothly and in accordance with all legal requirements.</p>`,

      `<b className='font-md'>Q: Why should I choose Ethos for charter management?</b>`,
      `<p className='mt-2'><b>A:</b> By choosing Ethos, you streamline your charter operations, alleviate administrative burdens, and ensure your yacht is professionally managed. You’ll be able to focus on enjoying your yacht, all while generating income through charters.</p>`,
    ],
  },
  {
    tabName: 'Yacht crew services',
    icon: <MdOutlineAdminPanelSettings />,
    img: '',
    info: [
      `<b className='font-md'>Q: Does Ethos Yacht Management offer crew administration?</b>`,
      `<p className='mt-2'><b>A:</b> Ethos provides comprehensive yacht crew administration services, overseeing recruitment, training, payroll, and scheduling to ensure your crew operates seamlessly. Our approach, rooted in honesty and transparency allows you to focus on enjoying your time on the water while we handle every aspect of crew management.</p>`,

      `<b className='font-md'>Q: What crew training does Ethos provide?</b>`,
      `<p className='mt-2'><b>A:</b> We arrange ongoing, comprehensive training programs for your crew, covering essential topics like safety drills, emergency response, and hospitality. This ensures your crew remains well-prepared and highly skilled, delivering a professional and enjoyable onboard experience.</p>`,

      `<b className='font-md'>Q: How does Ethos handle crew payroll and scheduling?</b>`,
      `<p className='mt-2'><b>A:</b> Ethos manages all aspects of crew payroll, from accurate payment calculations to tax deductions, always ensuring full compliance with labor laws. We also handle crew schedules and rotations, so you can rest assured everything runs smoothly without any hidden surprises, reflecting our commitment to honesty and transparency.</p>`,

      `<b className='font-md'>Q: What about managing crew dynamics and conflict?</b>`,
      `<p className='mt-2'><b>A:</b> A harmonious crew is key to a positive yachting experience. Ethos provides mediation and conflict resolution services to address any interpersonal issues that may arise, promoting a productive and enjoyable environment for all onboard.</p>`,

      `<b className='font-md'>Q: Why should I trust Ethos with crew administration?</b>`,
      `<p className='mt-2'><b>A:</b> By entrusting Ethos with your crew management, you gain a partner dedicated to honesty, transparency, and maximizing the efficiency of your yacht’s operations. Our professional services optimize the onboard experience, ensuring both the crew and your yacht perform at their best, while also boosting profitability.</p>`,
    ],
  },
  {
    tabName: 'Yacht Accounting & Reporting',
    icon: <FaChartLine />,
    img: '',
    info: [
      `Sailing Towards Financial Success: Optimize Yacht Ownership with Professional Accounting and Reporting Services`,
      `Yacht accounting and reporting involve managing all financial aspects of yacht operations, including bookkeeping, budgeting, invoicing, and more. Owning a yacht requires meticulous financial oversight, and the complexities of budgeting, tax compliance, and reporting can be time-consuming. Our yacht accounting and reporting services provide comprehensive solutions to streamline your financial operations and ensure your financial success.`,
      `Accurate Budgeting and Financial Planning: Our services assist you in creating precise budgets that align with your financial goals. We cover all facets of yacht ownership, including maintenance, crew management, insurance, and operational expenses. With our expert guidance, you can make informed financial decisions and optimize the use of your yacht’s resources.`,
      `Efficient Bookkeeping and Expense Tracking: Maintaining accurate financial records is essential for a clear understanding of your yacht’s transactions. We handle all bookkeeping tasks, including invoice processing, expense tracking, and bank reconciliation, ensuring your records are organized and easily accessible. By efficiently tracking expenses, we help you monitor your yacht’s financial performance and improve cost efficiency.`,
      `Tax Compliance and Reporting: Navigating tax regulations can be challenging for yacht owners. Our team possesses in-depth knowledge of tax obligations specific to yacht ownership, ensuring compliance with VAT, sales tax, and other relevant taxes. We manage the preparation and submission of tax returns, providing transparent reporting to give you peace of mind regarding your yacht’s tax affairs.`,
      `Transparent Financial Reporting: Understanding your yacht’s financial health is crucial for effective decision-making. We provide regular financial statements, including income statements, balance sheets, and cash flow reports, offering a clear overview of your yacht’s performance. This transparency allows you to assess profitability and make strategic adjustments as needed.`,
      `Expert Financial Analysis and Consultation: Our expert analysis and consultation services help you optimize your yacht’s financial performance. We analyze financial data, identify trends, and provide insights to support informed decision-making, whether evaluating charter revenue opportunities or assessing the impact of maintenance and upgrades.`,
      `By entrusting your yacht’s accounting and reporting to our professional services, you ensure streamlined financial management and oversight. From accurate budgeting and bookkeeping to tax compliance and transparent reporting, we handle your yacht’s financial affairs with expertise and precision. Focus on enjoying your yachting experience while we maintain control of your yacht’s financial health.`,
    ],
  },
  {
    tabName: 'Yacht Marketing',
    icon: <IoMegaphoneOutline />,
    img: '',
    info: [
      'Branding and Positioning: A strong brand identity is essential in yacht marketing. Developing a unique brand image that reflects the luxury and quality of your charter services is crucial. Your branding elements—logos, color schemes, and messaging—should convey exclusivity and excellence.',

      'Website and Online Presence: A well-designed website serves as the cornerstone of your marketing efforts. It should showcase your yacht charter services, detailing your fleet, itineraries, amenities, and crew, complemented by captivating visuals and videos. Additionally, optimizing your site for search engines ensures high visibility in search results.',

      'Content Marketing: Compelling and informative content is vital for attracting and engaging potential customers. This includes blog posts, articles, and guides on yacht charters, destinations, and luxury lifestyles. Sharing this content on your website, social media, and email newsletters positions your company as a trusted authority in the industry.',

      'Social Media Marketing: Utilizing social media platforms effectively broadens your reach and engages potential customers. Create and maintain profiles on platforms like Instagram, Facebook, Twitter, and LinkedIn to share stunning visuals, customer testimonials, and updates on charter experiences, generating interest and interaction.',

      'Paid Advertising: Targeted online advertising can help you reach specific audiences. Invest in pay-per-click (PPC) campaigns, social media ads, and display ads on relevant sites to ensure your message is seen by the right prospects.',

      'Email Marketing: Building and nurturing an email list enables direct communication with interested prospects. Regular newsletters can share updates on charter packages, promotions, new destinations, and events. Personalized campaigns enhance engagement and increase conversions.',

      'Partnerships and Influencer Collaborations: Collaborating with luxury brands, travel agencies, and influencers can expand your reach and credibility. Joint marketing efforts and endorsements tap into new audiences and leverage established networks.',

      'Customer Relationship Management: Effective management of customer relationships is crucial for success. Prompt responses to inquiries and personalized assistance can foster positive relationships with both past and potential clients. A robust customer relationship management (CRM) system streamlines communication and enhances the customer experience.',

      'Analytics and Measurement: Tracking and analyzing your marketing efforts is essential for optimization. Monitoring website traffic, social media engagement, and conversion rates provides valuable insights into campaign effectiveness, allowing for data-driven adjustments.',

      'Reputation Management: Maintaining a positive reputation is vital in the luxury yacht charter industry. Encouraging satisfied customers to leave testimonials, addressing concerns promptly, and consistently delivering exceptional experiences help build a strong reputation that attracts new clients.',
    ],
  },
  {
    tabName: 'Regulations Compliance',
    icon: <GoChecklist />,
    img: '',
    info: [
      'Regulations compliance in the yacht industry is essential for ensuring passenger safety, protecting the environment, and adhering to legal requirements. It involves various processes to ensure that a yacht operates within local, national, and international laws.',

      'Yacht Registration: The first step in compliance is registering the yacht with the appropriate maritime authority or flag state. Each flag state has its own registration requirements, documentation, and fees, establishing legal ownership and compliance with regulations.',

      'Safety Equipment and Certification: Yachts must meet safety regulations and carry necessary equipment, such as life jackets, life rafts, fire extinguishers, and navigational tools. Regular safety inspections and certificates of compliance from authorities are also required.',

      "Crew Licensing and Certification: Yacht crew members must possess specific qualifications and certifications to ensure safe vessel operation. Captains and crew may need licenses, such as a valid Captain's License or STCW certification, validating their competence in handling emergencies.",

      'Environmental Regulations: Yachts must adhere to environmental regulations to minimize their impact on marine ecosystems. This includes rules regarding sewage discharge, waste management, and protection of sensitive marine areas, often requiring permits or adherence to specific guidelines.',

      'Customs and Immigration Requirements: When traveling between countries, yachts must comply with customs and immigration regulations, which involve declaring goods, following clearance procedures, and ensuring proper documentation for passengers and crew.',

      'Tax and Financial Compliance: Yacht owners and charter operators must comply with tax regulations related to ownership, operation, and charter income, including VAT and sales tax obligations. Professional advice and accurate financial records are essential for compliance.',

      'Insurance Coverage: Yacht owners typically carry insurance to protect their vessels, passengers, and crew. Compliance involves obtaining adequate coverage that meets legal requirements and provides protection against accidents and liabilities.',

      "Flag State Regulations: Yachts flying a specific country's flag must comply with that flag state's regulations, which may include safety, operational, and administrative requirements. Yacht operators should stay updated on any changes to these regulations.",

      'Charter Regulations: Yachts engaged in charter activities may face additional regulations, including commercial charter licensing and local laws. Compliance is crucial for legal operation and ensuring a safe charter experience for guests.',

      "Ongoing Compliance Management: Regulations may evolve, and it's important for yacht owners and operators to stay informed. Regular monitoring, training, and engagement with industry associations can help ensure ongoing compliance.",

      'Compliance with yacht regulations is vital for maintaining safety, legality, and reputation. Yacht owners and operators should work with legal professionals and industry experts to navigate the complex regulatory landscape.',
    ],
  },
  {
    tabName: 'Berths & Winterization',
    icon: <MdOutlineDirectionsBoatFilled />,
    img: '',
    info: [
      'Berths & winterization in the yacht industry refers to securing a suitable location for a yacht during winter and preparing it to withstand cold weather challenges. This process protects the yacht from damage, maintains its condition, and ensures readiness for the next sailing season.',

      'Berth Selection: Finding an appropriate berth is the first step in winterization. Yacht owners must consider location, facilities, security, and accessibility. Options include marinas, boatyards, or private facilities that offer protection and necessary services.',

      "Winterization Plan: A comprehensive winterization plan should address the yacht's specific needs, including protecting systems, engines, electronics, and interior from cold temperatures, freezing, and moisture. This plan may involve a checklist of tasks to complete before laying up the yacht.",

      'Engine and Mechanical Systems: Proper winterization of the yacht’s engine and mechanical systems is crucial to prevent freeze-related damage. This may include changing engine oil, flushing the cooling system, adding antifreeze, and ensuring fuel tanks are properly treated.',

      'Plumbing and Water Systems: Onboard plumbing and water systems must be winterized to prevent freezing. This involves draining freshwater tanks, water lines, and toilets, and adding antifreeze to prevent residual water from freezing.',

      'Electrical Systems: Protecting the yacht’s electrical systems is essential during winterization. This includes disconnecting batteries, ensuring proper charging, and safeguarding sensitive electronics from moisture and extreme temperatures.',

      "Interior Preparations: The yacht's interior should be cleaned, perishable items removed, and ventilation ensured to prevent mold growth. Upholstery and cushions should be protected from moisture and pests.",

      'Exterior Preparations: The yacht’s exterior should be inspected and prepared for winter. This includes cleaning and waxing the hull, applying protective coatings, covering sails, and securing loose items to minimize damage from harsh weather.',

      'Ongoing Monitoring: Regular monitoring and maintenance checks should be conducted during the winterization period to address any potential issues. This may involve periodic visits to the berth and checking equipment.',

      "Berth Security and Services: Choosing a reputable berth or storage facility is crucial for the yacht's security during winter. Facilities may offer services such as security patrols, CCTV surveillance, and maintenance support.",

      'Spring Commissioning: Once winter ends, the yacht needs to be prepared for the sailing season by reversing the winterization process, inspecting systems, and ensuring the vessel is in optimal condition for launch.',

      "Proper berths & winterization practices protect yachts from risks associated with winter weather. By following these practices, owners can minimize damage and ensure their vessel's readiness for the next boating season.",

      'Specific requirements for berths & winterization may vary depending on yacht size, type, and location, as well as prevailing climate conditions. Consulting experienced professionals can provide guidance for appropriate winterization procedures.',

      'Some yacht owners may choose to keep their vessels active during winter by cruising or relocating to warmer regions. In such cases, precautions must still be taken to protect the yacht from extreme weather.',

      'Overall, berths & winterization are crucial for yacht ownership, ensuring the safety, integrity, and longevity of the vessel during winter. By taking proactive measures, yacht owners can protect their investment and prepare for winter weather challenges.',
    ],
  },
  {
    tabName: 'Sales Management',
    icon: <HiOutlinePresentationChartBar />,
    img: '',
    info: [
      'Sales management in yacht sales refers to overseeing the entire sales lifecycle, from listing a yacht for sale to negotiating with potential buyers and closing the deal. This process involves various activities and responsibilities to ensure a successful transaction.',

      'Key Aspect - Marketing: Effectively marketing the yacht is crucial to attract potential buyers. This involves creating compelling listings and utilizing various marketing channels, such as online platforms, print media, and yacht shows, to reach a targeted audience. Professional yacht brokers or sales agents play a vital role in developing marketing strategies that showcase the yacht’s features and unique selling points.',

      'Negotiations: Conducting negotiations with interested buyers is another important aspect. This includes responding to inquiries, arranging viewings and sea trials, and engaging in price negotiations. Yacht sales professionals possess in-depth market knowledge, enabling them to provide guidance to both sellers and buyers and facilitate effective communication.',

      'Finalizing the Deal: Once a buyer is identified, the sales management process involves finalizing the deal. This includes drafting and reviewing contracts, conducting due diligence, and coordinating with legal professionals, surveyors, and other parties involved. Yacht sales professionals ensure compliance with regulations and safeguard the interests of all parties.',

      'Communication: Effective sales management requires maintaining clear and transparent communication with sellers, buyers, and stakeholders. This involves providing regular updates, addressing concerns, and managing documentation to facilitate a seamless transaction.',

      'In Summary: Sales management in yacht sales encompasses a range of activities aimed at effectively marketing, negotiating, and closing sales. It requires industry knowledge, marketing expertise, negotiation skills, and attention to detail. Engaging experienced yacht sales professionals ensures a successful and satisfying sales experience.',
    ],
  },
  {
    tabName: 'Yacht Insurance',
    icon: <GoShieldCheck />,
    img: '',
    info: [
      'Yacht insurance is a specialized type of insurance that protects yacht owners from financial losses associated with damages or losses incurred while operating a yacht. It covers various risks, including accidents, injuries, theft, and damage from natural disasters or adverse weather.',

      'Key Aspect - Protection Against Accidental Damages: Yachts are valuable assets, and accidents can happen at sea. Yacht insurance typically covers damages from collisions with other vessels, submerged objects, or running aground. It provides financial compensation for repairs or replacements, relieving owners of the full cost.',

      'Liability Coverage: Yacht insurance also covers injuries or accidents involving passengers, crew members, or third parties. This includes liability for bodily injury or property damage occurring onboard. In the event of an accident, yacht insurance helps cover medical expenses, legal costs, and potential settlements.',

      'Protection Against Theft or Vandalism: Yachts are attractive targets for theft, making it crucial to have coverage for stolen or damaged items. Yacht insurance assists owners in recovering losses and provides peace of mind regarding valuable equipment or personal belongings onboard.',

      'Weather-Related Coverage: Yacht insurance accounts for the unpredictable nature of weather. Yachts can face rough seas, storms, and other adverse weather conditions. Comprehensive policies typically include coverage for damages caused by weather events, helping owners manage repair costs or replace a total loss.',

      "Policy Variability: It's important to note that yacht insurance policies can vary in coverage limits, deductibles, and specific inclusions or exclusions. Owners should review their policy documents carefully and work with insurance providers to ensure adequate coverage tailored to their needs and cruising plans.",

      'In Summary: Yacht insurance provides essential protection for yacht owners against a range of risks and potential losses. It offers financial security in case of accidents, injuries, theft, or weather-related damages. Securing appropriate yacht insurance allows owners to navigate confidently while protecting their valuable assets.',
    ],
  },
  {
    tabName: 'Technical Management',
    icon: <GiGearHammer />,
    img: '',
    info: [
      'Technical management in yacht operations involves comprehensive oversight of all technical aspects related to maintenance, repairs, and modifications of a yacht. It aims to ensure optimal performance, safety, and compliance with applicable regulations.',

      'Key Responsibility - Maintenance Program: Establishing and implementing a robust maintenance program is a primary responsibility. This includes scheduling routine inspections, servicing, and repairs for various onboard systems and components. Regular maintenance helps prevent equipment failures and extends the lifespan of critical systems.',

      'Repairs and Troubleshooting: Technical management also coordinates repairs and troubleshooting activities. When mechanical, electrical, or structural issues arise, the team diagnoses the problem and organizes necessary repairs, collaborating with crew members, specialized technicians, or external contractors.',

      'Modifications and Upgrades: In addition to maintenance, technical management oversees modifications and upgrades. This includes installing new equipment, upgrading systems, or making structural changes to enhance performance and comfort. Technical managers work with yacht owners and service providers to ensure modifications meet safety and regulatory standards.',

      'Regulatory Compliance: Ensuring compliance with relevant regulations and industry standards is critical. Technical managers stay updated on safety and environmental regulations, ensuring the yacht meets or exceeds required standards. This includes obtaining necessary certifications and conducting safety inspections.',

      'Record Keeping: Technical management involves maintaining comprehensive records of all maintenance activities, repairs, modifications, and compliance matters. This historical record supports decision-making processes and facilitates regulatory audits or inspections.',

      'Skilled Professionals: Effective technical management requires a team of skilled professionals with expertise in various disciplines, including engineering and naval architecture. They collaborate closely with the yacht’s crew, owners, and external service providers for seamless operation and safety.',

      'In Summary: Technical management encompasses a wide range of responsibilities related to the maintenance, repairs, modifications, and compliance of the yacht. By implementing proactive programs and ensuring regulatory compliance, technical management is crucial for optimal performance, safety, and longevity.',
    ],
  },
  // {
  //   tabName: 'Experience On Board',
  //   icon: <FaChampagneGlasses />,
  //   img: '',
  //   info: [],
  // },
  {
    tabName: 'Crew Training & Development',
    icon: <FaUsersLine />,
    img: '',
    info: [],
  },
]
