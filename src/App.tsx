import { useState } from 'react';
import { LessonHeader } from './components/LessonHeader';
import { LessonSection } from './components/LessonSection';
import { InteractiveHierarchy } from './components/InteractiveHierarchy';
import { InteractiveSpacing } from './components/InteractiveSpacing';
import { InteractiveNavigation } from './components/InteractiveNavigation';
import { AccessibilityChecklist } from './components/AccessibilityChecklist';
import { BestPracticesSummary } from './components/BestPracticesSummary';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Progress } from './components/ui/progress';

export default function App() {
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());
  
  const sections = [
    'hierarchy',
    'spacing',
    'navigation',
    'accessibility',
    'summary'
  ];
  
  const progressPercent = (completedSections.size / sections.length) * 100;

  const markSectionComplete = (sectionId: string) => {
    setCompletedSections(prev => new Set([...prev, sectionId]));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <LessonHeader progress={progressPercent} />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-indigo-900 mb-3">
            Interactive Lesson: Disaster Preparedness Home Screen
          </h1>
          <p className="text-gray-600 max-w-3xl">
Learn how to create effective, accessible, and beautiful app home screens. 
            This interactive lesson covers essential principles with hands-on examples we can explore.
          </p>
          <div className="mt-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-gray-700">Your Progress</span>
              <span className="text-indigo-600">{completedSections.size} of {sections.length} completed</span>
            </div>
            <Progress value={progressPercent} className="h-2" />
          </div>
        </div>

        <Tabs defaultValue="hierarchy" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
            <TabsTrigger value="hierarchy">Visual Hierarchy</TabsTrigger>
            <TabsTrigger value="spacing">Spacing & Layout</TabsTrigger>
            <TabsTrigger value="navigation">Navigation</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
            <TabsTrigger value="summary">Best Practices</TabsTrigger>
          </TabsList>

          <TabsContent value="hierarchy" className="space-y-6">
            <LessonSection
              title="Visual Hierarchy"
              description="In emergencies, hierarchy ensures critical information (alerts, status, actions) is surfaced first and understood instantly."
              onComplete={() => markSectionComplete('hierarchy')}
              isCompleted={completedSections.has('hierarchy')}
            >
              <InteractiveHierarchy />
            </LessonSection>
          </TabsContent>

          <TabsContent value="spacing" className="space-y-6">
            <LessonSection
              title="Spacing & Layout"
              description="Consistent spacing improves scanability under stress—making checklists, alerts, and resources easy to parse and act on."
              onComplete={() => markSectionComplete('spacing')}
              isCompleted={completedSections.has('spacing')}
            >
              <InteractiveSpacing />
            </LessonSection>
          </TabsContent>

          <TabsContent value="navigation" className="space-y-6">
            <LessonSection
              title="Navigation Patterns"
              description="Preparedness apps need clear, consistent navigation to reach plans, supplies, shelters, and live alerts fast."
              onComplete={() => markSectionComplete('navigation')}
              isCompleted={completedSections.has('navigation')}
            >
              <InteractiveNavigation />
            </LessonSection>
          </TabsContent>

          <TabsContent value="accessibility" className="space-y-6">
            <LessonSection
              title="Accessibility Principles"
              description="Accessible emergency information can save lives—ensure alerts, actions, and maps work for everyone."
              onComplete={() => markSectionComplete('accessibility')}
              isCompleted={completedSections.has('accessibility')}
            >
              <AccessibilityChecklist />
            </LessonSection>
          </TabsContent>

          <TabsContent value="summary" className="space-y-6">
            <LessonSection
              title="Best Practices Summary"
              description="A checklist tailored for high‑stakes home screens where clarity, speed, and accessibility are essential."
              onComplete={() => markSectionComplete('summary')}
              isCompleted={completedSections.has('summary')}
            >
              <BestPracticesSummary />
            </LessonSection>
          </TabsContent>
        </Tabs>
      </main>
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center text-gray-600">
          mjsolidarios@wvsu.edu.ph
        </div>
      </footer>
    </div>
  );
}
