"use client" 

import * as React from "react"
import { HTMLMotionProps, MotionConfig, motion } from "motion/react"
import { cn } from "@/lib/utils"

// Import the PortfolioItem type from the existing types
interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  serviceType: string;
  isPlaceholder: boolean;
}

interface TextStaggerHoverProps {
  text: string
  index: number
}
interface HoverSliderImageProps {
  index: number
  imageUrl: string
}
interface HoverSliderProps {
  className?: string;
}
interface HoverSliderContextValue {
  activeSlide: number
  changeSlide: (index: number) => void
}
function splitText(text: string) {
  const words = text.split(" ").map((word) => word.concat(" "))
  const characters = words.map((word) => word.split("")).flat(1)

  return {
    words,
    characters,
  }
}

const HoverSliderContext = React.createContext<
  HoverSliderContextValue | undefined
>(undefined)
function useHoverSliderContext() {
  const context = React.useContext(HoverSliderContext)
  if (context === undefined) {
    throw new Error(
      "useHoverSliderContext must be used within a HoverSliderProvider"
    )
  }
  return context
}

export const HoverSlider = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & HoverSliderProps
>(({ children, className }) => {
  const [activeSlide, setActiveSlide] = React.useState<number>(0)
  const changeSlide = React.useCallback(
    (index: number) => setActiveSlide(index),
    [setActiveSlide]
  )
  return (
    <HoverSliderContext.Provider value={{ activeSlide, changeSlide }}>
      <div className={cn("bg-gray-900/30 rounded-lg p-6", className)}>{children}</div>
    </HoverSliderContext.Provider>
  )
})
HoverSlider.displayName = "HoverSlider"

const WordStaggerHover = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ children }) => {
  return (
    <span
      className={cn("relative inline-block origin-bottom overflow-hidden")}
    >
      {children}
    </span>
  )
})
WordStaggerHover.displayName = "WordStaggerHover"

export const TextStaggerHover = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & TextStaggerHoverProps
>(({ text, index, className, ..._props }, ref) => {
  const { activeSlide, changeSlide } = useHoverSliderContext()
  const { characters } = splitText(text)
  const isActive = activeSlide === index
  const handleMouse = () => changeSlide(index)
  return (
    <span
      className={cn(
        "relative inline-block origin-bottom overflow-hidden",
        className
      )}
      {..._props}
      ref={ref}
      onMouseEnter={handleMouse}
    >
      {characters.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="relative inline-block overflow-hidden"
        >
          <MotionConfig
            transition={{
              delay: index * 0.025,
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.span
              className="inline-block opacity-60 text-gray-300 hover:text-gray-200 transition-colors duration-200"
              initial={{ y: "0%" }}
              animate={isActive ? { y: "-110%" } : { y: "0%" }}
            >
              {char}
              {char === " " && index < characters.length - 1 && <>&nbsp;</>}
            </motion.span>

            <motion.span
              className="absolute left-0 top-0 inline-block opacity-100 text-blue-400 hover:text-blue-300 transition-colors duration-200"
              initial={{ y: "110%" }}
              animate={isActive ? { y: "0%" } : { y: "110%" }}
            >
              {char}
            </motion.span>
          </MotionConfig>
        </span>
      ))}
    </span>
  )
})
TextStaggerHover.displayName = "TextStaggerHover"

export const clipPathVariants = {
  visible: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  hidden: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0px)",
  },
}
export const HoverSliderImageWrap = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "grid overflow-hidden [&>*]:col-start-1 [&>*]:col-end-1 [&>*]:row-start-1 [&>*]:row-end-1 [&>*]:size-full",
        className
      )}
      {...props}
    />
  )
})
HoverSliderImageWrap.displayName = "HoverSliderImageWrap"

export const HoverSliderImage = React.forwardRef<
  HTMLImageElement,
  HTMLMotionProps<"img"> & HoverSliderImageProps
>(({ index, imageUrl, className, ...props }, ref) => {
  const { activeSlide } = useHoverSliderContext()
  return (
    <motion.img
      className={cn("inline-block align-middle", className)}
      transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
      variants={clipPathVariants}
      animate={activeSlide === index ? "visible" : "hidden"}
      ref={ref}
      src={imageUrl}
      {...props}
    />
  )
})
HoverSliderImage.displayName = "HoverSliderImage"

// Wrapper component for PortfolioItem integration
interface ServicePortfolioSlideshowProps {
  items: PortfolioItem[];
  className?: string;
}

export const ServicePortfolioSlideshow = React.forwardRef<
  HTMLDivElement,
  ServicePortfolioSlideshowProps
>(({ items, className }, ref) => {
  // Handle empty or insufficient items
  if (!items || items.length === 0) {
    return (
      <div ref={ref} className={cn("flex h-64 items-center justify-center bg-gray-800/30 rounded-lg", className)}>
        <div className="text-center text-gray-400">
          <p className="text-lg font-medium">Portfolio Coming Soon</p>
          <p className="text-sm mt-2">Examples will be available shortly</p>
        </div>
      </div>
    );
  }

  // Transform PortfolioItem data for slideshow
  const slides = items.slice(0, 5).map((item) => ({
    id: item.id,
    title: item.title,
    imageUrl: item.image,
    description: item.description // For accessibility
  }));

  return (
    <div ref={ref} className={className}>
      <HoverSlider className="min-h-[300px] bg-gray-900/30 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-6">
          {/* Text Section */}
          <div className="flex flex-col space-y-3 lg:space-y-4 flex-1 order-2 lg:order-1">
            <div className="mb-2">
              <span className="text-blue-400 text-xs font-medium uppercase tracking-wide">
                Portfolio Examples
              </span>
            </div>
            {slides.map((slide, index) => (
              <TextStaggerHover
                key={slide.title}
                index={index}
                className="cursor-pointer text-lg lg:text-xl xl:text-2xl font-semibold tracking-tight text-white hover:text-blue-300 transition-colors duration-200"
                text={slide.title}
              />
            ))}
          </div>

          {/* Image Section */}
          <div className="flex-1 order-1 lg:order-2 w-full lg:max-w-md">
            <HoverSliderImageWrap className="aspect-square lg:aspect-[4/3] rounded-lg overflow-hidden border border-gray-600/30">
              {slides.map((slide, index) => (
                <div key={slide.id} className="relative w-full h-full">
                  <HoverSliderImage
                    index={index}
                    imageUrl={slide.imageUrl}
                    src={slide.imageUrl}
                    alt={slide.description || slide.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </HoverSliderImageWrap>
          </div>
        </div>
      </HoverSlider>
    </div>
  );
});

ServicePortfolioSlideshow.displayName = "ServicePortfolioSlideshow" 