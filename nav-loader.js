(function () {
    function applyActiveState(container) {
        var current = document.body.getAttribute('data-nav-current') || '';
        if (!current) return;
        var activeLink = container.querySelector('[data-nav-id="' + current + '"]');
        if (activeLink) activeLink.classList.add('nav-active-accueil');
    }

    document.addEventListener('DOMContentLoaded', function () {
        var mount = document.getElementById('site-nav');
        if (!mount) return;

        fetch('nav.html')
            .then(function (response) {
                if (!response.ok) throw new Error('Impossible de charger nav.html');
                return response.text();
            })
            .then(function (html) {
                mount.innerHTML = html;
                applyActiveState(mount);
            })
            .catch(function (error) {
                console.error(error);
            });
    });
})();
