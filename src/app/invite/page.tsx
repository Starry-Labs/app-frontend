import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function InvitePage() {
  return (
    <main className="min-h-screen pb-16 bg-background">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <h1 className="text-xl font-semibold">Invite Friends</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 py-6">
        <Card>
          <CardHeader>
            <CardTitle>Invite Friends</CardTitle>
            <CardDescription>To find out more about etc.</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button className="flex-1">Invite Friends</Button>
            <Button variant="outline" className="flex-1">
              Find out more
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
