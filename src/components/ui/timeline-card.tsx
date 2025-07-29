"use client";

import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TimelineItem } from "@/types";

interface TimelineCardProps {
  item: TimelineItem;
  getIcon: (iconName: string) => React.ReactNode;
}

export function TimelineCard({ item, getIcon }: TimelineCardProps) {
  return (
    <Card className="group h-full overflow-hidden hover-lift shadow-smooth hover:shadow-smooth-lg flex flex-col border-border/50">
      {/* Card Header with Company Name */}
      <CardHeader className="relative gradient-primary text-primary-foreground">
        <CardTitle className="text-xl font-bold">
          {item.company}
        </CardTitle>
      </CardHeader>

      {/* Card Content with Roles */}
      <CardContent className="flex-1 p-6">
        <div className="space-y-6">
          {item.roles.map((role, idx) => (
            <div key={idx} className="flex gap-3">
              {/* Icon */}
              <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shadow-sm">
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

      {/* Work Term Report Link */}
      {item.hasWorkTermReport && item.reportPath && (
        <div className="border-t border-border bg-primary/5 p-4">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-full bg-primary/10 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a
              href={item.reportPath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <span>View Work Term Report</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      )}

      {/* Job Type Footer */}
      <div className="border-t border-border bg-muted/30 px-6 py-3 mt-auto">
        <div className="flex justify-end">
          <Badge variant="secondary" className="text-xs">
            {item.category}
          </Badge>
        </div>
      </div>
    </Card>
  );
}