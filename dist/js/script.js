// Navbar Fix
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIconPath = document.getElementById("menu-icon-path");
let isMenuOpen = false;

mobileMenuBtn.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
        menuIconPath.setAttribute("d", "M6 18L18 6M6 6l12 12");
    } else {
        mobileMenu.style.maxHeight = "0px";
        menuIconPath.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
    }
});

const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        isMenuOpen = false;
        mobileMenu.style.maxHeight = "0px";
        menuIconPath.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
    });
});

const background = document.querySelector(".animation-bg");

function createCircle() {
    const circle = document.createElement("div");
    circle.classList.add("circle-bg");

    const size = Math.random() * 100 + 400; // Ukuran antara 60px - 120px
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${Math.random() * 100}%`;
    circle.style.animationDuration = `${Math.random() * 10 + 10}s`; // Durasi 10s - 20s

    background.appendChild(circle);

    setTimeout(
        () => {
            removeCircle(circle);
            createCircle();
        },
        (Math.random() * 10 + 10) * 1000,
    ); // Regenerasi setelah animasi selesai
}

function removeCircle(circle) {
    setTimeout(() => {
        circle.remove();
    }, 500);
}

for (let i = 0; i < 2; i++) {
    createCircle();
}

const portfolioData = [
    {
        id: 1,
        client: "El Burdah Tour & Travel",
        title: "Landing Page El Burdah Tour & Travel",
        image: "/dist/img/portfolio/elburdah.png",
        description:
            "Landing page untuk El Burdah Tour & Travel, sebuah perusahaan travel yang menyediakan layanan perjalanan umrah, haji dan paket wisata yang lengkap. Landing page ini dirancang untuk memberikan informasi lengkap tentang paket perjalanan, testimoni pelanggan, dan formulir pendaftaran online.",
        techStack: ["HTML", "CSS", "Bootstrap", "Javascript", "UI/UX"],
    },
    {
        id: 2,
        client: "",
        title: "TSI Consolidate Management System",
        image: "/dist/img/portfolio/tsiconsol.png",
        description:
            "Sistem manajemen konsolidasi untuk TSI, yang memungkinkan pengelolaan data dan operasional secara efisien. Sistem ini dirancang untuk memberikan visi yang jelas tentang performa dan kinerja proses pengemasan.",
        techStack: [
            "PHP",
            "CodeIgniter",
            "MySQL",
            "Bootstrap",
            "Javascript",
            "Web App",
        ],
    },
    {
        id: 3,
        client: "",
        title: "Stock Opname System",
        image: "/dist/img/portfolio/sosystem.png",
        description:
            "Sistem opname stok yang dirancang untuk membantu pengelolaan inventaris secara efisien. Dengan antarmuka yang sederhana dan mudah digunakan, sistem ini memungkinkan pengguna untuk melakukan pencatatan dan pelacakan stok dengan akurat.",
        techStack: [
            "PHP",
            "CodeIgniter",
            "MySQL",
            "Bootstrap",
            "Javascript",
            "Web App",
        ],
    },
    {
        id: 4,
        client: "Transporter",
        title: "Landing Page Transporter Fleet Solution",
        image: "/dist/img/portfolio/transporter.png",
        description:
            "Landing page untuk Transporter Fleet Solution, sebuah perusahaan yang menyediakan layanan manajemen armada kendaraan. Landing page ini dirancang untuk memberikan informasi lengkap tentang layanan yang ditawarkan, testimoni pelanggan, dan formulir kontak untuk konsultasi.",
        techStack: ["HTML", "CSS", "Bootstrap", "Javascript", "UI/UX"],
    },
    {
        id: 5,
        client: "Hadejun Simedic Indonesia",
        title: "Back End Jasamarga Learning Institute",
        image: "/dist/img/portfolio/jmli.png",
        description:
            "Sistem manajemen pembelajaran untuk Jasamarga Learning Institute, yang memungkinkan pengelolaan kursus, materi pembelajaran, dan evaluasi secara efisien pada divisi pengembangan sumber daya manusia pada Jasamarga. Sistem ini dirancang untuk memberikan pengalaman belajar yang interaktif dan terstruktur bagi peserta.",
        techStack: ["PHP", "Laravel", "MySQL", "Docker", "Back End", "API"],
    },
    {
        id: 6,
        client: "Hadejun Simedic Indonesia",
        title: "Simedic COVID",
        image: "/dist/img/portfolio/covid.png",
        description:
            "Aplikasi untuk mengelola data pasien yang melakukan tes COVID-19, termasuk pendaftaran, hasil tes, dan pelaporan. Aplikasi ini dirancang untuk memberikan pengalaman pengguna yang mudah dan efisien dalam mengelola data pasien COVID-19.",
        techStack: [
            "PHP",
            "Laravel",
            "MySQL",
            "Bootstrap",
            "Javascript",
            "DevExtreme",
            "API",
            "Web App",
        ],
    },
    {
        id: 7,
        client: "Hadejun Simedic Indonesia",
        title: "Simedic LAB",
        image: "/dist/img/portfolio/simedic lab.png",
        description:
            "Aplikasi untuk mengelola data laboratorium, termasuk pendaftaran pasien, hasil tes, dan pelaporan. Aplikasi ini dirancang untuk memberikan pengalaman pengguna yang mudah dan efisien dalam mengelola data laboratorium.",
        techStack: [
            "PHP",
            "Laravel",
            "MySQL",
            "Bootstrap",
            "Javascript",
            "DevExtreme",
            "API",
        ],
    },
    {
        id: 8,
        client: "Hadejun Simedic Indonesia",
        title: "Simedic MCU",
        image: "/dist/img/portfolio/simedic mcu.png",
        description:
            "Aplikasi untuk mengelola data medical check-up (MCU), termasuk pendaftaran, hasil tes, dan pelaporan. Aplikasi ini dirancang untuk memberikan pengalaman pengguna yang mudah dan efisien dalam mengelola data MCU.",
        techStack: [
            "PHP",
            "Laravel",
            "MySQL",
            "Bootstrap",
            "Javascript",
            "DevExtreme",
            "API",
        ],
    },
    {
        id: 9,
        client: "Hadejun Simedic Indonesia",
        title: "Human Resource Management System",
        image: "/dist/img/portfolio/hris.png",
        description:
            "Sistem manajemen sumber daya manusia untuk Hadejun Simedic Indonesia, yang memungkinkan pengelolaan data karyawan, absensi, dan evaluasi secara efisien. Sistem ini dirancang untuk memberikan pengalaman pengguna yang mudah dan efisien dalam mengelola data sumber daya manusia.",
        techStack: [
            "Javascript",
            "React",
            "PHP",
            "Laravel",
            "MySQL",
            "Bootstrap",
            "API",
            "DevExtreme",
        ],
    },
    {
        id: 10,
        client: "Primera Clinica",
        title: "Primera Excel Mapping",
        image: "/dist/img/portfolio/excel-mapping.png",
        description:
            "Aplikasi untuk memetakan data dari file Excel ke dalam format yang dapat digunakan oleh sistem internal Primera Clinica. Aplikasi ini dirancang untuk memberikan pengalaman pengguna yang mudah dan efisien dalam mengelola data dari file Excel.",
        techStack: ["Laravel", "Bootstrap", "Javascript", "Web App"],
    },
    {
        id: 11,
        client: "Primera Clinica",
        title: "Primera Nakes Attendance",
        image: "/dist/img/portfolio/MUK3-attendance.png",
        description:
            "Aplikasi absensi khusus untuk staf dan tenaga medis dengan antarmuka dark-mode yang elegan. Menggunakan sistem tracking waktu dan lokasi untuk keakuratan data kehadiran karyawan.",
        techStack: [
            "Laravel",
            "React",
            "PHP",
            "Javascript",
            "Material UI",
            "API",
            "Web App",
        ],
    },
    {
        id: 12,
        client: "Primera Clinica",
        title: "Primedica Medical System",
        image: "/dist/img/portfolio/primedica.png",
        description:
            "Sistem manajemen medis untuk Primera Clinica, yang memungkinkan pengelolaan data pasien, jadwal dokter, dan rekam medis secara efisien. Sistem ini dirancang untuk memberikan pengalaman pengguna yang mudah dan efisien dalam mengelola data medis.",
        techStack: ["Laravel", "Bootstrap", "Javascript", "API", "Web App"],
    },
];

const grid = document.getElementById("portfolio-grid");
const modal = document.getElementById("portfolio-modal");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalContent = document.getElementById("modal-content");

function renderPortfolio() {
    grid.innerHTML = portfolioData
        .reverse()
        .map(
            (item) => `
                <article class="group cursor-pointer bg-linear-65 from-sky-100 to-sky-50 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col overflow-hidden border border-slate-100" onclick="openModal(${item.id})">
                    <!-- Image Container: Aspek rasio portrait 4/5 -->
                    <div class="aspect-[4/5] overflow-hidden relative">
                        <!-- Micro-interaction: Gradient overlay saat di-hover -->
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
                            <span class="text-white font-medium flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                View Details 
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                        </div>
                        <!-- Micro-interaction: Scale up gambar perlahan saat di-hover -->
                        <img src="${item.image}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out">
                    </div>
                    
                    <!-- Text Info Container -->
                    <div class="p-8 text-center flex-grow flex flex-col justify-center relative z-20 bg-white">
                        <p class="text-xs font-bold text-brand mb-2 tracking-widest uppercase">${item.client}</p>
                        <h3 class="text-xl font-bold text-slate-800 leading-tight group-hover:text-brand transition-colors">${item.title}</h3>
                    </div>
                </article>
            `,
        )
        .join("");
}

function openModal(id) {
    const item = portfolioData.find((d) => d.id === id);
    if (!item) return;

    modalContent.innerHTML = `
                <!-- Left: Portrait Image -->
                <div class="w-full md:w-5/12 aspect-[4/5] md:aspect-auto md:h-auto overflow-hidden relative">
                    <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
                </div>
                
                <!-- Right: Details -->
                <div class="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center relative overflow-y-auto">
                    <button onclick="closeModal()" class="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 transition-colors z-10 focus:outline-none">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                    
                    <p class="text-sm font-bold text-brand mb-3 uppercase tracking-widest">${item.client}</p>
                    <h3 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">${item.title}</h3>
                    <p class="text-slate-600 text-lg leading-relaxed mb-8">${item.description}</p>
                    
                    <div>
                        <p class="text-sm font-semibold text-slate-900 mb-3">Technologies Used:</p>
                        <div class="flex flex-wrap gap-2">
                            ${item.techStack.map((tech) => `<span class="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium border border-slate-200">${tech}</span>`).join("")}
                        </div>
                    </div>
                </div>
            `;

    modal.classList.remove("hidden");
    document.body.classList.add("modal-open");

    requestAnimationFrame(() => {
        modalBackdrop.classList.remove("opacity-0");
        modalBackdrop.classList.add("opacity-100");
        modalContent.classList.remove("scale-95", "opacity-0");
        modalContent.classList.add("scale-100", "opacity-100");
    });
}

// 5. Close Modal Function
function closeModal() {
    modalBackdrop.classList.remove("opacity-100");
    modalBackdrop.classList.add("opacity-0");
    modalContent.classList.remove("scale-100", "opacity-100");
    modalContent.classList.add("scale-95", "opacity-0");

    setTimeout(() => {
        modal.classList.add("hidden");
        document.body.classList.remove("modal-open");
    }, 300);
}

renderPortfolio();

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});
