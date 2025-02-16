import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function RelationshipPairing() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Relationship Pairing</CardTitle>
        <CardDescription>Compare your chart with a friend's</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center text-muted-foreground">
          Relationship pairing details will appear here when you and a friend
          have both submitted your birth details.
        </div>
      </CardContent>
    </Card>
  );
}
