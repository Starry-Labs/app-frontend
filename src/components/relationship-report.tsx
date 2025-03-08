import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface RelationshipReportProps {
  isOpen: boolean;
  onClose: () => void;
  relationship: {
    username: string;
    id: string;
  };
}

export function RelationshipReport({
  isOpen,
  onClose,
  relationship,
}: RelationshipReportProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg h-[80vh] flex flex-col p-0">
        <DialogHeader className="px-4 py-2 border-b">
          <DialogTitle className="text-center">
            {relationship.username}
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-auto">
          <div className="relative h-full">
            {/* Ascending Section */}
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-background to-muted flex items-center justify-center">
              <div className="text-center">
                <div className="text-xs tracking-widest mb-2">Ascending</div>
                <p className="text-sm px-8 text-muted-foreground">
                  Your ascending signs complement each other, creating a
                  harmonious external expression of your relationship. This
                  placement suggests strong initial attraction and
                  understanding.
                </p>
              </div>
            </div>

            {/* Sun Section */}
            <div className="absolute inset-x-0 top-1/3 h-1/3 bg-gradient-to-b from-muted to-accent flex items-center justify-center">
              <div className="text-center">
                <div className="text-xs tracking-widest mb-2">Sun</div>
                <p className="text-sm px-8 text-muted-foreground">
                  Your sun signs indicate core compatibility in values and life
                  goals. This suggests a natural alignment in your fundamental
                  approaches to life.
                </p>
              </div>
            </div>

            {/* Moon Section */}
            <div className="absolute inset-x-0 top-2/3 h-1/3 bg-gradient-to-b from-accent to-background flex items-center justify-center">
              <div className="text-center">
                <div className="text-xs tracking-widest mb-2">Moon</div>
                <p className="text-sm px-8 text-muted-foreground">
                  Your moon signs reveal emotional resonance and deep
                  understanding. This placement suggests strong emotional
                  support and intuitive connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
