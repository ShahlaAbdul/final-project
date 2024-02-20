import Button1 from "../Button1";
import TitleButton from "../TitleButton";
import "./style.scss";
function ContactUsForm() {
  return (
    <section id="contact_us">
      <div className="contact_us">
        <div className="message">
          <div className="contact_head">
            <TitleButton text={"Mesaj Bölməsi"} />
            <h1 className="contact_h1"> Bizə mesaj göndərin</h1>
          </div>
          <div className="contact_center">
            <div className="contact_form">
              <div className="name">
                <input type="text" name="" id="" placeholder="enter name" />
                <input type="mail" placeholder="enter email" />
              </div>
              <div className="name">
                <input type="text" name="" id="" placeholder="enter name" />
                <input type="mail" placeholder="enter email" />
              </div>
              <div className="name">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="12"
                  placeholder="sent message"
                ></textarea>
              </div>
            </div>
          </div>
          <Button1 text={"Göndərin"}></Button1>
        </div>
        <div className="message" style={{ width: "40%" }}>
          <div className="contact_head">
            <TitleButton text={"MEsaj Bölməsi"} />
            <h1 className="contact_h1"> Bizimlə əlaqə saxlayın</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo
              velit est maiores molestiae explicabo officiis odit libero
              doloribus voluptate?
            </p>
          </div>
          <div className="contact_use">
            <div className="call">
              <i className="fa-solid fa-phone-volume"></i>
              <div className="content">
                <h2>Hər hansı sualınız var?</h2>
                <p> +92 (020)-9850</p>
              </div>
            </div>
            <div className="call">
              <i className="fa-regular fa-envelope"></i>
              <div className="content">
                <h2>Email göndərin</h2>
                <p>needhelp@company.com</p>
              </div>
            </div>
            <div className="call">
              <i className="fa-regular fa-paper-plane"></i>
              <div className="content">
                <h2>Ziyarət edin</h2>
                <p>66 broklyn golden street. New York</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsForm;
