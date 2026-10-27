import { useEffect } from "react";

export function BazaChat() {
  useEffect(() => {
    if (document.querySelector("script[data-assistant-id]")) return;
    const script = document.createElement("script");
    script.src = "https://baza.chat/widget.js";
    script.dataset.assistantId = "d54c8103-6f98-4e2f-9f01-62379e7f7b57";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return null;
}
