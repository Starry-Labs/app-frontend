"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { RelationshipReport } from "@/components/relationship-report";

export default function RelationshipsPage() {
  const [selectedRelationship, setSelectedRelationship] = useState<{
    username: string;
    id: string;
  } | null>(null);

  const relationships = [
    { username: "@thryec & me", id: "1" },
    { username: "@thryec & me", id: "2" },
    { username: "@thryec & me", id: "3" },
    { username: "@thryec & me", id: "4" },
  ];

  return (
    <main className="min-h-screen pb-16 bg-background">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <h1 className="text-xl font-semibold">My Relationships</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 py-6">
        <div className="space-y-4">
          {relationships.map((relationship) => (
            <Card key={relationship.id}>
              <CardHeader>
                <CardTitle className="text-base flex items-center justify-between">
                  {relationship.username}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedRelationship(relationship)}
                  >
                    View
                  </Button>
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {selectedRelationship && (
        <RelationshipReport
          isOpen={!!selectedRelationship}
          onClose={() => setSelectedRelationship(null)}
          relationship={selectedRelationship}
        />
      )}
    </main>
  );
}
