import { Heart, Shield, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container max-w-screen-2xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Heart className="h-5 w-5 text-primary-foreground fill-current" />
              </div>
              <span className="text-xl font-bold">LifeLink</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting blood donors with those in need. Every drop counts,
              every life matters.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Privacy Protected</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Actions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/register"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Become a Donor
                </Link>
              </li>
              <li>
                <Link
                  to="/find"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Find Donors
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Donor Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/learn"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Learn About Donation
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/help"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/safety"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Emergency */}
          <div className="space-y-4">
            <h3 className="font-semibold">Emergency Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 p-3 bg-blood-50 rounded-lg border border-blood-200">
                <Phone className="h-4 w-4 text-blood-600" />
                <div>
                  <p className="text-sm font-medium text-blood-900">
                    24/7 Helpline
                  </p>
                  <p className="text-sm text-blood-700">1-800-BLOOD-HELP</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>Over 10,000 registered donors</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 LifeLink. All rights reserved.</p>
            <p>Made with ❤️ for saving lives</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
