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
      <div className="ptb-100 overflow-hidden bg-primary">
        <div className="container">
          <Row className="align-item-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
            <Col className="col-md-12 col-lg-6">
              <div className="hero-slider-content text-white py-5">
                <div className="headline mb-4">
                  <p className="mb-0">
                    <i className="fas fa-bell rounded-circle mr-2"></i>{" "}
                    <span className="font-weight-bold">30% Discount </span>{" "}
                    first annual purchase
                  </p>
                </div>
                <h1 className="text-white">
                  Unlimited Domain &amp; Hosting in One Platform
                </h1>
                <p className="lead">
                  Kami berikan penawaran terbaik unlimited web hosting. Fitur
                  terlengkap, harga terjangkau, dan dukungan teknis 24/7 telah
                  tersedia untuk Anda. Promo spesial segera berakhir. Order
                  sekarang!.
                </p>
                <Button
                  style={{
                    backgroundColor: "orange",
                  }}
                >
                  {" "}
                  Beli Sekarang
                </Button>
              </div>
            </Col>
            <Col className="col-md-12 col-lg-6">
              <div className="img-wrap">
                <img
                  src="/hero-home.svg"
                  alt="hosting"
                  className="img-fluid"
                ></img>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-7">
          <div className="section-heading text-center mt-5">
            <h2>Dukungan &amp; Garansi Terbaik</h2>
            <p>
              Komitmen PabrikOnline mencakup segala aspek, mulai dari konsultasi
              sebelum pembelian hingga dukungan setelah penjualan untuk layanan
              Web Hosting murah PabrikOnline.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-md-center justify-content-sm-center p-4">
        <div className="col-md-6 col-lg-4">
          <div className="card single-promo-card single-promo-hover text-center p-2 mt-4">
            <div className="card-body">
              <div className="pb-2">
                <span className="fas fa-cubes icon-size-lg color-primary"></span>
              </div>
              <div className="pt-2 pb-3">
                <h5>Tiket Support</h5>
                <p className="mb-0">
                  Membantu kesulitan Anda adalah kebangaan tersendiri dari kami,
                  dan itu adalah tujuan utama kami.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card single-promo-card single-promo-hover text-center p-2 mt-4">
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
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card single-promo-card single-promo-hover text-center p-2 mt-4">
            <div className="card-body">
              <div className="pb-2">
                <span className="fas fa-lock icon-size-lg color-primary"></span>
              </div>
              <div className="pt-2 pb-3">
                <h5>Premium Hardware</h5>
                <p className="mb-0">
                  Membuat situs web e-commerce membutuhkan hardware yang handal,
                  percayakan pada kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="ptb-60 bg-primary p-3">
        <div className="container p-4">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-7 col-lg-6">
              <div className="cta-content-wrap text-white">
                <h2 className="text-white">Kenapa harus PabrikOnline?</h2>
                <p>
                  CV PabrikOnline Global Solusindo mempunya misi untuk membuat
                  hidup lebih mudah bagi web developer dan pelanggan mereka.
                  Kami melakukannya dengan menawarkan kebutuhan web yang mudah
                  digunakan, cepat serta handal.
                </p>
              </div>
              <Button
                style={{
                  backgroundColor: "orange",
                }}
                href="https://wa.me/6281259125311"
              >
                {" "}
                Hubungi Kami{" "}
              </Button>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="cta-img-wrap text-center">
                <img
                  src="/cta-new.svg"
                  className="img-fluid"
                  alt="server room"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-heading text-bold text-center mb-4 mt-5">
        <h2>Lihat layanan yang kami sediakan</h2>
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-md-center justify-content-center">
          {services.map(({ name, desc, price, is_bought }, key) => {
            return (
              <div key={key} className="col-lg-4 col-md-6 col-sm-8">
                <div className="text-center bg-white single-pricing-pack-2 mt-4 rounded border p-5">
                  <div className="pricing-icon">
                    <img src="/cloud-hosting.svg" width="60" alt="hosing"></img>
                  </div>
                  <h4 className="package-title">{name}</h4>
                  <p className="mb-4">{desc}</p>
                  <div className="pricing-price pt-4">
                    <small>Harga Mulai</small>
                    <div className="h2">
                      <span className="price-cycle h4">Rp</span>
                      {price}
                    </div>
                  </div>
                  {is_bought ? (
                    <Button className="mt-3" disabled>
                      {" "}
                      SUDAH BELI{" "}
                    </Button>
                  ) : (
                    <Button
                      className="mt-3"
                      onClick={() => {
                        handleBeli(key);
                      }}
                    >
                      {" "}
                      BELI{" "}
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <section className="ptb-100 service-section-wrap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-7">
              <div className="section-heading text-center">
                <h2>Fitur Hosting Kami Jelas Berbeda</h2>
                <p>
                  Layanan Web Hosting Indonesia dengan performa dan keamanan
                  terbaik
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="single-service p-5 rounded border gray-light-bg">
                <div className="service-header d-flex align-items-center justify-content-between">
                  <h4>
                    <span className="h5 text-uppercase">Easy &amp; First</span>
                  </h4>
                  <span className="fas fa-shield-alt fa-3x color-primary"></span>
                </div>
                <p>
                  Semua layanan didukung oleh jaminan waktu operasional 99,9%
                  uptime.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="single-service p-5 rounded border gray-light-bg">
                <div className="service-header d-flex align-items-center justify-content-between">
                  <h4>
                    <span className="h5 text-uppercase">
                      Suitable For All Users
                    </span>{" "}
                  </h4>
                  <span className="fab fa-wordpress fa-3x color-primary"></span>
                </div>
                <p>
                  Pilih versi PHP yang paling sesuai untuk Anda seperti 5.6, 7.2
                  sampai 8.0.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="single-service p-5 rounded border gray-light-bg">
                <div className="service-header d-flex align-items-center justify-content-between">
                  <h4>
                    <span className="h5 text-uppercase">Commitment To</span>
                  </h4>
                  <span className="fas fa-headset fa-3x color-primary"></span>
                </div>
                <h5>Free SSL Certificates</h5>
                <p>
                  Didukung oleh AutoSSL, semua domain mendapatkan sertifikat SSL
                  gratis.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="single-service p-5 rounded border gray-light-bg">
                <div className="service-header d-flex align-items-center justify-content-between">
                  <h4>
                    <span className="h5 text-uppercase">Easy &amp; Smooth</span>{" "}
                  </h4>
                  <span className="fas fa-dolly-flatbed fa-3x color-primary"></span>
                </div>
                <h5>DDoS Protected</h5>
                <p>
                  Seluruh jaringan kami terlindungi dari berbagai macam serangan
                  DDoS.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ptb-60 bg-primary">
        <div className="container p-4">
          <div className="row align-items-center justify-content-between p-3">
            <div className="col-12 col-lg-6">
              <div className="cta-content-wrap text-white">
                <h2 className="text-white">
                  Build Your Website with PabrikOnline.ID
                </h2>
                <p>
                  From professional business to enterprise, we’ve got you
                  covered!
                </p>
              </div>
              <div className="support-action d-inline-flex flex-wrap">
                <a href="mailto:support@pabrikonline.id" className="mr-3">
                  <i className="fas fa-comment mr-1 color-accent"></i>{" "}
                  <span>support@pabrikonline.id</span>
                </a>
                <a href="https://wa.me/6281259125311" className="mb-0">
                  <i className="fas fa-phone-alt mr-1 color-accent"></i>{" "}
                  <span>+6281259125311</span>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 d-none d-lg-block">
              <div className="cta-img-wrap text-center">
                <img
                  src="/call-center-support.svg"
                  width="250"
                  className="img-fluid"
                  alt="server room"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row justify-content-center p-4">
        <div className="col-md-10 col-lg-7">
          <div className="section-heading text-center">
            <h2>Apa Kata Mereka?</h2>
            <p>
              Testimoni ini adalah kata mereka yang telah membuktikan sendiri
            </p>
          </div>
        </div>
      </div>
      <div className="row p-4">
        <div className="owl-carousel owl-theme client-testimonial-1 dot-bottom-center custom-dot owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: "translate3d(-1140px, 0px, 0px)",
                transition: "0.25s",
                width: "3420px"
              }}
            >
              <div className="owl-item cloned" style={{width:"380px"}}>
                <div className="item">
                  <div className="border single-review-wrap bg-white p-4 m-3">
                    <div className="review-body">
                      <p>
                        PabrikOnline Membantu saya dalam mengembangkan layanan
                        radio online, sehingga dapat menjangkau lebih banyak
                        pendengar di seluruh dunia.
                      </p>
                    </div>
                    <div className="review-author d-flex align-items-center">
                      <div className="author-avatar">
                        <img
                          src="assets/testi/syahrul.jpg"
                          width="64"
                          alt="author"
                          className="rounded-circle shadow-sm img-fluid mr-3"
                        ></img>
                        <span>“</span>
                      </div>
                      <div className="review-info">
                        <h6 className="mb-0">Dwi Ahmad Syahrul Munir</h6>
                        <span>Admin SuaraSantri</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned" style={{width: "380px"}}>
                <div className="item">
                  <div className="border single-review-wrap bg-white p-4 m-3">
                    <div className="review-body">
                      <p>
                        Saya sering mendapatkan orderan untuk membuat web, namun
                        bingung dalam menentukan hostingnya. Semenjak
                        berlangganan di sini, masalah saya teratasi.
                      </p>
                    </div>
                    <div className="review-author d-flex align-items-center">
                      <div className="author-avatar">
                        <img
                          src="assets/testi/zaky.jpg"
                          width="64"
                          alt="author"
                          className="rounded-circle shadow-sm img-fluid mr-3"
                        ></img>
                        <span>“</span>
                      </div>
                      <div className="review-info">
                        <h6 className="mb-0">Zaky Mustofa</h6>
                        <span>Freelancer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: "380px" }}>
                <div className="item">
                  <div className="border single-review-wrap bg-white p-4 m-3">
                    <div className="review-body">
                      <p>
                        Sekarang saya tidak perlu khawatir dengan traffic yang
                        besar untuk layanan SMM Panel saya, hosting yang
                        ditawarkan serba unlimited, PUAS! :)
                      </p>
                    </div>
                    <div className="review-author d-flex align-items-center">
                      <div className="author-avatar">
                        <img
                          src="assets/testi/angga.jpg"
                          width="64"
                          alt="author"
                          className="rounded-circle shadow-sm img-fluid mr-3"
                        ></img>
                        <span>“</span>
                      </div>
                      <div className="review-info">
                        <h6 className="mb-0">Angga Aditya Rahman</h6>
                        <span>CEO RoketFollowers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item active" style={{ width: "380px" }}>
                <div className="item">
                  <div className="border single-review-wrap bg-white p-4 m-3">
                    <div className="review-body">
                      <p>
                        PabrikOnline Membantu saya dalam mengembangkan layanan
                        radio online, sehingga dapat menjangkau lebih banyak
                        pendengar di seluruh dunia.
                      </p>
                    </div>
                    <div className="review-author d-flex align-items-center">
                      <div className="author-avatar">
                        <img
                          src="assets/testi/syahrul.jpg"
                          width="64"
                          alt="author"
                          className="rounded-circle shadow-sm img-fluid mr-3"
                        ></img>
                        <span>“</span>
                      </div>
                      <div className="review-info">
                        <h6 className="mb-0">Dwi Ahmad Syahrul Munir</h6>
                        <span>Admin SuaraSantri</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item active" style={{ width: "380px" }}>
                <div className="item">
                  <div className="border single-review-wrap bg-white p-4 m-3">
                    <div className="review-body">
                      <p>
                        Saya sering mendapatkan orderan untuk membuat web, namun
                        bingung dalam menentukan hostingnya. Semenjak
                        berlangganan di sini, masalah saya teratasi.
                      </p>
                    </div>
                    <div className="review-author d-flex align-items-center">
                      <div className="author-avatar">
                        <img
                          src="assets/testi/zaky.jpg"
                          width="64"
                          alt="author"
                          className="rounded-circle shadow-sm img-fluid mr-3"
                        ></img>
                        <span>“</span>
                      </div>
                      <div className="review-info">
                        <h6 className="mb-0">Zaky Mustofa</h6>
                        <span>Freelancer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item active" style={{ width: "380px" }}>
                <div className="item">
                  <div className="border single-review-wrap bg-white p-4 m-3">
                    <div className="review-body">
                      <p>
                        Sekarang saya tidak perlu khawatir dengan traffic yang
                        besar untuk layanan SMM Panel saya, hosting yang
                        ditawarkan serba unlimited, PUAS! :)
                      </p>
                    </div>
                    <div className="review-author d-flex align-items-center">
                      <div className="author-avatar">
                        <img
                          src="assets/testi/angga.jpg"
                          width="64"
                          alt="author"
                          className="rounded-circle shadow-sm img-fluid mr-3"
                        ></img>
                        <span>“</span>
                      </div>
                      <div className="review-info">
                        <h6 className="mb-0">Angga Aditya Rahman</h6>
                        <span>CEO RoketFollowers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: "380px" }}>
                <div className="item">
                  <div className="border single-review-wrap bg-white p-4 m-3">
                    <div className="review-body">
                      <p>
                        PabrikOnline Membantu saya dalam mengembangkan layanan
                        radio online, sehingga dapat menjangkau lebih banyak
                        pendengar di seluruh dunia.
                      </p>
                    </div>
                    <div className="review-author d-flex align-items-center">
                      <div className="author-avatar">
                        <img
                          src="assets/testi/syahrul.jpg"
                          width="64"
                          alt="author"
                          className="rounded-circle shadow-sm img-fluid mr-3"
                        ></img>
                        <span>“</span>
                      </div>
                      <div className="review-info">
                        <h6 className="mb-0">Dwi Ahmad Syahrul Munir</h6>
                        <span>Admin SuaraSantri</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: "380px" }}>
                <div className="item">
                  <div className="border single-review-wrap bg-white p-4 m-3">
                    <div className="review-body">
                      <p>
                        Saya sering mendapatkan orderan untuk membuat web, namun
                        bingung dalam menentukan hostingnya. Semenjak
                        berlangganan di sini, masalah saya teratasi.
                      </p>
                    </div>
                    <div className="review-author d-flex align-items-center">
                      <div className="author-avatar">
                        <img
                          src="assets/testi/zaky.jpg"
                          width="64"
                          alt="author"
                          className="rounded-circle shadow-sm img-fluid mr-3"
                        ></img>
                        <span>“</span>
                      </div>
                      <div className="review-info">
                        <h6 className="mb-0">Zaky Mustofa</h6>
                        <span>Freelancer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: "380px" }}>
                <div className="item">
                  <div className="border single-review-wrap bg-white p-4 m-3">
                    <div className="review-body">
                      <p>
                        Sekarang saya tidak perlu khawatir dengan traffic yang
                        besar untuk layanan SMM Panel saya, hosting yang
                        ditawarkan serba unlimited, PUAS! :)
                      </p>
                    </div>
                    <div className="review-author d-flex align-items-center">
                      <div className="author-avatar">
                        <img
                          src="assets/testi/angga.jpg"
                          width="64"
                          alt="author"
                          className="rounded-circle shadow-sm img-fluid mr-3"
                        ></img>
                        <span>“</span>
                      </div>
                      <div className="review-info">
                        <h6 className="mb-0">Angga Aditya Rahman</h6>
                        <span>CEO RoketFollowers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-nav disabled">
            <button type="button" role="presentation" className="owl-prev">
              <span aria-label="Previous">‹</span>
            </button>
            <button type="button" role="presentation" className="owl-next">
              <span aria-label="Next">›</span>
            </button>
          </div>
          <div className="owl-dots disabled">
            <button role="button" className="owl-dot active">
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <footer className="footer-1 ptb-60 bg-primary p-3">
        <div className="container" >
            <div className="row" >
                <div className="col-md-12 col-lg-4 mb-4 mb-md-4 mb-sm-4 mb-lg-0" >
                    <img src="/logo-pabrikonline-white.png" alt="logo" className="img-fluid"></img>
                    <br></br>
                    <p className="p-2 text-white">CV PabrikOnline Global Solusindo adalah penyedia layanan web hosting berkualitas yang telah dipercaya oleh client sejak tahun 2015. Kami selalu senang untuk berbagi tawa dengan Anda dan tidak hanya menyelesaikan permintaan Anda tetapi juga memberikan saran pada Anda.</p>
                    <ul className="list-inline social-list-default background-color social-hover-2 mt-2">
                        <li className="list-inline-item"><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a className="youtube" href="#"><i className="fab fa-youtube"></i></a></li>
                        <li className="list-inline-item"><a className="linkedin" href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li className="list-inline-item"><a className="dribbble" href="#"><i className="fab fa-dribbble"></i></a></li>
                    </ul>
                </div>
                <div className="col-md-12 col-lg-8 text-white" >
                    <div className="row mt-0" >
                        <div className="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-4 mb-md-0 mb-lg-0" >
                            <h6 className="font-weight-normal">Produk</h6>
                            <ul>
                                <li>
                                    Domain Murah
                                </li>
                                <li>
                                      Hosting Indonesia
                                </li>
                                <li>
                                    Hosting Singapore
                                </li>
                                <li>
                                      Jasa Pembuatan Web
                                </li>
                                <li>
                                      Google Workspace
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-4 mb-md-0 mb-lg-0" >
                            <h6 className="font-weight-normal">Layanan</h6>
                            <ul>
                                <li>
                                      Garansi
                                </li>
                                <li>
                                      Jam Kerja
                                </li>
                                <li>
                                      Program Afiliasi
                                </li>
                                <li>
                                      Status Server
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-4 mb-md-0 mb-lg-0" >
                            <h6 className="font-weight-normal">Portal Client</h6>
                            <ul>
                                <li>
                                    Client Area
                                </li>
                                <li>
                                    Hosting Manager
                                </li>
                                <li>
                                    Domain Panel
                                </li>
                                <li>
                                    Kebijakan Layanan
                                </li>
                                <li>
                                      Kebijakan Privasi
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 col-lg-3" >
                            <h6 className="font-weight-normal">Support</h6>
                            <ul>
                                <li>
                                      FAQ
                                </li>
                                <li>
                                      Sells
                                </li>
                                <li>
                                    Contact Support
                                </li>
                                <li>
                                    Network Status
                                </li>
                                <li>
                                    Product Services
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div className="footer-bottom py-3 gray-light-bg" >
        <div className="container" >
            <div className="row" >
                <div className="col-md-6 col-lg-7" >
                    <div className="copyright-wrap small-text" >
                        <p className="mb-0">© CV PabrikOnline Global Solusindo 2024. All rights reserved</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5" >
                    <div className="terms-policy-wrap text-lg-right text-md-right text-left" >
                        <ul className="list-inline">
                            <li className="list-inline-item"><a className="small-text" href="#">Terms &amp; Condition</a></li>
                            <li className="list-inline-item"><a className="small-text" href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default HomePage;
