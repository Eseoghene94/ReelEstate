import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  MapPin,
  Home as HomeIcon,
  // Building,
  // Building2,
  // Warehouse,
  DollarSign,
} from "lucide-react";
import FeaturedProperties from "@/components/featured-properties";
import TestimonialSlider from "@/components/testimonial-slider";
import NewsletterSignup from "@/components/newsletter-signup";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury home exterior"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Find Your Dream Property With Anny-Realty Global
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover premium properties worldwide with personalized solutions
              for buyers, sellers, and investors.
            </p>

            <div className="bg-background/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <Tabs defaultValue="buy">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="buy">Buy</TabsTrigger>
                  <TabsTrigger value="rent">Rent</TabsTrigger>
                  <TabsTrigger value="sell">Sell</TabsTrigger>
                </TabsList>

                {["buy", "rent", "sell"].map((tab) => (
                  <TabsContent key={tab} value={tab} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Location" className="pl-10" />
                      </div>
                      <div className="relative">
                        <HomeIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <select
                          title="Property Type"
                          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Property Type</option>
                          <option value="house">House</option>
                          <option value="apartment">Apartment</option>
                          <option value="condo">Condo</option>
                          <option value="land">Land</option>
                          <option value="commercial">Commercial</option>
                        </select>
                      </div>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <select
                          title={
                            tab === "rent" ? "Monthly Rent" : "Price Range"
                          }
                          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">
                            {tab === "rent" ? "Monthly Rent" : "Price Range"}
                          </option>
                          <option value="0-1000">NGN 0 - NGN 1,000</option>
                          <option value="1000-2000">
                            NGN 1,000 - NGN 2,000
                          </option>
                          <option value="2000-3000">
                            NGN 2,000 - NGN 3,000
                          </option>
                          <option value="3000-5000">
                            NGN 3,000 - NGN 5,000
                          </option>
                          <option value="5000+">NGN 5,000+</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Button className="text-sm ">Advanced Search</Button>
                      <Button className="px-8">
                        <Search className="mr-2 h-4 w-4" />
                        Search
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Ready to Find Your Dream Property?
              </h2>
              <p className="mb-6 text-white max-w-lg">
                Join thousands of satisfied clients who have found their perfect
                property with Anny-Realty Global. Let us help you navigate the
                real estate market with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/properties">
                  <Button>Browse Properties</Button>
                </Link>
                <Link href="/contact">
                  <Button className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Contact an Agent
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col lg:justify-end">
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg max-w-md">
                <h3 className="font-semibold text-center text-xl mb-4">
                  Our Achievements
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Properties Sold", value: "1,500+" },
                    { label: "Happy Clients", value: "3,200+" },
                    { label: "Expert Agents", value: "120+" },
                    { label: "Years of Experience", value: "15+" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-muted-foreground">
                        {stat.label}
                      </span>
                      <span className="font-semibold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our featured properties available for sale or rent.
            </p>
          </div>
          <FeaturedProperties />
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-yellow-500 via-yellow-700 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working
              with Anny-Realty Global.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>
      {/* NEWSLETTER */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900">
        <div className="container mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}
