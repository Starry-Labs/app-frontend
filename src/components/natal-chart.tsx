import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function NatalChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Natal Chart</CardTitle>
        <CardDescription>Based on your birth details</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center text-muted-foreground">
          Your natal chart will appear here after you submit your birth details.
        </div>
      </CardContent>
    </Card>
  );
}
