import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import arhome from "../../Assets/Projects/arhome.png";
import arcomputer from "../../Assets/Projects/arcomputer.png";
import pengaduan from "../../Assets/Projects/pengaduan.png";
import potensi from "../../Assets/Projects/potensi.png";
import simas from "../../Assets/Projects/simas.png";
import inventory from "../../Assets/Projects/inventory.png";
import baju from "../../Assets/Projects/baju.png";
import perabot from "../../Assets/Projects/perabot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arhome}
              isBlog={false}
              title="AR Katalog Rumah 3D"
              description="Aplikasi ARHome merupakan aplikasi yang membantu untuk memvisualisasikan katalog rumah ke dalam bentuk tiga dimensi. Aplikasi ini dibangun menggunakan Unity 3D dan bahasa pemrograman C#."
              ghLink="https://github.com/AriSmrd7/ARHome"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arcomputer}
              isBlog={false}
              title="AR Komputer"
              description="AR Komputer merupakan aplikasi berbasis Augmented Reality yang dapat dijalankan di platform Android. Tujuannya dibangun aplikasi ini adalah untuk metode pembelajaran komponen-komponen jaringan komputer"
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={potensi}
              isBlog={false}
              title="Sistem Informasi dan Monitoring Sales"
              description="Sistem Informasi dan Monitoring Sales adalah sebuah web admin yang berfungsi untuk memanajemen dan memonitoring penjualan dan pelayanan di ICONPLUS Region Bandung. Website ini dibangun menggunakan framework Laravel 7 dan Bootstrap 4."
              ghLink="https://github.com/AriSmrd7/SistemMonitoringSales"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pengaduan}
              isBlog={false}
              title="Sistem Pengaduan dan Pelayanan di Puskesmas XXX"
              description="Sistem Pengaduan dan Pelayanan di Puskesmas ini berfungsi untuk menampung semua keluhan dan pengaduan masyarakat terhadap pelayanan yang ada di puskesmas terkait."
              ghLink="https://github.com/AriSmrd7/SistemPengaduanPasien"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simas}
              isBlog={false}
              title="Sistem Informasi dan Manajemen Masjid"
              description="SIMAS atau Sistem Informasi dan Manajemen Masjid ini berfungsi untuk mengelola data yang ada di dalam lingkungan masjid terutama mengenai data sumbangan, jadwal kegiatan, jadwal sholat dan yang lainnya."
              ghLink="https://github.com/AriSmrd7/SistemInformasiManajemenMasjid"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="Inventory System"
              description="Website ini berfungsi untuk mengelola barang masuk dan keluar di Toko Cairo Bandung. Selain itu, pada website ini juga terdapat fitur pencatatan laporan barang dan penjualan. "
              ghLink="https://github.com/AriSmrd7/Inventory"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={baju}
              isBlog={false}
              title="Muslim Shop Bu Entar"
              description="Website ini adalah sebuah toko online dibangun menggunakan CMS yaitu WordPress. Web ini berfungsi sebagai online shop yang memungkinkan pengguna untuk berbelanja secara online"
              ghLink="https://github.com/AriSmrd7/TokoBuEntar"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={perabot}
              isBlog={false}
              title="Toko Perabot Pak Ganta"
              description="Toko Perabot Pak Ganta merupakan sebuah website online shop yang berfungsi untuk menjual dan mengelola barang dagangan yang ada di dalam toko tersebut."
              ghLink="https://github.com/AriSmrd7/TokoGantaPlastik"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
