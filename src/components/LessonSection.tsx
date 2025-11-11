import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle2 } from 'lucide-react';

interface LessonSectionProps {
  title: string;
  description: string;
  children: ReactNode;
  onComplete: () => void;
  isCompleted: boolean;
}

export function LessonSection({ title, description, children, onComplete, isCompleted }: LessonSectionProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              {title}
              {isCompleted && (
                <CheckCircle2 className="w-5 h-5 text-green-600" aria-label="Section completed" />
              )}
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          {!isCompleted && (
            <Button onClick={onComplete} variant="outline" size="sm">
              Mark Complete
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
