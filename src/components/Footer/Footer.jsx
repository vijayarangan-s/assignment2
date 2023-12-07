import { Chip } from "primereact/chip";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { footerData, companyLogo } from "../../utils/data";
import "./Footer.css";

const Items = ({ title, subtitle, custom }) => {
  return (
    <div className="items">
      <div className="title">{title}</div>
      <div className="title-list">
        {subtitle?.length > 0
          ? subtitle?.map((v) => {
              return <div>{v}</div>;
            })
          : null}
      </div>
      {custom && (
        <div className="title-list">
          <div className="d-flex">
            <InputText
              value=""
              placeholder="Enter you email address"
              style={{ marginRight: "4px" }}
            />
            <Button
              label="Subscribe"
              severity="warning"
              className="ml-2"
              style={{ background: "yellow", color: "black", border: "none" }}
            />
          </div>
          <div className="mt-3">
            <div>
              <span className="pi pi-facebook" />
              <span>47 million people like this</span>
            </div>
            <div>
              <span className="pi pi-instagram" />
              <span>1 Million follower</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  const { about, service, links, inbox } = footerData || {};
  return (
    <div className="footer-container">
      <div className="first-container">
        <Items {...about} />
        <Items {...service} />
        <Items {...links} />
        <Items {...inbox} custom />
      </div>
      <div className="second-container">
        <div className="company">
          <div className="bg-company">
            <img src={companyLogo} />
          </div>
          <div className="d-flex mt-2">
            <div className="mr-2">
              <span className="pi pi-truck mx-2" />
              15 days return policy*&nbsp;&nbsp;
            </div>
            <div>|&nbsp;&nbsp;</div>
            <div>
              <span className="pi pi-money-bill mx-2" />
              Cash on Delivery
            </div>
          </div>
          <div className="mt-1">
            &copy;2023 Bewakoof Private Limited. All Rights Reserved.
          </div>
        </div>
        <div className="payment-method">
          <div className="payment-method-opts d-flex">
            <div>100% Secure Payment</div>
            <Chip label="gpay"  className="chip"/>
            <Chip label="Phonepe" className="chip"/>
            <Chip label="Visa" className="chip"/>
          </div>
          <div className="payment-method-opts d-flex mt-3">
            <div>Download The App</div>
            <Chip label="A store"  className="chip"/>
            <Chip label="G play" className="chip"/>
          </div>
        </div>
        {/* <div className="payment-method">
          <div className="payment-method-opts d-flex">
            <div>Download The App</div>
            <Chip label="Apple store"  className="chip"/>
            <Chip label="G play" className="chip"/>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
