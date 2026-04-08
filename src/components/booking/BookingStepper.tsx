import { Check } from "lucide-react";

interface BookingStepperProps {
  steps: string[];
  currentStep: number;
}

export default function BookingStepper({ steps, currentStep }: BookingStepperProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, idx) => (
        <div key={step} className="flex items-center gap-2 flex-1">
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
                idx < currentStep
                  ? "bg-foreground text-card border-foreground"
                  : idx === currentStep
                  ? "border-foreground text-foreground"
                  : "border-border text-muted-foreground"
              }`}
            >
              {idx < currentStep ? <Check className="h-4 w-4" /> : idx + 1}
            </div>
            <span className="text-[10px] text-muted-foreground mt-1 whitespace-nowrap">{step}</span>
          </div>
          {idx < steps.length - 1 && (
            <div className={`flex-1 h-0.5 mx-2 ${idx < currentStep ? "bg-foreground" : "bg-border"}`} />
          )}
        </div>
      ))}
    </div>
  );
}
