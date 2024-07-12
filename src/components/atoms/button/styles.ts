import { cn } from "@/styles";
import { ButtonProps } from "./button";

export const buttonStyles = ({
  buttonRound,
  buttonType,
  buttonSize,
  buttonColor,
  fullWidth,
  disabled,
  loading,
}: ButtonProps): string => {
  let styles = [];
  styles.push("transition-all duration-200 ease-in-out");
  // Button Color
  if (buttonColor === "red") {
    if (buttonType === "solid") {
      styles.push("text-white bg-red-500 hover:bg-red-600");
    } else if (buttonType === "outline") {
      styles.push("text-red-500 bg-white border border-red-500");
      styles.push("active:bg-red-500 active:text-white active:border-red-500");
      styles.push("hover:border-red-800 hover:text-red-800 hover:bg-red-100");
    } else if (buttonType === "ghost") {
      styles.push("text-red-500 ");
      styles.push("active:bg-red-100 hover:bg-red-100 hover:text-red-800");
    } else if (buttonType === "soft") {
      styles.push("text-red-800 bg-red-100");
      styles.push("hover:bg-red-300 active:bg-red-300");
    }
    styles.push("active:ring-4 active:ring-red-500/30");
  } else if (buttonColor === "orange") {
    if (buttonType === "solid") {
      styles.push("text-white bg-orange-500 hover:bg-orange-600");
    } else if (buttonType === "outline") {
      styles.push("text-orange-500 bg-white border border-orange-500");
      styles.push("active:bg-orange-500 active:text-white active:border-orange-500");
      styles.push("hover:border-orange-800 hover:text-orange-800 hover:bg-orange-100");
    } else if (buttonType === "ghost") {
      styles.push("text-orange-500 ");
      styles.push("active:bg-orange-100 hover:bg-orange-100 hover:text-orange-800");
    } else if (buttonType === "soft") {
      styles.push("text-orange-800 bg-orange-100");
      styles.push("hover:bg-orange-300 active:bg-orange-300");
    }
    styles.push("active:ring-4 active:ring-orange-500/30");
  } else if (buttonColor === "yellow") {
    if (buttonType === "solid") {
      styles.push("text-white bg-yellow-500 hover:bg-yellow-600");
    } else if (buttonType === "outline") {
      styles.push("text-yellow-500 bg-white border border-yellow-500");
      styles.push("active:bg-yellow-500 active:text-white active:border-yellow-500");
      styles.push("hover:border-yellow-800 hover:text-yellow-800 hover:bg-yellow-100");
    } else if (buttonType === "ghost") {
      styles.push("text-yellow-500 ");
      styles.push("active:bg-yellow-100 hover:bg-yellow-100 hover:text-yellow-800");
    } else if (buttonType === "soft") {
      styles.push("text-yellow-800 bg-yellow-100");
      styles.push("hover:bg-yellow-300 active:bg-yellow-300");
    }
    styles.push("active:ring-4 active:ring-yellow-500/30");
  } else if (buttonColor === "green") {
    if (buttonType === "solid") {
      styles.push("text-white bg-green-500 hover:bg-green-600");
    } else if (buttonType === "outline") {
      styles.push("text-green-500 bg-white border border-green-500");
      styles.push("active:bg-green-500 active:text-white active:border-green-500");
      styles.push("hover:border-green-800 hover:text-green-800 hover:bg-green-100");
    } else if (buttonType === "ghost") {
      styles.push("text-green-500 ");
      styles.push("active:bg-green-100 hover:bg-green-100 hover:text-green-800");
    } else if (buttonType === "soft") {
      styles.push("text-green-800 bg-green-100");
      styles.push("hover:bg-green-300 active:bg-green-300");
    }
    styles.push("active:ring-4 active:ring-green-500/30");
  } else if (buttonColor === "blue") {
    if (buttonType === "solid") {
      styles.push("text-white bg-blue-500 hover:bg-blue-600");
    } else if (buttonType === "outline") {
      styles.push("text-blue-500 bg-white border border-blue-500");
      styles.push("active:bg-blue-500 active:text-white active:border-blue-500");
      styles.push("hover:border-blue-800 hover:text-blue-800 hover:bg-blue-100");
    } else if (buttonType === "ghost") {
      styles.push("text-blue-500 ");
      styles.push("active:bg-blue-100 hover:bg-blue-100 hover:text-blue-800");
    } else if (buttonType === "soft") {
      styles.push("text-blue-800 bg-blue-100");
      styles.push("hover:bg-blue-300 active:bg-blue-300");
    }
    styles.push("active:ring-4 active:ring-blue-500/30");
  } else if (buttonColor === "violet") {
    if (buttonType === "solid") {
      styles.push("text-white bg-violet-500 hover:bg-violet-600");
    } else if (buttonType === "outline") {
      styles.push("text-violet-500 bg-white border border-violet-500");
      styles.push("active:bg-violet-500 active:text-white active:border-violet-500");
      styles.push("hover:border-violet-800 hover:text-violet-800 hover:bg-violet-100");
    } else if (buttonType === "ghost") {
      styles.push("text-violet-500 ");
      styles.push("active:bg-violet-100 hover:bg-violet-100 hover:text-violet-800");
    } else if (buttonType === "soft") {
      styles.push("text-violet-800 bg-violet-100");
      styles.push("hover:bg-violet-300 active:bg-violet-300");
    }
    styles.push("active:ring-4 active:ring-violet-500/30");
  } else if (buttonColor === "pink") {
    if (buttonType === "solid") {
      styles.push("text-white bg-pink-500 hover:bg-pink-600");
    } else if (buttonType === "outline") {
      styles.push("text-pink-500 bg-white border border-pink-500");
      styles.push("active:bg-pink-500 active:text-white active:border-pink-500");
      styles.push("hover:border-pink-800 hover:text-pink-800 hover:bg-pink-100");
    } else if (buttonType === "ghost") {
      styles.push("text-pink-500 ");
      styles.push("active:bg-pink-100 hover:bg-pink-100 hover:text-pink-800");
    } else if (buttonType === "soft") {
      styles.push("text-pink-800 bg-pink-100");
      styles.push("hover:bg-pink-300 active:bg-pink-300");
    }
    styles.push("active:ring-4 active:ring-pink-500/30");
  } else if (buttonColor === "rose") {
    if (buttonType === "solid") {
      styles.push("text-white bg-rose-500 hover:bg-rose-600");
    } else if (buttonType === "outline") {
      styles.push("text-rose-500 bg-white border border-rose-500");
      styles.push("active:bg-rose-500 active:text-white active:border-rose-500");
      styles.push("hover:border-rose-800 hover:text-rose-800 hover:bg-rose-100");
    } else if (buttonType === "ghost") {
      styles.push("text-rose-500 ");
      styles.push("active:bg-rose-100 hover:bg-rose-100 hover:text-rose-800");
    } else if (buttonType === "soft") {
      styles.push("text-rose-800 bg-rose-100");
      styles.push("hover:bg-rose-300 active:bg-rose-300");
    }
    styles.push("active:ring-4 active:ring-rose-500/30");
  }
  // Button Round
  if (buttonRound === "round") {
    styles.push("rounded-lg");
  } else if (buttonRound === "pill") {
    styles.push("rounded-full");
  }
  // Button Size
  if (buttonSize === "default") {
    styles.push("text-base px-5 h-12 leading-12");
  } else if (buttonSize === "sm") {
    styles.push("text-sm px-4 h-10 leading-10");
  } else if (buttonSize === "xs") {
    styles.push("text-xs px-3 h-6 leading-6");
    buttonRound === "round" && styles.push("rounded-md");
  }
  // Full Width
  if (fullWidth) {
    styles.push("flex-1 w-full");
  } else {
    styles.push("self-start");
  }
  //   Disabled
  if (disabled || loading) {
    styles.push(
      cn(
        "text-slate-300 bg-slate-100 border border-slate-300 cursor-not-allowed select-none",
        "hover:bg-slate-100 hover:border-slate-300 hover:text-slate-300 hover:bg-slate-100",
        "active:bg-slate-100 active:border-slate-300 active:text-slate-300 active:ring-0"
      )
    );
    buttonType === "ghost" && styles.push("border-0 bg-white hover:bg-white active:bg-white");
  }
  console.log(styles.join(" "));
  return styles.join(" ");
};
