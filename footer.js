(() => {
    const footer = document.querySelector("footer") || document.createElement("footer");
    footer.classList.add("site-footer");
    footer.innerHTML = `
        <section>
            <h2>Om oss</h2>
            <p>Toreland samler våre egne land og flagg. Utforsk flaggene, les om landene og test kunnskapen din i flaggquiz.</p>
        </section>
        <section>
            <h2>Følg oss</h2>
            <ul>
                <li><a href="https://www.instagram.com/tore_land/">Instagram: @tore_land</a></li>
                <li><a href="https://www.tiktok.com/@toreland5">TikTok: @toreland5</a></li>
                <li>Telefon nummer: +47 405 14 006</li>
            </ul>
        </section>
        <section class="footer-roles">
            <h2>Ledelse</h2>
            <ul>
                <li>Head CEO: Tore Godal</li>
                <li>CFO: Jonas Clausen</li>
                <li>CTO: Martin Syrrist</li>
            </ul>
        </section>
    `;

    if (!footer.isConnected) {
        document.body.appendChild(footer);
    }

    if (!document.querySelector('link[data-site-footer-styles]')) {
        const stylesheet = document.createElement("link");
        stylesheet.rel = "stylesheet";
        stylesheet.href = "footer.css";
        stylesheet.dataset.siteFooterStyles = "";
        document.head.appendChild(stylesheet);
    }
})();
