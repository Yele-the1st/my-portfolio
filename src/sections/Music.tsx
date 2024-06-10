import Button from "@/components/Button";
import { FaSpotify } from "react-icons/fa";
import { Section } from "@/types/Sections";
import { getSectionHeading, openURLInNewTab } from "@/utils";
import { SiApplemusic } from "react-icons/si";

const Music = () => (
  <div id={Section.Music}>
    {getSectionHeading(Section.Music)}

    <div className="grid md:grid-cols-3 gap-12">
      <div className="max-w-full prose prose-sm md:prose-base prose-neutral dark:prose-invert">
        <p>
          If you&apos;ve read about my profile so far and you found it
          interesting, studies show that knowing what type of music a person
          listens to would say a lot about them.
        </p>

        <p>
          Also, I&apos;ve been known for my good taste in music and I&apos;ve
          always wanted to share the latest and greatest hits through an easy
          medium, so here&apos;s an Apple Music Playlist I&apos;ve created
          called My Everyday: A dynamic playlist of what&apos;s on my daily
          roster of music.
        </p>

        <Button
          icon={SiApplemusic}
          className="mt-8 text-sm"
          onClick={() =>
            openURLInNewTab(
              "https://music.apple.com/ng/playlist/my-everyday/pl.u-leyl1MGHMYe2K97"
            )
          }
        >
          Listen to My Everyday on Apple Music
        </Button>
      </div>

      <iframe
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        frameBorder="0"
        height="450"
        className=" w-full overflow-hidden rounded-[10px] hidden md:block col-span-2"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/ng/playlist/my-everyday/pl.u-leyl1MGHMYe2K97"
      ></iframe>

      {/* <iframe
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        frameBorder="0"
        height="450"
        width="100%"
        className=" w-full overflow-hidden rounded-[10px] hidden md:block col-span-2"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/ng/playlist/agt-inspired/pl.u-b3b8Rx3UKNb9l02"
      ></iframe> */}
    </div>
  </div>
);

export default Music;
