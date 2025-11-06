import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Wrench, Pencil, Package } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Lightbulb,
      title: "Thi Công Bảo Trì LED",
      description: "Thi công, sửa chữa và bảo trì hệ thống đèn LED chiếu sáng, LED RGB cho tòa nhà cao tầng. Chuyên nghiệp, an toàn, hiệu quả.",
      color: "text-primary",
    },
    {
      icon: Wrench,
      title: "Sửa Chữa Thiết Bị Điện Tử",
      description: "Sửa chữa, bảo trì các thiết bị điện-điện tử dân dụng và công nghiệp. Đội ngũ kỹ thuật viên giàu kinh nghiệm.",
      color: "text-chart-2",
    },
    {
      icon: Pencil,
      title: "Thiết Kế Theo Yêu Cầu",
      description: "Thiết kế sản phẩm điện-điện tử theo yêu cầu khách hàng. Giải pháp tối ưu cho sản xuất và ứng dụng dân dụng.",
      color: "text-chart-3",
    },
    {
      icon: Package,
      title: "Cung Ứng Nhập Khẩu",
      description: "Nhập khẩu và cung ứng thiết bị điện-điện tử chất lượng cao từ nước ngoài. Hỗ trợ vận hành và bảo trì.",
      color: "text-chart-4",
    },
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Giải pháp toàn diện cho mọi nhu cầu điện tử và chiếu sáng
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-elevate active-elevate-2" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <div className="mb-4">
                    <div className="inline-flex p-3 bg-background rounded-md">
                      <Icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover-elevate" data-testid={`button-service-${index}`}>
                    Xem thêm →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
