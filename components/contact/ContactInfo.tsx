"use client";

const ContactInfo = () => {

  const locations = [
    {
      title: "Main Office",
      address: ["123 Construction Ave", "Vancouver, BC V6B 1A1"],
      phone: "(604) 123-4567",
      email: "info@hitechrenovations.ca",
      hours: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM", "Sun: Closed"],
    },
    {
      title: "Showroom",
      address: ["456 Design Street", "Burnaby, BC V5H 2A9"],
      phone: "(604) 987-6543",
      email: "showroom@hitechrenovations.ca",
      hours: ["Mon-Fri: 9:00 AM - 5:00 PM", "Sat: 10:00 AM - 3:00 PM", "Sun: By Appointment"],
    },
  ];

  const services = [
    "Vancouver",
    "Burnaby",
    "Richmond",
    "Surrey",
    "North Vancouver",
    "West Vancouver",
    "New Westminster",
    "Coquitlam",
    "Port Moody",
    "Port Coquitlam",
    "Delta",
    "Langley",
  ];

  // Removed all animations to fix performance issues

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider">Find Us</span>
          <h2 className="display-2 mt-2 mb-4 text-secondary">
            Visit Our Locations
          </h2>
          <p className="body-lg text-secondary/70 max-w-3xl mx-auto">
            Stop by our office or showroom to discuss your project in person. 
            Our team is ready to help bring your vision to life.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid-12 gap-8 mb-20">
          {locations.map((location, index) => (
            <div key={index} className="col-span-12 lg:col-span-6">
              <div className="bg-white rounded-2xl overflow-hidden h-full shadow-lg">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-6">
                  <h3 className="text-2xl font-bold">
                    {location.title}
                  </h3>
                </div>
                
                <div className="p-8 space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Address</p>
                      {location.address.map((line, i) => (
                        <p key={i} className="text-secondary">{line}</p>
                      ))}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Phone</p>
                      <a href={`tel:${location.phone.replace(/[^0-9]/g, '')}`} className="text-secondary font-medium hover:text-primary transition-colors">
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                      <a href={`mailto:${location.email}`} className="text-secondary hover:text-primary transition-colors break-all">
                        {location.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Business Hours</p>
                      {location.hours.map((hour, i) => (
                        <p key={i} className="text-secondary text-sm">{hour}</p>
                      ))}
                    </div>
                  </div>

                  {/* Get Directions Button */}
                  <div className="pt-4 border-t border-gray-100">
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(location.address.join(', '))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                    >
                      <span>Get Directions</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Areas */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-secondary mb-8">
            Proudly Serving Greater Vancouver
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {services.map((area, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-secondary text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;