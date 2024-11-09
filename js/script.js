// Form validasi
function validateForm() {
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;
    const kategori = document.getElementById('kategori').value;

    // Basic validasi
    if (nama.length < 3) {
        alert('Nama harus minimal 3 karakter!');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Format email tidak valid!');
        return false;
    }

    if (pesan.length < 10) {
        alert('Pesan harus minimal 10 karakter!');
        return false;
    }

    if (kategori === '') {
        alert('Silakan pilih kategori!');
        return false;
    }

    // Succes
    alert('Terima kasih atas feedback Anda!');
    return true;
}

// Email validasi 
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Menambahkan smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation.split('/').pop()) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

document.getElementById('feedbackForm')?.addEventListener('submit', function(e) {
    const submitButton = this.querySelector('button[type="submit"]');
    if (submitButton) {
        submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Mengirim...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            submitButton.innerHTML = 'Kirim Feedback';
            submitButton.disabled = false;
        }, 1500);
    }
});