import CustomCursor from "./CustomCursor";
import ParticleBackground from "./ParticleBackground";
import ContactFAB from "./ContactFAB";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen text-white overflow-hidden selection:bg-primary/30">
      <CustomCursor />
      
      {/* Fixed Background Context */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
        <div className="absolute inset-0 bg-background/80 md:bg-background/90 mix-blend-multiply" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12 flex flex-col gap-24 overflow-x-hidden">
        {children}
      </main>
      
      <ContactFAB />
    </div>
  );
}
