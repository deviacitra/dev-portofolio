import { useState } from "react";

export default function Projects() {
  const data = [
    { 
      name: "SERTIFIKAT", 
      desc: "Lihat semua sertifikat UI/UX, ACP AXIOO, Web Programming, Web Mobile App Development, ACP Python.", 
      link: "/certificates.html" 
    },
    { 
      name: "HTML", 
      desc: "Latihan Membuat Landing Page HTML dan Tabel Dasar", 
      projects: [
        { title: "Latihan Landing Page", link: "/tampilanwebsite.html" },
        { title: "Tabel Dasar", link: "/Tabel dasar.html" },
      ]
    },
    { 
      name: "UI/UX", 
      desc: "Project desain antarmuka pengguna (User Interface)", 
      link: "#" 
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-10 animate-bounce">🧱 Projects Saya</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {data.map((p, i) => (
            <div
              key={i}
              className="border-4 border-yellow-200 rounded-3xl shadow-xl p-6 hover:shadow-yellow-400 transition relative cursor-pointer"
              onClick={() => setOpenIndex(i)}
            >
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-gray-600 mb-4">{p.desc}</p>
              <span className="text-yellow-500 hover:text-black transition">Klik untuk detail →</span>

              {/* Pop-up modal detail */}
              {openIndex === i && (
                <div 
                  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                  onClick={() => setOpenIndex(null)}
                >
                  <div 
                    className="bg-white rounded-3xl p-8 max-w-md text-center shadow-2xl relative"
                    onClick={(e) => e.stopPropagation()} // klik di dalam modal tidak menutup
                  >
                    <h2 className="text-2xl font-bold mb-4">{p.name}</h2>
                    <p className="mb-6 text-gray-700">{p.desc}</p>

                    {/* Jika ada beberapa proyek */}
                    {p.projects ? (
                      <ul className="text-left mb-6">
                        {p.projects.map((proj, idx) => (
                          <li key={idx} className="mb-2">
                            <a 
                              href={proj.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-yellow-500 hover:text-black underline"
                            >
                              {proj.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-400 text-white px-6 py-2 rounded-full hover:bg-yellow-500 transition"
                      >
                        Lihat Halaman
                      </a>
                    )}

                    <button
                      className="absolute top-4 right-4 text-gray-500 text-xl hover:text-black"
                      onClick={() => setOpenIndex(null)}
                    >
                      ✖
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
