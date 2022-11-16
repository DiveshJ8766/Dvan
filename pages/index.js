import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Team from "../components/Team";
import Usage from "../components/Usage";

export default function Home() {
  return (
    <div>
      <Header />
      <Subheader />
      <Usage />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
}
