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
            Interactive Lesson: Home Screen UI/UX Design
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Learn how to create effective, accessible, and beautiful app home screens. 
            This interactive lesson covers essential principles with hands-on examples you can explore.
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
              description="Visual hierarchy helps users understand the importance and relationship between elements on your home screen."
              onComplete={() => markSectionComplete('hierarchy')}
              isCompleted={completedSections.has('hierarchy')}
            >
              <InteractiveHierarchy />
            </LessonSection>
          </TabsContent>

          <TabsContent value="spacing" className="space-y-6">
            <LessonSection
              title="Spacing & Layout"
              description="Proper spacing creates breathing room, improves readability, and makes your interface feel organized and professional."
              onComplete={() => markSectionComplete('spacing')}
              isCompleted={completedSections.has('spacing')}
            >
              <InteractiveSpacing />
            </LessonSection>
          </TabsContent>

          <TabsContent value="navigation" className="space-y-6">
            <LessonSection
              title="Navigation Patterns"
              description="Effective navigation helps users find what they need quickly and understand where they are in your app."
              onComplete={() => markSectionComplete('navigation')}
              isCompleted={completedSections.has('navigation')}
            >
              <InteractiveNavigation />
            </LessonSection>
          </TabsContent>

          <TabsContent value="accessibility" className="space-y-6">
            <LessonSection
              title="Accessibility Principles"
              description="Accessible design ensures everyone can use your app, regardless of their abilities or the devices they use."
              onComplete={() => markSectionComplete('accessibility')}
              isCompleted={completedSections.has('accessibility')}
            >
              <AccessibilityChecklist />
            </LessonSection>
          </TabsContent>

          <TabsContent value="summary" className="space-y-6">
            <LessonSection
              title="Best Practices Summary"
              description="A comprehensive checklist of best practices for designing effective home screens."
              onComplete={() => markSectionComplete('summary')}
              isCompleted={completedSections.has('summary')}
            >
              <BestPracticesSummary />
            </LessonSection>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
