import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-base-100 via-base-200 to-base-300 relative overflow-hidden px-4">
      {/* Decorative aurora shapes */}
      <div className="absolute top-[-10%] left-[-10%] h-[50vw] w-[50vw] rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[50vw] w-[50vw] rounded-full bg-secondary/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        {/* Logo / Link back to home */}
        <a href="/" className="flex items-center gap-2 mb-8 transition-transform hover:scale-105">
          <img src="/logo.png" alt="TalentForge" className="h-14 w-auto object-contain" style={{ filter: "brightness(0) invert(1) drop-shadow(0 0 6px #8b5cf6)" }} />
          <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text font-mono text-2xl font-black tracking-wider text-transparent">
            TalentForge
          </span>
        </a>

        {/* Clerk Sign Up component */}
        <SignUp 
          routing="path" 
          path="/sign-up" 
          signInUrl="/sign-in"
          afterSignUpUrl="/problems"
          appearance={{
            elements: {
              card: "shadow-2xl border border-base-content/10 rounded-2xl bg-base-100/90 backdrop-blur-md",
              headerTitle: "text-base-content font-bold",
              headerSubtitle: "text-base-content/70",
              socialButtonsBlockButton: "border border-base-content/20 hover:bg-base-200 text-base-content",
              socialButtonsBlockButtonText: "text-base-content font-medium",
              formButtonPrimary: "bg-primary text-primary-content hover:bg-primary/90",
              formFieldLabel: "text-base-content/85 text-sm",
              formFieldInput: "bg-base-100 border border-base-content/20 text-base-content focus:border-primary",
              footerActionText: "text-base-content/70",
              footerActionLink: "text-primary hover:text-primary/80",
            }
          }}
        />
      </div>
    </div>
  );
}
