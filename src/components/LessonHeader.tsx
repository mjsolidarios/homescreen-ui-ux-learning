import { GraduationCap } from 'lucide-react';

interface LessonHeaderProps {
  progress: number;
}

export function LessonHeader({ progress }: LessonHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-lg">
            <GraduationCap className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-indigo-900">Designing the App Home Screen</h2>
            <p className="text-gray-600">Design clear, accessible safety experiences</p>
          </div>
        </div>
      </div>
    </header>
  );
}
