import { QueryForm } from "@/components/QueryForm";

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground">
            Have questions? We're here to help
          </p>
        </div>
        <QueryForm />
      </div>
    </div>
  );
}
