import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Reveal from "./Reveal";

function AbstractShape() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} scale={1.2}>
        <MeshDistortMaterial
          color="#9D50BB"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

export default function Hero() {
  const profileUrl = "https://media.licdn.com/dms/image/v2/D4E03AQF5SSRzq6mcTw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699984659200?e=1775088000&v=beta&t=dx5xTY8GQntgd1YLpRItTDbP0gDLWG7AqbxrLfIorRI";

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20">
      <Reveal>
        <div className="flex flex-col items-center justify-center text-center gap-8 z-10">
          
          {/* Profile Image with Glowing Border */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <img 
              src={profileUrl} 
              alt="Abhay Jaiswal" 
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-background shadow-2xl"
            />
          </div>

          <div className="space-y-4 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-gradient">Abhay</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium pb-2">
              I turn <span className="text-primary">Raw Data</span> into <span className="text-secondary">Actionable Insights.</span>
            </p>
            <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto tracking-wide uppercase">
              Data Science Enthusiast
            </p>
          </div>
        </div>
      </Reveal>

      {/* 3D Background Element */}
      <div className="absolute inset-0 -z-10 opacity-50 pointer-events-none md:pointer-events-auto">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <AbstractShape />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    </section>
  );
}
