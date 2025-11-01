import { useState } from "react";

export default function CertificatePage() {
  const certificates = [
    { name: "UI/UX", file: "/assets/sertifikat-acp-uiux-page-001.jpg" },
    { name: "ACP AXIOO", file: "/assets/-certificate-ACP1 Hardware-19-07-2025-01-07-37-page-001.jpg" },
    { name: "Web Programming", file: "/assets/Sertifikat Web programming-page-001.jpg" },
    { name: "Mobile App Development", file: "/assets/Sertifikat Mobile app Development-page-001.jpg" },
    { name: "ACP Python", file: "/assets/Sertifikat ACP python-page-001.jpg" },
  ];

  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-10 text-center animate-bounce">🎓 Sertifikat Saya</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-xl p-4 cursor-pointer hover:shadow-yellow-400 transition relative"
            onClick={() => setSelectedCert(cert)}
          >
            <h2 className="text-xl font-semibold mb-2">{cert.name}</h2>
            <img
              src={cert.file}
              alt={cert.name}
              className="rounded-lg w-full object-cover shadow-md hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>

      <a
        href="/#projects"
        className="mt-6 inline-block text-yellow-500 hover:text-black font-semibold"
      >
        ← Kembali ke Proyek
      </a>

      {/* Modal Sertifikat */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-3xl max-w-3xl w-full relative shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">{selectedCert.name}</h2>
            <img
              src={selectedCert.file}
              alt={selectedCert.name}
              className="w-full rounded-lg object-contain"
            />
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-gray-600 text-2xl hover:text-black"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
