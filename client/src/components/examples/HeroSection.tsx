import { HeroSection } from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <HeroSection onRoleSelect={(role) => console.log(`Selected role: ${role}`)} />
  );
}
