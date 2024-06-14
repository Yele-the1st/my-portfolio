import { format } from "date-fns";

const Footer = () => (
  <div id="footer" className="mb-16 text-xs leading-loose opacity-30">
    All rights reserved.
    <br />
    Copyright {format(Date.now(), "yyyy")} Omoyele Olabode.
  </div>
);

export default Footer;
