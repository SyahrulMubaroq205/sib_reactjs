import React from "react";

export default function Footer() {
  return (
    <footer className="w-full mt-16 bg-gradient-to-r from-purple-400 to-purple-700 text-white rounded-t-2xl">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Book</a></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Customer Care</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Size Guide</a></li>
            <li><a href="#" className="hover:underline">Help & FAQs</a></li>
            <li><a href="#" className="hover:underline">Refer a Friend</a></li>
          </ul>
        </div>

        {/* Terms & Policies */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Terms & Policies</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Shipping Info</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Tiktok</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm py-4 border-t border-white/20">
        © 2025 Syahrul Mubaraq. All rights reserved
      </div>
    </footer>
  );
}
