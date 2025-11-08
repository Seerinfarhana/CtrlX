import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Palette } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";

export default function SignupPage() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [role, setRole] = useState<string>("user");
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const roleParam = params.get("role");
    if (roleParam) {
      setRole(roleParam);
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    specialty: "",
    portfolioLink: "",
    organizationName: "",
    industryType: "",
    interests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords don't match",
        variant: "destructive",
      });
      return;
    }

    console.log("Signup submitted:", { role, ...formData });
    toast({
      title: "Welcome to CULTURA!",
      description: "Your account has been created successfully",
    });
    setLocation("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-12">
      <Card className="w-full max-w-2xl p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Palette className="w-10 h-10 text-primary" />
            <span className="font-display text-3xl font-bold">CULTURA</span>
          </div>
          <h1 className="font-display text-3xl font-bold mb-2">Create Account</h1>
          <p className="text-muted-foreground text-center">
            Join the digital art community
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="role">I want to join as</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger data-testid="select-role">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="artist">Artist</SelectItem>
                <SelectItem value="user">Art Lover</SelectItem>
                <SelectItem value="organization">Organization</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">
                {role === "organization" ? "Organization Name" : "Full Name"}
              </Label>
              <Input
                id="name"
                placeholder={role === "organization" ? "Acme Art Gallery" : "John Doe"}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                data-testid="input-name"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                data-testid="input-email"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                data-testid="input-password"
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
                data-testid="input-confirm-password"
              />
            </div>
          </div>

          {role === "artist" && (
            <>
              <div>
                <Label htmlFor="specialty">Art Specialty</Label>
                <Select
                  value={formData.specialty}
                  onValueChange={(value) => setFormData({ ...formData, specialty: value })}
                >
                  <SelectTrigger data-testid="select-specialty">
                    <SelectValue placeholder="Select your specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="abstract">Abstract Art</SelectItem>
                    <SelectItem value="portrait">Portrait</SelectItem>
                    <SelectItem value="landscape">Landscape</SelectItem>
                    <SelectItem value="sculpture">Sculpture</SelectItem>
                    <SelectItem value="digital">Digital Art</SelectItem>
                    <SelectItem value="traditional">Traditional Art</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about your artistic journey..."
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="min-h-[100px]"
                  data-testid="input-bio"
                />
              </div>

              <div>
                <Label htmlFor="portfolioLink">Portfolio Link (Optional)</Label>
                <Input
                  id="portfolioLink"
                  type="url"
                  placeholder="https://yourportfolio.com"
                  value={formData.portfolioLink}
                  onChange={(e) => setFormData({ ...formData, portfolioLink: e.target.value })}
                  data-testid="input-portfolio"
                />
              </div>
            </>
          )}

          {role === "user" && (
            <div>
              <Label htmlFor="interests">Interests</Label>
              <Input
                id="interests"
                placeholder="e.g., Abstract Art, Sculpture, Digital Art"
                value={formData.interests}
                onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                data-testid="input-interests"
              />
            </div>
          )}

          {role === "organization" && (
            <>
              <div>
                <Label htmlFor="industryType">Industry Type</Label>
                <Select
                  value={formData.industryType}
                  onValueChange={(value) => setFormData({ ...formData, industryType: value })}
                >
                  <SelectTrigger data-testid="select-industry">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gallery">Art Gallery</SelectItem>
                    <SelectItem value="museum">Museum</SelectItem>
                    <SelectItem value="corporate">Corporate</SelectItem>
                    <SelectItem value="education">Educational Institution</SelectItem>
                    <SelectItem value="nonprofit">Non-Profit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="bio">Organization Description</Label>
                <Textarea
                  id="bio"
                  placeholder="Describe your organization..."
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="min-h-[100px]"
                  data-testid="input-description"
                />
              </div>
            </>
          )}

          <div className="flex items-start gap-2">
            <input type="checkbox" required className="mt-1" />
            <label className="text-sm text-muted-foreground">
              I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and{" "}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>
            </label>
          </div>

          <Button type="submit" className="w-full" data-testid="button-signup">
            Create Account
          </Button>

          <div className="text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link href="/login">
              <a className="text-primary hover:underline font-medium" data-testid="link-login">
                Log in
              </a>
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
