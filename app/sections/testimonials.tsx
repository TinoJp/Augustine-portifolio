import { SectionWrapper } from '@/components/section-wrapper';
import { SectionHeading } from '@/components/section-heading';
import { Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Testimonials"
          subtitle="Feedback from people I have worked and learned with"
        />
        <div className="glass rounded-3xl p-8 md:p-12 text-center">
          <Quote className="w-10 h-10 text-cyan-400 mx-auto mb-5" aria-hidden="true" />
          <h3 className="text-xl font-semibold mb-3">Genuine feedback matters</h3>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Testimonials will be published here when I have genuine feedback and permission
            from the people who provided it. I do not publish placeholder or unverified
            endorsements.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
