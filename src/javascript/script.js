$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('ativado');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item.pc');

});

document.getElementById('btn-dropdown').addEventListener('click', function () {
    document.getElementById('donw-menu').classList.toggle('show');
});

window.addEventListener('click', function (event) {
    if (!event.target.matches('#btn-dropdown')) {
        var dropdowns = document.getElementById('donw-menu');
        if (dropdowns.classList.contains('show')) {
            dropdowns.classList.remove('show');
        }
    }
});


window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    var btnDropdown = document.querySelector('#btn-dropdown');
    
    if (window.scrollY > 50) {
        header.classList.add('on-scroll');
        btnDropdown.style.color = '#ffffff';
        btnDropdown.classList.add('navoff');
        btnDropdown.classList.remove('navon');
    } else {
        header.classList.remove('on-scroll');
        btnDropdown.style.color = '#6812f3';
        btnDropdown.classList.add('navon');
        btnDropdown.classList.remove('navoff');
    }
});

document.getElementById('btn-dropdown-mobile').addEventListener('click', function () {
    document.getElementById('donw-menu-mobile').classList.toggle('show');
});

window.addEventListener('click', function (event) {
    if (!event.target.matches('#btn-dropdown-mobile')) {
        var dropdowns = document.getElementById('donw-menu-mobile');
        if (dropdowns.classList.contains('show')) {
            dropdowns.classList.remove('show');     
        }
    }
});


const contup = document.querySelectorAll('.contup-value');
let interval = 5000;

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let item = entry.target;
            let startValue = 0;
            let endValue = parseInt(item.getAttribute("data-val"));
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function () {
                startValue++;
                item.textContent = `${startValue}+`;
                if (startValue == endValue) {
                    clearInterval(counter);
                    observer.unobserve(item);
                }
            }, duration);
        }
    });
}, { threshold: 1.0 });

contup.forEach(item => {
    observer.observe(item);
});

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.fluxo-cruzado-container');
    const fluxoCruzado = document.querySelectorAll('.fluxo-cruzado')[0];

    let scrollAmount = 0;
    let scrollSpeed = 0.6; // Ajuste a velocidade aqui
    let isScrolling = true;
    let targetScrollSpeed = scrollSpeed; // Velocidade alvo para transições suaves

    function scrollContent() {
        if (isScrolling) {
            scrollAmount += scrollSpeed;
            if (scrollAmount >= fluxoCruzado.scrollWidth / 2) {
                scrollAmount = 0; // Reiniciar a rolagem
            }
            container.scrollLeft = scrollAmount;
        }

        // Ajustar a velocidade de rolagem suavemente
        if (scrollSpeed !== targetScrollSpeed) {
            scrollSpeed += (targetScrollSpeed - scrollSpeed) * 0.1;
        }

        requestAnimationFrame(scrollContent);
    }

    container.addEventListener('mouseenter', () => {
        targetScrollSpeed = 0; // Reduzir a velocidade para 0
    });

    container.addEventListener('mouseleave', () => {
        targetScrollSpeed = 0.6; // Retomar a velocidade original
    });

    requestAnimationFrame(scrollContent);
});

const controlers = document.querySelectorAll('.btn-control');

controlers.forEach((control, index) => {
    control.addEventListener('click', function() {
        const carrosel = document.getElementById('carrosel-solution');
        const largura = carrosel.offsetWidth;

        if (control.classList.contains('select')) {
            control.classList.remove('select');
            const nextIndex = (index + 1) % controlers.length; // Garante que se o próximo botão não existir, começa de novo
            controlers[nextIndex].classList.add('select');
            carrosel.scrollLeft = (nextIndex * largura);
        } else {
            controlers.forEach(controlTwo => {
                controlTwo.classList.remove('select');
            });
            controlers[index].classList.add('select')
            carrosel.scrollLeft = (index * largura);
        }
    });
});

document.querySelectorAll('.btn-default.contato').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = "/src/pages/contato.html";
    });
});
