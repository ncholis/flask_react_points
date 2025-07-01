import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

const HomePage = () => {
  const initServices = [
    {
      id: 1,
      name: "Domain",
      desc: " Daftarkan nama dan ide bisnis Anda dg berbagai pilihan ekstensi domain yang sesuai bidang bisnis anda ",
      price: "60.000",
      is_bought: false,
    },
    {
      id: 2,
      name: "Web Hosting",
      desc: "Dibangun di atas arsitektur cloud (seperti: Google Cloud, AWS, Microsoft Azure, Alibaba Cloud, DigitalOcean)",
      price: "10.000",
      is_bought: false,
    },
    {
      id: 3,
      name: "Jasa Pembuatan Web",
      desc: "Tim kami ahli dalam mewujudkan konsep kreatif dan fungsional untuk menciptakan website yang menarik.",
      price: "999.000",
      is_bought: false,
    },
  ];

  const [services, setServices] = useState(initServices);

  useEffect(() => {
    const s = localStorage.getItem("services");
    if (!s) {
      localStorage.setItem("services", JSON.stringify(services));
    }

    if (s) {
      setServices(JSON.parse(s));
    }
  }, []);

  const handleBeli = (index) => {
    const newV = [...services];
    newV[index].is_bought = true;
    setServices(newV);

    localStorage.setItem("services", JSON.stringify(services));
  };

  return (
    <>
      <section className="ptb-100 overflow-hidden bg-primary">
        <Row className="align-items-center justify-content-center justify-content-lg-between p-3">
          <Col lg={6} className="text-white py-5">
            <header className="mb-4">
              <p className="mb-0">
                <i className="fas fa-bell rounded-circle mr-2"></i>
                <span className="font-weight-bold">30% Discount </span> first
                annual purchase
              </p>
            </header>
            <h1>Unlimited Domain & Hosting in One Platform</h1>
            <p className="lead">
              Kami berikan penawaran terbaik unlimited web hosting. Fitur
              terlengkap, harga terjangkau, dan dukungan teknis 24/7 telah
              tersedia untuk Anda. Promo spesial segera berakhir. Order
              sekarang!
            </p>
            <Button style={{ backgroundColor: "orange" }}>Beli Sekarang</Button>
          </Col>
          <Col lg={6} className="text-center">
            <img src="/hero-home.svg" alt="hosting" className="img-fluid" />
          </Col>
        </Row>
        <Row className="justify-content-center bg-white">
          <Col md={10} lg={7} className="text-center mt-5">
            <header>
              <h2>Dukungan &amp; Garansi Terbaik</h2>
              <p>
                Komitmen PabrikOnline mencakup segala aspek, mulai dari
                konsultasi sebelum pembelian hingga dukungan setelah penjualan
                untuk layanan Web Hosting murah PabrikOnline.
              </p>
            </header>
          </Col>
        </Row>
        <Row className="justify-content-md-center justify-content-sm-center p-4 bg-white">
          <Col md={6} lg={4} className="text-center p-2 mt-4">
            <div className="card single-promo-card single-promo-hover">
              <div className="card-body">
                <div className="pb-2">
                  <span className="fas fa-cubes icon-size-lg color-primary"></span>
                </div>
                <div className="pt-2 pb-3">
                  <h5>Tiket Support</h5>
                  <p className="mb-0">
                    Membantu kesulitan Anda adalah kebangaan tersendiri dari
                    kami, dan itu adalah tujuan utama kami.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} className="text-center p-2 mt-4">
            <div className="card single-promo-card single-promo-hover">
              <div className="card-body">
                <div className="pb-2">
                  <span className="fas fa-headset icon-size-lg color-primary"></span>
                </div>
                <div className="pt-2 pb-3">
                  <h5>24/7 Live Chat</h5>
                  <p className="mb-0">
                    Semua layanan Anda akan Ready dengan cepat setelah Anda
                    melakukan konfirmasi pembayaran.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} className="text-center p-2 mt-4">
            <div className="card single-promo-card single-promo-hover">
              <div className="card-body">
                <div className="pb-2">
                  <span className="fas fa-lock icon-size-lg color-primary"></span>
                </div>
                <div className="pt-2 pb-3">
                  <h5>Premium Hardware</h5>
                  <p className="mb-0">
                    Membuat situs web e-commerce membutuhkan hardware yang
                    handal, percayakan pada kami.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <section className="ptb-60 bg-primary">
        <Row className="align-items-center justify-content-between p-3">
          <Col md={7} lg={6} className="text-white">
            <h2 className="text-white">Kenapa harus PabrikOnline?</h2>
            <p>
              CV PabrikOnline Global Solusindo mempunya misi untuk membuat hidup
              lebih mudah bagi web developer dan pelanggan mereka. Kami
              melakukannya dengan menawarkan kebutuhan web yang mudah digunakan,
              cepat serta handal.
            </p>
            <Button
              style={{ backgroundColor: "orange" }}
              href="https://wa.me/6281259125311"
            >
              Hubungi Kami
            </Button>
          </Col>
          <Col md={5} lg={4} className="text-center">
            <img src="/cta-new.svg" alt="server room" className="img-fluid" />
          </Col>
        </Row>
      </section>
      <div className="text-center my-5">
        <h2>Lihat layanan yang kami sediakan</h2>
      </div>
      <div className="container">
        <Row className="align-items-center justify-content-center">
          {services.map(({ name, desc, price, is_bought }, key) => (
            <Col key={key} lg={4} md={6} sm={8} className="mb-4">
              <div className="text-center bg-white p-4 rounded border">
                <img src="/cloud-hosting.svg" alt="hosting" width="60" />
                <h4 className="my-3">{name}</h4>
                <p>{desc}</p>
                <div>
                  <small>Harga Mulai</small>
                  <div className="h2">Rp{price}</div>
                </div>
                <Button
                  className="mt-3"
                  onClick={() => handleBeli(key)}
                  disabled={is_bought}
                >
                  {is_bought ? "SUDAH BELI" : "BELI"}
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="text-center my-5">
        <h2>Lihat layanan yang kami sediakan</h2>
      </div>
      <div className="container">
        <Row className="align-items-center justify-content-center">
          {services.map(({ name, desc, price, is_bought }, key) => (
            <Col key={key} lg={4} md={6} sm={8} className="mb-4">
              <div className="text-center bg-white p-4 rounded border">
                <img src="/cloud-hosting.svg" alt="hosting" width="60" />
                <h4 className="my-3">{name}</h4>
                <p>{desc}</p>
                <div>
                  <small>Harga Mulai</small>
                  <div className="h2">
                    <span className="h4">Rp</span>
                    {price}
                  </div>
                </div>
                {is_bought ? (
                  <Button className="mt-3" disabled>
                    SUDAH BELI
                  </Button>
                ) : (
                  <Button className="mt-3" onClick={() => handleBeli(key)}>
                    BELI
                  </Button>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <section className="ptb-100">
        <div className="text-center mb-5">
          <h2>Fitur Hosting Kami Jelas Berbeda</h2>
          <p>
            Layanan Web Hosting Indonesia dengan performa dan keamanan terbaik
          </p>
        </div>
        <Row>
          <Col md={6} lg={6} className="mb-4">
            <div className="p-4 rounded border bg-light">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>Easy &amp; Fast</h5>
                <span className="fas fa-shield-alt fa-2x text-primary"></span>
              </div>
              <p>
                Semua layanan didukung oleh jaminan waktu operasional 99,9%
                uptime.
              </p>
            </div>
          </Col>
          <Col md={6} lg={6} className="mb-4">
            <div className="p-4 rounded border bg-light">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>Suitable For All Users</h5>
                <span className="fab fa-wordpress fa-2x text-primary"></span>
              </div>
              <p>
                Pilih versi PHP yang paling sesuai untuk Anda seperti 5.6, 7.2
                sampai 8.0.
              </p>
            </div>
          </Col>
          <Col md={6} lg={6} className="mb-4">
            <div className="p-4 rounded border bg-light">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>Commitment To</h5>
                <span className="fas fa-headset fa-2x text-primary"></span>
              </div>
              <p>
                Didukung oleh AutoSSL, semua domain mendapatkan sertifikat SSL
                gratis.
              </p>
            </div>
          </Col>
          <Col md={6} lg={6} className="mb-4">
            <div className="p-4 rounded border bg-light">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>Easy &amp; Smooth</h5>
                <span className="fas fa-dolly-flatbed fa-2x text-primary"></span>
              </div>
              <p>
                Seluruh jaringan kami terlindungi dari berbagai macam serangan
                DDoS.
              </p>
            </div>
          </Col>
        </Row>
      </section>

      <section className="ptb-60 bg-primary">
        <div className="container">
          <Row className="align-items-center justify-content-between">
            <Col lg={6} className="text-white">
              <h2>Build Your Website with PabrikOnline.ID</h2>
              <p>
                From professional business to enterprise, we’ve got you covered!
              </p>
              <div className="support-action d-flex flex-wrap">
                <a href="mailto:support@pabrikonline.id" className="mr-3">
                  <i className="fas fa-comment mr-1 color-accent"></i>{" "}
                  support@pabrikonline.id
                </a>
                <a href="https://wa.me/6281259125311">
                  <i className="fas fa-phone-alt mr-1 color-accent"></i>{" "}
                  +6281259125311
                </a>
              </div>
            </Col>
            <Col lg={4} className="text-center d-none d-lg-block">
              <img
                src="/call-center-support.svg"
                width="250"
                className="img-fluid"
                alt="server room"
              />
            </Col>
          </Row>
        </div>
        <div className="text-center p-4 bg-white">
          <h2>Apa Kata Mereka?</h2>
          <p>Testimoni ini adalah kata mereka yang telah membuktikan sendiri</p>
        </div>
        <div className="row p-4 bg-white">
          {[
            {
              text: "PabrikOnline mendukung pengembangan layanan radio online saya, sehingga saya mampu menjangkau audiens yang lebih luas di seluruh dunia.",
              name: "Dwi Ahmad Syahrul Munir",
              title: "Admin SuaraSantri",
            },
            {
              text: "Saya sering menerima pesanan untuk membuat situs web, namun bingung dalam memilih hosting. Sejak berlangganan di sini, masalah tersebut dapat teratasi.",
              name: "Zaky Mustofa",
              title: "Freelancer",
            },
            {
              text: "Kini saya tak perlu khawatir lagi dengan lalu lintas yang tinggi untuk layanan SMM Panel saya, karena hosting yang ditawarkan serba unlimited, benar-benar puas! :)",
              name: "Angga Aditya Rahman",
              title: "CEO RoketFollowers",
            },
          ].map(({ text, img, name, title }, idx) => (
            <div key={idx} className="col-md-4">
              <div className="border bg-white p-4 m-2 rounded">
                <p>{text}</p>
                <div className="d-flex align-items-center mt-3">
                  <div>
                    <h6 className="mb-0">{name}</h6>
                    <small>{title}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer class="footer-1 ptb-60 bg-primary p-3">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 mb-4">
        <img src="/logo-pabrikonline-white.png" alt="logo" class="img-fluid"></img>
        <p class="p-2 text-white">
          CV PabrikOnline Global Solusindo sejak 2015 menyediakan layanan web hosting berkualitas.
        </p>
        <ul class="list-inline social-list-default social-hover-2 mt-2">
          <li class="list-inline-item"><i class="fab fa-twitter"></i></li>
          <li class="list-inline-item"><i class="fab fa-youtube"></i></li>
          <li class="list-inline-item"><i class="fab fa-linkedin-in"></i></li>
          <li class="list-inline-item"><i class="fab fa-dribbble"></i></li>
        </ul>
      </div>
      <div class="col-lg-8 text-white">
        <div class="row">
          <div class="col-md-3 mb-4">
            <h6>Produk</h6>
            <ul>
              <li>Domain Murah</li>
              <li>Hosting Indonesia</li>
              <li>Hosting Singapore</li>
              <li>Jasa Pembuatan Web</li>
              <li>Google Workspace</li>
            </ul>
          </div>
          <div class="col-md-3 mb-4">
            <h6>Layanan</h6>
            <ul>
              <li>Garansi</li>
              <li>Jam Kerja</li>
              <li>Program Afiliasi</li>
              <li>Status Server</li>
            </ul>
          </div>
          <div class="col-md-3 mb-4">
            <h6>Portal Client</h6>
            <ul>
              <li>Client Area</li>
              <li>Hosting Manager</li>
              <li>Domain Panel</li>
              <li>Kebijakan Layanan</li>
              <li>Kebijakan Privasi</li>
            </ul>
          </div>
          <div class="col-md-3">
            <h6>Support</h6>
            <ul>
              <li>FAQ</li>
              <li>Sells</li>
              <li>Contact Support</li>
              <li>Network Status</li>
              <li>Product Services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

<div class="footer-bottom py-3 gray-light-bg">
  <div class="container">
    <div class="row">
      <div class="col-lg-7">
        <p class="mb-0">© CV PabrikOnline Global Solusindo 2024. All rights reserved</p>
      </div>
      <div class="col-lg-5 text-lg-right">
        <ul class="list-inline">
          <li class="list-inline-item">Terms &amp; Condition</li>
          <li class="list-inline-item">Privacy Policy</li>
        </ul>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default HomePage;
