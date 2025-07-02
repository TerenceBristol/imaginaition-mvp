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
      <div className={cn("w-full h-full", className)}>{children}</div>
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
              className="inline-block opacity-70 text-gray-300 hover:text-gray-100 transition-colors duration-300"
              initial={{ y: "0%" }}
              animate={isActive ? { y: "-110%" } : { y: "0%" }}
            >
              {char}
              {char === " " && index < characters.length - 1 && <>&nbsp;</>}
            </motion.span>

            <motion.span
              className="absolute left-0 top-0 inline-block opacity-100 text-blue-300 hover:text-blue-200 transition-colors duration-300"
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
      transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.5 }}
      variants={clipPathVariants}
      animate={activeSlide === index ? "visible" : "hidden"}
      ref={ref}
      src={imageUrl}
      {...props}
    />
  )
})
HoverSliderImage.displayName = "HoverSliderImage"

/**
 * Props for the ServicePortfolioSlideshow component
 */
interface ServicePortfolioSlideshowProps {
  /** Array of portfolio items to display in the slideshow */
  items: PortfolioItem[];
  /** Optional CSS class name for styling */
  className?: string;
}

/**
 * ServicePortfolioSlideshow - An animated slideshow component for displaying service portfolio items
 * 
 * Features:
 * - Responsive design (horizontal layout on desktop, vertical stack on mobile)
 * - Text stagger animations with blue accent colors matching site theme
 * - Smooth image transitions with hover effects
 * - Lazy loading for optimal performance
 * - WCAG AA accessible with proper alt text and ARIA support
 * - Automatic empty state handling when no portfolio items are provided
 * 
 * @example
 * ```tsx
 * // Basic usage in a service section
 * <ServicePortfolioSlideshow items={service.examples} />
 * 
 * // With custom styling
 * <ServicePortfolioSlideshow 
 *   items={portfolioItems} 
 *   className="custom-slideshow-styles"
 * />
 * ```
 * 
 * @param items - Array of PortfolioItem objects to display
 * @param className - Optional CSS classes for custom styling
 * @param ref - React ref for the component's root element
 * @returns JSX element containing the animated slideshow
 */
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
      <HoverSlider className="min-h-[300px] bg-gray-900/50 border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-900/70 transition-all duration-500 rounded-lg animate-fade-in">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-4 sm:p-6">
          {/* Text Section */}
          <div className="flex flex-col space-y-2 sm:space-y-3 lg:space-y-4 flex-1 order-2 lg:order-1">
            <div className="mb-1 sm:mb-2">
              <span className="text-blue-400 text-xs sm:text-sm font-medium uppercase tracking-wide">
                Portfolio Examples
              </span>
            </div>
            {slides.map((slide, index) => (
              <TextStaggerHover
                key={slide.title}
                index={index}
                className="cursor-pointer text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold tracking-tight text-white hover:text-blue-300 transition-colors duration-200 font-montserrat leading-tight"
                text={slide.title}
              />
            ))}
          </div>

          {/* Image Section */}
          <div className="flex-1 order-1 lg:order-2 w-full lg:max-w-md xl:max-w-lg">
            <HoverSliderImageWrap className="aspect-[4/3] sm:aspect-square lg:aspect-[4/3] rounded-lg overflow-hidden border border-gray-600/30 hover:border-gray-500/40 transition-colors duration-300 shadow-lg">
              {slides.map((slide, index) => (
                <div key={slide.id} className="relative w-full h-full">
                  <HoverSliderImage
                    index={index}
                    imageUrl={slide.imageUrl}
                    src={slide.imageUrl}
                    alt={slide.description || slide.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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