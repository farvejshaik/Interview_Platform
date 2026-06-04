import { Marquee } from "./marquee";
import { Star } from "lucide-react";

const TestimonialCard = ({ name, role, company, content, avatar }) => (
  <div className="h-fit w-80 shrink-0 sm:w-96 rounded-2xl border border-base-content/10 bg-base-100 p-6 shadow-lg">
    <div className="mb-3 flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
    <p className="mb-4 line-clamp-3 text-sm text-base-content/80">
      "{content}"
    </p>
    <div className="flex items-center gap-3">
      <img
        src={avatar}
        alt={name}
        className="h-10 w-10 rounded-full object-cover"
      />
      <div>
        <p className="text-sm font-semibold text-base-content">{name}</p>
        <p className="text-xs text-base-content/60">
          {role} at {company}
        </p>
      </div>
    </div>
  </div>
);

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "Tech Startup",
      content:
        "Next Hire has completely transformed how I prepare for interviews. The real-time collaboration features are amazing!",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Senior Developer",
      company: "Big Tech Corp",
      content:
        "The live code editor and video integration makes interview prep feel like the real thing. Highly recommended!",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "Innovation Labs",
      content:
        "Finally found a platform that truly helps with technical interview preparation. Great features and supportive community!",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "David Kumar",
      role: "Full Stack Developer",
      company: "StartUp Studio",
      content:
        "The 99.9% uptime and lightning-fast performance make it the best platform for collaborative coding sessions.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Jessica Williams",
      role: "Data Scientist",
      company: "AI Research",
      content:
        "Multi-language support and real-time sync are exactly what I needed for my interview prep. Exceptional!",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Alex Thompson",
      role: "DevOps Engineer",
      company: "Cloud Solutions",
      content:
        "Best investment I made for my career. The platform helped me land my dream job at a top company!",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    },
  ];

  return (
    <section className="section-y w-full">
      <div className="page-container">
        <div className="section-header">
          <h2 className="text-4xl font-bold text-base-content sm:text-5xl">
            Loved by{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text font-mono text-transparent">
              Thousands
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-base-content/70">
            Join thousands of successful developers who have aced their
            technical interviews with Next Hire
          </p>
        </div>

        <Marquee pauseOnHover speed={40}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
