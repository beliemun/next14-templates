import { cn, ColorType } from "@/styles";
import { ButtonProps, ButtonRoundType, ButtonSizeType, ButtonStyleType } from "./types";

export const buttonStyles = ({
  buttonRound,
  buttonStyle,
  buttonSize,
  buttonColor,
  fullWidth,
  disabled,
  loading,
}: Omit<ButtonProps, "tooltipTitle" | "tooltipStyle" | "tooltipPlacement">): string => {
  let styles = [""];
  styles.push("transition-all duration-200 ease-in-out");
  // Button Color
  if (buttonColor === "primary") {
    if (buttonStyle === "solid") {
      styles.push("text-white bg-primary-500 hover:bg-primary-600 dark:text-black");
    } else if (buttonStyle === "outline") {
      styles.push(
        cn(
          "text-primary-500 bg-white border border-primary-500",
          "active:text-primary-500 active:border-primary-500",
          "hover:border-primary-800 hover:text-primary-800",
          "dark:bg-black dark:hover:border-primary-600 dark:hover:text-primary-600"
        )
      );
    } else if (buttonStyle === "ghost") {
      styles.push(
        cn(
          "text-primary-500",
          "active:bg-primary-100 hover:bg-primary-100 hover:text-primary-800",
          "dark:hover:bg-primary-500/30 dark:hover:text-white"
        )
      );
    } else if (buttonStyle === "soft") {
      styles.push(
        cn(
          "text-primary-800 bg-primary-50",
          "hover:bg-primary-100 active:bg-primary-200",
          "dark:text-white/70 dark:bg-primary-900/30 dark:hover:text-white"
        )
      );
    }
  }
  if (buttonColor === "slate") {
    if (buttonStyle === "solid") {
      styles.push("text-white bg-slate-500 hover:bg-slate-600 dark:text-black");
    } else if (buttonStyle === "outline") {
      styles.push(
        cn(
          "text-slate-500 bg-white border border-slate-500",
          "active:text-slate-500 active:border-slate-500",
          "hover:border-slate-800 hover:text-slate-800",
          "dark:bg-black dark:hover:border-slate-600 dark:hover:text-slate-600"
        )
      );
    } else if (buttonStyle === "ghost") {
      styles.push(
        cn(
          "text-slate-500",
          "active:bg-slate-100 hover:bg-slate-100 hover:text-slate-800",
          "dark:hover:bg-slate-500/30 dark:hover:text-white"
        )
      );
    } else if (buttonStyle === "soft") {
      styles.push(
        cn(
          "text-slate-800 bg-slate-100",
          "hover:bg-slate-200 active:bg-slate-200",
          "dark:text-white/70 dark:bg-slate-400/10 dark:hover:text-white"
        )
      );
    }
  }
  if (buttonColor === "gray") {
    if (buttonStyle === "solid") {
      styles.push("text-white bg-gray-500 hover:bg-gray-600 dark:text-black");
    } else if (buttonStyle === "outline") {
      styles.push(
        cn(
          "text-gray-500 bg-white border border-gray-500",
          "active:text-gray-500 active:border-gray-500",
          "hover:border-gray-800 hover:text-gray-800",
          "dark:bg-black dark:hover:border-gray-600 dark:hover:text-gray-600"
        )
      );
    } else if (buttonStyle === "ghost") {
      styles.push(
        cn(
          "text-gray-500",
          "active:bg-gray-100 hover:bg-gray-100 hover:text-gray-800",
          "dark:hover:bg-gray-500/30 dark:hover:text-white"
        )
      );
    } else if (buttonStyle === "soft") {
      styles.push(
        cn(
          "text-gray-800 bg-gray-100",
          "hover:bg-gray-200 active:bg-gray-200",
          "dark:text-white/70 dark:bg-gray-400/10 dark:hover:text-white"
        )
      );
    }
  }
  if (buttonColor === "red") {
    if (buttonStyle === "solid") {
      styles.push("text-white bg-red-500 hover:bg-red-600 dark:text-black");
    } else if (buttonStyle === "outline") {
      styles.push(
        cn(
          "text-red-500 bg-white border border-red-500",
          "active:text-red-500 active:border-red-500",
          "hover:border-red-800 hover:text-red-800",
          "dark:bg-black dark:hover:border-red-600 dark:hover:text-red-600"
        )
      );
    } else if (buttonStyle === "ghost") {
      styles.push(
        cn(
          "text-red-500",
          "active:bg-red-100 hover:bg-red-100 hover:text-red-800",
          "dark:hover:bg-red-500/30 dark:hover:text-white"
        )
      );
    } else if (buttonStyle === "soft") {
      styles.push(
        cn(
          "text-red-800 bg-red-50",
          "hover:bg-red-100 active:bg-red-200",
          "dark:text-white/70 dark:bg-red-900/30 dark:hover:text-white"
        )
      );
    }
  }
  if (buttonColor === "orange") {
    if (buttonStyle === "solid") {
      styles.push("text-white bg-orange-500 hover:bg-orange-600 dark:text-black");
    } else if (buttonStyle === "outline") {
      styles.push(
        cn(
          "text-orange-500 bg-white border border-orange-500",
          "active:text-orange-500 active:border-orange-500",
          "hover:border-orange-800 hover:text-orange-800",
          "dark:bg-black dark:hover:border-orange-600 dark:hover:text-orange-600"
        )
      );
    } else if (buttonStyle === "ghost") {
      styles.push(
        cn(
          "text-orange-500",
          "active:bg-orange-100 hover:bg-orange-100 hover:text-orange-800",
          "dark:hover:bg-orange-500/30 dark:hover:text-white"
        )
      );
    } else if (buttonStyle === "soft") {
      styles.push(
        cn(
          "text-orange-800 bg-orange-50",
          "hover:bg-orange-100 active:bg-orange-200",
          "dark:text-white/70 dark:bg-orange-900/30 dark:hover:text-white"
        )
      );
    }
  }
  if (buttonColor === "yellow") {
    if (buttonStyle === "solid") {
      styles.push("text-white bg-yellow-500 hover:bg-yellow-600 dark:text-black");
    } else if (buttonStyle === "outline") {
      styles.push(
        cn(
          "text-yellow-500 bg-white border border-yellow-500",
          "active:text-yellow-500 active:border-yellow-500",
          "hover:border-yellow-800 hover:text-yellow-800",
          "dark:bg-black dark:hover:border-yellow-600 dark:hover:text-yellow-600"
        )
      );
    } else if (buttonStyle === "ghost") {
      styles.push(
        cn(
          "text-yellow-500",
          "active:bg-yellow-100 hover:bg-yellow-100 hover:text-yellow-800",
          "dark:hover:bg-yellow-500/30 dark:hover:text-white"
        )
      );
    } else if (buttonStyle === "soft") {
      styles.push(
        cn(
          "text-yellow-800 bg-yellow-50",
          "hover:bg-yellow-100 active:bg-yellow-200",
          "dark:text-white/70 dark:bg-yellow-900/30 dark:hover:text-white"
        )
      );
    }
  }
  if (buttonColor === "lime") {
    if (buttonStyle === "solid") {
      styles.push("text-white bg-lime-500 hover:bg-lime-600 dark:text-black");
    } else if (buttonStyle === "outline") {
      styles.push(
        cn(
          "text-lime-500 bg-white border border-lime-500",
          "active:text-lime-500 active:border-lime-500",
          "hover:border-lime-800 hover:text-lime-800",
          "dark:bg-black dark:hover:border-lime-600 dark:hover:text-lime-600"
        )
      );
    } else if (buttonStyle === "ghost") {
      styles.push(
        cn(
          "text-lime-500",
          "active:bg-lime-100 hover:bg-lime-100 hover:text-lime-800",
          "dark:hover:bg-lime-500/30 dark:hover:text-white"
        )
      );
    } else if (buttonStyle === "soft") {
      styles.push(
        cn(
          "text-lime-800 bg-lime-50",
          "hover:bg-lime-100 active:bg-lime-200",
          "dark:text-white/70 dark:bg-lime-900/30 dark:hover:text-white"
        )
      );
    }
  }
  if (buttonColor === "green") {
    if (buttonStyle === "solid") {
      styles.push("text-white bg-green-500 hover:bg-green-600 dark:text-black");
    } else if (buttonStyle === "outline") {
      styles.push(
        cn(
          "text-green-500 bg-white border border-green-500",
          "active:text-green-500 active:border-green-500",
          "hover:border-green-800 hover:text-green-800",
          "dark:bg-black dark:hover:border-green-600 dark:hover:text-green-600"
        )
      );
    } else if (buttonStyle === "ghost") {
      styles.push(
        cn(
          "text-green-500",
          "active:bg-green-100 hover:bg-green-100 hover:text-green-800",
          "dark:hover:bg-green-500/30 dark:hover:text-white"
        )
      );
    } else if (buttonStyle === "soft") {
      styles.push(
        cn(
          "text-green-800 bg-green-50",
          "hover:bg-green-100 active:bg-green-200",
          "dark:text-white/70 dark:bg-green-900/30 dark:hover:text-white"
        )
      );
    }
  }
  if (buttonColor === "emerald") {
    if (buttonStyle === "solid") {
      styles.push("text-white bg-emerald-500 hover:bg-emerald-600 dark:text-black");
    } else if (buttonStyle === "outline") {
      styles.push(
        cn(
          "text-emerald-500 bg-white border border-emerald-500",
          "active:text-emerald-500 active:border-emerald-500",
          "hover:border-emerald-800 hover:text-emerald-800",
          "dark:bg-black dark:hover:border-emerald-600 dark:hover:text-emerald-600"
        )
      );
    } else if (buttonStyle === "ghost") {
      styles.push(
        cn(
          "text-emerald-500",
          "active:bg-emerald-100 hover:bg-emerald-100 hover:text-emerald-800",
          "dark:hover:bg-emerald-500/30 dark:hover:text-white"
        )
      );
    } else if (buttonStyle === "soft") {
      styles.push(
        cn(
          "text-emerald-800 bg-emerald-50",
          "hover:bg-emerald-100 active:bg-emerald-200",
          "dark:text-white/70 dark:bg-emerald-900/30 dark:hover:text-white"
        )
      );
    }
  }
  if (buttonColor === "teal") {
    if (buttonStyle === "solid") {
      styles.push("text-white bg-teal-500 hover:bg-teal-600 dark:text-black");
    } else if (buttonStyle === "outline") {
      styles.push(
        cn(
          "text-teal-500 bg-white border border-teal-500",
          "active:text-teal-500 active:border-teal-500",
          "hover:border-teal-800 hover:text-teal-800",
          "dark:bg-black dark:hover:border-teal-600 dark:hover:text-teal-600"
        )
      );
    } else if (buttonStyle === "ghost") {
      styles.push(
        cn(
          "text-teal-500",
          "active:bg-teal-100 hover:bg-teal-100 hover:text-teal-800",
          "dark:hover:bg-teal-500/30 dark:hover:text-white"
        )
      );
    } else if (buttonStyle === "soft") {
      styles.push(
        cn(
          "text-teal-800 bg-teal-50",
          "hover:bg-teal-100 active:bg-teal-200",
          "dark:text-white/70 dark:bg-teal-900/30 dark:hover:text-white"
        )
      );
    }
  }
  if (buttonColor === "cyan") {
    if (buttonStyle === "solid") {
      styles.push("text-white bg-cyan-500 hover:bg-cyan-600 dark:text-black");
    } else if (buttonStyle === "outline") {
      styles.push(
        cn(
          "text-cyan-500 bg-white border border-cyan-500",
          "active:text-cyan-500 active:border-cyan-500",
          "hover:border-cyan-800 hover:text-cyan-800",
          "dark:bg-black dark:hover:border-cyan-600 dark:hover:text-cyan-600"
        )
      );
    } else if (buttonStyle === "ghost") {
      styles.push(
        cn(
          "text-cyan-500",
          "active:bg-cyan-100 hover:bg-cyan-100 hover:text-cyan-800",
          "dark:hover:bg-cyan-500/30 dark:hover:text-white"
        )
      );
    } else if (buttonStyle === "soft") {
      styles.push(
        cn(
          "text-cyan-800 bg-cyan-50",
          "hover:bg-cyan-100 active:bg-cyan-200",
          "dark:text-white/70 dark:bg-cyan-900/30 dark:hover:text-white"
        )
      );
    }
  }
  if (buttonColor === "blue") {
    if (buttonStyle === "solid") {
      styles.push("text-white bg-blue-500 hover:bg-blue-600 dark:text-black");
    } else if (buttonStyle === "outline") {
      styles.push(
        cn(
          "text-blue-500 bg-white border border-blue-500",
          "active:text-blue-500 active:border-blue-500",
          "hover:border-blue-800 hover:text-blue-800",
          "dark:bg-black dark:hover:border-blue-600 dark:hover:text-blue-600"
        )
      );
    } else if (buttonStyle === "ghost") {
      styles.push(
        cn(
          "text-blue-500",
          "active:bg-blue-100 hover:bg-blue-100 hover:text-blue-800",
          "dark:hover:bg-blue-500/30 dark:hover:text-white"
        )
      );
    } else if (buttonStyle === "soft") {
      styles.push(
        cn(
          "text-blue-800 bg-blue-50",
          "hover:bg-blue-100 active:bg-blue-200",
          "dark:text-white/70 dark:bg-blue-900/30 dark:hover:text-white"
        )
      );
    }
  }
  if (buttonColor === "violet") {
    if (buttonStyle === "solid") {
      styles.push("text-white bg-violet-500 hover:bg-violet-600 dark:text-black");
    } else if (buttonStyle === "outline") {
      styles.push(
        cn(
          "text-violet-500 bg-white border border-violet-500",
          "active:text-violet-500 active:border-violet-500",
          "hover:border-violet-800 hover:text-violet-800",
          "dark:bg-black dark:hover:border-violet-600 dark:hover:text-violet-600"
        )
      );
    } else if (buttonStyle === "ghost") {
      styles.push(
        cn(
          "text-violet-500",
          "active:bg-violet-100 hover:bg-violet-100 hover:text-violet-800",
          "dark:hover:bg-violet-500/30 dark:hover:text-white"
        )
      );
    } else if (buttonStyle === "soft") {
      styles.push(
        cn(
          "text-violet-800 bg-violet-50",
          "hover:bg-violet-100 active:bg-violet-200",
          "dark:text-white/70 dark:bg-violet-900/30 dark:hover:text-white"
        )
      );
    }
  }
  if (buttonColor === "purple") {
    if (buttonStyle === "solid") {
      styles.push("text-white bg-purple-500 hover:bg-purple-600 dark:text-black");
    } else if (buttonStyle === "outline") {
      styles.push(
        cn(
          "text-purple-500 bg-white border border-purple-500",
          "active:text-purple-500 active:border-purple-500",
          "hover:border-purple-800 hover:text-purple-800",
          "dark:bg-black dark:hover:border-purple-600 dark:hover:text-purple-600"
        )
      );
    } else if (buttonStyle === "ghost") {
      styles.push(
        cn(
          "text-purple-500",
          "active:bg-purple-100 hover:bg-purple-100 hover:text-purple-800",
          "dark:hover:bg-purple-500/30 dark:hover:text-white"
        )
      );
    } else if (buttonStyle === "soft") {
      styles.push(
        cn(
          "text-purple-800 bg-purple-50",
          "hover:bg-purple-100 active:bg-purple-200",
          "dark:text-white/70 dark:bg-purple-900/30 dark:hover:text-white"
        )
      );
    }
  }
  if (buttonColor === "pink") {
    if (buttonStyle === "solid") {
      styles.push("text-white bg-pink-500 hover:bg-pink-600 dark:text-black");
    } else if (buttonStyle === "outline") {
      styles.push(
        cn(
          "text-pink-500 bg-white border border-pink-500",
          "active:text-pink-500 active:border-pink-500",
          "hover:border-pink-800 hover:text-pink-800",
          "dark:bg-black dark:hover:border-pink-600 dark:hover:text-pink-600"
        )
      );
    } else if (buttonStyle === "ghost") {
      styles.push(
        cn(
          "text-pink-500",
          "active:bg-pink-100 hover:bg-pink-100 hover:text-pink-800",
          "dark:hover:bg-pink-500/30 dark:hover:text-white"
        )
      );
    } else if (buttonStyle === "soft") {
      styles.push(
        cn(
          "text-pink-800 bg-pink-50",
          "hover:bg-pink-100 active:bg-pink-200",
          "dark:text-white/70 dark:bg-pink-900/30 dark:hover:text-white"
        )
      );
    }
  }
  if (buttonColor === "rose") {
    if (buttonStyle === "solid") {
      styles.push("text-white bg-rose-500 hover:bg-rose-600 dark:text-black");
    } else if (buttonStyle === "outline") {
      styles.push(
        cn(
          "text-rose-500 bg-white border border-rose-500",
          "active:text-rose-500 active:border-rose-500",
          "hover:border-rose-800 hover:text-rose-800",
          "dark:bg-black dark:hover:border-rose-600 dark:hover:text-rose-600"
        )
      );
    } else if (buttonStyle === "ghost") {
      styles.push(
        cn(
          "text-rose-500",
          "active:bg-rose-100 hover:bg-rose-100 hover:text-rose-800",
          "dark:hover:bg-rose-500/30 dark:hover:text-white"
        )
      );
    } else if (buttonStyle === "soft") {
      styles.push(
        cn(
          "text-rose-800 bg-rose-50",
          "hover:bg-rose-100 active:bg-rose-200",
          "dark:text-white/70 dark:bg-rose-900/30 dark:hover:text-white"
        )
      );
    }
  }
  // Rounded Style
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
  // Full Width Style
  if (fullWidth) {
    styles.push("flex-1 w-full");
  } else {
    styles.push("self-start");
  }
  // Disabled Style
  if (disabled) {
    styles.push(
      cn(
        "text-slate-300 bg-slate-100 border border-slate-300 cursor-not-allowed select-none",
        "hover:bg-slate-100 hover:border-slate-300 hover:text-slate-300 hover:bg-slate-100",
        "active:bg-slate-100 active:border-slate-300 active:text-slate-300 active:ring-0",
        "dark:disabled:bg-slate-900 dark:disabled:border-slate-700 dark:disabled:text-slate-700"
      )
    );
    buttonStyle === "ghost" && styles.push("border-0 bg-white hover:bg-white active:bg-white");
  }
  // Button Loading
  if (loading) {
    styles.push("pointer-events-none select-none");
  }
  return styles.join(" ");
};

export const waveStyles = ({
  buttonColor,
  buttonStyle,
}: {
  buttonColor: ColorType;
  buttonStyle: ButtonStyleType;
  disabled?: boolean;
  loading?: boolean;
}) => {
  const styles = [""];
  if (buttonColor === "primary") {
    if (buttonStyle === "solid") {
      styles.push("bg-white/20");
    } else if (buttonStyle === "outline") {
      styles.push("bg-primary-500/20 dark:bg-white/20");
    } else if (buttonStyle === "ghost") {
      styles.push("bg-primary-500/20 dark:bg-white/10");
    } else if (buttonStyle === "soft") {
      styles.push("bg-primary-500/20 dark:bg-white/10");
    }
  } else if (buttonColor === "slate") {
    if (buttonStyle === "solid") {
      styles.push("bg-white/20");
    } else if (buttonStyle === "outline") {
      styles.push("bg-slate-500/20 dark:bg-white/20");
    } else if (buttonStyle === "ghost") {
      styles.push("bg-slate-500/20 dark:bg-white/10");
    } else if (buttonStyle === "soft") {
      styles.push("bg-slate-500/20 dark:bg-white/10");
    }
  } else if (buttonColor === "gray") {
    if (buttonStyle === "solid") {
      styles.push("bg-white/20");
    } else if (buttonStyle === "outline") {
      styles.push("bg-gray-500/20 dark:bg-white/20");
    } else if (buttonStyle === "ghost") {
      styles.push("bg-gray-500/20 dark:bg-white/10");
    } else if (buttonStyle === "soft") {
      styles.push("bg-gray-500/20 dark:bg-white/10");
    }
  } else if (buttonColor === "red") {
    if (buttonStyle === "solid") {
      styles.push("bg-white/20");
    } else if (buttonStyle === "outline") {
      styles.push("bg-red-500/20 dark:bg-white/20");
    } else if (buttonStyle === "ghost") {
      styles.push("bg-red-500/20 dark:bg-white/10");
    } else if (buttonStyle === "soft") {
      styles.push("bg-red-500/20 dark:bg-white/10");
    }
  } else if (buttonColor === "orange") {
    if (buttonStyle === "solid") {
      styles.push("bg-white/20");
    } else if (buttonStyle === "outline") {
      styles.push("bg-orange-500/20 dark:bg-white/20");
    } else if (buttonStyle === "ghost") {
      styles.push("bg-orange-500/20 dark:bg-white/10");
    } else if (buttonStyle === "soft") {
      styles.push("bg-orange-500/20 dark:bg-white/10");
    }
  } else if (buttonColor === "yellow") {
    if (buttonStyle === "solid") {
      styles.push("bg-white/20");
    } else if (buttonStyle === "outline") {
      styles.push("bg-yellow-500/20 dark:bg-white/20");
    } else if (buttonStyle === "ghost") {
      styles.push("bg-yellow-500/20 dark:bg-white/10");
    } else if (buttonStyle === "soft") {
      styles.push("bg-yellow-500/20 dark:bg-white/10");
    }
  } else if (buttonColor === "lime") {
    if (buttonStyle === "solid") {
      styles.push("bg-white/20");
    } else if (buttonStyle === "outline") {
      styles.push("bg-lime-500/20 dark:bg-white/20");
    } else if (buttonStyle === "ghost") {
      styles.push("bg-lime-500/20 dark:bg-white/10");
    } else if (buttonStyle === "soft") {
      styles.push("bg-lime-500/20 dark:bg-white/10");
    }
  } else if (buttonColor === "green") {
    if (buttonStyle === "solid") {
      styles.push("bg-white/20");
    } else if (buttonStyle === "outline") {
      styles.push("bg-green-500/20 dark:bg-white/20");
    } else if (buttonStyle === "ghost") {
      styles.push("bg-green-500/20 dark:bg-white/10");
    } else if (buttonStyle === "soft") {
      styles.push("bg-green-500/20 dark:bg-white/10");
    }
  } else if (buttonColor === "emerald") {
    if (buttonStyle === "solid") {
      styles.push("bg-white/20");
    } else if (buttonStyle === "outline") {
      styles.push("bg-emerald-500/20 dark:bg-white/20");
    } else if (buttonStyle === "ghost") {
      styles.push("bg-emerald-500/20 dark:bg-white/10");
    } else if (buttonStyle === "soft") {
      styles.push("bg-emerald-500/20 dark:bg-white/10");
    }
  } else if (buttonColor === "teal") {
    if (buttonStyle === "solid") {
      styles.push("bg-white/20");
    } else if (buttonStyle === "outline") {
      styles.push("bg-teal-500/20 dark:bg-white/20");
    } else if (buttonStyle === "ghost") {
      styles.push("bg-teal-500/20 dark:bg-white/10");
    } else if (buttonStyle === "soft") {
      styles.push("bg-teal-500/20 dark:bg-white/10");
    }
  } else if (buttonColor === "cyan") {
    if (buttonStyle === "solid") {
      styles.push("bg-white/20");
    } else if (buttonStyle === "outline") {
      styles.push("bg-cyan-500/20 dark:bg-white/20");
    } else if (buttonStyle === "ghost") {
      styles.push("bg-cyan-500/20 dark:bg-white/10");
    } else if (buttonStyle === "soft") {
      styles.push("bg-cyan-500/20 dark:bg-white/10");
    }
  } else if (buttonColor === "blue") {
    if (buttonStyle === "solid") {
      styles.push("bg-white/20");
    } else if (buttonStyle === "outline") {
      styles.push("bg-blue-500/20 dark:bg-white/20");
    } else if (buttonStyle === "ghost") {
      styles.push("bg-blue-500/20 dark:bg-white/10");
    } else if (buttonStyle === "soft") {
      styles.push("bg-blue-500/20 dark:bg-white/10");
    }
  } else if (buttonColor === "violet") {
    if (buttonStyle === "solid") {
      styles.push("bg-white/20");
    } else if (buttonStyle === "outline") {
      styles.push("bg-violet-500/20 dark:bg-white/20");
    } else if (buttonStyle === "ghost") {
      styles.push("bg-violet-500/20 dark:bg-white/10");
    } else if (buttonStyle === "soft") {
      styles.push("bg-violet-500/20 dark:bg-white/10");
    }
  } else if (buttonColor === "purple") {
    if (buttonStyle === "solid") {
      styles.push("bg-white/20");
    } else if (buttonStyle === "outline") {
      styles.push("bg-purple-500/20 dark:bg-white/20");
    } else if (buttonStyle === "ghost") {
      styles.push("bg-purple-500/20 dark:bg-white/10");
    } else if (buttonStyle === "soft") {
      styles.push("bg-purple-500/20 dark:bg-white/10");
    }
  } else if (buttonColor === "pink") {
    if (buttonStyle === "solid") {
      styles.push("bg-white/20");
    } else if (buttonStyle === "outline") {
      styles.push("bg-pink-500/20 dark:bg-white/20");
    } else if (buttonStyle === "ghost") {
      styles.push("bg-pink-500/20 dark:bg-white/10");
    } else if (buttonStyle === "soft") {
      styles.push("bg-pink-500/20 dark:bg-white/10");
    }
  } else if (buttonColor === "rose") {
    if (buttonStyle === "solid") {
      styles.push("bg-white/20");
    } else if (buttonStyle === "outline") {
      styles.push("bg-rose-500/20 dark:bg-white/20");
    } else if (buttonStyle === "ghost") {
      styles.push("bg-rose-500/20 dark:bg-white/10");
    } else if (buttonStyle === "soft") {
      styles.push("bg-rose-500/20 dark:bg-white/10");
    }
  }
  return styles.join(" ");
};

export const waveRoundStyle = ({
  buttonRound,
  buttonSize,
}: {
  buttonRound: ButtonRoundType;
  buttonSize: ButtonSizeType;
}) => {
  const styles = [""];
  if (buttonRound === "round") {
    styles.push("rounded-lg");
  } else if (buttonRound === "pill") {
    styles.push("rounded-full");
  }
  if (buttonSize === "xs") {
    buttonRound === "round" && styles.push("rounded-md");
  }
  return styles.join(" ");
};
