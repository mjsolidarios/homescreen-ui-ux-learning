import { useState } from 'react';
import { Card } from './ui/card';
import { Slider } from './ui/slider';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

export function InteractiveSpacing() {
  const [sectionSpacing, setSectionSpacing] = useState([24]);
  const [cardPadding, setCardPadding] = useState([16]);
  const [elementGap, setElementGap] = useState([12]);

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-indigo-900">Spacing Principles</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-indigo-600 shrink-0">•</span>
              <div>
                <strong>8px Grid System:</strong> Use multiples of 8 (8, 16, 24, 32) for consistent spacing.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 shrink-0">•</span>
              <div>
                <strong>White Space:</strong> Don't be afraid of empty space. It improves focus and readability.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 shrink-0">•</span>
              <div>
                <strong>Proximity:</strong> Related elements should be closer together than unrelated ones.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 shrink-0">•</span>
              <div>
                <strong>Touch Targets:</strong> Ensure interactive elements are at least 44x44px for accessibility.
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-indigo-900">Adjust Spacing</h3>
          <div className="space-y-6 p-4 bg-gray-50 rounded-lg">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="section-spacing">Section spacing</Label>
                <span className="text-gray-600">{sectionSpacing[0]}px</span>
              </div>
              <Slider 
                id="section-spacing"
                value={sectionSpacing}
                onValueChange={setSectionSpacing}
                min={8}
                max={48}
                step={8}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="card-padding">Card padding</Label>
                <span className="text-gray-600">{cardPadding[0]}px</span>
              </div>
              <Slider 
                id="card-padding"
                value={cardPadding}
                onValueChange={setCardPadding}
                min={8}
                max={32}
                step={8}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="element-gap">Element gap</Label>
                <span className="text-gray-600">{elementGap[0]}px</span>
              </div>
              <Slider 
                id="element-gap"
                value={elementGap}
                onValueChange={setElementGap}
                min={4}
                max={24}
                step={4}
              />
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-indigo-900 mb-4">Example: Emergency Tip Card</h3>
        <Card className="overflow-hidden max-w-md mx-auto">
          <div className="bg-white" style={{ padding: `${cardPadding[0]}px` }}>
            {/* User info */}
            <div className="flex items-center" style={{ gap: `${elementGap[0]}px`, marginBottom: `${sectionSpacing[0]}px` }}>
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full"></div>
              <div>
                <p className="text-gray-900">City Safety Department</p>
                <p className="text-gray-500">Updated 2 hours ago</p>
              </div>
            </div>

            {/* Post content */}
            <div style={{ marginBottom: `${sectionSpacing[0]}px` }}>
              <p className="text-gray-800 mb-3">
                Emergency Kit Tip: Keep a three‑day supply of water (1 gallon per person per day). Store in labeled, dated containers.
              </p>
              <div className="w-full h-48 bg-gradient-to-br from-blue-400 via-sky-400 to-indigo-500 rounded-lg"></div>
            </div>

            {/* Engagement stats */}
            <div className="flex items-center text-gray-500" style={{ gap: `${elementGap[0]}px`, marginBottom: `${sectionSpacing[0] / 2}px` }}>
              <span>124 saves</span>
              <span>•</span>
              <span>18 discussions</span>
            </div>

            <Separator className="my-3" />

            {/* Action buttons */}
            <div className="flex justify-around">
              <button 
                className="flex items-center hover:text-red-500 transition-colors min-h-[44px] px-4"
                style={{ gap: `${elementGap[0] / 2}px` }}
                aria-label="Like post"
              >
                <Heart className="w-5 h-5" />
                <span>Save Tip</span>
              </button>
              <button 
                className="flex items-center hover:text-blue-500 transition-colors min-h-[44px] px-4"
                style={{ gap: `${elementGap[0] / 2}px` }}
                aria-label="Comment on post"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Discuss</span>
              </button>
              <button 
                className="flex items-center hover:text-green-500 transition-colors min-h-[44px] px-4"
                style={{ gap: `${elementGap[0] / 2}px` }}
                aria-label="Share post"
              >
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </Card>

        <div className="mt-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200 max-w-md mx-auto">
          <p className="text-indigo-900 mb-2">
            Tips:
          </p>
          <ul className="space-y-1 text-gray-700">
            <li>• Notice how spacing creates visual grouping</li>
            <li>• Too little spacing feels cramped; too much feels disconnected</li>
            <li>• Action buttons maintain 44px minimum height for touch accessibility</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
