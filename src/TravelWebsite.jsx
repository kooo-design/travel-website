import { useState, useEffect } from "react";
import locIcon from "./assets/loc.png";
import peopleIcon from "./assets/people.png";
import dateIcon from "./assets/date.png";
import travelIcon from "./assets/travel.png";
import whatsappIcon from "./assets/wa.png";
import tiktokIcon from "./assets/tiktok.png";
import instagramIcon from "./assets/instagram.png";
import yogyaImg from "./assets/yogya.png";
import bdgImg from "./assets/bdg.jpg";
import bandungImg from "./assets/BANDUNG.jpg";
import whatsappImg from "./assets/whatsapp.png";

const destinations = [
  {
    id: 1,
    name: "Pangandaran",
    days: "2 Hari",
    minPeople: "Min 2 Orang",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=280&fit=crop",
    category: ["Semua", "Trending", "Alam"],
  },
  {
    id: 2,
    name: "Puncak Bogor",
    days: "1 Hari",
    minPeople: "Min 7 Orang",
    img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=280&fit=crop",
    category: ["Semua", "Alam"],
  },
  {
    id: 3,
    name: "Jogjakarta",
    days: "3 Hari",
    minPeople: "Min 10 Orang",
    img: yogyaImg,
    category: ["Semua", "Trending", "Kota"],
  },
  {
    id: 4,
    name: "Bandung",
    days: "1 Hari",
    minPeople: "Min 10 Orang",
    img: bdgImg,
    category: ["Semua", "Trending", "Kota"],
  },
  {
    id: 5,
    name: "Bandung",
    days: "1 Hari",
    minPeople: "Min 10 Orang",
    img: bdgImg,
    category: ["Semua", "Trending", "Kota"],
  },
];

const gallery = [
  {
    id: 1,
    name: "Pangandaran",
    by: "By andrialexa, di Instagram",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
    tall: false,
  },
  {
    id: 2,
    name: "Puncak Bogor",
    by: "By tonygeryy, di Instagram",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&h=500&fit=crop",
    tall: true,
  },
  {
    id: 3,
    name: "Bandung",
    by: "By hadiaulputra, di Instagram",
    img: bandungImg,
    tall: true,
  },
  {
    id: 4,
    name: "Bromo",
    by: "By harrytraffic, di Instagram",
    img: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=600&h=400&fit=crop",
    tall: false,
  },
];

const services = [
  {
    title: "Penyewaan Alat Penunjang",
    desc: "Seperti bantal leher, selimut, atau bahkan power bank yang disediakan oleh pihak travel.",
  },
  {
    title: "Hiburan On-Board",
    desc: "Akses Wi-Fi gratis di dalam armada atau sistem hiburan (audio/video) selama perjalanan.",
  },
  {
    title: "Asuransi Perjalanan",
    desc: "Proteksi otomatis atau opsional untuk keselamatan penumpang dan barang bawaan selama perjalanan antar kota.",
  },
];

const tabs = ["Semua", "Trending", "Alam", "Kota"];

const socialIcons = [
  { src: whatsappIcon, alt: "WhatsApp" },
  { src: tiktokIcon, alt: "TikTok" },
  { src: instagramIcon, alt: "Instagram" },
];

export default function TravelWebsite() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [destination, setDestination] = useState("Semarang");
  const [people, setPeople] = useState("Dua");
  const [navbarStyle, setNavbarStyle] = useState({
    background: "rgba(0, 0, 0, 0.36)",
    textColor: "white",
  });

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight - 64; // Hero height is 100vh - navbar height (64px)
      if (window.scrollY > heroHeight) {
        setNavbarStyle({
          background: "rgba(0, 0, 0, 0.36)",
          textColor: "black",
        });
      } else {
        setNavbarStyle({
          background: "rgba(0, 0, 0, 0.36)",
          textColor: "white",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filtered = destinations.filter((d) => d.category.includes(activeTab));

  // WhatsApp API Handler
  const handleWhatsAppClick = async () => {
    try {
      // TODO: Tambahkan WhatsApp API integration di sini
      console.log("WhatsApp button clicked");

      // Placeholder untuk WhatsApp API
      const message =
        "Halo, saya ingin informasi lebih lanjut mengenai layanan travel Anda";
      const whatsappUrl = `https://api.whatsapp.com/send?phone=+62 821-2921-1422&text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        color: "#1a1a1a",
        overflowX: "hidden",
        /* ✅ FIX 1: Pastikan root div full width tanpa margin */
        width: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      <style>{`
        /* ✅ FIX 2: Reset global agar tidak ada margin/padding dari browser atau framework */
        html, body, #root {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          max-width: 100% !important;
          overflow-x: hidden;
        }

        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        .btn-green { background: #569643; color: white; border: none; border-radius: 15px;
          padding: 10px 22px; font-weight: 700; font-size: 14px; cursor: pointer;
          transition: background 0.2s, transform 0.15s; white-space: nowrap; font-family: 'Poppins', sans-serif; }
        .btn-green:hover { background: #16a34a; transform: translateY(-1px); }

        .tab-btn { background: none; border: 1.5px solid #ddd; border-radius: 8px;
          padding: 7px 20px; font-size: 14px; font-weight: 600; cursor: pointer;
          color: #555; transition: all 0.2s; font-family: 'Poppins', sans-serif; }
        .tab-btn.active { background: #569643; color: white; border-color: #569643; }
        .tab-btn:hover:not(.active) { border-color: #569643; color: #569643; }

        .dest-card { border-radius: 14px; overflow: hidden;
          box-shadow: 0 2px 16px rgba(0,0,0,0.08); background: white;
          transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; }
        .dest-card:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(0,0,0,0.14); }

        .service-card { background: white; border-radius: 14px; padding: 24px 20px 20px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.07); border: 1px solid #f0f0f0; transition: box-shadow 0.2s; }
        .service-card:hover { box-shadow: 0 6px 28px rgba(34,197,94,0.12); }

        .label-badge { display: inline-block; background: #dcfce7; color: #569643;
          font-size: 11px; font-weight: 800; letter-spacing: 1.5px; padding: 4px 14px;
          border-radius: 10px; margin-bottom: 12px; text-transform: uppercase; }

        .whatsapp-float { position: fixed; bottom: 32px; right: 28px; background: #E9E9E9;
          color: #333; width: 50px; height: 50px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; font-size: 22px;
          box-shadow: 0 4px 18px rgba(0,0,0,0.15); cursor: pointer; z-index: 999; transition: transform 0.2s; }
        .whatsapp-float:hover { transform: scale(1.1); }

        .footer-link { color: #9ca3af; font-size: 13px; text-decoration: none;
          display: block; margin-bottom: 8px; transition: color 0.2s; }
        .footer-link:hover { color: white; }

        .search-bar {
          background: white; border-radius: 14px;
          box-shadow: 0 6px 32px rgba(0,0,0,0.2);
          display: flex; align-items: stretch;
          width: 100%; max-width: 900px;
          overflow: hidden;
        }
        .sf {
          display: flex; align-items: center; gap: 8px;
          padding: 12px 16px; flex: 1; min-width: 0;
        }
        .sf-icon { font-size: 17px; flex-shrink: 0; }
        .sf-inner { display: flex; flex-direction: column; min-width: 0; flex: 1; }
        .sf-label { font-size: 9px; color: #aaa; font-weight: 800;
          letter-spacing: 1.2px; text-transform: uppercase; white-space: nowrap; margin-bottom: 2px; }
        .sf select, .sf input[type=date] {
          border: none; outline: none; background: transparent;
          font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 13px;
          color: #1a1a1a; cursor: pointer; width: 100%; padding: 0;
        }
        .sdiv { width: 1px; background: #e5e7eb; align-self: stretch; margin: 10px 0; flex-shrink: 0; }
        .cari-btn {
          background: #569643; color: white; border: none;
          padding: 0 28px; font-weight: 800; font-size: 15px;
          cursor: pointer; transition: background 0.2s;
          font-family: 'Poppins', sans-serif; white-space: nowrap; flex-shrink: 0;
        }
        .cari-btn:hover { background: #569643; }
      `}</style>

      {/* ── NAVBAR ── */}
      {/* ✅ FIX 3: Navbar pakai width: 100% bukan width default */}
      <nav
        style={{
          background: navbarStyle.background,
          padding: "0 48px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "none",
          position: "fixed",
          color: navbarStyle.textColor,
          top: 0,
          zIndex: 100,
          width: "100%",
          boxSizing: "border-box",
          transition: "background 0.3s ease, color 0.3s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#22c55e,#16a34a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={travelIcon}
              alt="Travel"
              style={{ width: 20, height: 20, objectFit: "contain" }}
            />
          </div>
          <span
            style={{
              fontWeight: 800,
              fontSize: 16,
              fontFamily: "'Popinns', sans-serif",
              color: navbarStyle.textColor,
            }}
          >
            TRAVEL
          </span>
        </div>

        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {[
            { label: "Home", href: "home" },
            { label: "Tentang Kami", href: "about" },
            { label: "Destinasi", href: "destinations" },
            { label: "Pelayanan", href: "services" },
            { label: "Galeri Konsumen", href: "gallery" },
          ].map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              style={{
                color: navbarStyle.textColor,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 14,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#22c55e")}
              onMouseLeave={(e) =>
                (e.target.style.color = navbarStyle.textColor)
              }
            >
              {item.label}
            </a>
          ))}
        </div>

        <button className="btn-green" onClick={handleWhatsAppClick}>
          Booking Now
        </button>
      </nav>

      {/* ── HERO ── */}
      {/* ✅ FIX 4: Hero pakai width: 100vw agar benar-benar full layar */}
      <section
        id="home"
        style={{
          position: "relative",
          width: "100%" /* ✅ TAMBAHAN */,
          height: "calc(100vh - 64px)",
          minHeight: 560,
          overflow: "hidden",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&h=900&fit=crop"
          alt="Hero"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
            display: "block" /* ✅ TAMBAHAN: hilangkan gap bawah gambar */,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom,rgba(0,0,0,0.52) 0%,rgba(0,0,0,0.1) 55%,rgba(0,0,0,0.6) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            padding: "0 24px",
            gap: 14,
          }}
        >
          <h1
            style={{
              fontFamily: "'Popinns', sans-serif",
              fontSize: "50px",
              fontWeight: 800,
              lineHeight: 1.15,
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
              maxWidth: 1000,
            }}
          >
            Teman Setia di Setiap Perjalanan.
          </h1>

          <p
            style={{
              fontSize: 15,
              fontWeight: 500,
              opacity: 0.88,
              maxWidth: 460,
              lineHeight: 1.7,
            }}
          >
            Lebih dari Sekadar Panduan, Kami Adalah Kompas Setia yang Menemani
            Setiap Petualanganmu.
          </p>

          <div className="search-bar" style={{ marginTop: 18 }}>
            <div className="sf">
              <img
                src={locIcon}
                alt="Lokasi"
                className="sf-icon"
                style={{ width: 20, height: 20, objectFit: "contain" }}
              />
              <div className="sf-inner">
                <span className="sf-label">Destinasi</span>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                >
                  <option>Semarang</option>
                  <option>Bandung</option>
                  <option>Jogjakarta</option>
                  <option>Bali</option>
                  <option>Lombok</option>
                </select>
              </div>
            </div>
            <div className="sdiv" />
            <div className="sf">
              <img
                src={peopleIcon}
                alt="People"
                className="sf-icon"
                style={{ width: 20, height: 20, objectFit: "contain" }}
              />
              <div className="sf-inner">
                <span className="sf-label">Orang</span>
                <select
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                >
                  <option>Dua</option>
                  <option>Tiga</option>
                  <option>Lima</option>
                  <option>Sepuluh</option>
                </select>
              </div>
            </div>
            <div className="sdiv" />
            <div className="sf">
              <img
                src={dateIcon}
                alt="Date"
                className="sf-icon"
                style={{ width: 20, height: 20, objectFit: "contain" }}
              />
              <div className="sf-inner">
                <span className="sf-label">Start</span>
                <input type="date" defaultValue="2028-08-12" />
              </div>
            </div>
            <div className="sdiv" />
            <div className="sf">
              <img
                src={dateIcon}
                alt="Date"
                className="sf-icon"
                style={{ width: 20, height: 20, objectFit: "contain" }}
              />
              <div className="sf-inner">
                <span className="sf-label">End</span>
                <input type="date" defaultValue="2028-08-14" />
              </div>
            </div>
            <button className="cari-btn">Cari</button>
          </div>
        </div>
      </section>

      {/* ── TENTANG KAMI ── */}
      <section
        id="about"
        style={{
          padding: "80px 48px",
          textAlign: "center",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span className="label-badge">TENTANG KAMI</span>
          <h2
            style={{
              fontFamily: "'Popinns', sans-serif",
              fontSize: 34,
              fontWeight: 800,
              marginBottom: 18,
              color: "#000000",
            }}
          >
            Tentang Perusahaan
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: "#555" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>
      </section>

      {/* ── DESTINASI ── */}
      <section
        id="destinations"
        style={{
          padding: "0 48px 80px",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <span className="label-badge">DESTINASI</span>
            <h2
              style={{
                fontFamily: "'Popinns', sans-serif",
                fontSize: 34,
                fontWeight: 800,
                marginBottom: 10,
                color: "#000000",
              }}
            >
              Explorasi Semua Destinasi Mimpimu
            </h2>
            <p style={{ fontSize: 15, color: "#666" }}>
              Semua mimpimu ada di genggamanmu sendiri, mari jelajahi bersama
              kami.
            </p>
          </div>
        </div>

        <div
          style={{
            background: "rgba(73, 135, 192, 0.2)",
            borderRadius: 15,
            padding: "10px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
            marginBottom: 36,
            width: "fit-content",
            margin: "0 auto 36px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {filtered.map((dest) => (
              <div key={dest.id} className="dest-card">
                <img
                  src={dest.img}
                  alt={dest.name}
                  style={{ width: "100%", height: 200, objectFit: "cover" }}
                />
                <div style={{ padding: "16px 18px 18px" }}>
                  <h3
                    style={{ fontWeight: 800, fontSize: 17, marginBottom: 10 }}
                  >
                    {dest.name}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      gap: 16,
                      color: "#000",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    <img
                      src={dateIcon}
                      alt="Date"
                      className="sf-icon"
                      style={{ width: 20, height: 20, objectFit: "contain" }}
                    />
                    <span>{dest.days}</span>
                    <img
                      src={peopleIcon}
                      alt="People"
                      className="sf-icon"
                      style={{ width: 20, height: 20, objectFit: "contain" }}
                    />
                    <span>{dest.minPeople}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PELAYANAN ── */}
      <section
        id="services"
        style={{ background: "white", padding: "80px 48px", width: "100%" }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 32,
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <span className="label-badge">PELAYANAN</span>
            <h2
              style={{
                fontFamily: "'Popinns', sans-serif",
                fontSize: 30,
                fontWeight: 800,
                lineHeight: 1.35,
                color: "#000000",
              }}
            >
              Pelayanan Yang Kita Miliki
            </h2>
          </div>
          <div>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.85,
                color: "#555",
                marginBottom: 32,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 18,
              }}
            >
              {services.map((s, i) => (
                <div key={i} className="service-card">
                  <h4
                    style={{
                      fontWeight: 800,
                      fontSize: 15,
                      marginBottom: 10,
                      lineHeight: 1.4,
                    }}
                  >
                    {s.title}
                  </h4>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#666",
                      lineHeight: 1.65,
                      marginBottom: 20,
                    }}
                  >
                    {s.desc}
                  </p>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: "#22c55e",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: 16,
                      cursor: "pointer",
                    }}
                  >
                    ↗
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALERI KONSUMEN ── */}
      <section
        id="gallery"
        style={{
          padding: "80px 48px",
          width: "100%",
          background: "white",
          backgroundColor: "fffff",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="label-badge">GALERI KONSUMEN</span>
            <h2
              style={{
                fontFamily: "'Popinns', sans-serif",
                fontSize: 34,
                fontWeight: 800,
                marginBottom: 10,
                color: "#000000",
              }}
            >
              Cerita Nyata dari Setiap Perjalanan
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#000000",
                maxWidth: 500,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Bukan Sekadar Testimonial, Ini Adalah Bukti Nyata Kenyamanan yang
              Kami Berikan di Setiap Kilometer Perjalanan Anda.
            </p>
          </div>

          <div style={{ columns: "2 300px", gap: 20 }}>
            {gallery.map((g) => (
              <div
                key={g.id}
                style={{ marginBottom: 20, breakInside: "avoid" }}
              >
                <img
                  src={g.img}
                  alt={g.name}
                  style={{
                    width: "100%",
                    height: g.tall ? 420 : 280,
                    objectFit: "cover",
                    borderRadius: 12,
                    display: "block",
                  }}
                />
                <div style={{ padding: "10px 4px 4px" }}>
                  <p style={{ fontWeight: 800, fontSize: 15 }}>{g.name}</p>
                  <p style={{ fontSize: 12, color: "#888" }}>{g.by}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: "#000000",
          color: "#9ca3af",
          padding: "56px 48px 36px",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 40,
            marginBottom: 40,
          }}
        >
          <div>
            <p
              style={{
                color: "white",
                fontWeight: 800,
                fontSize: 16,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              NAMA TRAVEL
            </p>
            {["FAQ", "Partner", "Semua Solusi"].map((l) => (
              <a key={l} href="#" className="footer-link">
                {l}
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                color: "white",
                fontWeight: 800,
                fontSize: 16,
                marginBottom: 16,
                fontFamily: "'Popinns', sans-serif",
              }}
            >
              SOCIAL MEDIA
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                marginBottom: 16,
                justifyContent: "center",
              }}
            >
              {socialIcons.map((icon, i) => (
                <div
                  key={i}
                  style={{
                    width: 34,
                    height: 34,
                    background: "#1f2937",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    style={{ width: 18, height: 18, objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.7,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
              }}
            >
              <img
                src={locIcon}
                alt="Lokasi"
                style={{ width: 14, height: 14, objectFit: "contain" }}
              />
              Jl. Buahbatu No.04 bla bla bla
            </p>
          </div>
          <div>
            <p
              style={{
                color: "white",
                fontWeight: 800,
                fontSize: 16,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              EKSPLORASI KITA
            </p>
            {["Tentang Kita", "Review"].map((l) => (
              <a key={l} href="#" className="footer-link">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid #1f2937",
            paddingTop: 24,
            textAlign: "center",
            fontSize: 13,
          }}
        >
          © 2024 Nama Travel. All rights reserved.
        </div>
      </footer>

      <div
        className="whatsapp-float"
        title="Hubungi Kami"
        onClick={handleWhatsAppClick}
      >
        <img
          src={whatsappImg}
          alt="WhatsApp"
          style={{ width: "30px", height: "30px", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
