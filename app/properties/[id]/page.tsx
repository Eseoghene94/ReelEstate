import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  Calendar,
  Car,
  Share2,
  Printer,
  Heart,
} from "lucide-react";
import PropertyGallery from "@/components/property-gallery";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

// Ensure valid number parsing
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = Number(params.id);
  if (isNaN(id)) return { title: "Property Not Found" };

  const property = properties.find((p) => p.id === id);
  if (!property) {
    return {
      title: "Property Not Found | Anny-Realty Global",
      description: "The property you are looking for does not exist.",
    };
  }

  return {
    title: `${property.title} | Anny-Realty Global`,
    description: `${property.title} - ${property.address}. ${
      property.beds
    } beds, ${property.baths} baths, ${
      property.sqft
    } sqft. Listed at ${formatPrice(property.price)}.`,
    openGraph: {
      title: `${property.title} | Anny-Realty Global`,
      description: `${property.title} - ${property.address}. ${
        property.beds
      } beds, ${property.baths} baths, ${
        property.sqft
      } sqft. Listed at ${formatPrice(property.price)}.`,
      images: [
        {
          url: property.images[0],
          width: 1200,
          height: 800,
          alt: property.title,
        },
      ],
    },
  };
}

// Ensure proper currency formatting
function formatPrice(price: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

export default function PropertyDetailPage({ params }: Props) {
  const id = Number(params.id);
  if (isNaN(id)) {
    notFound();
    return null; // Prevent further execution
  }

  const property = properties.find((p) => p.id === id);
  if (!property) {
    notFound();
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/properties" className="hover:text-primary">
              Properties
            </Link>
            <span>/</span>
            <span className="text-foreground">{property.title}</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
          <div className="flex items-center text-muted-foreground mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{property.address}</span>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="flex items-center">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="outline" size="sm" className="flex items-center">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button variant="outline" size="sm" className="flex items-center">
            <Heart className="mr-2 h-4 w-4" />
            Save
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-8">
        <Badge variant="default" className="text-sm font-medium">
          {property.type}
        </Badge>
        {property.badges.map((badge, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="text-sm font-medium"
          >
            {badge}
          </Badge>
        ))}
        <div className="ml-auto">
          <span className="text-3xl font-bold">
            {formatPrice(property.price)}
          </span>
        </div>
      </div>

      {/* Property Gallery */}
      <PropertyGallery images={property.images} />
    </div>
  );
}
