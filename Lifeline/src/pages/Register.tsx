import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import {
  Heart,
  User,
  MapPin,
  Phone,
  Calendar,
  Shield,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react";

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
    },
    bloodInfo: {
      bloodType: "",
      lastDonation: "",
      medicalConditions: "",
      medications: "",
    },
    location: {
      address: "",
      city: "",
      state: "",
      zipCode: "",
      emergencyContact: "",
    },
    preferences: {
      emergencyOnly: false,
      maxDistance: "10",
      notifications: true,
      publicProfile: false,
    },
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const eligibilityChecks = [
    "I am between 18-65 years old",
    "I weigh at least 110 pounds (50 kg)",
    "I am in good general health",
    "I have not donated blood in the last 8 weeks",
    "I have not had COVID-19 symptoms in the last 14 days",
    "I have not traveled to high-risk areas recently",
  ];

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
    // Redirect to success page or dashboard
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <User className="h-12 w-12 text-primary mx-auto" />
              <h2 className="text-2xl font-bold">Personal Information</h2>
              <p className="text-muted-foreground">
                Tell us about yourself to get started
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  value={formData.personalInfo.firstName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      personalInfo: {
                        ...formData.personalInfo,
                        firstName: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  value={formData.personalInfo.lastName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      personalInfo: {
                        ...formData.personalInfo,
                        lastName: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.personalInfo.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      personalInfo: {
                        ...formData.personalInfo,
                        email: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.personalInfo.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      personalInfo: {
                        ...formData.personalInfo,
                        phone: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.personalInfo.dateOfBirth}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      personalInfo: {
                        ...formData.personalInfo,
                        dateOfBirth: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select
                  value={formData.personalInfo.gender}
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      personalInfo: {
                        ...formData.personalInfo,
                        gender: value,
                      },
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">
                      Prefer not to say
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Heart className="h-12 w-12 text-primary mx-auto" />
              <h2 className="text-2xl font-bold">Blood & Health Information</h2>
              <p className="text-muted-foreground">
                Help us understand your medical eligibility
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="bloodType">Blood Type</Label>
                <Select
                  value={formData.bloodInfo.bloodType}
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      bloodInfo: {
                        ...formData.bloodInfo,
                        bloodType: value,
                      },
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your blood type" />
                  </SelectTrigger>
                  <SelectContent>
                    {bloodTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  Don't know your blood type? We can help you find out.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastDonation">
                  Last Blood Donation (if any)
                </Label>
                <Input
                  id="lastDonation"
                  type="date"
                  value={formData.bloodInfo.lastDonation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      bloodInfo: {
                        ...formData.bloodInfo,
                        lastDonation: e.target.value,
                      },
                    })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="medicalConditions">
                  Medical Conditions (Optional)
                </Label>
                <Textarea
                  id="medicalConditions"
                  placeholder="List any medical conditions that might affect donation eligibility..."
                  value={formData.bloodInfo.medicalConditions}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      bloodInfo: {
                        ...formData.bloodInfo,
                        medicalConditions: e.target.value,
                      },
                    })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="medications">
                  Current Medications (Optional)
                </Label>
                <Textarea
                  id="medications"
                  placeholder="List any medications you're currently taking..."
                  value={formData.bloodInfo.medications}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      bloodInfo: {
                        ...formData.bloodInfo,
                        medications: e.target.value,
                      },
                    })
                  }
                />
              </div>

              <Card className="bg-medical-50 border-medical-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Info className="h-5 w-5 text-medical-600" />
                    <CardTitle className="text-lg text-medical-900">
                      Eligibility Checklist
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {eligibilityChecks.map((check, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox id={`check-${index}`} />
                      <Label
                        htmlFor={`check-${index}`}
                        className="text-sm text-medical-800"
                      >
                        {check}
                      </Label>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <MapPin className="h-12 w-12 text-primary mx-auto" />
              <h2 className="text-2xl font-bold">Location & Contact</h2>
              <p className="text-muted-foreground">
                Help us connect you with nearby requests
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  placeholder="123 Main Street"
                  value={formData.location.address}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      location: {
                        ...formData.location,
                        address: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  placeholder="New York"
                  value={formData.location.city}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      location: {
                        ...formData.location,
                        city: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  placeholder="NY"
                  value={formData.location.state}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      location: {
                        ...formData.location,
                        state: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input
                  id="zipCode"
                  placeholder="10001"
                  value={formData.location.zipCode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      location: {
                        ...formData.location,
                        zipCode: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergencyContact">
                  Emergency Contact Phone
                </Label>
                <Input
                  id="emergencyContact"
                  placeholder="+1 (555) 987-6543"
                  value={formData.location.emergencyContact}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      location: {
                        ...formData.location,
                        emergencyContact: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Shield className="h-12 w-12 text-primary mx-auto" />
              <h2 className="text-2xl font-bold">Preferences & Privacy</h2>
              <p className="text-muted-foreground">
                Customize how LifeLink works for you
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <Label className="font-medium">Emergency Only Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Only receive critical emergency requests
                    </p>
                  </div>
                  <Checkbox
                    checked={formData.preferences.emergencyOnly}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        preferences: {
                          ...formData.preferences,
                          emergencyOnly: checked as boolean,
                        },
                      })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maxDistance">Maximum Distance (km)</Label>
                  <Select
                    value={formData.preferences.maxDistance}
                    onValueChange={(value) =>
                      setFormData({
                        ...formData,
                        preferences: {
                          ...formData.preferences,
                          maxDistance: value,
                        },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 km</SelectItem>
                      <SelectItem value="10">10 km</SelectItem>
                      <SelectItem value="25">25 km</SelectItem>
                      <SelectItem value="50">50 km</SelectItem>
                      <SelectItem value="100">100 km</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <Label className="font-medium">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive instant alerts for blood requests
                    </p>
                  </div>
                  <Checkbox
                    checked={formData.preferences.notifications}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        preferences: {
                          ...formData.preferences,
                          notifications: checked as boolean,
                        },
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <Label className="font-medium">Public Profile</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow others to see your donation count and badges
                    </p>
                  </div>
                  <Checkbox
                    checked={formData.preferences.publicProfile}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        preferences: {
                          ...formData.preferences,
                          publicProfile: checked as boolean,
                        },
                      })
                    }
                  />
                </div>
              </div>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-900">
                        Privacy Protection
                      </p>
                      <p className="text-sm text-green-700 mt-1">
                        Your personal information is encrypted and only shared
                        with verified medical professionals during emergencies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container max-w-screen-md py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Registration Progress</span>
            <span className="text-sm text-muted-foreground">
              Step {step} of {totalSteps}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="border-2">
          <CardContent className="p-8">
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={step === 1}
              >
                Previous
              </Button>

              {step < totalSteps ? (
                <Button onClick={nextStep}>Next Step</Button>
              ) : (
                <Button onClick={handleSubmit} className="bg-primary">
                  Complete Registration
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Help Card */}
        <Card className="mt-6 bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-blue-900">Need Help?</p>
                <p className="text-sm text-blue-700 mt-1">
                  Contact our support team at{" "}
                  <a
                    href="mailto:support@lifelink.com"
                    className="underline hover:no-underline"
                  >
                    support@lifelink.com
                  </a>{" "}
                  or call 1-800-BLOOD-HELP
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
