import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  MapPin,
  BedDouble,
  Bath,
  // SquareFeet,
  DollarSign,
  Home,
  Building,
  Building2,
  Warehouse,
  SlidersHorizontal,
  ArrowUpDown,
  Ruler,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties | Anny-Realty Global",
  description:
    "Browse our extensive collection of properties for sale and rent. Find your dream home with Anny-Realty Global.",
};

// Mock data for properties
const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    address: "5 Chevron Drive, Lagos, Nigeria",
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
    address: "5 Chevron Drive, Lagos, Nigeria",
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
  {
    id: 7,
    title: "Luxury Apartment with City View",
    address: "5 Chevron Drive, Lagos, Nigeria",
    price: 4500,
    type: "For Rent",
    badges: ["Featured"],
    beds: 2,
    baths: 2,
    sqft: 1500,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 8,
    title: "Suburban Family Home",
    address: "5 Chevron Drive, Lagos, Nigeria",
    price: 650000,
    type: "For Sale",
    badges: ["New"],
    beds: 4,
    baths: 3,
    sqft: 2800,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 9,
    title: "Modern Office Space",
    address: "5 Chevron Drive, Lagos, Nigeria",
    price: 1200000,
    type: "For Sale",
    badges: ["Commercial"],
    beds: 0,
    baths: 2,
    sqft: 3500,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
  },
];

export default function PropertiesPage() {
  const formatPrice = (price: number, type: string) => {
    return (
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0,
      }).format(price) + (type === "For Rent" ? "/mo" : "")
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Properties</h1>
          <p className="text-muted-foreground">
            Browse our extensive collection of properties for sale and rent
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button variant="outline" size="sm" className="flex items-center">
            <ArrowUpDown className="mr-2 h-4 w-4" />
            Sort
          </Button>
          <Button variant="outline" size="sm" className="flex items-center">
            <MapPin className="mr-2 h-4 w-4" />
            Map View
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Search Filters</h2>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search properties..."
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Property Type
                  </label>
                  <div className="space-y-2">
                    {[
                      {
                        id: "residential",
                        label: "Residential",
                        icon: <Home className="h-4 w-4 mr-2" />,
                      },
                      {
                        id: "apartment",
                        label: "Apartment",
                        icon: <Building className="h-4 w-4 mr-2" />,
                      },
                      {
                        id: "commercial",
                        label: "Commercial",
                        icon: <Building2 className="h-4 w-4 mr-2" />,
                      },
                      {
                        id: "industrial",
                        label: "Industrial",
                        icon: <Warehouse className="h-4 w-4 mr-2" />,
                      },
                    ].map((type) => (
                      <div
                        key={type.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox id={type.id} />
                        <label
                          htmlFor={type.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                        >
                          {type.icon}
                          {type.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Price Range
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Min" className="pl-10" />
                    </div>

                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Max" className="pl-10" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Bedrooms
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Any", "1+", "2+", "3+", "4+", "5+"].map((bed) => (
                      <Button
                        key={bed}
                        variant="outline"
                        size="sm"
                        className="flex-1 min-w-[60px]"
                      >
                        {bed}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Bathrooms
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Any", "1+", "2+", "3+", "4+"].map((bath) => (
                      <Button
                        key={bath}
                        variant="outline"
                        size="sm"
                        className="flex-1 min-w-[60px]"
                      >
                        {bath}
                      </Button>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    More Filters
                  </label>
                  <div className="space-y-2">
                    {[
                      "Garage/Parking",
                      "Air Conditioning",
                      "Swimming Pool",
                      "Garden/Backyard",
                      "Furnished",
                      "Pet Friendly",
                    ].map((filter) => (
                      <div key={filter} className="flex items-center space-x-2">
                        <Checkbox
                          id={filter.toLowerCase().replace(/\s+/g, "-")}
                        />
                        <label
                          htmlFor={filter.toLowerCase().replace(/\s+/g, "-")}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {filter}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Properties Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
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
                  <div className="absolute top-4 left-4 flex gap-2 ">
                    {property.badges.map((badge, index) => (
                      <Badge
                        key={index}
                        variant={badge === "Hot Deal" ? "default" : "default"}
                        className="font-medium "
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="default" className="font-medium text-sm">
                      {property.type}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge
                      variant="outline"
                      className="font-bold text-lg bg-background/80 backdrop-blur-sm"
                    >
                      {formatPrice(property.price, property.type)}
                    </Badge>
                  </div>
                </div>

                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-2 line-clamp-1">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="text-sm line-clamp-1">
                      {property.address}
                    </span>
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
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? "default" : "outline"}
                  size="icon"
                  className="w-10 h-10"
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
