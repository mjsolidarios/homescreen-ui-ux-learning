import { useState } from 'react';
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { Eye, Keyboard, MousePointer, Volume2, Smartphone } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function AccessibilityChecklist() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [showGoodExample, setShowGoodExample] = useState(true);

  const toggleCheck = (id: string) => {
    const newSet = new Set(checkedItems);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setCheckedItems(newSet);
  };

  const categories = [
    {
      id: 'visual',
      icon: Eye,
      title: 'Visual Accessibility',
      items: [
        { id: 'contrast', label: 'Color contrast ratio of at least 4.5:1 for text', description: 'Ensures text is readable for users with low vision' },
        { id: 'color-only', label: 'Don\'t rely on color alone to convey information', description: 'Use icons, text, or patterns alongside color' },
        { id: 'text-size', label: 'Minimum text size of 16px for body content', description: 'Ensures readability without zooming' },
        { id: 'focus-visible', label: 'Clear focus indicators for all interactive elements', description: 'Critical for keyboard navigation' }
      ]
    },
    {
      id: 'interaction',
      icon: MousePointer,
      title: 'Touch & Click Targets',
      items: [
        { id: 'touch-size', label: 'Minimum touch target size of 44x44px', description: 'Recommended by WCAG and platform guidelines' },
        { id: 'spacing', label: 'Adequate spacing between interactive elements', description: 'Prevents accidental taps' },
        { id: 'feedback', label: 'Visual feedback on interaction (hover, active states)', description: 'Confirms user actions' }
      ]
    },
    {
      id: 'keyboard',
      icon: Keyboard,
      title: 'Keyboard Navigation',
      items: [
        { id: 'tab-order', label: 'Logical tab order through interactive elements', description: 'Follows visual flow of the page' },
        { id: 'keyboard-access', label: 'All functionality accessible via keyboard', description: 'No mouse-only interactions' },
        { id: 'skip-links', label: 'Skip navigation links for repetitive content', description: 'Helps keyboard users bypass headers' }
      ]
    },
    {
      id: 'screen-reader',
      icon: Volume2,
      title: 'Screen Reader Support',
      items: [
        { id: 'alt-text', label: 'Descriptive alt text for all images', description: 'Or role="presentation" for decorative images' },
        { id: 'aria-labels', label: 'ARIA labels for icon-only buttons', description: 'Provides context for screen readers' },
        { id: 'landmarks', label: 'Semantic HTML and ARIA landmarks', description: 'Use <nav>, <main>, <header>, etc.' },
        { id: 'heading-structure', label: 'Proper heading hierarchy (H1, H2, H3)', description: 'Creates document outline for navigation' }
      ]
    },
    {
      id: 'responsive',
      icon: Smartphone,
      title: 'Responsive & Flexible',
      items: [
        { id: 'zoom', label: 'Interface works when zoomed to 200%', description: 'WCAG requirement for low vision users' },
        { id: 'orientation', label: 'Supports both portrait and landscape', description: 'Don\'t lock orientation unless required' },
        { id: 'reflow', label: 'Content reflows without horizontal scrolling', description: 'Important for mobile and zoomed views' }
      ]
    }
  ];

  const completedCount = checkedItems.size;
  const totalCount = categories.reduce((sum, cat) => sum + cat.items.length, 0);
  const completionPercent = (completedCount / totalCount) * 100;

  return (
    <div className="space-y-6">
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
        <h3 className="text-indigo-900 mb-2">
          Why Accessibility Matters
        </h3>
        <p className="text-gray-700 mb-4">
          Accessible design ensures your app can be used by everyone, including people with disabilities. 
          It's not just the right thing to do—it often improves the experience for all users and is 
          required by law in many jurisdictions.
        </p>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Checklist Progress</span>
              <span className="text-indigo-600">{completedCount} of {totalCount}</span>
            </div>
            <div className="h-2 bg-indigo-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 transition-all duration-300"
                style={{ width: `${completionPercent}%` }}
              />
            </div>
          </div>
          {completionPercent === 100 && (
            <Badge className="bg-green-600">Complete!</Badge>
          )}
        </div>
      </div>

      <Separator />

      <div className="space-y-6">
        {categories.map((category) => {
          const Icon = category.icon;
          const categoryComplete = category.items.every(item => checkedItems.has(item.id));
          
          return (
            <Card key={category.id} className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className={`p-2 rounded-lg ${categoryComplete ? 'bg-green-100' : 'bg-indigo-100'}`}>
                  <Icon className={`w-5 h-5 ${categoryComplete ? 'text-green-600' : 'text-indigo-600'}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-1">{category.title}</h3>
                  <p className="text-gray-600">
                    {category.items.filter(item => checkedItems.has(item.id)).length} of {category.items.length} complete
                  </p>
                </div>
              </div>

              <div className="space-y-3 ml-14">
                {category.items.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Checkbox
                      id={item.id}
                      checked={checkedItems.has(item.id)}
                      onCheckedChange={() => toggleCheck(item.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label 
                        htmlFor={item.id} 
                        className="cursor-pointer text-gray-900"
                      >
                        {item.label}
                      </Label>
                      <p className="text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      <Separator />

      <div>
        <h3 className="text-indigo-900 mb-4">Before & After Example</h3>
        <Tabs value={showGoodExample ? 'good' : 'bad'} onValueChange={(v) => setShowGoodExample(v === 'good')}>
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="bad">❌ Poor Accessibility</TabsTrigger>
            <TabsTrigger value="good">✅ Good Accessibility</TabsTrigger>
          </TabsList>

          <TabsContent value="bad" className="mt-4">
            <Card className="p-6 bg-red-50 border-red-200">
              {/* Bad example */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Welcome</span>
                  <button className="p-1" title="Settings">
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                  </button>
                </div>
                
                <div className="bg-blue-300 p-3 rounded">
                  <span className="text-blue-600">Important update available</span>
                </div>

                <div className="flex gap-2">
                  <button className="bg-gray-200 text-gray-500 px-2 py-1 rounded">Cancel</button>
                  <button className="bg-blue-300 text-blue-500 px-2 py-1 rounded">OK</button>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded border border-red-300">
                <p className="text-red-900 mb-2">Issues:</p>
                <ul className="space-y-1 text-red-800">
                  <li>• Low contrast text (fails WCAG)</li>
                  <li>• Small touch targets (less than 44px)</li>
                  <li>• Icon button missing accessible label</li>
                  <li>• Color alone used to convey importance</li>
                  <li>• No visual focus indicators</li>
                </ul>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="good" className="mt-4">
            <Card className="p-6 bg-green-50 border-green-200">
              {/* Good example */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-gray-900">Welcome</h2>
                  <button 
                    className="p-3 hover:bg-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-colors" 
                    aria-label="Open settings"
                  >
                    <div className="w-6 h-6 bg-gray-700 rounded"></div>
                  </button>
                </div>
                
                <div className="bg-indigo-100 border-2 border-indigo-600 p-4 rounded-lg flex items-start gap-3">
                  <div className="w-5 h-5 bg-indigo-600 rounded-full shrink-0 mt-0.5"></div>
                  <div>
                    <p className="text-indigo-900">Important update available</p>
                    <p className="text-indigo-700">Please update to continue using the app</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 focus:ring-2 focus:ring-gray-600 focus:outline-none transition-colors min-h-[44px]">
                    Cancel
                  </button>
                  <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-colors min-h-[44px]">
                    Update Now
                  </button>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded border border-green-300">
                <p className="text-green-900 mb-2">Improvements:</p>
                <ul className="space-y-1 text-green-800">
                  <li>• High contrast text (passes WCAG AAA)</li>
                  <li>• Touch targets are 44x44px minimum</li>
                  <li>• Icon button has aria-label</li>
                  <li>• Icon + border + text convey importance</li>
                  <li>• Clear focus indicators (ring on focus)</li>
                  <li>• Semantic heading for main title</li>
                </ul>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
