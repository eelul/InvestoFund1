import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Play, FileText, Users, Award, Clock, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

export default function ISOTraining() {
  const trainingModules = [
    {
      id: 1,
      title: "MCA Fundamentals",
      description: "Understanding Merchant Cash Advances and the funding process",
      duration: "45 mins",
      status: "completed",
      progress: 100,
      lessons: [
        "What is a Merchant Cash Advance?",
        "How MCA Differs from Traditional Loans",
        "The MCA Ecosystem",
        "Key Terms and Definitions"
      ]
    },
    {
      id: 2,
      title: "Deal Submission Best Practices",
      description: "Learn how to submit high-quality deals that get approved",
      duration: "60 mins",
      status: "in_progress",
      progress: 65,
      lessons: [
        "Pre-Qualification Process",
        "Document Collection Standards",
        "Application Completion Guidelines",
        "Quality Assurance Checklist"
      ]
    },
    {
      id: 3,
      title: "Client Relationship Management",
      description: "Building and maintaining strong merchant relationships",
      duration: "40 mins",
      status: "available",
      progress: 0,
      lessons: [
        "Initial Client Consultation",
        "Setting Proper Expectations",
        "Communication Best Practices",
        "Handling Objections"
      ]
    },
    {
      id: 4,
      title: "Commission Structure & Payments",
      description: "Understanding how commissions work and payment schedules",
      duration: "30 mins",
      status: "available",
      progress: 0,
      lessons: [
        "Commission Calculation Methods",
        "Payment Schedules",
        "Bonus Structures",
        "Performance Incentives"
      ]
    },
    {
      id: 5,
      title: "Compliance & Regulations",
      description: "Legal requirements and compliance in MCA transactions",
      duration: "50 mins",
      status: "locked",
      progress: 0,
      lessons: [
        "Federal Regulations",
        "State-Specific Requirements",
        "Disclosure Obligations",
        "Risk Management"
      ]
    }
  ];

  const certifications = [
    {
      title: "Certified MCA Professional",
      description: "Complete all training modules and pass the certification exam",
      requirement: "Complete all 5 modules + exam",
      status: "in_progress",
      progress: 40
    },
    {
      title: "Advanced ISO Specialist",
      description: "Advanced certification for experienced ISO partners",
      requirement: "6 months experience + advanced coursework",
      status: "locked",
      progress: 0
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'in_progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'available': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'locked': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'in_progress': return <Play className="w-4 h-4" />;
      case 'available': return <Play className="w-4 h-4" />;
      case 'locked': return <Clock className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const handleStartModule = (moduleId: number) => {
    console.log(`Starting module ${moduleId}`);
    alert(`Starting training module ${moduleId}... (Demo)`);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-dark mb-4">
              ISO Training Center
            </h1>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Comprehensive training program to help you become a successful ISO partner in the MCA industry
            </p>
          </div>

          {/* Training Progress Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-brand-blue" />
                <span>Your Training Progress</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">2/5</div>
                  <p className="text-brand-gray">Modules Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-blue mb-2">65%</div>
                  <p className="text-brand-gray">Overall Progress</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-teal mb-2">180</div>
                  <p className="text-brand-gray">Minutes Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Training Modules */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">Training Modules</h2>
            <div className="space-y-6">
              {trainingModules.map((module) => (
                <Card key={module.id} className={module.status === 'locked' ? 'opacity-60' : ''}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-brand-dark">{module.title}</h3>
                          <Badge className={`${getStatusColor(module.status)} flex items-center gap-1`}>
                            {getStatusIcon(module.status)}
                            {module.status.replace('_', ' ')}
                          </Badge>
                        </div>
                        <p className="text-brand-gray mb-4">{module.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-brand-gray mb-4">
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{module.duration}</span>
                          </span>
                          <span>{module.lessons.length} lessons</span>
                        </div>
                      </div>
                      <div className="ml-6">
                        <Button
                          onClick={() => handleStartModule(module.id)}
                          disabled={module.status === 'locked'}
                          variant={module.status === 'completed' ? 'outline' : 'default'}
                        >
                          {module.status === 'completed' ? 'Review' : module.status === 'in_progress' ? 'Continue' : 'Start'}
                        </Button>
                      </div>
                    </div>

                    {module.progress > 0 && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-brand-gray">Progress</span>
                          <span className="text-brand-dark">{module.progress}%</span>
                        </div>
                        <Progress value={module.progress} className="h-2" />
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-3">
                      {module.lessons.map((lesson, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <div className={`w-2 h-2 rounded-full ${
                            module.status === 'completed' || (module.status === 'in_progress' && index < 2) 
                              ? 'bg-green-500' 
                              : 'bg-gray-300'
                          }`} />
                          <span className="text-brand-gray">{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <Award className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{cert.title}</CardTitle>
                        <p className="text-sm text-brand-gray">{cert.requirement}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-gray mb-4">{cert.description}</p>
                    {cert.progress > 0 && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-brand-gray">Progress</span>
                          <span className="text-brand-dark">{cert.progress}%</span>
                        </div>
                        <Progress value={cert.progress} className="h-2" />
                      </div>
                    )}
                    <Button 
                      variant="outline" 
                      disabled={cert.status === 'locked'}
                      className="w-full"
                    >
                      {cert.status === 'locked' ? 'Locked' : 'View Requirements'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Support Section */}
          <Card className="bg-brand-blue text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need Training Support?</h2>
              <p className="text-blue-100 mb-6">
                Our training team is available to help you succeed in your ISO journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="bg-white text-brand-blue hover:bg-gray-100">
                  Contact Training Support
                </Button>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Schedule 1-on-1 Session
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}