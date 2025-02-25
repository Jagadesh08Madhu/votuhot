import { AnimatedTestimonials } from "../components/ui/animated-testimonials"; 
import client1 from '../assets/client1.webp'
import client2 from '../assets/client2.webp'
import client3 from '../assets/client3.webp'
import client4 from '../assets/client4.webp'
import client5 from '../assets/client5.webp'
import client6 from '../assets/client6.webp'

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Votohot’s hosting solutions have completely transformed our workflow. The uptime and speed are unparalleled!",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: client1,
    },
    {
      quote:
        "Seamless integration and top-notch security. Our data is safer than ever, thanks to Votohot.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: client2,
    },
    {
      quote:
        "Reliable, secure, and incredibly fast! Votohot has given my business the stability it needed to grow.",
      name: "Sophia Martinez",
      designation: "Founder at WebTech Solutions",
      src: client3,
    },
    {
      quote:
        "Lightning-fast servers and incredible support. Votohot has exceeded our expectations in every way!",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: client4,
    },
    {
      quote:
        "Customer support is exceptional! Their team is always ready to assist, making server management stress-free.",
      name: "Ava Thompson",
      designation: "VP of Technology at FutureNet",
      src: client5,
    },
    {
      quote:
        "The scalability and performance have been a game-changer. We can now handle high traffic without any issues.",
      name: "Olivia Brown",
      designation: "Project Manager at Digital Wave",
      src: client6,
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
