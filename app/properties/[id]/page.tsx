import React from "react";

const page = () => {
  return <div> </div>;
};

export default page;

// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Separator } from "@/components/ui/separator";
// import {
//   MapPin,
//   BedDouble,
//   Bath,
//   Ruler,
//   Calendar,
//   Car,
//   Wifi,
//   Snowflake,
//   Trees,
//   DollarSign,
//   Phone,
//   Mail,
//   Share2,
//   Printer,
//   Heart,
//   Clock,
//   CheckCircle2,
//   User,
//   Building,
//   ArrowRight,
// } from "lucide-react";
// import PropertyGallery from "@/components/property-gallery";
// import ContactForm from "@/components/contact-form";
// import MortgageCalculator from "@/components/mortgage-calculator";
// import { Metadata } from "next";

// // Mock data for properties
// const properties = [
//   {
//     id: 1,
//     title: "Modern Luxury Villa",
//     address: "123 Luxury Lane, Beverly Hills, CA 90210",
//     price: 2500000,
//     type: "For Sale",
//     badges: ["Featured", "New"],
//     beds: 5,
//     baths: 4,
//     sqft: 4200,
//     yearBuilt: 2020,
//     lotSize: "0.5 acres",
//     garage: 3,
//     description:
//       "This stunning modern villa offers luxurious living with breathtaking views. The property features an open floor plan with high ceilings, floor-to-ceiling windows, and premium finishes throughout. The gourmet kitchen is equipped with top-of-the-line appliances and a large center island. The primary suite includes a spa-like bathroom and a private balcony. Outside, you'll find a beautifully landscaped yard with a swimming pool, outdoor kitchen, and multiple entertaining areas. Located in a prestigious neighborhood with easy access to shopping, dining, and entertainment.",
//     features: [
//       "Swimming Pool",
//       "Home Theater",
//       "Wine Cellar",
//       "Smart Home System",
//       "Outdoor Kitchen",
//       "Fireplace",
//       "Walk-in Closets",
//       "Gym",
//       "Security System",
//       "Central Air Conditioning",
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     ],
//     agent: {
//       name: "Sarah Johnson",
//       title: "Luxury Property Specialist",
//       phone: "+1 (310) 555-1234",
//       email: "sarah.johnson@annyrealtyglobal.com",
//       image:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//     },
//     location: {
//       lat: 34.0736,
//       lng: -118.4004,
//     },
//   },
// ];

// type Props = {
//   params: { id: string };
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const id = parseInt(params.id);
//   const property = properties.find((p) => p.id === id);

//   if (!property) {
//     return {
//       title: "Property Not Found | Anny-Realty Global",
//       description: "The property you are looking for does not exist.",
//     };
//   }

//   return {
//     title: `${property.title} | Anny-Realty Global`,
//     description: `${property.title} - ${property.address}. ${
//       property.beds
//     } beds, ${property.baths} baths, ${
//       property.sqft
//     } sqft. Listed at ${formatPrice(property.price)}.`,
//     openGraph: {
//       title: `${property.title} | Anny-Realty Global`,
//       description: `${property.title} - ${property.address}. ${
//         property.beds
//       } beds, ${property.baths} baths, ${
//         property.sqft
//       } sqft. Listed at ${formatPrice(property.price)}.`,
//       images: [
//         {
//           url: property.images[0],
//           width: 1200,
//           height: 800,
//           alt: property.title,
//         },
//       ],
//     },
//   };
// }

// function formatPrice(price: number, currency: string = "NGN"): string {
//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency,
//     maximumFractionDigits: 0,
//   }).format(price);
// }

// export default function PropertyDetailPage({ params }: Props) {
//   const id = parseInt(params.id);
//   if (isNaN(id)) {
//     notFound();
//   }

//   const property = properties.find((p) => p.id === id);
//   if (!property) {
//     notFound();
//   }

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="flex flex-col md:flex-row justify-between items-start mb-6">
//         <div>
//           <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
//             <Link href="/" className="hover:text-primary">
//               Home
//             </Link>
//             <span>/</span>
//             <Link href="/properties" className="hover:text-primary">
//               Properties
//             </Link>
//             <span>/</span>
//             <span className="text-foreground">{property.title}</span>
//           </div>
//           <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
//           <div className="flex items-center text-muted-foreground mb-2">
//             <MapPin className="h-4 w-4 mr-1" />
//             <span>{property.address}</span>
//           </div>
//         </div>
//         <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
//           <Button variant="outline" size="sm" className="flex items-center">
//             <Share2 className="mr-2 h-4 w-4" />
//             Share
//           </Button>
//           <Button variant="outline" size="sm" className="flex items-center">
//             <Printer className="mr-2 h-4 w-4" />
//             Print
//           </Button>
//           <Button variant="outline" size="sm" className="flex items-center">
//             <Heart className="mr-2 h-4 w-4" />
//             Save
//           </Button>
//         </div>
//       </div>

//       <div className="flex items-center gap-2 mb-8">
//         <Badge variant="default" className="text-sm font-medium">
//           {property.type}
//         </Badge>
//         {property.badges.map((badge, index) => (
//           <Badge
//             key={index}
//             variant="secondary"
//             className="text-sm font-medium"
//           >
//             {badge}
//           </Badge>
//         ))}
//         <div className="ml-auto">
//           <span className="text-3xl font-bold">
//             {formatPrice(property.price)}
//           </span>
//         </div>
//       </div>

//       {/* Property Gallery */}
//       <PropertyGallery images={property.images} />

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
//         <div className="lg:col-span-2">
//           <Tabs defaultValue="details">
//             <TabsList className="grid w-full grid-cols-4">
//               <TabsTrigger value="details">Details</TabsTrigger>
//               <TabsTrigger value="features">Features</TabsTrigger>
//               <TabsTrigger value="location">Location</TabsTrigger>
//               <TabsTrigger value="calculator">Mortgage</TabsTrigger>
//             </TabsList>

//             <TabsContent value="details" className="mt-6">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//                 <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
//                   <BedDouble className="h-6 w-6 mb-2 text-primary" />
//                   <span className="text-sm text-muted-foreground">
//                     Bedrooms
//                   </span>
//                   <span className="font-semibold">{property.beds}</span>
//                 </div>
//                 <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
//                   <Bath className="h-6 w-6 mb-2 text-primary" />
//                   <span className="text-sm text-muted-foreground">
//                     Bathrooms
//                   </span>
//                   <span className="font-semibold">{property.baths}</span>
//                 </div>
//                 <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
//                   <Ruler className="h-6 w-6 mb-2 text-primary" />
//                   <span className="text-sm text-muted-foreground">
//                     Square Feet
//                   </span>
//                   <span className="font-semibold">{property.sqft}</span>
//                 </div>
//                 <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
//                   <Car className="h-6 w-6 mb-2 text-primary" />
//                   <span className="text-sm text-muted-foreground">Garage</span>
//                   <span className="font-semibold">{property.garage} Cars</span>
//                 </div>
//               </div>

//               <h2 className="text-xl font-semibold mb-4">
//                 Property Description
//               </h2>
//               <p className="text-muted-foreground mb-6 whitespace-pre-line">
//                 {property.description}
//               </p>

//               <h2 className="text-xl font-semibold mb-4">Property Details</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//                 <div className="flex items-center">
//                   <Calendar className="h-5 w-5 mr-2 text-primary" />
//                   <span className="text-muted-foreground mr-2">
//                     Year Built:
//                   </span>
//                   <span className="font-medium">{property.yearBuilt}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Ruler className="h-5 w-5 mr-2 text-primary" />
//                   <span className="text-muted-foreground mr-2">Lot Size:</span>
//                   <span className="font-medium">{property.lotSize}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Building className="h-5 w-5 mr-2 text-primary" />
//                   <span className="text-muted-foreground mr-2">
//                     Property Type:
//                   </span>
//                   <span className="font-medium">Single Family</span>
//                 </div>
//                 <div className="flex items-center">
//                   <DollarSign className="h-5 w-5 mr-2 text-primary" />
//                   <span className="text-muted-foreground mr-2">
//                     Price per Sqft:
//                   </span>
//                   <span className="font-medium">
//                     {formatPrice(Math.round(property.price / property.sqft))}
//                   </span>
//                 </div>
//               </div>
//             </TabsContent>

//             <TabsContent value="features" className="mt-6">
//               <h2 className="text-xl font-semibold mb-4">Property Features</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//                 {property.features.map((feature, index) => (
//                   <div key={index} className="flex items-center">
//                     <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
//                     <span>{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               <h2 className="text-xl font-semibold mb-4">Amenities</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <Card>
//                   <CardContent className="pt-6">
//                     <div className="flex flex-col items-center text-center">
//                       <Wifi className="h-10 w-10 mb-4 text-primary" />
//                       <h3 className="font-semibold mb-2">
//                         High-Speed Internet
//                       </h3>
//                       <p className="text-sm text-muted-foreground">
//                         Fiber optic connection ready for all your needs
//                       </p>
//                     </div>
//                   </CardContent>
//                 </Card>
//                 <Card>
//                   <CardContent className="pt-6">
//                     <div className="flex flex-col items-center text-center">
//                       <Snowflake className="h-10 w-10 mb-4 text-primary" />
//                       <h3 className="font-semibold mb-2">Central Air</h3>
//                       <p className="text-sm text-muted-foreground">
//                         Modern HVAC system with smart temperature control
//                       </p>
//                     </div>
//                   </CardContent>
//                 </Card>
//                 <Card>
//                   <CardContent className="pt-6">
//                     <div className="flex flex-col items-center text-center">
//                       <Trees className="h-10 w-10 mb-4 text-primary" />
//                       <h3 className="font-semibold mb-2">Landscaped Garden</h3>
//                       <p className="text-sm text-muted-foreground">
//                         Professionally designed outdoor space with irrigation
//                       </p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </TabsContent>

//             <TabsContent value="location" className="mt-6">
//               <h2 className="text-xl font-semibold mb-4">Location</h2>
//               <div className="aspect-[16/9] relative mb-6 bg-muted rounded-lg overflow-hidden">
//                 <iframe
//                   src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${property.address.replace(
//                     /\s+/g,
//                     "+"
//                   )}`}
//                   width="100%"
//                   height="100%"
//                   className="iframe-style"
//                   allowFullScreen
//                   title="Property Location"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>

//               <h3 className="text-lg font-semibold mb-3">Neighborhood</h3>
//               <p className="text-muted-foreground mb-6">
//                 This property is located in a prestigious neighborhood with
//                 excellent schools, parks, and amenities. The area offers a
//                 perfect blend of suburban tranquility and urban convenience,
//                 with shopping centers, restaurants, and entertainment options
//                 just minutes away.
//               </p>

//               <h3 className="text-lg font-semibold mb-3">Nearby Amenities</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <h4 className="font-medium mb-2">Education</h4>
//                   <ul className="space-y-2 text-muted-foreground">
//                     <li>• Beverly Hills High School (0.8 miles)</li>
//                     <li>• Beverly Vista Middle School (1.2 miles)</li>
//                     <li>• UCLA (4.5 miles)</li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="font-medium mb-2">Shopping & Dining</h4>
//                   <ul className="space-y-2 text-muted-foreground">
//                     <li>• Rodeo Drive (1.5 miles)</li>
//                     <li>• Beverly Center (2.3 miles)</li>
//                     <li>• The Grove (3.1 miles)</li>
//                   </ul>
//                 </div>
//               </div>
//             </TabsContent>

//             <TabsContent value="calculator" className="mt-6">
//               <MortgageCalculator propertyPrice={property.price} />
//             </TabsContent>
//           </Tabs>

//           <div className="mt-12">
//             <h2 className="text-xl font-semibold mb-6">Schedule a Viewing</h2>
//             <ContactForm
//               propertyId={property.id}
//               propertyTitle={property.title}
//             />
//           </div>
//         </div>

//         <div className="lg:col-span-1">
//           <Card className="mb-6">
//             <CardContent className="pt-6">
//               <div className="flex items-center mb-4">
//                 <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
//                   <Image
//                     src={property.agent.image}
//                     alt={property.agent.name}
//                     fill
//                     style={{ objectFit: "cover" }}
//                   />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">{property.agent.name}</h3>
//                   <p className="text-sm text-muted-foreground">
//                     {property.agent.title}
//                   </p>
//                 </div>
//               </div>

//               <Separator className="my-4" />

//               <div className="space-y-3">
//                 <div className="flex items-center">
//                   <Phone className="h-5 w-5 mr-3 text-primary" />
//                   <span>{property.agent.phone}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Mail className="h-5 w-5 mr-3 text-primary" />
//                   <span className="text-sm">{property.agent.email}</span>
//                 </div>
//               </div>

//               <div className="mt-6 space-y-3">
//                 <Button className="w-full">Contact Agent</Button>
//                 <Button variant="outline" className="w-full">
//                   View Profile
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent className="pt-6">
//               <h3 className="font-semibold text-lg mb-4">Property Status</h3>

//               <div className="space-y-4">
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center">
//                     <Clock className="h-5 w-5 mr-2 text-primary" />
//                     <span className="text-muted-foreground">Listed</span>
//                   </div>
//                   <span>2 weeks ago</span>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center">
//                     <User className="h-5 w-5 mr-2 text-primary" />
//                     <span className="text-muted-foreground">Views</span>
//                   </div>
//                   <span>1,245</span>
//                 </div>

//                 <Separator className="my-2" />

//                 <div>
//                   <h4 className="font-medium mb-2">Similar Properties</h4>
//                   <Link
//                     href="/properties"
//                     className="text-primary flex items-center text-sm"
//                   >
//                     View all similar properties
//                     <ArrowRight className="ml-1 h-4 w-4" />
//                   </Link>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }
