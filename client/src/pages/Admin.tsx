import { useState, useEffect } from "react";
import { Users, FileText, Building, MessageSquare, Mail, Eye, EyeOff, PenTool } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { formatCurrency } from "@/lib/payment-utils";

interface AdminStats {
  totalUsers: number;
  totalInvestmentApplications: number;
  totalDealSubmissions: number;
  totalMerchantApplications: number;
  totalContactInquiries: number;
  totalEmailsSent: number;
}

interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  userType: string;
  accreditedInvestor: boolean;
  createdAt: string;
}

interface InvestmentApplication {
  id: number;
  userId: number;
  userEmail: string;
  investmentAmount: number;
  investmentType: string;
  accreditedStatus: boolean;
  documentsAgreed: boolean;
  status: string;
  createdAt: string;
}

interface DealSubmission {
  id: number;
  userId: number;
  businessName: string;
  requestedAmount: number;
  monthlyRevenue: number;
  industry: string;
  timeInBusiness: string;
  status: string;
  createdAt: string;
}

interface MerchantApplication {
  id: number;
  userId: number;
  businessName: string;
  requestedAmount: number;
  monthlyRevenue: number;
  industry: string;
  yearsInBusiness: string;
  status: string;
  createdAt: string;
}

interface ContactInquiry {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
  status: string;
  createdAt: string;
}

interface EmailLog {
  id: number;
  userId: number;
  emailType: string;
  recipient: string;
  subject: string;
  status: string;
  sentAt: string;
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const { toast } = useToast();

  // Admin credentials (in production, this should be more secure)
  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "investofund2025";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setLoginError("");
      localStorage.setItem("admin_authenticated", "true");
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard",
      });
    } else {
      setLoginError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
    localStorage.removeItem("admin_authenticated");
  };

  // Check if already authenticated on page load
  useEffect(() => {
    const isAuth = localStorage.getItem("admin_authenticated");
    if (isAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Data fetching hooks
  const { data: stats } = useQuery<AdminStats>({
    queryKey: ["/api/admin/stats"],
    enabled: isAuthenticated,
  });

  const { data: users } = useQuery<User[]>({
    queryKey: ["/api/admin/users"],
    enabled: isAuthenticated,
  });

  const { data: investments } = useQuery<InvestmentApplication[]>({
    queryKey: ["/api/admin/investment-applications"],
    enabled: isAuthenticated,
  });

  const { data: deals } = useQuery<DealSubmission[]>({
    queryKey: ["/api/admin/deal-submissions"],
    enabled: isAuthenticated,
  });

  const { data: merchants } = useQuery<MerchantApplication[]>({
    queryKey: ["/api/admin/merchant-applications"],
    enabled: isAuthenticated,
  });

  const { data: contacts } = useQuery<ContactInquiry[]>({
    queryKey: ["/api/admin/contact-inquiries"],
    enabled: isAuthenticated,
  });

  const { data: emails } = useQuery<EmailLog[]>({
    queryKey: ["/api/admin/email-logs"],
    enabled: isAuthenticated,
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-brand-dark">
              InvestoFund Admin Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              {loginError && (
                <p className="text-sm text-red-600">{loginError}</p>
              )}
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-sm text-blue-900 mb-2">Admin Credentials:</h4>
              <p className="text-sm text-blue-800">Username: <code>admin</code></p>
              <p className="text-sm text-blue-800">Password: <code>investofund2025</code></p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-brand-dark">
            InvestoFund Admin Dashboard
          </h1>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="w-6 h-6 text-brand-blue mx-auto mb-2" />
              <p className="text-2xl font-bold text-brand-dark">{stats?.totalUsers || 0}</p>
              <p className="text-sm text-brand-gray">Total Users</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <FileText className="w-6 h-6 text-brand-teal mx-auto mb-2" />
              <p className="text-2xl font-bold text-brand-dark">{stats?.totalInvestmentApplications || 0}</p>
              <p className="text-sm text-brand-gray">Investments</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Building className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-brand-dark">{stats?.totalDealSubmissions || 0}</p>
              <p className="text-sm text-brand-gray">Deal Submissions</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Building className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-brand-dark">{stats?.totalMerchantApplications || 0}</p>
              <p className="text-sm text-brand-gray">Merchant Apps</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <MessageSquare className="w-6 h-6 text-purple-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-brand-dark">{stats?.totalContactInquiries || 0}</p>
              <p className="text-sm text-brand-gray">Contact Forms</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Mail className="w-6 h-6 text-red-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-brand-dark">{stats?.totalEmailsSent || 0}</p>
              <p className="text-sm text-brand-gray">Emails Sent</p>
            </CardContent>
          </Card>
        </div>

        {/* Data Tables */}
        <Tabs defaultValue="users" className="space-y-4">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="investments">Investments</TabsTrigger>
            <TabsTrigger value="deals">Deals</TabsTrigger>
            <TabsTrigger value="merchants">Merchants</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="emails">Emails</TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>All Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">ID</th>
                        <th className="text-left p-2">Name</th>
                        <th className="text-left p-2">Email</th>
                        <th className="text-left p-2">Phone</th>
                        <th className="text-left p-2">Type</th>
                        <th className="text-left p-2">Accredited</th>
                        <th className="text-left p-2">Created</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users?.map((user) => (
                        <tr key={user.id} className="border-b">
                          <td className="p-2">{user.id}</td>
                          <td className="p-2">{user.firstName} {user.lastName}</td>
                          <td className="p-2">{user.email}</td>
                          <td className="p-2">{user.phone}</td>
                          <td className="p-2">
                            <Badge variant={user.userType === 'investor' ? 'default' : 'secondary'}>
                              {user.userType}
                            </Badge>
                          </td>
                          <td className="p-2">
                            {user.accreditedInvestor ? (
                              <Badge className="bg-green-100 text-green-800">Yes</Badge>
                            ) : (
                              <Badge variant="outline">No</Badge>
                            )}
                          </td>
                          <td className="p-2">{new Date(user.createdAt).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="investments">
            <Card>
              <CardHeader>
                <CardTitle>Investment Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">ID</th>
                        <th className="text-left p-2">Email</th>
                        <th className="text-left p-2">Amount</th>
                        <th className="text-left p-2">Type</th>
                        <th className="text-left p-2">Accredited</th>
                        <th className="text-left p-2">Status</th>
                        <th className="text-left p-2">Created</th>
                      </tr>
                    </thead>
                    <tbody>
                      {investments?.map((investment) => (
                        <tr key={investment.id} className="border-b">
                          <td className="p-2">{investment.id}</td>
                          <td className="p-2">{investment.userEmail}</td>
                          <td className="p-2">{formatCurrency(investment.investmentAmount)}</td>
                          <td className="p-2">
                            <Badge variant={investment.investmentType === 'portfolio' ? 'default' : 'secondary'}>
                              {investment.investmentType}
                            </Badge>
                          </td>
                          <td className="p-2">
                            {investment.accreditedStatus ? (
                              <Badge className="bg-green-100 text-green-800">Yes</Badge>
                            ) : (
                              <Badge variant="outline">No</Badge>
                            )}
                          </td>
                          <td className="p-2">
                            <Badge variant="outline">{investment.status}</Badge>
                          </td>
                          <td className="p-2">{new Date(investment.createdAt).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deals">
            <Card>
              <CardHeader>
                <CardTitle>Deal Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">ID</th>
                        <th className="text-left p-2">Business Name</th>
                        <th className="text-left p-2">Requested Amount</th>
                        <th className="text-left p-2">Monthly Revenue</th>
                        <th className="text-left p-2">Industry</th>
                        <th className="text-left p-2">Status</th>
                        <th className="text-left p-2">Created</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deals?.map((deal) => (
                        <tr key={deal.id} className="border-b">
                          <td className="p-2">{deal.id}</td>
                          <td className="p-2">{deal.businessName}</td>
                          <td className="p-2">{formatCurrency(deal.requestedAmount)}</td>
                          <td className="p-2">{formatCurrency(deal.monthlyRevenue)}</td>
                          <td className="p-2">{deal.industry}</td>
                          <td className="p-2">
                            <Badge variant="outline">{deal.status}</Badge>
                          </td>
                          <td className="p-2">{new Date(deal.createdAt).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="merchants">
            <Card>
              <CardHeader>
                <CardTitle>Merchant Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">ID</th>
                        <th className="text-left p-2">Business Name</th>
                        <th className="text-left p-2">Requested Amount</th>
                        <th className="text-left p-2">Monthly Revenue</th>
                        <th className="text-left p-2">Industry</th>
                        <th className="text-left p-2">Status</th>
                        <th className="text-left p-2">Created</th>
                      </tr>
                    </thead>
                    <tbody>
                      {merchants?.map((merchant) => (
                        <tr key={merchant.id} className="border-b">
                          <td className="p-2">{merchant.id}</td>
                          <td className="p-2">{merchant.businessName}</td>
                          <td className="p-2">{formatCurrency(merchant.requestedAmount)}</td>
                          <td className="p-2">{formatCurrency(merchant.monthlyRevenue)}</td>
                          <td className="p-2">{merchant.industry}</td>
                          <td className="p-2">
                            <Badge variant="outline">{merchant.status}</Badge>
                          </td>
                          <td className="p-2">{new Date(merchant.createdAt).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Contact Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">ID</th>
                        <th className="text-left p-2">Name</th>
                        <th className="text-left p-2">Email</th>
                        <th className="text-left p-2">Phone</th>
                        <th className="text-left p-2">Type</th>
                        <th className="text-left p-2">Message</th>
                        <th className="text-left p-2">Created</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts?.map((contact) => (
                        <tr key={contact.id} className="border-b">
                          <td className="p-2">{contact.id}</td>
                          <td className="p-2">{contact.firstName} {contact.lastName}</td>
                          <td className="p-2">{contact.email}</td>
                          <td className="p-2">{contact.phone}</td>
                          <td className="p-2">
                            <Badge variant="outline">{contact.inquiryType}</Badge>
                          </td>
                          <td className="p-2 max-w-xs truncate">{contact.message}</td>
                          <td className="p-2">{new Date(contact.createdAt).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="emails">
            <Card>
              <CardHeader>
                <CardTitle>Email Logs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">ID</th>
                        <th className="text-left p-2">Type</th>
                        <th className="text-left p-2">Recipient</th>
                        <th className="text-left p-2">Subject</th>
                        <th className="text-left p-2">Status</th>
                        <th className="text-left p-2">Sent</th>
                      </tr>
                    </thead>
                    <tbody>
                      {emails?.map((email) => (
                        <tr key={email.id} className="border-b">
                          <td className="p-2">{email.id}</td>
                          <td className="p-2">
                            <Badge variant="outline">{email.emailType}</Badge>
                          </td>
                          <td className="p-2">{email.recipient}</td>
                          <td className="p-2 max-w-xs truncate">{email.subject}</td>
                          <td className="p-2">
                            <Badge className={email.status === 'sent' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                              {email.status}
                            </Badge>
                          </td>
                          <td className="p-2">{new Date(email.sentAt).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}