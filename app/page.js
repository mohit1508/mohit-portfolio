import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Link from "next/link";

// components
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";

const Home = () => {
  const resume_address = "https://drive.google.com/file/d/1b3kEqk4QNtzf-WVkmF5pFpd9-veYlg8c/view";
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="text-accent">Mohit Khandelwal</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Passionate software developer with extensive experience in building scalable, and user-friendly web applications. Proven track record of optimizing applications to enhance user engagement and performance, with a keen focus on innovative problem-solving and collaborative development.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <Link href={resume_address} target="_blank">
                  <span>Download Resume</span>
                </Link>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="prder-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home;