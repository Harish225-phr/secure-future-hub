import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="h-14 w-14 rounded-full bg-accent hover:bg-accent-hover text-accent-foreground grid place-items-center shadow-elegant transition-transform hover:scale-110"
      >
        <MessageCircle size={26} />
      </a>
      <a
        href="tel:+919999999999"
        aria-label="Call"
        className="h-14 w-14 rounded-full bg-primary hover:bg-primary-light text-primary-foreground grid place-items-center shadow-elegant transition-transform hover:scale-110"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
