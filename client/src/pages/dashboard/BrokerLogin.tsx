import { useState } from "react";
import { DollarSign, Eye, EyeOff, Chrome } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useLocation } from "wouter";

export default function BrokerLogin() {
  const [, setLocation] = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app would validate credentials
    setLocation("/dashboard/broker");
  };

  const handleGoogleLogin = () => {
    // Mock Google login
    setLocation("/dashboard/broker");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <DollarSign className="w-10 h-10 text-brand-teal mr-3" />
            <h1 className="text-2xl font-bold text-brand-dark">InvestoFund</h1>
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-2">Welcome to the ISO Portal</h2>
          <p className="text-gray-600">Fast-track your commissions. Manage your deals. Unlock funding faster.</p>
          <p className="text-sm text-gray-500 mt-2">Get real-time visibility into your pipeline, commissions, and underwriting updates — all in one secure portal.</p>
        </div>

        {/* Login Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">🔐 Log In to Your Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 text-gray-400" />
                    ) : (
                      <Eye className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={loginData.rememberMe}
                    onCheckedChange={(checked) => 
                      setLoginData({ ...loginData, rememberMe: checked as boolean })
                    }
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    Remember Me
                  </label>
                </div>
                <Link href="/forgot-password" className="text-sm text-brand-teal hover:underline">
                  🔘 Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full bg-brand-teal hover:bg-brand-teal/90">
                Login →
              </Button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-sm text-gray-500">Or use a secure single sign-on</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* Google Login */}
            <Button
              variant="outline"
              className="w-full"
              onClick={handleGoogleLogin}
            >
              <Chrome className="w-4 h-4 mr-2" />
              Continue with Google
            </Button>
            <p className="text-xs text-gray-500 text-center mt-2">
              Secure, fast login with your Google account
            </p>
          </CardContent>
        </Card>

        {/* Sign Up CTA */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-3">Don't have an account?</p>
          <Link href="/brokers#apply">
            <Button variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white">
              → Apply to Become an ISO Partner
            </Button>
          </Link>
          <p className="text-sm text-gray-500 mt-2">
            Let's grow your deal flow. Fast onboarding. High commissions. Dedicated support.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>© 2025 InvestoFund. All rights reserved.</p>
          <p className="mt-1">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            {" • "}
            <Link href="/legal" className="hover:underline">Terms of Service</Link>
          </p>
        </div>
      </div>
    </div>
  );
}