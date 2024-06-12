import Button from "@/components/Button";
import links from "@/data/links";
import { MdStar } from "react-icons/md";
import { Section } from "@/types/Sections";
import { getSectionHeading, openURLInNewTab } from "@/utils";

const AboutLetsgo = () => (
  <div id={Section.AboutLetsgo}>
    {getSectionHeading(Section.AboutLetsgo)}

    {/* <div className="w-full lg:w-3/4 max-w-full prose prose-sm md:prose-base prose-neutral dark:prose-invert">
      <p>
        <strong>Lets Go</strong> has been a passion project of mine since the
        early this year. I envisioned a platform where my information
        wouldn&apos;t be confined to a mere sheet of paper accessible only to
        HRs or Talent Scouts, but rather readily available to everyone. And
        thus, Lets Go was born.
      </p>
      <p>
        I continually update Lets Go to reflect who I am because, like this
        website, I believe in evolving. I embrace the latest technologies and
        use this platform to challenge myself, exploring new frameworks, build
        tools, and design concepts while ensuring that getting to know me
        remains simple and intuitive.
      </p>

      <p>
        This iteration of Lets Go was crafted using NextJS (React), Tailwind CSS
        for its utility-first approach, and hosted on Vercel.
      </p>

      <p>
        I hope you enjoy Lets Go as much as I enjoyed crafting and learning from
        it. Your feedback matters to me, so please don&apos;t hesitate to reach
        out using the contact form above. I&apos;d love to hear from you.
      </p>

      <p>
        If you&apos;re curious about the inner workings of Lets Go and want to
        explore its codebase, you can find the complete source code on GitHub.
        Feel free to customize it to suit your needs, as Lets Go is licensed
        under the permissive MIT License.
      </p>
    </div> */}

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
      icon={MdStar}
      className="mt-8"
      onClick={() => openURLInNewTab(links.repository)}
    >
      Follow us on Socials
    </Button>
  </div>
);

export default AboutLetsgo;
