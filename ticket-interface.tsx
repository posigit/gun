import { Button } from "@/components/ui/button";
import {
  X,
  Info,
  RotateCcw,
  CreditCard,
  Shield,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

export default function Component() {
  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen overflow-auto">
      {/* Header */}
      <div className="bg-slate-800 text-white p-4 relative">
        <div className="flex items-start justify-between mb-2">
          <X className="w-6 h-6 mt-1 cursor-pointer hover:text-gray-300 transition-colors" />
          <div className="flex items-center gap-2">
            <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
              Netlify
            </span>
            <Info className="w-6 h-6 mt-1 cursor-pointer hover:text-gray-300 transition-colors" />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-lg font-semibold mb-1">
            2025 NBA Playoffs - Best of 7: Pacers vs Knicks
          </h1>
          <p className="text-sm text-gray-300">
            8:00 PM ET | Gainbridge Fieldhouse,
            <br /> Indianapolis, IN
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b">
        <div className="flex-1 text-center py-3 border-b-2 border-blue-500">
          <span className="font-medium">Tickets (2)</span>
        </div>
        <div className="flex-1 text-center py-3 text-gray-500">
          <span>Event Info</span>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="text-center py-6 px-4 relative">
        <div className="relative mx-auto w-48 h-32 bg-white border-2 border-blue-500 rounded-lg mb-4 flex items-center justify-center">
          {/* Mock QR Code */}
          <div className="w-24 h-24 grid grid-cols-8 gap-px">
            {Array.from({ length: 64 }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 ${
                  Math.random() > 0.5 ? "bg-black" : "bg-white"
                }`}
              />
            ))}
          </div>
          <div className="absolute top-2 right-2">
            <RotateCcw className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <h2 className="text-lg font-medium text-gray-800 mb-2">
          Rosemary Peterson
        </h2>
        <div className="mb-4">
          <span className="text-2xl font-bold text-blue-600">Ticketmaster</span>
        </div>
        <div className="text-gray-500 text-sm">
          <p>Screenshots won't work,</p>
          <p>your code refreshes every 60 seconds.</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 px-4 mb-8">
        <Button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-full text-lg font-medium">
          Transfer
        </Button>
        <Button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-full text-lg font-medium">
          Sell
        </Button>
      </div>

      {/* First Ticket */}
      <div className="px-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          {/* <span className="text-gray-600 text-sm">HALF SEASON MEMBER</span>
          <span className="text-gray-600 text-sm">Admissions</span> */}
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="text-center">
            <div className="text-gray-500 text-sm">SEC</div>
            <div className="text-3xl font-bold text-gray-800">210</div>
          </div>
          <div className="text-center">
            <div className="text-gray-500 text-sm">ROW</div>
            <div className="text-3xl font-bold text-gray-800">9</div>
          </div>
          <div className="text-center">
            <div className="text-gray-500 text-sm">SEAT</div>
            <div className="text-3xl font-bold text-gray-800">7</div>
          </div>
        </div>

        {/* <div className="text-gray-600 text-sm mb-6">CLUB TI, HALF SEASON MEMBER</div> */}

        <hr className="border-gray-200 mb-4" />

        <div className="text-center text-gray-500 text-sm">
          <p className="mb-2">
            Seat Locator will load once your ticket is scanned.
          </p>
          <p>
            Not seeing it yet?{" "}
            <span className="text-blue-500">Tap to retry</span>
          </p>
        </div>
      </div>

      {/* Second Ticket */}
      <div className="px-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          {/* <span className="text-gray-600 text-sm">HALF SEASON MEMBER</span>
          <span className="text-gray-600 text-sm">Admissions</span> */}
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="text-center">
            <div className="text-gray-500 text-sm">SEC</div>
            <div className="text-3xl font-bold text-gray-800">210</div>
          </div>
          <div className="text-center">
            <div className="text-gray-500 text-sm">ROW</div>
            <div className="text-3xl font-bold text-gray-800">9</div>
          </div>
          <div className="text-center">
            <div className="text-gray-500 text-sm">SEAT</div>
            <div className="text-3xl font-bold text-gray-800">8</div>
          </div>
        </div>

        {/* <div className="text-gray-600 text-sm mb-6">CLUB TI, HALF SEASON MEMBER</div> */}

        <hr className="border-gray-200 mb-4" />

        <div className="text-center text-gray-500 text-sm">
          <p className="mb-2">
            Seat Locator will load once your ticket is scanned.
          </p>
          <p>
            Not seeing it yet?{" "}
            <span className="text-blue-500">Tap to retry</span>
          </p>
        </div>
      </div>

      {/* Payment Information */}
      <div className="px-4 mb-8">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <CreditCard className="w-5 h-5 text-gray-600" />
            <h3 className="font-semibold text-gray-800">Payment Information</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Tickets (2x)</span>
              <span className="font-medium">$486.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Service Fee</span>
              <span className="font-medium">$24.30</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Processing Fee</span>
              <span className="font-medium">$4.95</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>$515.25</span>
            </div>
            <div className="flex items-center gap-2 mt-3 pt-2 border-t">
              <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                VISA
              </div>
              <span className="text-gray-600 text-sm">•••• 4532</span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="px-4 mb-8">
        {/* <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">Club Level Benefits</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Premium entrance and express security</li>
            <li>• Access to Club TI lounge</li>
            <li>• Complimentary premium food and beverages</li>
            <li>• Climate-controlled concourse</li>
            <li>• Premium restrooms</li>
          </ul>
        </div> */}

        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">Game Information</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <span className="font-medium">Date:</span> May 27, 2025
            </p>
            <p>
              <span className="font-medium">Doors Open:</span> 7:30 PM ET
            </p>
            <p>
              <span className="font-medium">Tip-off:</span> 8:00 PM ET
            </p>
            <p>
              <span className="font-medium">Parking:</span> Available on-site
              and nearby lots
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">
            Important Reminders
          </h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Arrive early for security screening</li>
            <li>• Mobile tickets required - no screenshots</li>
            <li>• Clear bag policy in effect</li>
            <li>• No outside food or beverages</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 px-4 py-6 mt-8">
        <div className="text-center mb-4">
          <span className="text-2xl font-bold text-blue-600">Ticketmaster</span>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Support</h4>
            <ul className="space-y-1">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Fan Support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Account</h4>
            <ul className="space-y-1">
              <li>My Account</li>
              <li>Order History</li>
              <li>Sell Tickets</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-4">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Shield className="w-4 h-4" />
            <span>Secure</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <HelpCircle className="w-4 h-4" />
            <span>24/7 Support</span>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 space-y-1">
          <p>© 2025 Ticketmaster. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center pb-2">
        <div className="w-32 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  );
}
