import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import landmark1 from "@assets/generated_images/Landmark_81_LED_lighting_night_43875a28.png";
import landmark2 from "@assets/generated_images/Modern_building_LED_facade_a7306fcc.png";
import installation from "@assets/generated_images/LED_installation_technician_working_600a0aee.png";
import battery from "@assets/generated_images/Battery_testing_equipment_device_8f8359d0.png";
import pcb from "@assets/generated_images/Professional_PCB_circuit_board_d9208ace.png";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      title: "Bảo Trì LED Landmark 81",
      category: "led",
      image: landmark1,
      description: "Thi công và bảo trì hệ thống LED mặt dựng RGB cho tòa nhà cao nhất Việt Nam",
      client: "Vinhomes",
    },
    {
      title: "Hệ Thống LED Vinhomes",
      category: "led",
      image: landmark2,
      description: "Chiếu sáng mặt ngoài tòa nhà với công nghệ LED RGB hiện đại",
      client: "Vinhomes",
    },
    {
      title: "Thi Công LED Cao Tầng",
      category: "led",
      image: installation,
      description: "Thi công an toàn với đội ngũ kỹ thuật viên chuyên nghiệp",
      client: "Vinpearl",
    },
    {
      title: "Thiết Bị Kiểm Tra Ắc Quy",
      category: "design",
      image: battery,
      description: "Thiết kế và sản xuất thiết bị kiểm tra pin ắc quy chuyên dụng",
      client: "GS Battery",
    },
    {
      title: "Bo Mạch PCB Sạc Pin",
      category: "design",
      image: pcb,
      description: "Thiết kế bo mạch kiểm soát quá trình sạc pin Lithium-Ion",
      client: "Khách hàng doanh nghiệp",
    },
  ];

  const categories = [
    { id: "all", label: "Tất Cả" },
    { id: "led", label: "LED Mặt Dựng" },
    { id: "design", label: "Thiết Kế" },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Dự Án Tiêu Biểu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Những công trình và sản phẩm nổi bật của MIGTECH
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                data-testid={`button-category-${category.id}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate active-elevate-2 group cursor-pointer"
              data-testid={`card-project-${index}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <Badge variant="secondary">{project.client}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
