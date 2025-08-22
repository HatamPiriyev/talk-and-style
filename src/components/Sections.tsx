import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, MessageCircle, Home, Palette, Award } from 'lucide-react';
import heroImage from '@/assets/hero-interior.jpg';
import bedroomImage from '@/assets/portfolio-bedroom.jpg';
import kitchenImage from '@/assets/portfolio-kitchen.jpg';

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <Badge className="w-fit bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
          Lüks İç Mekan Tasarımı
        </Badge>
        <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
          Evinizi{' '}
          <span className="bg-gradient-luxury bg-clip-text text-transparent">
            Hayalinizdeki
          </span>
          {' '}Mekana Dönüştürün
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
          Profesyonel iç mekan tasarımı ile yaşam alanınızı modern, şık ve fonksiyonel hale getirin. 
          Her detayda kusursuzluk arayanlar için özel çözümler.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-gradient-luxury hover:shadow-luxury text-white border-0 h-14 px-8">
            Ücretsiz Konsültasyon
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 h-14 px-8">
            <MessageCircle className="mr-2 h-5 w-5" />
            Chatbot ile Konuş
          </Button>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-luxury-gold fill-luxury-gold" />
            <span className="text-sm font-medium">4.9/5 Müşteri Puanı</span>
          </div>
          <div className="text-sm text-muted-foreground">
            200+ Tamamlanan Proje
          </div>
        </div>
      </div>
      <div className="relative">
        <img 
          src={heroImage} 
          alt="Lüks iç mekan tasarımı" 
          className="rounded-2xl shadow-elegant w-full h-[600px] object-cover"
        />
        <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-soft border">
          <div className="flex items-center gap-3">
            <Award className="h-8 w-8 text-luxury-gold" />
            <div>
              <div className="font-semibold">Ödüllü Tasarım</div>
              <div className="text-sm text-muted-foreground">2024 İç Mimari Ödülü</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Komple Ev Tasarımı",
      description: "Evinizdeki tüm alanlar için kapsamlı tasarım çözümleri",
      features: ["3D Görselleştirme", "Mobilya Seçimi", "Renk Paleti"]
    },
    {
      icon: Palette,
      title: "İç Mekan Danışmanlığı", 
      description: "Mevcut mekanınızı optimize etmek için profesyonel öneriler",
      features: ["Alan Analizi", "Stil Rehberliği", "Bütçe Planlaması"]
    },
    {
      icon: Award,
      title: "Lüks Proje Yönetimi",
      description: "Baştan sona proje yönetimi ile kusursuz uygulama",
      features: ["Kaliteli Malzemeler", "Usta Ekibi", "Zamanında Teslimat"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            Hizmetlerimiz
          </Badge>
          <h2 className="text-4xl font-bold text-foreground">
            Profesyonel Tasarım Çözümleri
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Her bütçe ve tarza uygun, kişiselleştirilmiş iç mekan tasarımı hizmetleri
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur">
              <service.icon className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 text-luxury-gold fill-luxury-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  const projects = [
    {
      image: bedroomImage,
      title: "Modern Yatak Odası",
      category: "Minimalist Tasarım",
      description: "Sıcak tonlarla modern konfor"
    },
    {
      image: kitchenImage,
      title: "Çağdaş Mutfak",
      category: "Fonksiyonel Tasarım", 
      description: "Doğal malzemelerle şık çözüm"
    },
    {
      image: heroImage,
      title: "Lüks Oturma Salonu",
      category: "Premium Tasarım",
      description: "Zarafet ve konforu buluşturan alan"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-accent/20 text-accent-foreground border-accent/30">
            Portföy
          </Badge>
          <h2 className="text-4xl font-bold text-foreground">
            Başarılı Projelerimiz
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-500">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {project.category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { HeroSection, ServicesSection, PortfolioSection };