import { useState } from "react";
import svgPaths from "./svg-1v7sfid1kr";
import imgUnsplashWKoKidNt14W from "./c78149f6f59250b6b8cb1b0e75f260c837bd67f9.png";
import imgRectangle30 from "./3b89fbcc5d09a9dcfed718b9441002088571183e.png";
import imgUnsplash9Anj7QWy2G from "./8f107a905f0e2c2a0cc5bae15845adf0de3205ca.png";
import imgUnsplashC5DLhUkEWfM from "./f9342afb7c1cf7f650c9ef0b35c8f6585d27e980.png";
import imgUnsplashMHRfLhgABo from "./2da37f82fa800f0711d0ad48045ab742c6f8daf5.png";
import imgUnsplashGWe0DlVd9E0 from "./ead171064222333091f36ac1c03c25f06480e9df.png";
import imgUnsplash8V4YXxt3Mq from "./01120caf35209da234d0ce9c533b0ea0cacd38d4.png";
import imgUnsplashSavQfLRm4Do from "./3da3ab315a91b5f2dd6f1061e5b0be3e60938f12.png";
import imgUnsplashPhIFdC6LA4E from "./46c1b0b7047e0794dd8853d66cdde08771fd30d1.png";
import imgUnsplashZ0MDyylvY1K from "./6256b708bb0c4a6fd8a44b369112956ce0963c34.png";
import imgUnsplashCoj7Uz7IN60 from "./e2b8fe341e5180e7839d7d0d049b6900cd354219.png";
import imgUnsplashUdZnjsCzsE from "./d85394fd2c31f590ee6e19eb4d05f39feb09abd5.png";

export default function HomepageResponsive() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white overflow-x-hidden w-full min-h-screen">
      {/* Navigation */}
      <nav className="bg-white sticky top-0 z-50 px-4 sm:px-8 lg:px-20 xl:px-[300px] py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex gap-3 items-center">
            <div className="bg-[#a53dff] flex items-center justify-center px-5 py-2 rounded-full">
              <p className="font-['Poppins:Medium',sans-serif] text-2xl text-white">B</p>
            </div>
            <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#132238] text-xl sm:text-2xl lg:text-3xl">Brooklyn</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <a href="#home" className="px-6 py-3 font-['Work_Sans:Medium',sans-serif] font-medium text-[#333] hover:text-[#a53dff] transition">Home</a>
            <a href="#about" className="px-6 py-3 font-['Work_Sans:Medium',sans-serif] font-medium text-[#333] hover:text-[#a53dff] transition">About</a>
            <a href="#process" className="px-6 py-3 font-['Work_Sans:Medium',sans-serif] font-medium text-[#333] hover:text-[#a53dff] transition">Process</a>
            <a href="#portfolio" className="px-6 py-3 font-['Work_Sans:Medium',sans-serif] font-medium text-[#333] hover:text-[#a53dff] transition">Portfolio</a>
            <a href="#blog" className="px-6 py-3 font-['Work_Sans:Medium',sans-serif] font-medium text-[#333] hover:text-[#a53dff] transition">Blog</a>
            <a href="#services" className="px-6 py-3 font-['Work_Sans:Medium',sans-serif] font-medium text-[#333] hover:text-[#a53dff] transition">Services</a>
            <button className="bg-[#a53dff] px-6 py-3 rounded text-white font-['Work_Sans:SemiBold',sans-serif] font-semibold hover:bg-[#8f2edf] transition">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-[#132238] transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-[#132238] transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-[#132238] transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 flex flex-col gap-2">
            <a href="#home" className="px-4 py-2 font-['Work_Sans:Medium',sans-serif] font-medium text-[#333]">Home</a>
            <a href="#about" className="px-4 py-2 font-['Work_Sans:Medium',sans-serif] font-medium text-[#333]">About</a>
            <a href="#process" className="px-4 py-2 font-['Work_Sans:Medium',sans-serif] font-medium text-[#333]">Process</a>
            <a href="#portfolio" className="px-4 py-2 font-['Work_Sans:Medium',sans-serif] font-medium text-[#333]">Portfolio</a>
            <a href="#blog" className="px-4 py-2 font-['Work_Sans:Medium',sans-serif] font-medium text-[#333]">Blog</a>
            <a href="#services" className="px-4 py-2 font-['Work_Sans:Medium',sans-serif] font-medium text-[#333]">Services</a>
            <button className="bg-[#a53dff] px-4 py-2 rounded text-white font-['Work_Sans:SemiBold',sans-serif] font-semibold mt-2">Contact</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative px-4 sm:px-8 lg:px-20 xl:px-[300px] py-12 sm:py-16 lg:py-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#FFEAC6]/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Hero Text */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <div className="relative inline-block">
                <h1 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#132238] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                  Hello, I'm<br/>Brooklyn Gilbert
                </h1>
                <div className="flex gap-2 mt-2">
                  <div className="bg-[#ffc8c8] h-1.5 w-20 sm:w-32"></div>
                  <div className="bg-[#ffc8c8] h-1.5 w-14 sm:w-24"></div>
                </div>
              </div>
            </div>
            <p className="font-['Work_Sans:Regular',sans-serif] text-[#556070] text-base sm:text-lg leading-relaxed mb-6">
              I'm a Freelance <span className="text-[#132238] font-medium">UI/UX Designer</span> and <span className="text-[#132238] font-medium">Developer</span> based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.
            </p>
            <button className="bg-[#a53dff] px-6 py-3 rounded text-white font-['Work_Sans:SemiBold',sans-serif] font-semibold hover:bg-[#8f2edf] transition">
              Say Hello!
            </button>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-white rounded-[25px] shadow-[0px_24px_116px_0px_rgba(43,56,76,0.09)] overflow-hidden">
                <img src={imgUnsplashWKoKidNt14W} alt="Brooklyn Gilbert" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 lg:mt-16">
          <div className="bg-[rgba(237,216,255,0.5)] border border-white rounded-lg p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#424e60] text-3xl sm:text-4xl mb-2">15 Y.</p>
              <p className="font-['Work_Sans:Regular',sans-serif] text-[#697484]">Experience</p>
            </div>
            <div className="text-center">
              <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#424e60] text-3xl sm:text-4xl mb-2">250+</p>
              <p className="font-['Work_Sans:Regular',sans-serif] text-[#697484]">Project Completed</p>
            </div>
            <div className="text-center">
              <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#424e60] text-3xl sm:text-4xl mb-2">58</p>
              <p className="font-['Work_Sans:Regular',sans-serif] text-[#697484]">Happy Client</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white px-4 sm:px-8 lg:px-20 xl:px-[300px] py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* About Image */}
          <div className="relative">
            <div className="bg-[#f0f1f3] border border-[#f0f1f3] rounded-[10px] overflow-hidden">
              <img src={imgRectangle30} alt="About" className="w-full h-auto object-cover" />
            </div>
            {/* Social Media Card */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-4 bg-white shadow-lg rounded flex gap-2 p-3">
              <button className="bg-white p-3 rounded hover:bg-gray-50 transition">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 9 19.5">
                  <path d={svgPaths.p3bfced80} fill="#A53DFF" />
                </svg>
              </button>
              <button className="bg-white p-3 rounded hover:bg-gray-50 transition">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 18 18">
                  <path d={svgPaths.p2d3a2b00} fill="#A53DFF" />
                </svg>
              </button>
              <button className="bg-white p-3 rounded hover:bg-gray-50 transition">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 17.9993 18">
                  <path d={svgPaths.p26e69e00} fill="#A53DFF" />
                </svg>
              </button>
              <button className="bg-[#a53dff] p-3 rounded shadow-lg">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 18 18">
                  <path d={svgPaths.p10350340} fill="white" />
                </svg>
              </button>
              <button className="bg-white p-3 rounded hover:bg-gray-50 transition">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 17.9966 11.2501">
                  <path d={svgPaths.p2ca2af00} fill="#A53DFF" />
                </svg>
              </button>
            </div>
          </div>

          {/* About Text */}
          <div>
            <h2 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#132238] text-3xl sm:text-4xl lg:text-5xl mb-6">I Am Professional User Experience Designer</h2>
            <div className="space-y-4 mb-6">
              <p className="font-['Work_Sans:Regular',sans-serif] text-[#556070] text-base sm:text-lg leading-relaxed">
                I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.
              </p>
              <p className="font-['Work_Sans:Regular',sans-serif] text-[#556070] text-base sm:text-lg leading-relaxed">
                I design and develop services for customers specializing creating stylish, modern websites, web services.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#a53dff] px-6 py-3 rounded text-white font-['Work_Sans:SemiBold',sans-serif] font-semibold hover:bg-[#8f2edf] transition">
                My Project
              </button>
              <button className="bg-white border border-[#a53dff] px-6 py-3 rounded text-[#a53dff] font-['Work_Sans:SemiBold',sans-serif] font-semibold hover:bg-[#a53dff] hover:text-white transition">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section id="process" className="bg-[#f0f1f3] px-4 sm:px-8 lg:px-20 xl:px-[300px] py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Process Text */}
            <div>
              <h2 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#132238] text-3xl sm:text-4xl lg:text-5xl mb-6">Work Process</h2>
              <div className="space-y-4">
                <p className="font-['Work_Sans:Regular',sans-serif] text-[#697484] text-base sm:text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
                </p>
                <p className="font-['Work_Sans:Regular',sans-serif] text-[#697484] text-base sm:text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
                </p>
              </div>
            </div>

            {/* Process Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Research Card */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-[#a53dff] p-5 rounded-lg inline-block mb-8">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 26.6667">
                    <path d={svgPaths.p28ceae80} fill="white" />
                  </svg>
                </div>
                <h3 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#132238] text-xl mb-3">1. Research</h3>
                <p className="font-['Work_Sans:Regular',sans-serif] text-[#556070]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
              </div>

              {/* Design Card */}
              <div className="bg-white p-8 rounded-xl sm:mt-12">
                <div className="bg-[rgba(237,216,255,0.5)] p-5 rounded-lg inline-block mb-8">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 26.6667 26.6687">
                    <path d={svgPaths.p30350500} fill="#A53DFF" />
                  </svg>
                </div>
                <h3 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#132238] text-xl mb-3">2. Design</h3>
                <p className="font-['Work_Sans:Regular',sans-serif] text-[#556070]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
              </div>

              {/* Analyze Card */}
              <div className="bg-white p-8 rounded-xl">
                <div className="bg-[rgba(237,216,255,0.5)] p-5 rounded-lg inline-block mb-8">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 26.6667 26.6667">
                    <path d={svgPaths.pe498400} fill="#A53DFF" />
                  </svg>
                </div>
                <h3 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#132238] text-xl mb-3">3. Analyze</h3>
                <p className="font-['Work_Sans:Regular',sans-serif] text-[#556070]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
              </div>

              {/* Launch Card */}
              <div className="bg-white p-8 rounded-xl sm:mt-12">
                <div className="bg-[rgba(237,216,255,0.5)] p-5 rounded-lg inline-block mb-8">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 26.6667 21.3333">
                    <path d={svgPaths.p1e8d6e00} fill="#A53DFF" />
                  </svg>
                </div>
                <h3 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#132238] text-xl mb-3">4. Launch</h3>
                <p className="font-['Work_Sans:Regular',sans-serif] text-[#556070]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-white px-4 sm:px-8 lg:px-20 xl:px-[300px] py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#132238] text-3xl sm:text-4xl lg:text-5xl mb-4">Portfolio</h2>
            <p className="font-['Work_Sans:Regular',sans-serif] text-[#87909d] text-base sm:text-lg">
              There are many variations of passages of Lorem Ipsum available,<br className="hidden sm:block" />
              but the majority have suffered alteration.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: imgUnsplash9Anj7QWy2G, title: "Product Admin Dashboard" },
              { img: imgUnsplashC5DLhUkEWfM, title: "Product Admin Dashboard" },
              { img: imgUnsplashMHRfLhgABo, title: "Product Admin Dashboard" },
              { img: imgUnsplashGWe0DlVd9E0, title: "Product Admin Dashboard" },
              { img: imgUnsplash8V4YXxt3Mq, title: "Product Admin Dashboard" },
              { img: imgUnsplashSavQfLRm4Do, title: "Product Admin Dashboard" }
            ].map((project, index) => (
              <div key={index} className="bg-white border border-[#e6e8eb] rounded-lg overflow-hidden group hover:shadow-lg transition">
                <div className="h-60 overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                </div>
                <div className="p-6">
                  <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[#87909d] text-xs mb-1">UI-UX DESIGN</p>
                  <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#132238] text-lg mb-3">{project.title}</p>
                  <p className="font-['Work_Sans:Regular',sans-serif] text-[#556070] text-sm mb-4">Vivamus eleifend convallis ante, non pharetra libero molestie laoreet.</p>
                  <button className="border border-[#a53dff] px-4 py-2 rounded text-[#a53dff] font-['Work_Sans:SemiBold',sans-serif] font-semibold text-sm hover:bg-[#a53dff] hover:text-white transition flex items-center gap-2">
                    Case Study
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 11.995 12.0099">
                      <path d={svgPaths.p110e2100} fill="currentColor" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section id="services" className="bg-[#f0f1f3] px-4 sm:px-8 lg:px-20 xl:px-[300px] py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Services Text */}
            <div>
              <h2 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#132238] text-3xl sm:text-4xl lg:text-5xl mb-6">What I do?</h2>
              <p className="font-['Work_Sans:Regular',sans-serif] text-[#697484] text-base sm:text-lg leading-relaxed mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.
              </p>
              <button className="bg-[#a53dff] px-6 py-3 rounded text-white font-['Work_Sans:SemiBold',sans-serif] font-semibold hover:bg-[#8f2edf] transition">
                Say Hello!
              </button>
            </div>

            {/* Services Cards */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-xl relative overflow-hidden">
                <div className="absolute left-0 top-0 bg-[#a53dff] w-1 h-full"></div>
                <h3 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#132238] text-2xl mb-4">User Experience (UX)</h3>
                <p className="font-['Poppins:Regular',sans-serif] text-[#424e60]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.</p>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <h3 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#132238] text-2xl mb-4">User Interface (UI)</h3>
                <p className="font-['Work_Sans:Regular',sans-serif] text-[#424e60]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.</p>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <h3 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#132238] text-2xl mb-4">Web Development</h3>
                <p className="font-['Work_Sans:Regular',sans-serif] text-[#424e60]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white px-4 sm:px-8 lg:px-20 xl:px-[300px] py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#132238] text-3xl sm:text-4xl lg:text-5xl mb-4">Happy Clients</h2>
          <p className="font-['Work_Sans:Regular',sans-serif] text-[#87909d] text-base sm:text-lg mb-12">
            There are many variations of passages of Lorem Ipsum available,<br className="hidden sm:block" />
            but the majority have suffered alteration.
          </p>

          <div className="mb-8">
            <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[#2b384c] text-base sm:text-lg leading-relaxed">
              "Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare elit at libero suscipit porta."
            </p>
          </div>

          <div className="mb-8">
            <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#132238] text-xl mb-1">Liam Mason</p>
            <p className="font-['Work_Sans:Regular',sans-serif] text-[#697484]">Head of Design, Layers</p>
          </div>

          <div className="flex justify-center gap-3">
            <div className="bg-[#210c33] h-2 w-8 rounded-full"></div>
            <div className="bg-[#C3C7CE] h-2 w-2 rounded-full"></div>
            <div className="bg-[#C3C7CE] h-2 w-2 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="bg-[#f0f1f3] px-4 sm:px-8 lg:px-20 xl:px-[300px] py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#132238] text-3xl sm:text-4xl lg:text-5xl mb-4">Blog</h2>
            <p className="font-['Work_Sans:Regular',sans-serif] text-[#87909d] text-base sm:text-lg">
              There are many variations of passages of Lorem Ipsum available,<br className="hidden sm:block" />
              but the majority have suffered alteration.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: imgUnsplashPhIFdC6LA4E },
              { img: imgUnsplashZ0MDyylvY1K },
              { img: imgUnsplashCoj7Uz7IN60 }
            ].map((blog, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
                <div className="h-60 overflow-hidden">
                  <img src={blog.img} alt="Blog post" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-[#697484]">
                    <span>UI Design</span>
                    <span>•</span>
                    <span>5 hours ago</span>
                  </div>
                  <h3 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#132238] text-xl mb-3">Design Conferences in 2022</h3>
                  <p className="font-['Work_Sans:Regular',sans-serif] text-[#556070] mb-4">Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
                  <a href="#" className="text-[#a53dff] font-['Work_Sans:SemiBold',sans-serif] font-semibold hover:underline flex items-center gap-2">
                    Read More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 11.995 12.0099">
                      <path d={svgPaths.p110e2100} fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white px-4 sm:px-8 lg:px-20 xl:px-[300px] py-12 sm:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#132238] text-3xl sm:text-4xl mb-4">Let's discuss your Project</h2>
              <p className="font-['Work_Sans:Regular',sans-serif] text-[#87909d] text-base sm:text-lg mb-8">There are many variations of passages of Lorem Ipsum available. but the majority have suffered alte.</p>

              <div className="space-y-4 mb-8">
                <div className="bg-white shadow-lg rounded-lg p-6 flex items-center gap-4">
                  <div className="bg-[#a53dff] p-3 rounded">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 16.9602 20.0611">
                      <path d={svgPaths.p27ba1180} fill="white" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-['Work_Sans:Regular',sans-serif] text-[#424e60] text-sm">Address:</p>
                    <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[#132238]">New Mexico 31134</p>
                  </div>
                </div>

                <div className="p-6 flex items-center gap-4">
                  <div className="bg-[rgba(237,216,255,0.5)] p-3 rounded">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 16.9602 20.0611">
                      <path d={svgPaths.p27ba1180} fill="#A53DFF" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-['Work_Sans:Regular',sans-serif] text-[#424e60] text-sm">My Email:</p>
                    <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[#132238]">mymail@mail.com</p>
                  </div>
                </div>

                <div className="p-6 flex items-center gap-4">
                  <div className="bg-[rgba(237,216,255,0.5)] p-3 rounded">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 16.9602 20.0611">
                      <path d={svgPaths.p27ba1180} fill="#A53DFF" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-['Work_Sans:Regular',sans-serif] text-[#424e60] text-sm">Call Me Now:</p>
                    <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[#132238]">00-1234 00000</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="bg-white p-3 rounded hover:bg-gray-50 transition">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 9 19.5">
                    <path d={svgPaths.p3bfced80} fill="#A53DFF" />
                  </svg>
                </button>
                <button className="bg-white p-3 rounded hover:bg-gray-50 transition">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p2d3a2b00} fill="#A53DFF" />
                  </svg>
                </button>
                <button className="bg-white p-3 rounded hover:bg-gray-50 transition">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 17.9966 11.2501">
                    <path d={svgPaths.p2ca2af00} fill="#A53DFF" />
                  </svg>
                </button>
                <button className="bg-white p-3 rounded hover:bg-gray-50 transition">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 17.9993 18">
                    <path d={svgPaths.p26e69e00} fill="#A53DFF" />
                  </svg>
                </button>
                <button className="bg-white p-3 rounded hover:bg-gray-50 transition">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p10350340} fill="#A53DFF" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <p className="font-['Work_Sans:Regular',sans-serif] text-[#87909d] text-base sm:text-lg mb-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alte.</p>
              
              <form className="space-y-6">
                <div>
                  <label className="font-['Work_Sans:Regular',sans-serif] text-[#a53dff] text-lg block mb-3">Name*</label>
                  <div className="border-b border-[#A53DFF]">
                    <input type="text" className="w-full pb-2 outline-none bg-transparent" />
                  </div>
                </div>

                <div>
                  <label className="font-['Work_Sans:Regular',sans-serif] text-[#697484] text-lg block mb-3">Email*</label>
                  <div className="border-b border-[#E6E8EB]">
                    <input type="email" className="w-full pb-2 outline-none bg-transparent" />
                  </div>
                </div>

                <div>
                  <label className="font-['Work_Sans:Regular',sans-serif] text-[#697484] text-lg block mb-3">Location</label>
                  <div className="border-b border-[#E6E8EB]">
                    <input type="text" className="w-full pb-2 outline-none bg-transparent" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-['Work_Sans:Regular',sans-serif] text-[#697484] text-lg block mb-3">Budget*</label>
                    <div className="border-b border-[#E6E8EB]">
                      <input type="text" className="w-full pb-2 outline-none bg-transparent" />
                    </div>
                  </div>
                  <div>
                    <label className="font-['Work_Sans:Regular',sans-serif] text-[#697484] text-lg block mb-3">Subject*</label>
                    <div className="border-b border-[#E6E8EB]">
                      <input type="text" className="w-full pb-2 outline-none bg-transparent" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="font-['Work_Sans:Regular',sans-serif] text-[#697484] text-lg block mb-3">Message*</label>
                  <div className="border-b border-[#E6E8EB]">
                    <textarea rows={3} className="w-full pb-2 outline-none bg-transparent resize-none"></textarea>
                  </div>
                </div>

                <button type="submit" className="bg-[#a53dff] px-6 py-3 rounded text-white font-['Work_Sans:SemiBold',sans-serif] font-semibold hover:bg-[#8f2edf] transition flex items-center gap-3">
                  Submit
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 20.0011 19.9943">
                    <path d={svgPaths.pd935800} fill="white" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#132238] px-4 sm:px-8 lg:px-20 xl:px-[300px] py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex gap-3 items-center mb-4">
                <div className="bg-[#a53dff] flex items-center justify-center px-5 py-2 rounded-full">
                  <p className="font-['Poppins:Medium',sans-serif] text-2xl text-white">B</p>
                </div>
                <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-white text-2xl">Brooklyn</p>
              </div>
              <p className="text-[#8d99ae] text-sm">© 2025 Brooklyn Gilbert. All rights reserved.</p>
            </div>

            <div>
              <h4 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-[#8d99ae] hover:text-white transition">Home</a></li>
                <li><a href="#about" className="text-[#8d99ae] hover:text-white transition">About</a></li>
                <li><a href="#portfolio" className="text-[#8d99ae] hover:text-white transition">Portfolio</a></li>
                <li><a href="#blog" className="text-[#8d99ae] hover:text-white transition">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#8d99ae] hover:text-white transition">UI/UX Design</a></li>
                <li><a href="#" className="text-[#8d99ae] hover:text-white transition">Web Development</a></li>
                <li><a href="#" className="text-[#8d99ae] hover:text-white transition">Consulting</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-[#8d99ae]">
                <li>New Mexico 31134</li>
                <li>mymail@mail.com</li>
                <li>00-1234 00000</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
