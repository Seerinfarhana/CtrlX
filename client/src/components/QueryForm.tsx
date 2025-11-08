import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function QueryForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    query: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Query submitted:', formData);
    toast({
      title: "Query Submitted",
      description: "We'll get back to you soon!",
    });
    setFormData({ name: "", role: "", email: "", query: "" });
  };

  return (
    <Card className="p-8 max-w-2xl mx-auto" data-testid="form-query">
      <h2 className="font-display text-3xl font-bold mb-6 text-center">Ask Your Query</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            data-testid="input-name"
          />
        </div>

        <div>
          <Label htmlFor="role">Role</Label>
          <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
            <SelectTrigger data-testid="select-role">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="artist">Artist</SelectItem>
              <SelectItem value="user">User</SelectItem>
              <SelectItem value="organization">Organization</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            data-testid="input-email"
          />
        </div>

        <div>
          <Label htmlFor="query">Your Query</Label>
          <Textarea
            id="query"
            value={formData.query}
            onChange={(e) => setFormData({ ...formData, query: e.target.value })}
            required
            className="min-h-[120px]"
            data-testid="input-query"
          />
        </div>

        <Button type="submit" className="w-full" data-testid="button-submit-query">
          Submit Query
        </Button>
      </form>
    </Card>
  );
}
