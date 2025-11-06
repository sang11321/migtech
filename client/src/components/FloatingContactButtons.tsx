import { Button } from "@/components/ui/button";
import zaloIcon from "@assets/Icon_of_Zalo_1762408057727.png";
import callIcon from "@assets/call-image_1762408062195.png";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://zalo.me/0902038579"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        data-testid="button-float-zalo"
      >
        <Button
          size="icon"
          className="h-14 w-14 rounded-full shadow-xl hover:scale-110 transition-transform bg-background border-2 border-primary p-0 overflow-hidden"
        >
          <img src={zaloIcon} alt="Zalo" className="h-full w-full object-cover" />
        </Button>
      </a>
      
      <a
        href="tel:0902038579"
        className="block"
        data-testid="button-float-call"
      >
        <Button
          size="icon"
          className="h-14 w-14 rounded-full shadow-xl hover:scale-110 transition-transform bg-background border-2 border-primary p-0 overflow-hidden"
        >
          <img src={callIcon} alt="Call" className="h-full w-full object-cover" />
        </Button>
      </a>
    </div>
  );
}
