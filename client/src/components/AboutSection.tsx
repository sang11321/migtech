import { Card } from "@/components/ui/card";
import { Building2, Users, Award, TrendingUp } from "lucide-react";
import teamImage from "@assets/generated_images/Professional_engineering_team_office_80d80165.png";

export default function AboutSection() {
  const stats = [
    { icon: Building2, label: "Dự Án Lớn", value: "50+", color: "text-primary" },
    { icon: Users, label: "Khách Hàng", value: "100+", color: "text-chart-2" },
    { icon: Award, label: "Năm Kinh Nghiệm", value: "10+", color: "text-chart-3" },
    { icon: TrendingUp, label: "Tăng Trưởng", value: "200%", color: "text-chart-4" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Về MIGTECH
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Đối tác tin cậy trong lĩnh vực điện tử và thi công LED
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={teamImage}
              alt="Đội ngũ MIGTECH"
              className="rounded-md w-full h-auto"
              data-testid="img-team"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Chuyên Nghiệp - Uy Tín - Chất Lượng
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              MIGTECH là công ty chuyên cung cấp dịch vụ thi công, bảo trì hệ thống đèn LED 
              chiếu sáng và LED RGB cho các tòa nhà cao tầng. Chúng tôi tự hào là đơn vị thi 
              công cho các công trình biểu tượng như Landmark 81, Vinhomes, và Vinpearl.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Với đội ngũ kỹ sư giàu kinh nghiệm và trang thiết bị hiện đại, chúng tôi cam kết 
              mang đến giải pháp tối ưu nhất cho mọi dự án, từ thiết kế, thi công đến bảo trì 
              lâu dài.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 text-center hover-elevate" data-testid={`card-stat-${index}`}>
                <Icon className={`h-10 w-10 mx-auto mb-3 ${stat.color}`} />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
