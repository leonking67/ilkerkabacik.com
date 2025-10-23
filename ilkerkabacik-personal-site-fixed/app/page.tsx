"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Wallet, ShieldCheck, Brain } from "lucide-react";

const services = [
  { icon: Wallet, title: "Finansal Teknolojiler", desc: "Ödeme sistemleri, token mimarisi ve entegrasyon." },
  { icon: ShieldCheck, title: "Kripto & DeFi", desc: "Akıllı kontratlar, borsa liste süreçleri ve güvenlik." },
  { icon: Brain, title: "AI & Otomasyon", desc: "Ürün, pazarlama ve içerikte uçtan uca otomasyon." },
];

const partners = [
  { name: "DeFi Labs", logo: "/partners/defi.svg" },
  { name: "ChainBridge", logo: "/partners/chainbridge.svg" },
  { name: "FinFlow", logo: "/partners/finflow.svg" },
  { name: "BlockOps", logo: "/partners/blockops.svg" }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative">
        <div className="container py-20 md:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            İlker Kabacık
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl"
          >
            Global ölçekte finansal teknoloji, kripto ve AI tabanlı ürünlerde strateji & inşası
          </motion.p>
          <div className="mt-8 flex gap-3">
            <Button asChild size="lg" className="gap-2">
              <a href="mailto:ilkerkabacik@defipayusdt.io">
                İletişime Geç <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t">
        <div className="container py-14 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold">Neler Inşa Ediyoruz?</h2>
          <p className="text-muted-foreground mt-2 mb-8 max-w-2xl">
            Blockchain, Fintech Çözümleri, Global tedarik, Ürünlere özel stratejiler, teknik mimari ve operasyon akışlarını tek elde toplayıp sonuç odaklı ilerleriz.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="p-6">
                <Icon className="w-6 h-6 mb-4" />
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="border-t">
        <div className="container py-14 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold">Global İş Ortaklarımız</h2>
          <p className="text-muted-foreground mt-2 mb-8 max-w-2xl">
            Seçtiğimiz çözüm ortaklarıyla, Globalde yüksek ölçekli ve güvenli projeler geliştiriyor ve uyguluyoruz.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {partners.map(p => (
              <Card key={p.name} className="p-6 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.logo} alt={p.name} className="h-8 md:h-10 opacity-80" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="container py-8 text-sm text-muted-foreground flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="İK" className="h-5" />
            <span>© {new Date().getFullYear()} İlker Kabacık</span>
          </div>
          <a href="mailto:ilkerkabacik@defipayusdt.io" className="underline">ilkerkabacik@defipayusdt.io</a>
        </div>
      </footer>
    </main>
  );
}
