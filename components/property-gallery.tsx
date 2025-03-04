"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { 
  ChevronLeft, 
  ChevronRight, 
  Expand, 
  X,
  Image as ImageIcon
} from "lucide-react";

interface PropertyGalleryProps {
  images: string[];
}

const PropertyGallery = ({ images }: PropertyGalleryProps) => {
  const [mainImage, setMainImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);
  
  const handleThumbnailClick = (index: number) => {
    setMainImage(index);
  };
  
  const openFullscreen = (index: number) => {
    setFullscreenIndex(index);
    setIsFullscreen(true);
  };
  
  const closeFullscreen = () => {
    setIsFullscreen(false);
  };
  
  const nextFullscreenImage = () => {
    setFullscreenIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevFullscreenImage = () => {
    setFullscreenIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3 relative rounded-lg overflow-hidden">
          <div className="aspect-[16/9] relative">
            <Image
              src={images[mainImage]}
              alt="Property main image"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              priority
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={() => openFullscreen(mainImage)}
          >
            <Expand className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-4">
          {images.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden cursor-pointer ${
                mainImage === index ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image}
                  alt={`Property image ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
          
          {images.length > 3 && (
            <div
              className="relative rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openFullscreen(3)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={images[3]}
                  alt={`Property image 4`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <ImageIcon className="h-6 w-6 mx-auto mb-1" />
                    <span className="text-sm font-medium">+{images.length - 3} more</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="max-w-6xl p-0 bg-background/95 backdrop-blur-sm">
          <div className="relative h-[80vh]">
            <Image
              src={images[fullscreenIndex]}
              alt={`Property image ${fullscreenIndex + 1}`}
              fill
              style={{ objectFit: "contain" }}
            />
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={closeFullscreen}
            >
              <X className="h-5 w-5" />
            </Button>
            
            <div className="absolute inset-y-0 left-4 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="bg-background/80 backdrop-blur-sm hover:bg-background"
                onClick={prevFullscreenImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="absolute inset-y-0 right-4 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="bg-background/80 backdrop-blur-sm hover:bg-background"
                onClick={nextFullscreenImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium">
                  {fullscreenIndex + 1} / {images.length}
                </span>
              </div>
            </div>
          </div>
          
          <div className="p-4 overflow-x-auto">
            <div className="flex space-x-2">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`relative rounded-lg overflow-hidden cursor-pointer flex-shrink-0 ${
                    fullscreenIndex === index ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setFullscreenIndex(index)}
                >
                  <div className="h-16 w-24 relative">
                    <Image
                      src={image}
                      alt={`Property thumbnail ${index + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PropertyGallery;