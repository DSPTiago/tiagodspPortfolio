import { Button } from './ui/button';
import { Linkedin, Dribbble, Mail, Coffee } from 'lucide-react';

export function ContactFooter() {
  return (
    <footer id="contact" className="py-24 px-4 md:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Coffee className="h-12 w-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-4xl md:text-5xl mb-4">Let's grab a coffee!</h2>
          <p className="text-lg opacity-90 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        {/* Email */}
        <div className="mb-8">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 text-xl hover:opacity-80 transition-opacity"
          >
            <Mail className="h-5 w-5" />
            hello@example.com
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant="secondary"
            size="lg"
            asChild
          >
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            asChild
          >
            <a
              href="https://dribbble.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Dribbble className="h-5 w-5" />
              Dribbble
            </a>
          </Button>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Creative Designer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
