import { useState } from "react";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="about" className="text-center py-20 bg-gray-100 px-4 relative">

      {/* Foto Profil */}
      <img
        src="/assets/profile.jpg"
        alt="Foto Devia Citra Lestari"
        className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg border-4 border-yellow-400 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
        onClick={() => setShowModal(true)}
      />

      <h1 className="text-5xl font-bold mb-4">Halo, Saya Devia Citra Lestari 👋</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Saya siswi <strong>SMK Negeri 1 Probolinggo</strong> jurusan <strong>Rekayasa Perangkat Lunak (RPL)</strong>.<br />
        Saya memiliki minat di bidang <strong>desain UI/UX</strong>.<br />
        Selain itu, saya juga gemar memasak 🍳, membaca novel 📖, dan mendengarkan musik 🎵.
      </p>

      {/* Tombol Navigasi */}
      <div className="space-x-4 mt-6">
        <a
          href="#projects"
          className="inline-block bg-black text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition"
        >
          Lihat Projects Saya
        </a>
        <a
          href="#tentang-saya"
          className="inline-block bg-black text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition"
        >
          Tentang Saya
        </a>
      </div>

      {/* Tentang Saya Card */}
      <div
        id="tentang-saya"
        className="mt-16 bg-white shadow-2xl rounded-3xl p-10 max-w-3xl mx-auto text-left scroll-mt-24 relative border-4 border-yellow-200 hover:shadow-yellow-400 transition-shadow"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center animate-bounce">📖 Tentang Saya</h2>
        <ul className="text-gray-700 space-y-3">
          <li><strong>Nama:</strong> Devia Citra Lestari</li>
          <li><strong>Tanggal Lahir:</strong> 02 Maret 2008</li>
          <li><strong>Umur:</strong> 17 tahun</li>
          <li><strong>Jenis Kelamin:</strong> Perempuan</li>
          <li><strong>Alamat:</strong> JL. Tambora, Kademangan, Kota Probolinggo</li>
          <li><strong>Sekolah:</strong> SMK Negeri 1 Probolinggo</li>
          <li><strong>Jurusan:</strong> Rekayasa Perangkat Lunak</li>
          <li><strong>Hobi:</strong> Memasak, Membaca novel, Mendengarkan Musik</li>
        </ul>
      </div>

      {/* Modal Pop-up Saat Foto Diklik */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md text-center shadow-2xl relative">
            <h2 className="text-2xl font-bold mb-4">Hai, Saya Devia! 👋</h2>
            <p className="mb-6 text-gray-700">
              Senang bertemu denganmu! Saya suka coding, UI/UX, dan membuat proyek kreatif.  
              Klik tombol di bawah untuk menutup pop-up.
            </p>
            <button
              className="bg-yellow-400 text-white px-6 py-2 rounded-full hover:bg-yellow-500 transition"
              onClick={() => setShowModal(false)}
            >
              Tutup
            </button>
            {/* Hiasan bintang */}
            <div className="absolute top-2 right-2 text-yellow-300 text-2xl animate-pulse">⭐</div>
          </div>
        </div>
      )}

    </section>
  );
}
