"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ShareInvite() {
  const [inviteLink, setInviteLink] = useState("");
  const { toast } = useToast();

  const generateInviteLink = () => {
    // In a real application, this would generate a unique link
    const newLink = `https://starrylabs.com/invite/${Math.random().toString(36).substr(2, 9)}`;
    setInviteLink(newLink);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    toast({
      title: "Invite link copied",
      description: "You can now share this link with your friends.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Invite Friends</CardTitle>
        <CardDescription>
          Generate a link to share with your friends
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={generateInviteLink} className="mb-4 w-full">
          Generate Invite Link
        </Button>
        {inviteLink && (
          <div className="flex space-x-2">
            <Input value={inviteLink} readOnly />
            <Button onClick={copyToClipboard}>Copy</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
