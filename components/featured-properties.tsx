"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BedDouble,
  Bath,
  Ruler,
  Heart,
  MapPin,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

// Mock data for featured properties
const featuredProperties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    address: "2 Maitama, Abuja, Nigeria",
    price: 2500000,
    type: "For Sale",
    badges: ["Featured", "New"],
    beds: 5,
    baths: 4,
    sqft: 4200,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
  },
  {
    id: 2,
    title: "Downtown Penthouse",
    address: "2 Maitama, Abuja, Nigeria",
    price: 1800000,
    type: "For Sale",
    badges: ["Premium"],
    beds: 3,
    baths: 3.5,
    sqft: 2800,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    title: "Waterfront Estate",
    address: "5 Chevron Drive, Lagos, Nigeria",
    price: 3200000,
    type: "For Sale",
    badges: ["Exclusive"],
    beds: 6,
    baths: 5,
    sqft: 5500,
    image:
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    title: "Urban Loft Apartment",
    address: "5 Chevron Drive, Lagos, Nigeria",
    price: 850000,
    type: "For Sale",
    badges: ["Hot Deal"],
    beds: 2,
    baths: 2,
    sqft: 1800,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    title: "Mountain View Retreat",
    address: "5 Chevron Drive, Lagos, Nigeria",
    price: 1950000,
    type: "For Sale",
    badges: ["New"],
    beds: 4,
    baths: 3,
    sqft: 3200,
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80",
  },
  {
    id: 6,
    title: "Beachfront Condo",
    address: "5 Chevron Drive, Lagos, Nigeria",
    price: 1200000,
    type: "For Sale",
    badges: ["Premium"],
    beds: 3,
    baths: 2,
    sqft: 2100,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
];

const FeaturedProperties = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const propertiesPerPage = 3;

  const pageCount = Math.ceil(featuredProperties.length / propertiesPerPage);
  const offset = currentPage * propertiesPerPage;
  const currentProperties = featuredProperties.slice(
    offset,
    offset + propertiesPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? pageCount - 1 : prev - 1));
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProperties.map((property) => (
          <Card
            key={property.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <div className="aspect-[16/10] relative">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="absolute top-4 left-4 flex gap-2">
                {property.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    className={`font-medium ${
                      badge === "Hot Deal"
                        ? "bg-red-500 text-white"
                        : "bg-green-500 text-black"
                    }`}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
              <div className="absolute top-4 right-4">
                <Button
                  className={`rounded-full bg-yellow-500 backdrop-blur-sm hover:bg-background ${
                    favorites.includes(property.id) ? "text-destructive" : ""
                  }`}
                  onClick={() => toggleFavorite(property.id)}
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.includes(property.id) ? "fill-current" : ""
                    }`}
                  />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4">
                <Badge className="font-medium text-sm">{property.type}</Badge>
              </div>
              <div className="absolute bottom-4 right-4">
                <Badge className="font-bold text-lg bg-blue-700 backdrop-blur-sm">
                  {formatPrice(property.price)}
                </Badge>
              </div>
            </div>

            <CardContent className="pt-6">
              <h3 className="font-semibold text-xl mb-2 line-clamp-1">
                {property.title}
              </h3>
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                <span className="text-sm line-clamp-1">{property.address}</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <BedDouble className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.beds} Beds</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.baths} Baths</span>
                </div>
                <div className="flex items-center">
                  <Ruler className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.sqft} sqft</span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="pt-0">
              <Link href={`/properties/${property.id}`} className="w-full">
                <Button className="w-full">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {pageCount > 1 && (
        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-4">
            <Button onClick={prevPage} aria-label="Previous page">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage + 1} of {pageCount}
            </span>
            <Button onClick={nextPage} aria-label="Next page">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProperties;
