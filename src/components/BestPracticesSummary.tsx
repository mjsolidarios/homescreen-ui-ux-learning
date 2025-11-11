import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { Separator } from './ui/separator';

export function BestPracticesSummary() {
  const practices = [
    {
      category: 'Layout & Structure',
      items: [
        { do: 'Use a clear visual hierarchy with proper heading levels', dont: 'Make all text the same size and weight' },
        { do: 'Follow the 8px grid system for consistent spacing', dont: 'Use random spacing values (e.g., 13px, 27px)' },
        { do: 'Group related content together visually', dont: 'Scatter related items across the screen' },
        { do: 'Leave adequate white space for breathing room', dont: 'Cram content together to fit more on screen' }
      ]
    },
    {
      category: 'Navigation',
      items: [
        { do: 'Use bottom nav for 3-5 primary mobile destinations', dont: 'Hide all navigation in a hamburger menu' },
        { do: 'Show both icons and labels for clarity', dont: 'Use icon-only navigation without labels' },
        { do: 'Highlight the current location clearly', dont: 'Leave users guessing where they are' },
        { do: 'Maintain consistent navigation across screens', dont: 'Change navigation patterns between screens' }
      ]
    },
    {
      category: 'Accessibility',
      items: [
        { do: 'Ensure 4.5:1 contrast ratio for all text', dont: 'Use low contrast text for aesthetics' },
        { do: 'Make all touch targets at least 44x44px', dont: 'Use tiny tap targets that are hard to hit' },
        { do: 'Provide text alternatives for images', dont: 'Leave icon buttons without labels' },
        { do: 'Support keyboard navigation completely', dont: 'Require mouse/touch for all interactions' }
      ]
    },
    {
      category: 'Content & Copy',
      items: [
        { do: 'Write clear, concise button labels (e.g., "Save Changes")', dont: 'Use vague labels (e.g., "OK", "Submit")' },
        { do: 'Use sentence case for most UI text', dont: 'WRITE IN ALL CAPS OR tOgGlE cAsE' },
        { do: 'Provide helpful error messages with solutions', dont: 'Show generic errors like "Error 404"' },
        { do: 'Front-load important words in labels', dont: 'Bury key information at the end' }
      ]
    },
    {
      category: 'Visual Design',
      items: [
        { do: 'Use color purposefully to guide attention', dont: 'Rely on color alone to convey meaning' },
        { do: 'Maintain consistent button and component styles', dont: 'Use different styles for similar actions' },
        { do: 'Provide clear feedback for user actions', dont: 'Leave users wondering if their action worked' },
        { do: 'Design for the content, not just empty states', dont: 'Only test with placeholder content' }
      ]
    },
    {
      category: 'Performance & UX',
      items: [
        { do: 'Show loading states for async operations', dont: 'Leave the interface frozen during loading' },
        { do: 'Provide empty states with helpful guidance', dont: 'Show blank screens without explanation' },
        { do: 'Use progressive disclosure for complex features', dont: 'Overwhelm users with all options at once' },
        { do: 'Design for interruptions (save state)', dont: 'Lose user progress when app backgrounds' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-6">
        <h3 className="mb-2">
          Congratulations on Completing the Lesson! 🎉
        </h3>
        <p className="text-indigo-100 mb-4">
          You've learned the essential principles of home screen UI/UX design. Use this summary 
          as a reference when designing your own interfaces.
        </p>
        <div className="flex gap-2 flex-wrap">
          <Badge className="bg-white text-indigo-600">Visual Hierarchy</Badge>
          <Badge className="bg-white text-indigo-600">Spacing & Layout</Badge>
          <Badge className="bg-white text-indigo-600">Navigation</Badge>
          <Badge className="bg-white text-indigo-600">Accessibility</Badge>
        </div>
      </div>

      {practices.map((section, index) => (
        <Card key={section.category} className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-lg">
              <span className="text-indigo-600">{index + 1}</span>
            </div>
            <h3 className="text-indigo-900">{section.category}</h3>
          </div>

          <div className="space-y-4">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex}>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Do */}
                  <div className="flex gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-900 mb-1">Do</p>
                      <p className="text-green-800">{item.do}</p>
                    </div>
                  </div>

                  {/* Don't */}
                  <div className="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-900 mb-1">Don't</p>
                      <p className="text-red-800">{item.dont}</p>
                    </div>
                  </div>
                </div>
                {itemIndex < section.items.length - 1 && (
                  <Separator className="my-3" />
                )}
              </div>
            ))}
          </div>
        </Card>
      ))}

      <Card className="p-6 bg-amber-50 border-amber-200">
        <div className="flex gap-3">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
          <div>
            <h3 className="text-amber-900 mb-2">Remember</h3>
            <ul className="space-y-2 text-amber-900">
              <li>• <strong>Test with real users:</strong> Your assumptions may not match user needs</li>
              <li>• <strong>Iterate continuously:</strong> Good design evolves based on feedback</li>
              <li>• <strong>Stay consistent:</strong> Consistency builds user confidence and reduces cognitive load</li>
              <li>• <strong>Prioritize accessibility:</strong> Accessible design benefits everyone, not just users with disabilities</li>
              <li>• <strong>Design mobile-first:</strong> It's easier to scale up than to simplify later</li>
              <li>• <strong>Keep learning:</strong> UI/UX best practices evolve with technology and user expectations</li>
            </ul>
          </div>
        </div>
      </Card>

      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-6 text-center">
        <h3 className="mb-2">Next Steps</h3>
        <p className="text-purple-100 mb-4">
          Now that you understand the principles, practice applying them to your own projects. 
          Start with small improvements and iterate based on user feedback.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors">
            Review Lessons
          </button>
          <button className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors border border-purple-500">
            Explore Resources
          </button>
        </div>
      </div>
    </div>
  );
}
