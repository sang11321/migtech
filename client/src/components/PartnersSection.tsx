import gsLogo from "@assets/logo-gs-png_1762407993625.png";
import vinpearlLogo from "@assets/logo-vinpearl-hotel_1762407998211.png";
import vinhomesLogo from "@assets/logo-vinhomes_1762408000423.png";

export default function PartnersSection() {
  const partners = [
    { name: "GS Battery", logo: gsLogo },
    { name: "Vinpearl Landmark 81", logo: vinpearlLogo },
    { name: "Vinhomes", logo: vinhomesLogo },
  ];

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Đối Tác Tin Cậy
          </h2>
          <p className="text-muted-foreground">
            Được tin tưởng bởi các thương hiệu hàng đầu
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-8 hover-elevate transition-all duration-300 grayscale hover:grayscale-0"
              data-testid={`partner-${index}`}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 sm:max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
