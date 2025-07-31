import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          ref={ref}
          {...props}
        />
        <button
          type="button"
          onClick={() => onCheckedChange?.(!checked)}
          className={cn(
            "peer h-5 w-5 shrink-0 rounded-md border border-secondary-200 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-500 data-[state=checked]:text-white data-[state=checked]:border-primary-500",
            checked && "bg-primary-500 text-white border-primary-500",
            className
          )}
          data-state={checked ? "checked" : "unchecked"}
        >
          {checked && <Check className="h-3 w-3" />}
        </button>
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
