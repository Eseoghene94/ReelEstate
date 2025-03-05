"use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Mail, CheckCircle2 } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

// const NewsletterSignup = () => {
//   const [email, setEmail] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubscribed, setIsSubscribed] = useState(false);
//   const { toast } = useToast();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!email) {
//       toast({
//         title: "Error",
//         description: "Please enter your email address.",
//         variant: "destructive",
//       });
//       return;
//     }

//     setIsSubmitting(true);

//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSubscribed(true);
//       setEmail("");

//       toast({
//         title: "Success!",
//         description: "You've been subscribed to our newsletter.",
//         variant: "default",
//       });
//     }, 1500);
//   };

//   return (
//     <div className="max-w-3xl mx-auto text-center">
//       <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-primary/10">
//         <Mail className="h-6 w-6 text-primary" />
//       </div>
//       <h2 className="text-3xl font-bold mb-4">
//         Stay Updated with Market Trends
//       </h2>
//       <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
//         Subscribe to our newsletter for the latest property listings, market
//         insights, and exclusive offers. Join our community of homeowners and
//         investors.
//       </p>

//       {isSubscribed ? (
//         <div className="flex flex-col items-center justify-center space-y-4">
//           <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
//             <CheckCircle2 className="h-6 w-6 text-green-600" />
//           </div>
//           <h3 className="text-xl font-semibold">Thank You for Subscribing!</h3>
//           <p className="text-muted-foreground">
//             You&apos;ll start receiving our newsletter with the latest updates
//             and exclusive offers.
//           </p>
//           <Button
//             variant="outline"
//             onClick={() => setIsSubscribed(false)}
//             className="mt-2"
//           >
//             Subscribe Another Email
//           </Button>
//         </div>
//       ) : (
//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
//         >
//           <div className="relative flex-grow">
//             <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//             <Input
//               type="email"
//               placeholder="Your email address"
//               className="pl-10"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <Button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? "Subscribing..." : "Subscribe"}
//           </Button>
//         </form>
//       )}

//       <p className="text-xs text-muted-foreground mt-4">
//         By subscribing, you agree to our{" "}
//         <a href="/privacy-policy" className="underline hover:text-primary">
//           Privacy Policy
//         </a>{" "}
//         and consent to receive updates from Anny-Realty Global.
//       </p>
//     </div>
//   );
// };

// export default NewsletterSignup;

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSignup = React.memo(function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");

      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-primary/10">
        <Mail className="h-6 w-6 text-yellow-400" />
      </div>
      <h2 className="text-3xl font-bold mb-4">
        Stay Updated with Market Trends
      </h2>
      <p className="text-white mb-8 max-w-xl mx-auto">
        Subscribe to our newsletter for the latest property listings, market
        insights, and exclusive offers. Join our community of homeowners and
        investors.
      </p>

      {isSubscribed ? (
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="h-12 w-12 rounded-full bg-green-300 flex items-center justify-center">
            <CheckCircle2 className="h-6 w-6 text-green-800" />
          </div>
          <h3 className="text-xl font-semibold">Thank You for Subscribing!</h3>
          <p className="text-white">
            You&apos;ll start receiving our newsletter with the latest updates
            and exclusive offers.
          </p>
          <Button onClick={() => setIsSubscribed(false)} className="mt-2">
            Subscribe Another Email
          </Button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <div className="relative flex-grow">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Your email address"
              className="pl-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      )}

      <p className="text-xs text-white mt-4">
        By subscribing, you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-primary">
          Privacy Policy
        </a>{" "}
        and consent to receive updates from Anny-Realty Global.
      </p>
    </div>
  );
});

export default NewsletterSignup;
