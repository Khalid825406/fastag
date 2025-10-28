import SearchBar from "../components/SearchBar";
import ProviderCard from "../components/ProviderCard";
import DashboardLayout from "./Dashboardlayout";
import NETCFastag from "./NETCFastag";

const providers = [
  { name: "Indian Highways Management", logo: "https://logiclead.in/assets/img/banking_logo/IHMCL-Logo.jpeg" },
  { name: "IndusInd Bank", logo: "https://logiclead.in/assets/img/banking_logo/7fb9c4ae317ff5a843b86d86042f6597.jpg" },
  { name: "Bank of Baroda", logo: "https://logiclead.in/assets/img/banking_logo/eb55d100ee42369d2e984e3cb4758c76.jpg" },
  { name: "Axis Bank", logo: "https://logiclead.in/assets/img/banking_logo/76aabd7ec028d2927d5af281e82d9394.jpg" },
  { name: "IDFC FIRST Bank", logo: "https://logiclead.in/assets/img/banking_logo/2dad745c5f2fdd1f341fd31ef4937a50.jpg" },
  { name: "HDFC Bank", logo: "https://logiclead.in/assets/img/banking_logo/3d0764bf519e0ae62a43f818f832ca11.jpg" },
  { name: "Kotak Mahindra Bank", logo: "https://logiclead.in/assets/img/banking_logo/3adb17ad584e31a26d7f1119beb26c86.jpg" },
  { name: "Equitas", logo: "https://logiclead.in/assets/img/banking_logo/51c53153e4a1ab4b735c213e62d7733f.jpg" },
  { name: "IDBI Bank", logo: "https://logiclead.in/assets/img/banking_logo/6efb93f54538ebaf6c5251bc7a42713c.jpg" },
  { name: "IOB", logo: "https://logiclead.in/assets/img/banking_logo/97a2e9a37d151bf1729b96678a88e292.jpg" },
  { name: "Jammu and Kashmir Bank", logo: "https://logiclead.in/assets/img/banking_logo/55ba49c0871bbcfa6729799e4cdb466d.jpg" },
  { name: "Karnataka Bank", logo: "https://logiclead.in/assets/img/banking_logo/15.webp" },
  { name: "Paytm Payments Bank", logo: "https://logiclead.in/assets/img/banking_logo/8c6219ff367beac5f2730160a41aa897.jpg" },
  { name: "State Bank of India", logo: "https://logiclead.in/assets/img/banking_logo/0986338cc1bd9659da9133bb4fc783a6.jpg" },
  { name: "Federal Bank", logo: "https://logiclead.in/assets/img/banking_logo/2a4242814a0f7cc956fc2d14c1c4af2c.jpg" },
  { name: "ICICI Bank", logo: "https://logiclead.in/assets/img/banking_logo/13102943-icici-b9b38f77-216e-45f2-891b-edf7a7643433.webp" },
  { name: "Airtel Payments Bank", logo: "https://logiclead.in/assets/img/banking_logo/1.webp" },
  { name: "AU Bank", logo: "https://logiclead.in/assets/img/banking_logo/20.webp" },
  { name: "Bandhan Bank", logo: "https://logiclead.in/assets/img/banking_logo/4ae8ee4f8f839bab7ceb8501e4555763.jpg" },
  { name: "South Indian Bank", logo: "https://logiclead.in/assets/img/banking_logo/b037d11999aed70e83657233c18675f6.jpg" },
  { name: "Union Bank of India", logo: "https://logiclead.in/assets/img/banking_logo/18.png" },
  { name: "Canara Bank", logo: "https://logiclead.in/assets/img/banking_logo/c1ef2e91b95eac43bc00afbd580d23a3.jpg" },
  { name: "Indian Bank", logo: "https://logiclead.in/assets/img/banking_logo/66b5169c89ca2c55173cc4f3580418d1.jpg" },
  { name: "LivQuik Technology India", logo: "https://logiclead.in/assets/img/banking_logo/livquik_logo.jpg" },
];



export default function DashboardPage() {
  return (
    <DashboardLayout>
    <div>
      <div className="text-center mb-6 sm:mb-8">
        <SearchBar />
      </div>

       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-5">
          {providers.map((p, i) => (
            <ProviderCard key={i} name={p.name} logo={p.logo} />
          ))}
        </div>
    </div>

    <NETCFastag/>
    </DashboardLayout>
  );
}
