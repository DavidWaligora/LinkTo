import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Card } from "@heroui/card";
import { Avatar } from "@heroui/avatar";

import {
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  WebsiteIcon,
} from "@/components/icons";
import EnterAnimation from "@/components/enteranimation";
import { subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pt-8">
      <EnterAnimation delay={0.1}>
        <Card className="p-3 sm:w-96 w-72">
          <div className="flex justify-center mb-2">
            <Avatar
              alt="Image of David Waligora"
              className="w-20 h-20"
              src="davidwaligora.jpg"
            />
          </div>
          <span className={`${subtitle()} text-center`}>
            Hi! I&apos;m David Waligora.
          </span>
          <span className="text-default-600">
            I am a software developer specialized in front-end and back-end
            development. The following links will take you to my profiles and
            website where you can find more information about my work and
            projects.
          </span>
        </Card>
      </EnterAnimation>

      <EnterAnimation delay={0.2}>
        <div className="flex gap-3">
          <Link
            isExternal
            className={`
      ${buttonStyles({ size: "lg", variant: "bordered", radius: "full" })} 
      sm:w-96 w-64 grid grid-cols-2 items-center
      hover:bg-default-100
    `}
            href={siteConfig.linkswithinfo.github.href}
          >
            <span className="justify-self-end">
              <GithubIcon size={32} />
            </span>
            <span className="justify-self-start text-left">
              {siteConfig.linkswithinfo.github.title}
            </span>
          </Link>
        </div>
      </EnterAnimation>

      <EnterAnimation delay={0.3}>
        <div className="flex gap-3">
          <Link
            isExternal
            className={`
      ${buttonStyles({ size: "lg", variant: "bordered", radius: "full" })} 
      sm:w-96 w-64 grid grid-cols-2 items-center
      hover:bg-default-100
    `}
            href={siteConfig.linkswithinfo.linkedin.href}
          >
            <span className="justify-self-end">
              <LinkedInIcon size={30} />
            </span>
            <span className="justify-self-start text-left">
              {siteConfig.linkswithinfo.linkedin.title}
            </span>
          </Link>
        </div>
      </EnterAnimation>

      <EnterAnimation delay={0.4}>
        <div className="flex gap-3">
          <Link
            isExternal
            className={`
      ${buttonStyles({ size: "lg", variant: "bordered", radius: "full" })} 
      sm:w-96 w-64 grid grid-cols-2 items-center
      hover:bg-default-100
    `}
            href={siteConfig.linkswithinfo.website.href}
          >
            <span className="justify-self-end">
              <WebsiteIcon size={28} />
            </span>
            <span className="justify-self-start text-left">
              {siteConfig.linkswithinfo.website.title}
            </span>
          </Link>
        </div>
      </EnterAnimation>

      <EnterAnimation delay={0.5}>
        <div className="flex gap-3">
          <Link
            isExternal
            className={`
      ${buttonStyles({ size: "lg", variant: "bordered", radius: "full" })} 
      sm:w-96 w-64 grid grid-cols-2 items-center
      hover:bg-default-100
    `}
            href={siteConfig.linkswithinfo.mail.href}
          >
            <span className="justify-self-end">
              <MailIcon size={28} />
            </span>
            <span className="justify-self-start text-left">
              {siteConfig.linkswithinfo.mail.title}
            </span>
          </Link>
        </div>
      </EnterAnimation>
    </section>
  );
}
