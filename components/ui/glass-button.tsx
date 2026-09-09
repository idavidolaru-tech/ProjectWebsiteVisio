import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./glass-button.module.css";

function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

const glassButtonVariants = cva(styles.button, {
  variants: {
    size: {
      default: styles.sizeDefault,
      sm: styles.sizeSm,
      lg: styles.sizeLg,
      icon: styles.sizeIcon,
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const glassButtonTextVariants = cva(styles.text, {
  variants: {
    size: {
      default: styles.textDefault,
      sm: styles.textSm,
      lg: styles.textLg,
      icon: styles.textIcon,
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  contentClassName?: string;
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, children, size, contentClassName, ...props }, ref) => {
    return (
      <div className={cn(styles.wrap, className)}>
        <button
          className={cn(glassButtonVariants({ size }))}
          ref={ref}
          {...props}
        >
          <span
            className={cn(glassButtonTextVariants({ size }), contentClassName)}
          >
            {children}
          </span>
        </button>
        <div className={styles.shadow} />
      </div>
    );
  }
);
GlassButton.displayName = "GlassButton";

export { GlassButton, glassButtonVariants };
