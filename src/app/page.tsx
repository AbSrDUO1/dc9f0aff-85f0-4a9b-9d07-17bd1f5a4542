"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <NavbarLayoutFloatingInline
        logoSrc="/images/logo.svg"
        logoWidth={120}
        logoHeight={40}
        navItems={[
          { name: "hero", id: "hero" },
          { name: "about", id: "about" },
          { name: "how-to-buy", id: "how-to-buy" },
          { name: "tokenomics", id: "tokenomics" },
          { name: "footer", id: "footer" },
        ]}
        buttonText="Get Started"
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <VoidHero 
          title="Welcome to NebulaFlow" 
          description="Your gateway to a futuristic SaaS platform." 
          tagLabel="Get Started" 
          primaryButtonText="Join Us" 
          secondaryButtonText="Learn More" 
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout 
          description="NebulaFlow is designed to simplify your digital experiences with cutting-edge technology." 
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D 
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics 
          title="Tokenomics Overview" 
          description="Understanding the efficiency and structure of our tokens." 
          kpiItems={[
            { value: "100M", description: "Total Token Supply", longDescription: "Total supply of tokens is capped to ensure value." , icon: () => <LucideIcon /> },
            { value: "1M", description: "Active Tokens", longDescription: "Tokens actively circulating in the market.", icon: () => <LucideIcon /> },
            { value: "500K", description: "Locked Tokens", longDescription: "Tokens locked for stability and growth.", icon: () => <LucideIcon /> }
          ]} 
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis 
          logoSrc="/images/logo.svg"
          logoAlt="NebulaFlow Branding" 
          logoText="NebulaFlow"
          columns={[
            { items: [{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }]},
            { items: [{ label: "GitHub", onClick: () => {} }, { label: "About Us", onClick: () => {} }]},
            { items: [{ label: "Contact", onClick: () => {} }, { label: "Support", onClick: () => {} }]}  
          ]}
          className="footer"
        />
      </div>
    </SiteThemeProvider>
  );
}