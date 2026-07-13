export const projects = [
    {
        title: "Car Sharing App",
        accent: "var(--teal)",
        description:
            "Backend for vehicle booking and availability management with layered architecture (controllers, services, persistence) and unit + integration tests.",
        tech: ["Nest.js", "TypeScript", "PostgreSQL", "Raw SQL", "Jest"],
        links: [
            { label: "GitHub", href: "https://github.com/TheGymRwanda/c6-alu-yellow-carsharing-backend" },
            { label: "Deployed", href: "https://carsharing-backend-production.up.railway.app/api" },
        ],
    },
    {
        title: "Product Catalogue API",
        accent: "var(--gold)",
        description:
            "Event-driven backend publishing domain events to Apache Kafka, keyed by product ID to preserve per-product ordering. Events emitted only after DB commit, with safe degradation when Kafka is down. Containerized and unit-tested.",
        tech: ["C#", ".NET 10", "PostgreSQL", "EF Core", "Kafka", "Docker"],
        links: [
            { label: "GitHub", href: "https://github.com/Nick-Lemy/product-catalogue-backend" },
        ],
    },
    {
        title: "Hollow Chat TUI",
        accent: "var(--plum)",
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
        accent: "var(--olive)",
        description:
            "Published npm CLI tool for automated WhatsApp messaging, driven through browser automation.",
        tech: ["TypeScript", "Puppeteer", "Chrome Remote Debugging"],
        links: [
            { label: "GitHub", href: "https://github.com/Nick-Lemy/whatsapp_spammer" },
            { label: "Docs", href: "https://wa-spammer-docs.netlify.app/" },
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
