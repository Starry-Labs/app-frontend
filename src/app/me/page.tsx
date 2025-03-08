import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MePage() {
  return (
    <main className="min-h-screen pb-16 bg-background">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <h1 className="text-xl font-semibold">My Report</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 py-6">
        <Card>
          <CardHeader>
            <CardTitle>Ascending</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardContent>
        </Card>
        <div className="grid gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Sun</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Moon</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
