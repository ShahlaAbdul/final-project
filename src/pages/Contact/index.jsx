import SectionHead from "../../Components/SectionHead";
import Map from "../../Components/Map";
import backgroundImage from "../../assets/Images/finalBgImage.jpg";
import ContactUsForm from "../../Components/ContactusForm";
function Contact() {
  return (
    <div>
      <SectionHead
        bgImage={backgroundImage}
        ptext={"Necə əlaqə saxlamaq olar?"}
        head={" Bizimlə Əlaqə"}
      />
      <Map />
      <ContactUsForm />
    </div>
  );
}

export default Contact;
