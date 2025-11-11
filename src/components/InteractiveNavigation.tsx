import { useState } from 'react';
import { Card } from './ui/card';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Separator } from './ui/separator';
import { Home, Search, PlusCircle, Bell, User, Menu, ChevronLeft } from 'lucide-react';

type NavPattern = 'bottom-nav' | 'top-nav' | 'hamburger';

export function InteractiveNavigation() {
  const [navPattern, setNavPattern] = useState<NavPattern>('bottom-nav');
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-indigo-900">Navigation Best Practices</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-indigo-600 shrink-0">•</span>
              <div>
                <strong>Bottom Navigation:</strong> Best for 3-5 primary destinations on mobile. Easy thumb access.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 shrink-0">•</span>
              <div>
                <strong>Top Navigation:</strong> Works well for content-heavy apps with clear hierarchy.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 shrink-0">•</span>
              <div>
                <strong>Hamburger Menu:</strong> Saves space but hides navigation. Use for secondary items.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 shrink-0">•</span>
              <div>
                <strong>Clear Labels:</strong> Use both icons and text labels when possible for clarity.
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-indigo-900">Choose Pattern</h3>
          <RadioGroup value={navPattern} onValueChange={(value) => setNavPattern(value as NavPattern)}>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bottom-nav" id="bottom" />
                <Label htmlFor="bottom" className="cursor-pointer">
                  Bottom Navigation (Mobile-first)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="top-nav" id="top" />
                <Label htmlFor="top" className="cursor-pointer">
                  Top Navigation Bar
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hamburger" id="hamburger" />
                <Label htmlFor="hamburger" className="cursor-pointer">
                  Hamburger Menu
                </Label>
              </div>
            </div>
          </RadioGroup>

          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-amber-900">
              <strong>Accessibility:</strong> All navigation patterns must be keyboard accessible and have clear focus states.
            </p>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-indigo-900 mb-4">Interactive Example</h3>
        <div className="max-w-md mx-auto">
          <Card className="overflow-hidden">
            {/* Phone mockup */}
            <div className="bg-white h-[600px] flex flex-col">
              {/* Top navigation */}
              {navPattern === 'top-nav' && (
                <div className="bg-indigo-600 text-white p-4 shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <h2>MyApp</h2>
                    <button className="p-2 hover:bg-indigo-700 rounded-full transition-colors" aria-label="Notifications">
                      <Bell className="w-5 h-5" />
                    </button>
                  </div>
                  <nav>
                    <ul className="flex gap-6">
                      {['Home', 'Explore', 'Profile'].map((item) => (
                        <li key={item}>
                          <button 
                            className={`pb-2 border-b-2 transition-colors ${
                              activeTab === item.toLowerCase() 
                                ? 'border-white' 
                                : 'border-transparent opacity-70 hover:opacity-100'
                            }`}
                            onClick={() => setActiveTab(item.toLowerCase())}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              )}

              {/* Hamburger menu */}
              {navPattern === 'hamburger' && (
                <div className="bg-white border-b border-gray-200 p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Open menu">
                      <Menu className="w-6 h-6" />
                    </button>
                    <h2>MyApp</h2>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Notifications">
                      <Bell className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Content area */}
              <div className="flex-1 bg-gray-50 p-6 overflow-auto">
                <div className="space-y-4">
                  <h2 className="text-gray-900">
                    {activeTab === 'home' && 'Home Feed'}
                    {activeTab === 'search' && 'Search & Discover'}
                    {activeTab === 'create' && 'Create New Post'}
                    {activeTab === 'notifications' && 'Notifications'}
                    {activeTab === 'profile' && 'Your Profile'}
                    {activeTab === 'explore' && 'Explore'}
                  </h2>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex gap-3 mb-3">
                          <div className="w-10 h-10 bg-indigo-200 rounded-full"></div>
                          <div className="flex-1">
                            <div className="h-3 bg-gray-200 rounded w-24 mb-2"></div>
                            <div className="h-2 bg-gray-100 rounded w-16"></div>
                          </div>
                        </div>
                        <div className="h-2 bg-gray-200 rounded w-full mb-2"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom navigation */}
              {navPattern === 'bottom-nav' && (
                <nav className="bg-white border-t border-gray-200 shadow-lg" aria-label="Main navigation">
                  <ul className="flex justify-around py-2">
                    {[
                      { id: 'home', icon: Home, label: 'Home' },
                      { id: 'search', icon: Search, label: 'Search' },
                      { id: 'create', icon: PlusCircle, label: 'Create' },
                      { id: 'notifications', icon: Bell, label: 'Notifications' },
                      { id: 'profile', icon: User, label: 'Profile' }
                    ].map((item) => {
                      const Icon = item.icon;
                      const isActive = activeTab === item.id;
                      return (
                        <li key={item.id}>
                          <button
                            onClick={() => setActiveTab(item.id)}
                            className={`flex flex-col items-center min-w-[60px] py-2 px-3 rounded-lg transition-colors ${
                              isActive 
                                ? 'text-indigo-600' 
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            }`}
                            aria-label={item.label}
                            aria-current={isActive ? 'page' : undefined}
                          >
                            <Icon className="w-6 h-6 mb-1" />
                            <span className={isActive ? '' : ''}>{item.label}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              )}
            </div>
          </Card>

          <div className="mt-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
            <p className="text-indigo-900 mb-2">
              Current Pattern Benefits:
            </p>
            <ul className="space-y-1 text-gray-700">
              {navPattern === 'bottom-nav' && (
                <>
                  <li>• Easy thumb reach on mobile devices</li>
                  <li>• Always visible - no hidden options</li>
                  <li>• Perfect for 3-5 primary destinations</li>
                  <li>• Clear visual feedback on active state</li>
                </>
              )}
              {navPattern === 'top-nav' && (
                <>
                  <li>• Follows common web patterns</li>
                  <li>• Good for content-focused apps</li>
                  <li>• Keeps brand visible</li>
                  <li>• Natural reading order (top to bottom)</li>
                </>
              )}
              {navPattern === 'hamburger' && (
                <>
                  <li>• Maximizes content space</li>
                  <li>• Good for many navigation items</li>
                  <li>• Clean, minimal interface</li>
                  <li>• Best combined with visible primary actions</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
