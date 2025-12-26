import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductHighlights } from "@/components/sections/ProductHighlights";
import { CommitmentSection } from "@/components/sections/CommitmentSection";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductHighlights />
      <CommitmentSection />
      <ComplianceSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
