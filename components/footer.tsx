import { Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="#hero" className="text-2xl font-bold">
              <span className="text-primary">Dev</span>Portfolio
            </Link>
            <p className="text-muted-foreground mt-2 max-w-md">
              A fullstack developer specializing in building exceptional digital
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h4 className="font-medium mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#hero"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#skills"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#experience"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Experience
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:olusanyajolaoluwa@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-words"
                  >
                    olusanyajolaoluwa@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+447440176901"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (+44) 7440176901
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Social</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/Jolaoluwa17"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jolaoluwa-olusanya-539798234"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jolaoluwa Olusanya. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0 flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using
            Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
