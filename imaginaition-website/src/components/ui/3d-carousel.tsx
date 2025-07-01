"use client"

import { memo, useEffect, useLayoutEffect, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
} from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PortfolioItem } from "@/types"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }

const Carousel = memo(
  ({
    handleClick,
    controls,
    items,
    isCarouselActive,
  }: {
    handleClick: (item: PortfolioItem, index: number) => void
    controls: ReturnType<typeof useAnimation>
    items: PortfolioItem[]
    isCarouselActive: boolean
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 1100 : 1800
    const faceCount = items.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    
    // State for current active image index
    const [currentIndex, setCurrentIndex] = useState(0)
    const [swipeStartX, setSwipeStartX] = useState<number | null>(null)
    
    // Calculate rotation based on current index
    const currentRotation = currentIndex * (360 / faceCount)

    // Navigation functions
    const nextImage = () => {
      if (!isCarouselActive) return
      setCurrentIndex((prev) => (prev + 1) % faceCount)
    }

    const prevImage = () => {
      if (!isCarouselActive) return
      setCurrentIndex((prev) => (prev - 1 + faceCount) % faceCount)
    }

    // Mobile swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
      if (!isCarouselActive) return
      setSwipeStartX(e.touches[0].clientX)
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
      if (!isCarouselActive || swipeStartX === null) return
      
      const swipeEndX = e.changedTouches[0].clientX
      const swipeDistance = swipeStartX - swipeEndX
      const minSwipeDistance = 50

      if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0) {
          nextImage() // Swipe left = next image
        } else {
          prevImage() // Swipe right = previous image
        }
      }
      setSwipeStartX(null)
    }

    // Animate to current rotation
    useEffect(() => {
      if (isCarouselActive) {
        controls.start({
          rotateY: currentRotation,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 25,
            mass: 0.8,
          },
        })
      }
    }, [currentIndex, currentRotation, controls, isCarouselActive])

    if (items.length === 0) {
      return (
        <div className="flex h-full items-center justify-center bg-gray-800/50 rounded-lg">
          <div className="text-center text-white/70">
            <p className="text-lg font-medium">NO PORTFOLIO ITEMS</p>
            <p className="text-sm mt-2">Portfolio coming soon...</p>
          </div>
        </div>
      )
    }

    return (
      <div className="relative flex h-full items-center justify-center bg-black/20 rounded-lg">
        {/* Left Arrow Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 z-10 h-10 w-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
          onClick={prevImage}
          disabled={!isCarouselActive}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        {/* 3D Carousel Container */}
        <div
          className="flex h-full items-center justify-center flex-1"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="relative flex h-full origin-center justify-center"
            style={{
              width: cylinderWidth,
              transformStyle: "preserve-3d",
            }}
            animate={controls}
          >
            {items.map((item, i) => (
              <motion.div
                key={`key-${item.id}-${i}`}
                className="absolute flex h-full origin-center items-center justify-center rounded-xl bg-gray-800/30 p-2 hover:bg-gray-700/30 transition-colors"
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${
                    i * (360 / faceCount)
                  }deg) translateZ(${radius}px)`,
                }}
                onClick={() => handleClick(item, i)}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  layoutId={`img-${item.id}`}
                  className="pointer-events-none w-full rounded-xl object-cover aspect-square"
                  initial={{ filter: "blur(4px)" }}
                  layout="position"
                  animate={{ filter: "blur(0px)" }}
                  transition={transition}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Arrow Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 z-10 h-10 w-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
          onClick={nextImage}
          disabled={!isCarouselActive}
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Position Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {items.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex
                  ? 'bg-white'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              onClick={() => isCarouselActive && setCurrentIndex(i)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    )
  }
)

Carousel.displayName = "Carousel"

interface ThreeDPortfolioCarouselProps {
  items: PortfolioItem[]
  className?: string
}

function ThreeDPortfolioCarousel({ items, className }: ThreeDPortfolioCarouselProps) {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()

  useEffect(() => {
    console.log("Portfolio items loaded:", items.length)
  }, [items])

  const handleClick = (item: PortfolioItem) => {
    setActiveItem(item)
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveItem(null)
    setIsCarouselActive(true)
  }

  return (
    <motion.div layout className={`relative ${className}`}>
      <AnimatePresence mode="sync">
        {activeItem && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`img-container-${activeItem.id}`}
            layout="position"
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 m-5 md:m-16 lg:mx-32 rounded-3xl cursor-pointer"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <div className="max-w-4xl max-h-full flex flex-col items-center justify-center p-6 text-center">
              <motion.img
                layoutId={`img-${activeItem.id}`}
                src={activeItem.image}
                alt={activeItem.title}
                className="max-w-full max-h-[60vh] rounded-lg shadow-2xl mb-6"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                  willChange: "transform",
                }}
              />
              <div className="text-white max-w-2xl">
                <h3 className="text-2xl font-bold mb-3">{activeItem.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{activeItem.description}</p>
                <p className="text-sm text-gray-400 mt-4">Click anywhere to close</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] w-full overflow-hidden rounded-lg">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          items={items}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  )
}

export { ThreeDPortfolioCarousel } 