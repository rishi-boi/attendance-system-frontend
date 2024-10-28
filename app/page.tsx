"use client";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Wrapper from "@/components/shared/Wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import DotPattern from "@/components/ui/dot-pattern";
import SparklesText from "@/components/ui/sparkles-text";
import WordRotate from "@/components/ui/word-rotate";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const tl = gsap.timeline();
  useGSAP(() => {
    gsap.from(".head", { y: -40, opacity: 0, ease: "power1.out" });
    tl.from(".logo", { y: 20, opacity: 0, ease: "power1.out" })
      .from(".desc", { y: 20, opacity: 0, ease: "power1.out" })
      .from(".button", { y: 20, opacity: 0, ease: "power1.out" });
  });
  return (
    <>
      <Navbar />
      <section
        id="landing_page"
        className="flex flex-col justify-center items-center min-h-[600px]"
      >
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
        <Wrapper className="text-gray-800 relative z-10">
          <h1 className="text-xl head text-center font-medium">
            Smart Attendace Management With{" "}
          </h1>
          <SparklesText text="MarkMe" className="text-8xl logo text-center" />
          <p className="text-center desc mt-4 w-[500px]">
            Say goodbye to manual attendance tracking! Our system automates the
            dirty process and allowing you to easily record attendance and
            manage student information with user friendly interface.
          </p>
        </Wrapper>
        <div className="button">
          <AnimatedShinyText className="inline-flex items-center justify-center px-6 py-2 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 mt-6 border rounded-full text-xl">
            <Link href={"/getstarted"} className="bg-white  relative z-20">
              ✨ Get Started Now {">"}
            </Link>
          </AnimatedShinyText>
        </div>
      </section>
      <section className="flex overflow-hidden flex-col justify-center items-center py-10">
        <Wrapper className="text-gray-800 relative">
          <h1 className="text-3xl choose1 text-center font-medium">
            Why choose us?
          </h1>
          <WordRotate
            className="text-5xl choose2 font-bold text-center text-nowrap"
            words={[
              "Realtime Attendance",
              "User friendly UI",
              "Admin Dashboard",
            ]}
          />
        </Wrapper>
      </section>
      <section className="flex flex-col justify-center items-center py-44">
        <Wrapper className="text-gray-800 relative">
          <h1 className="text-3xl features1 mb-6 text-center font-medium">
            Key Features
          </h1>
          <div className="w-[450px] flex flex-col gap-3">
            <Accordion type="single" className="features2" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="flex text-2xl font-bold gap-3 items-center">
                    <Check className="text-primary" /> Student Management
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  Easily add, update, and manage student records in one central
                  platform.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" className="features3" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="flex text-2xl font-bold gap-3 items-center text-left">
                    <Check className="text-primary text-left" /> Automated
                    Attendance Tracking
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  Real-time attendance marking, eliminating manual data entry.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" className="features4" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="flex text-2xl font-bold gap-3 items-center">
                    <Check className="text-primary" />
                    Attendance Reports
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  Generate and download attendance reports filtered by date,
                  course, or batch.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" className="features5" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="flex text-2xl font-bold gap-3 items-center">
                    <Check className="text-primary" /> Bulk Actions
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  Perform batch updates or export data with ease. Secure
                  Database: All data is securely stored with reliable access
                  from anywhere.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" className="features6" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="flex text-2xl font-bold gap-3 items-center">
                    <Check className="text-primary" /> Customizable Settings
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  Adjust settings for attendance sessions, user roles, and more.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Wrapper>
      </section>
      <Footer />
    </>
  );
}
