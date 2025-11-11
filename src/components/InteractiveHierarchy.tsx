import { useState } from 'react';
import { Card } from './ui/card';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { ShoppingBag, Bell, Search } from 'lucide-react';

export function InteractiveHierarchy() {
  const [showHierarchy, setShowHierarchy] = useState(false);
  const [useProperSizes, setUseProperSizes] = useState(true);
  const [useContrast, setUseContrast] = useState(true);

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-indigo-900">Key Principles</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-indigo-600 shrink-0">•</span>
              <div>
                <strong>Size:</strong> Larger elements draw more attention. Use size to indicate importance.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 shrink-0">•</span>
              <div>
                <strong>Contrast:</strong> High contrast elements stand out more. Use color and weight strategically.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 shrink-0">•</span>
              <div>
                <strong>Position:</strong> Content at the top is seen first. Place key actions where users look naturally.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 shrink-0">•</span>
              <div>
                <strong>Grouping:</strong> Related items should be visually grouped together.
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-indigo-900">Interactive Controls</h3>
          <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <Label htmlFor="hierarchy-guide">Show hierarchy guide</Label>
              <Switch 
                id="hierarchy-guide"
                checked={showHierarchy} 
                onCheckedChange={setShowHierarchy}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="proper-sizes">Use proper text sizes</Label>
              <Switch 
                id="proper-sizes"
                checked={useProperSizes} 
                onCheckedChange={setUseProperSizes}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="contrast">Use proper contrast</Label>
              <Switch 
                id="contrast"
                checked={useContrast} 
                onCheckedChange={setUseContrast}
              />
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-indigo-900 mb-4">Example: Shopping App Home Screen</h3>
        <Card className="overflow-hidden">
          <div className="bg-white p-6">
            {/* Header */}
            <div className={`flex items-center justify-between mb-6 ${showHierarchy ? 'ring-2 ring-purple-400 ring-offset-2' : ''}`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <h2 
                  className={`${useProperSizes ? '' : 'text-base'} ${useContrast ? 'text-gray-900' : 'text-gray-400'}`}
                >
                  ShopApp
                </h2>
              </div>
              <div className="flex gap-2">
                <button 
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5 text-gray-600" />
                </button>
                <button 
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
                  aria-label="Notifications"
                >
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </div>
            </div>

            {/* Welcome message - Primary */}
            <div className={`mb-6 ${showHierarchy ? 'ring-2 ring-blue-400 ring-offset-2' : ''}`}>
              <h1 
                className={`${useProperSizes ? '' : 'text-lg'} ${useContrast ? 'text-gray-900' : 'text-gray-400'} mb-1`}
              >
                Welcome back, Sarah!
              </h1>
              <p className="text-gray-600">
                Discover amazing deals today
              </p>
            </div>

            {/* Featured section - Secondary */}
            <div className={`bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 mb-6 ${showHierarchy ? 'ring-2 ring-green-400 ring-offset-2' : ''}`}>
              <Badge className="bg-yellow-400 text-gray-900 mb-2">Limited Offer</Badge>
              <h3 className="text-white mb-2">
                50% Off Winter Collection
              </h3>
              <p className="text-indigo-100 mb-4">
                Shop now and save big on selected items
              </p>
              <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors">
                Shop Now
              </button>
            </div>

            {/* Categories - Tertiary */}
            <div className={`${showHierarchy ? 'ring-2 ring-orange-400 ring-offset-2' : ''}`}>
              <h3 
                className={`${useProperSizes ? '' : 'text-base'} ${useContrast ? 'text-gray-900' : 'text-gray-500'} mb-3`}
              >
                Shop by Category
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {['Fashion', 'Electronics', 'Home', 'Sports'].map((category) => (
                  <button 
                    key={category}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gray-200 rounded-full mx-auto mb-2"></div>
                    <p className="text-gray-700">
                      {category}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {showHierarchy && (
              <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                <p className="text-indigo-900 mb-2">
                  Hierarchy Levels:
                </p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-400 rounded"></div>
                    <span className="text-gray-700">Primary: Main heading/greeting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <span className="text-gray-700">Secondary: Featured content/CTA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-400 rounded"></div>
                    <span className="text-gray-700">Tertiary: Supporting content</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-purple-400 rounded"></div>
                    <span className="text-gray-700">Navigation: App controls</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
