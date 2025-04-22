import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Smartphone,
  Tablet,
  Laptop,
  Tv,
  Home,
  Shield,
  BarChart,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex" variant="outline">
                    New Dashboard Features
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Manage All Your Smart Devices in One Place
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Control, monitor, and automate your entire smart home
                    ecosystem with our intuitive management platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Demo
                  </Button>
                </div>
              </div>
              <Image
                src="https://img.freepik.com/premium-photo/smart-home-interface-with-augmented-realty-iot-object-interior-design_756748-3157.jpg?w=2000"
                width={550}
                height={550}
                alt="Smart home dashboard"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full border-t border-b py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center justify-center">
                <div className="text-3xl font-bold md:text-4xl">10k+</div>
                <div className="text-sm text-muted-foreground md:text-base">
                  Active Users
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-3xl font-bold md:text-4xl">50+</div>
                <div className="text-sm text-muted-foreground md:text-base">
                  Device Types
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-3xl font-bold md:text-4xl">99.9%</div>
                <div className="text-sm text-muted-foreground md:text-base">
                  Uptime
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-3xl font-bold md:text-4xl">24/7</div>
                <div className="text-sm text-muted-foreground md:text-base">
                  Support
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="inline-flex" variant="outline">
                  Features
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything You Need to Manage Your Smart Home
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides powerful tools to control, monitor, and
                  automate all your smart devices from a single dashboard.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Advanced Security</CardTitle>
                  <CardDescription>
                    End-to-end encryption and multi-factor authentication to
                    keep your devices secure.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Real-time Analytics</CardTitle>
                  <CardDescription>
                    Monitor usage patterns and get insights to optimize your
                    smart home efficiency.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Automation</CardTitle>
                  <CardDescription>
                    Create custom routines and automations to make your home
                    work for you.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Devices Section */}
        <section
          id="devices"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="inline-flex" variant="outline">
                  Compatible Devices
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Works With All Your Favorite Devices
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform integrates seamlessly with over 50 different
                  smart device brands and types.
                </p>
              </div>
            </div>
            <div className="mx-auto py-12">
              <Tabs defaultValue="mobile" className="w-full max-w-3xl mx-auto">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="mobile">Mobile</TabsTrigger>
                  <TabsTrigger value="home">Home</TabsTrigger>
                  <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>
                <TabsContent value="mobile" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <Smartphone className="h-8 w-8 text-primary" />
                        <div>
                          <CardTitle>Smartphones</CardTitle>
                          <CardDescription>iOS and Android</CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <Tablet className="h-8 w-8 text-primary" />
                        <div>
                          <CardTitle>Tablets</CardTitle>
                          <CardDescription>All major brands</CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <Laptop className="h-8 w-8 text-primary" />
                        <div>
                          <CardTitle>Laptops</CardTitle>
                          <CardDescription>Windows, Mac, Linux</CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="home" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <Home className="h-8 w-8 text-primary" />
                        <div>
                          <CardTitle>Smart Speakers</CardTitle>
                          <CardDescription>All major brands</CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <Zap className="h-8 w-8 text-primary" />
                        <div>
                          <CardTitle>Smart Lighting</CardTitle>
                          <CardDescription>
                            Philips Hue, LIFX, etc.
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <Home className="h-8 w-8 text-primary" />
                        <div>
                          <CardTitle>Thermostats</CardTitle>
                          <CardDescription>Nest, Ecobee, etc.</CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="entertainment" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <Tv className="h-8 w-8 text-primary" />
                        <div>
                          <CardTitle>Smart TVs</CardTitle>
                          <CardDescription>Samsung, LG, Sony</CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <Tv className="h-8 w-8 text-primary" />
                        <div>
                          <CardTitle>Streaming Devices</CardTitle>
                          <CardDescription>
                            Roku, Apple TV, etc.
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <Tv className="h-8 w-8 text-primary" />
                        <div>
                          <CardTitle>Gaming Consoles</CardTitle>
                          <CardDescription>
                            PlayStation, Xbox, etc.
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="security" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <Shield className="h-8 w-8 text-primary" />
                        <div>
                          <CardTitle>Security Cameras</CardTitle>
                          <CardDescription>Ring, Nest, Arlo</CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <Shield className="h-8 w-8 text-primary" />
                        <div>
                          <CardTitle>Smart Locks</CardTitle>
                          <CardDescription>
                            August, Yale, Schlage
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <Shield className="h-8 w-8 text-primary" />
                        <div>
                          <CardTitle>Alarm Systems</CardTitle>
                          <CardDescription>
                            SimpliSafe, ADT, etc.
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex" variant="outline">
                    Intuitive Dashboard
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Control Everything From One Dashboard
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our intuitive dashboard gives you complete control over all
                    your smart devices with just a few clicks.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <svg
                        className=" h-5 w-5 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Real-time device status updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <svg
                        className=" h-5 w-5 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Customizable widgets and layouts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <svg
                        className=" h-5 w-5 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>One-click device control</span>
                  </li>
                </ul>
              </div>
              <div className="mx-auto w-full max-w-[600px] overflow-hidden rounded-xl border bg-background shadow-xl">
                <Image
                  src="https://img.freepik.com/premium-photo/smart-home-interface-with-augmented-realty-iot-object-interior-design_756748-3157.jpg?w=2000"
                  width={1200}
                  height={800}
                  alt="Dashboard preview"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="inline-flex" variant="outline">
                  Pricing
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that's right for your home. All plans include
                  a 14-day free trial.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For small apartments</CardDescription>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    $9
                    <span className="text-sm font-normal text-muted-foreground">
                      /month
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 py-4">
                    <li className="flex items-center gap-2">
                      <svg
                        className=" h-5 w-5 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Up to 10 devices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className=" h-5 w-5 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Basic automation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className=" h-5 w-5 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Email support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <Badge className="absolute right-4 top-20">Popular</Badge>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>For medium-sized homes</CardDescription>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    $19
                    <span className="text-sm font-normal text-muted-foreground">
                      /month
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 py-4">
                    <li className="flex items-center gap-2">
                      <svg
                        className=" h-5 w-5 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Up to 30 devices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className=" h-5 w-5 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Advanced automation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className=" h-5 w-5 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className=" h-5 w-5 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Usage analytics</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>
                    For large homes & businesses
                  </CardDescription>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    $49
                    <span className="text-sm font-normal text-muted-foreground">
                      /month
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 py-4">
                    <li className="flex items-center gap-2">
                      <svg
                        className=" h-5 w-5 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Unlimited devices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className=" h-5 w-5 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Custom automation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className=" h-5 w-5 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>24/7 phone support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className=" h-5 w-5 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className=" h-5 w-5 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Dedicated account manager</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="inline-flex" variant="outline">
                  FAQ
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our smart device
                  management platform.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    How many devices can I connect?
                  </AccordionTrigger>
                  <AccordionContent>
                    The number of devices you can connect depends on your plan.
                    Basic allows up to 10 devices, Premium up to 30 devices, and
                    Enterprise offers unlimited device connections.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is my data secure?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we use end-to-end encryption and follow industry best
                    practices to ensure your data and device connections are
                    secure. We also offer multi-factor authentication for
                    additional security.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Can I access my devices when I'm away from home?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our platform is cloud-based, allowing you to securely access
                    and control your devices from anywhere in the world using
                    our mobile app or web interface.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    What happens if my internet goes down?
                  </AccordionTrigger>
                  <AccordionContent>
                    Many of your automations will continue to work locally even
                    if your internet connection is lost. Once your connection is
                    restored, your dashboard will automatically reconnect to all
                    your devices.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Can I cancel my subscription anytime?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, you can cancel your subscription at any time. There are
                    no long-term contracts or cancellation fees. You'll continue
                    to have access until the end of your current billing period.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Simplify Your Smart Home?
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied users who have transformed their
                  smart home experience.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary">
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:flex-row lg:gap-12">
          <div className="flex flex-col gap-4 lg:w-1/3">
            <div className="flex items-center gap-2">
              <Home className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">SmartHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The complete platform for managing all your smart devices in one
              place.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  className=" h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  className=" h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  className=" h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Devices
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 px-4 md:px-6 lg:flex-row">
            <p className="text-center text-sm text-muted-foreground lg:text-left">
              © {new Date().getFullYear()} SmartHub. All rights reserved.
            </p>
            <p className="text-center text-sm text-muted-foreground lg:text-left">
              Made with ❤️ for smart homes everywhere
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
