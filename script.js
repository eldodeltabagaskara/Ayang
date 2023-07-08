// Ambil elemen-elemen yang dibutuhkan dari DOM
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

// Tambahkan event listener untuk setiap link di navigasi
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSectionId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetSectionId);

    // Scroll ke bagian target dengan efek animasi
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Tambahkan event listener untuk menyorot link navigasi saat bagian aktif di-scroll
window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  sections.forEach(section => {
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (currentScrollPos >= sectionTop && currentScrollPos < sectionTop + sectionHeight) {
      // Tambahkan kelas aktif ke link navigasi yang sesuai
      navLink.classList.add('active');
    } else {
      // Hapus kelas aktif dari link navigasi yang tidak sesuai
      navLink.classList.remove('active');
    }
  });
});
