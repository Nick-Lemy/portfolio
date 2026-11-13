export const projects = [
    {
        title: "Gratos",
        description:
            "A collection of free online tools: create and download QR codes from links, or prepare video and audio downloads from YouTube, Instagram, and TikTok using your own Yoinku API key.",
        tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
        links: [
            { label: "Live site", href: "https://gratos.lemy.dev/" },
            { label: "GitHub", href: "https://github.com/Nick-Lemy/gratos" },
        ],
    },
    {
        title: "Hollow Chat TUI",
        description:
            "Cross-platform terminal chat app with public and private rooms over a self-hosted TCP server. Single-file client with no runtime dependency; Dockerized server with automated Linux/macOS/Windows releases.",
        tech: ["C#", ".NET 10", "Terminal.Gui", "TCP", "Docker"],
        links: [
            { label: "GitHub", href: "https://github.com/Nick-Lemy/hollow-chat-tui" },
            { label: "Releases", href: "https://github.com/Nick-Lemy/hollow-chat-tui/releases" },
        ],
    },
    {
        title: "WhatsApp Spammer CLI",
        description:
            "Published npm CLI tool for automated WhatsApp messaging, driven through browser automation.",
        tech: ["TypeScript", "Puppeteer", "Chrome Remote Debugging"],
        links: [
            { label: "GitHub", href: "https://github.com/Nick-Lemy/whatsapp_spammer" },
            { label: "Docs", href: "https://wa-spammer-docs.netlify.app/" },
        ],
    },
    {
        title: "Baumeister Website",
        description:
            "A responsive recreation of the Baumeister agency website, built as a team project to practice modern frontend development and UI implementation.",
        tech: ["HTML", "Tailwind CSS"],
        links: [
            { label: "Live site", href: "https://baumeister-main-group5.netlify.app/" },
            { label: "GitHub", href: "https://github.com/Baumeister-CO/Baumeister-v2" },
        ],
    },
    {
        title: "Product Catalogue API",
        description:
            "Event-driven backend publishing domain events to Apache Kafka, keyed by product ID to preserve per-product ordering. Events emitted only after DB commit, with safe degradation when Kafka is down. Containerized and unit-tested.",
        tech: ["C#", ".NET 10", "PostgreSQL", "EF Core", "Kafka", "Docker"],
        links: [
            { label: "GitHub", href: "https://github.com/Nick-Lemy/product-catalogue-backend" },
        ],
    },
]

export const openSource = [
    {
        project: "Waydroid",
        what: "documentation PRs",
        href: "https://github.com/waydroid/docs/pulls?q=is%3Apr+author%3ANick-Lemy",
    },
    {
        project: "Warp",
        what: "documentation PRs",
        href: "https://github.com/warpdotdev/docs/pulls?q=author%3ANick-Lemy",
    },
    {
        project: "Cockpit",
        what: "documentation PRs",
        href: "https://github.com/cockpit-project/cockpit-project.github.io/pulls?q=author%3ANick-Lemy",
    },
]
