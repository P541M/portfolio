"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { VolunteerItem } from "@/types";

interface VolunteerCardProps {
  volunteer: VolunteerItem;
  getIcon: (iconName: string) => React.ReactNode;
}

export function VolunteerCard({ volunteer, getIcon }: VolunteerCardProps) {
  return (
    <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Card Header with Company Name */}
      <CardHeader className="relative bg-gradient-to-r from-primary/90 to-primary text-primary-foreground">
        <CardTitle className="text-xl font-bold">
          {volunteer.company}
        </CardTitle>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="flex-1 p-6">
        <div className="space-y-6">
          {volunteer.roles.map((role, idx) => (
            <div key={idx} className="flex gap-3">
              {/* Icon */}
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 shadow-sm">
                {role.icon && getIcon(role.icon)}
              </div>
              
              {/* Role Content */}
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground mb-1">
                  {role.title}
                </h4>
                <p className="text-sm italic text-primary/80 mb-2">
                  {role.duration}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      {/* Footer with Category */}
      <div className="border-t border-border bg-muted/30 px-6 py-3 mt-auto">
        <div className="flex justify-end">
          <Badge variant="secondary" className="text-xs">
            {volunteer.category}
          </Badge>
        </div>
      </div>
    </Card>
  );
}