"use client";

import { useTelegram } from "@/hooks/useTelegram";
import { LoadingSpinner } from "./LoadingSpinner";
import { BirthDetailsForm } from "@/components/birth-details-form";
import { NatalChart } from "@/components/natal-chart";
import { ShareInvite } from "@/components/share-invite";
import { RelationshipPairing } from "@/components/relationship-pairing";
import { Star } from "lucide-react";

// v0 code
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  year: z.string().min(4, "Please select a year"),
  month: z.string().min(1, "Please select a month"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  country: z.string().min(1, "Please select a country"),
  city: z.string().min(1, "Please select a city"),
});

// Sample data for countries and cities
const countries = [
  { name: "United States", code: "US" },
  { name: "United Kingdom", code: "UK" },
  { name: "Canada", code: "CA" },
  { name: "Australia", code: "AU" },
  { name: "Japan", code: "JP" },
  { name: "Germany", code: "DE" },
  { name: "France", code: "FR" },
  { name: "India", code: "IN" },
  { name: "China", code: "CN" },
  { name: "Brazil", code: "BR" },
].sort((a, b) => a.name.localeCompare(b.name));

const citiesByCountry: Record<string, string[]> = {
  US: [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ],
  UK: [
    "London",
    "Birmingham",
    "Manchester",
    "Glasgow",
    "Liverpool",
    "Bristol",
    "Edinburgh",
    "Leeds",
    "Sheffield",
    "Newcastle",
  ],
  CA: [
    "Toronto",
    "Montreal",
    "Vancouver",
    "Calgary",
    "Edmonton",
    "Ottawa",
    "Winnipeg",
    "Quebec City",
    "Hamilton",
    "Kitchener",
  ],
  AU: [
    "Sydney",
    "Melbourne",
    "Brisbane",
    "Perth",
    "Adelaide",
    "Gold Coast",
    "Newcastle",
    "Canberra",
    "Wollongong",
    "Hobart",
  ],
  JP: [
    "Tokyo",
    "Yokohama",
    "Osaka",
    "Nagoya",
    "Sapporo",
    "Fukuoka",
    "Kobe",
    "Kyoto",
    "Kawasaki",
    "Saitama",
  ],
  DE: [
    "Berlin",
    "Hamburg",
    "Munich",
    "Cologne",
    "Frankfurt",
    "Stuttgart",
    "Düsseldorf",
    "Leipzig",
    "Dortmund",
    "Essen",
  ],
  FR: [
    "Paris",
    "Marseille",
    "Lyon",
    "Toulouse",
    "Nice",
    "Nantes",
    "Strasbourg",
    "Montpellier",
    "Bordeaux",
    "Lille",
  ],
  IN: [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Ahmedabad",
    "Pune",
    "Jaipur",
    "Surat",
  ],
  CN: [
    "Shanghai",
    "Beijing",
    "Guangzhou",
    "Shenzhen",
    "Tianjin",
    "Wuhan",
    "Chengdu",
    "Chongqing",
    "Nanjing",
    "Xi'an",
  ],
  BR: [
    "São Paulo",
    "Rio de Janeiro",
    "Brasília",
    "Salvador",
    "Fortaleza",
    "Belo Horizonte",
    "Manaus",
    "Curitiba",
    "Recife",
    "Porto Alegre",
  ],
};

export function Onboarding() {
  const { user, isLoading, isDevelopment } = useTelegram();
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);
  const [availableCities, setAvailableCities] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      year: "",
      month: "",
      date: "",
      time: "",
      country: "",
      city: "",
    },
  });

  // Watch for country changes to update city options
  const selectedCountry = form.watch("country");

  useEffect(() => {
    if (selectedCountry) {
      setAvailableCities(citiesByCountry[selectedCountry] || []);
      form.setValue("city", "");
    }
  }, [selectedCountry, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Here you would typically send the data to your backend
    console.log(values);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/me");
    }, 1000);
  }

  // Generate year options from 1900 to current year
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1900 + 1 },
    (_, i) => 1900 + i
  );

  // Generate months
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Generate dates 1-31
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  // Generate times in 30-minute intervals
  const times = Array.from({ length: 48 }, (_, i) => {
    const hour = Math.floor(i / 2);
    const minute = i % 2 === 0 ? "00" : "30";
    return `${hour.toString().padStart(2, "0")}:${minute}`;
  });

  if (isLoading && !isDevelopment) {
    return <LoadingSpinner />;
  }

  if (!user && !isDevelopment) {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center p-4">
        <div className="text-center">
          <p className="text-lg font-medium">Please open in Telegram</p>
          <p className="mt-2 text-sm text-gray-500">
            This app only works through Telegram
          </p>
          0
        </div>
      </div>
    );
  }
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Welcome to AstroBot
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="month"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Month</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select month" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {months.map((month, index) => (
                          <SelectItem
                            key={month}
                            value={(index + 1).toString()}
                          >
                            {month}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select date" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {dates.map((date) => (
                          <SelectItem key={date} value={date.toString()}>
                            {date}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {times.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={!selectedCountry}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            placeholder={
                              selectedCountry
                                ? "Select city"
                                : "Select country first"
                            }
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {availableCities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={loading}>
                Generate Report
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
