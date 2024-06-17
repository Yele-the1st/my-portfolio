import Button from "@/components/Button";
import links from "@/data/links";

import { FaDiscord } from "react-icons/fa";
import { Section } from "@/types/Sections";
import { getSectionHeading, openURLInNewTab } from "@/utils";

const AboutLetsgo = () => (
  <div id={Section.AboutLetsgo}>
    {getSectionHeading(Section.AboutLetsgo)}

    <div className="w-full lg:w-3/4 max-w-full prose prose-sm md:prose-base prose-neutral dark:prose-invert">
      <p>
        <strong>Letsgo</strong> is an innovative online platform designed for
        seamless event management and ticketing, catering to a diverse range of
        events including concerts, festivals, conferences, and workshops.
      </p>
      <p>
        Letsgo not only provides robust tools for creating, promoting, and
        selling tickets, but also introduces a unique collaboration feature that
        connects organizers with a network of trusted vendors. This enables
        streamlined coordination and planning with caterers, decorators, AV
        specialists, and more.
      </p>
      <p>
        With comprehensive analytics and reporting, organizers can track event
        performance and attendee engagement. Letsgo&apos;s intuitive interface
        and social media integration ensure effortless sharing and connectivity,
        making event management more efficient and collaborative than ever
        before.
      </p>
    </div>

    <Button
      icon={FaDiscord}
      className="mt-8"
      onClick={() => openURLInNewTab(links.repository)}
    >
      Join our Discord
    </Button>
  </div>
);

export default AboutLetsgo;
