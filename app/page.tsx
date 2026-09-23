import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CourseModules from "@/components/CourseModules";
import Projects from "@/components/Projects";
import Roadmap from "@/components/Roadmap";
import WhyUs from "@/components/WhyUs";
import Audience from "@/components/Audience";
import Outcomes from "@/components/Outcomes";
import FAQ from "@/components/FAQ";
import Apply from "@/components/Apply";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <section id="program">
        <CourseModules />
      </section>

      <Projects />

      <Roadmap />

      <WhyUs />

      <Audience />

      <Outcomes />

      <FAQ />

      <section id="apply">
        <Apply />
      </section>

      <Footer />
    </main>
  );
}
