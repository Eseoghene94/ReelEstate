import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Anny-Realty Global",
  description: "Stay informed with the latest real estate news, market trends, and expert advice from Anny-Realty Global.",
};

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "10 Tips for First-Time Home Buyers in 2025",
    excerpt: "Navigating the real estate market as a first-time buyer can be overwhelming. Here are our top tips to help you make informed decisions and find your dream home.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    date: "May 15, 2025",
    author: "Sarah Johnson",
    category: "Buying",
    featured: true
  },
  {
    id: 2,
    title: "How to Increase Your Property's Value Before Selling",
    excerpt: "Looking to maximize your return on investment? Discover the most effective renovations and improvements that can significantly boost your property's market value.",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "April 28, 2025",
    author: "Michael Chen",
    category: "Selling"
  },
  {
    id: 3,
    title: "The Impact of Rising Interest Rates on the Housing Market",
    excerpt: "With interest rates on the rise, what does this mean for buyers, sellers, and investors? Our experts analyze the current trends and provide insights on navigating this changing landscape.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "April 10, 2025",
    author: "Emily Rodriguez",
    category: "Market Trends"
  },
  {
    id: 4,
    title: "Luxury Real Estate: What Defines Premium Properties in 2025",
    excerpt: "The definition of luxury in real estate continues to evolve. Explore the features, amenities, and locations that characterize today's high-end properties and what buyers are looking for.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "March 22, 2025",
    author: "David Thompson",
    category: "Luxury"
  },
  {
    id: 5,
    title: "Sustainable Living: Eco-Friendly Features That Add Value",
    excerpt: "As environmental consciousness grows, so does the demand for sustainable homes. Learn about the eco-friendly features that not only reduce your carbon footprint but also increase your property's appeal.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80",
    date: "March 5, 2025",
    author: "Olivia Martinez",
    category: "Sustainability"
  },
  {
    id: 6,
    title: "Investment Strategies: Building a Profitable Real Estate Portfolio",
    excerpt: "Whether you're a seasoned investor or just starting out, developing a solid strategy is key to success in real estate investment. Discover proven approaches to building and managing a profitable portfolio.",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "February 18, 2025",
    author: "James Wilson",
    category: "Investing"
  }
];

// Categories for filtering
const categories = [
  "All",
  "Buying",
  "Selling",
  "Investing",
  "Market Trends",
  "Luxury",
  "Sustainability"
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Blog & Insights</h1>
          <p className="text-muted-foreground">
            Stay informed with the latest real estate news, market trends, and expert advice
          </p>
        </div>
        <div className="mt-4 md:mt-0 relative w-full md:w-64">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search articles..." className="pl-10" />
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-12">
          <div className="relative rounded-lg overflow-hidden">
            <div className="aspect-[21/9] relative">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <Badge className="mb-3">{featuredPost.category}</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {featuredPost.title}
              </h2>
              <p className="text-white/90 mb-4 max-w-3xl">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center text-white/80 text-sm mb-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">{featuredPost.date}</span>
                <User className="h-4 w-4 mr-1" />
                <span>{featuredPost.author}</span>
              </div>
              <Link href={`/blog/${featuredPost.id}`}>
                <Button>
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Category Tabs */}
      <Tabs defaultValue="All" className="mb-8">
        <TabsList className="flex flex-wrap h-auto">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="mb-1">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(category === "All" ? regularPosts : regularPosts.filter(post => post.category === category)).map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="aspect-[16/9] relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge>{post.category}</Badge>
                    </div>
                  </div>
                  
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-xl mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-muted-foreground text-sm mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="outline" className="w-full">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {(category === "All" || regularPosts.filter(post => post.category === category).length > 3) && (
              <div className="mt-12 flex justify-center">
                <Button>
                  Load More Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
      
      {/* Newsletter Section */}
      <div className="mt-16 bg-muted/50 rounded-lg p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Stay updated with the latest real estate insights, market trends, and exclusive content delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input placeholder="Your email address" type="email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}