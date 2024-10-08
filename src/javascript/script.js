$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('ativado');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item.pc');

    $(window).on('scroll', function() {
        const header = $('header')
        let activeSectionIndex = 0;
        const scrollPosition = $(window).scrollTop() - header.outerHeight()

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.9)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 250;
            const sectionBottom = sectionTop+ section.outerHeight()

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i
                return false
            }
        })
        navItems.removeClass('active')
        $(navItems[activeSectionIndex]).addClass('active');
    })

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '100%'
    })
    ScrollReveal().reveal('.shape', {
        origin: 'right',
        duration: 2000,
        distance: '100%'
    })
    ScrollReveal().reveal('.sobre-aboutUs', {
        origin: 'left',
        duration: 2000,
        distance: '100%'
    })
    ScrollReveal().reveal('.sobre-commitment', {
        origin: 'left',
        duration: 2000,
        distance: '100%'
    })
    ScrollReveal().reveal('.icon-item', {
        origin: 'bottom',
        duration: 2000,
        distance: '100%'
    })
    ScrollReveal().reveal('#box-solutions-title', {
        origin: 'left',
        duration: 2000,
        distance: '100%'
    })
    ScrollReveal().reveal('.solutions-area-item', {
        origin: 'bottom',
        duration: 2000,
        distance: '100%'
    })
    ScrollReveal().reveal('#box-solutions-btn', {
        origin: 'bottom',
        duration: 2000,
        distance: '100%'
    })
    ScrollReveal().reveal('.sobre-padding.locations', {
        origin: 'left',
        duration: 2000,
        distance: '100%'
    })
    ScrollReveal().reveal('#shape-feedback', {
        origin: 'left',
        duration: 2000,
        distance: '100%'
    })
    ScrollReveal().reveal('#testimonials_content', {
        origin: 'right',
        duration: 2000,
        distance: '100%'
    })
});

// Seleciona todos os botões com a classe .btn-default
const buttons = document.querySelectorAll('.btn-default');

// Itera sobre cada botão e adiciona o evento de clique
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Define o número do WhatsApp no formato internacional
        const telefone = '5547997727540'; // Substitua pelo número da empresa

        // Define a mensagem predefinida
        const mensagem = 'Olá tudo bem?, eu vim pelo seu site e gostaria de solicitar um orçamento.';

        // Codifica a mensagem para a URL
        const mensagemCodificada = encodeURIComponent(mensagem);

        // Monta a URL do WhatsApp
        const urlWhatsApp = `https://wa.me/${telefone}?text=${mensagemCodificada}`;

        // Redireciona para o WhatsApp
        window.open(urlWhatsApp, '_blank');
    });
});

