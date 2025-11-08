import { Navbar } from '../Navbar';
import { useState } from 'react';

export default function NavbarExample() {
  const [isDark, setIsDark] = useState(false);

  return (
    <Navbar
      onSearch={(query) => console.log('Search:', query)}
      isDark={isDark}
      onToggleDark={() => setIsDark(!isDark)}
    />
  );
}
