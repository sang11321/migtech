import logoUrl from "@assets/image_1762406964779.png";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = {
    company: [
      { label: "Giới Thiệu", id: "about" },
      { label: "Dịch Vụ", id: "services" },
      { label: "Dự Án", id: "projects" },
      { label: "Liên Hệ", id: "contact" },
    ],
    services: [
      { label: "Thi Công LED", id: "services" },
      { label: "Sửa Chữa Thiết Bị", id: "services" },
      { label: "Thiết Kế Theo Yêu Cầu", id: "services" },
      { label: "Cung Ứng Thiết Bị", id: "services" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoUrl} alt="MIGTECH" className="h-12" />
              <div>
                <div className="font-bold text-lg text-primary">MIGTECH</div>
                <div className="text-xs text-muted-foreground">Điện Tử & LED</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chuyên gia hàng đầu trong lĩnh vực thi công bảo trì LED và thiết kế thiết bị điện tử.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Công Ty</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`button-footer-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Dịch Vụ</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Liên Hệ</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:0971731518" className="hover:text-primary transition-colors">
                  ☎ 0971.73.15.18
                </a>
              </li>
              <li>
                <a href="tel:0902038579" className="hover:text-primary transition-colors">
                  ☎ 0902.03.85.79
                </a>
              </li>
              <li>
                <a href="mailto:Congnghemig@gmail.com" className="hover:text-primary transition-colors">
                  ✉ Congnghemig@gmail.com
                </a>
              </li>
              <li className="leading-relaxed">📍 181 đường số 20, phường 5, Quận gò vấp, TP. Hồ Chí Minh</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Công ty TNHH Công Nghệ Mig - Mã số thuế: 0313980928
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MIGTECH. Bản quyền thuộc về Công Ty MIGTECH.
          </p>
        </div>
      </div>
    </footer>
  );
}
