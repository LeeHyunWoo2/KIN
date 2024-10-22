import { SmoothLink } from "@/src/renderer/scripts/CommonElements";
import { useLocation as usePathname } from "react-router-dom";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function SidebarNav({ className, items, ...props }) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className,
      )}
      {...props}
    >
      {items.map((item) => (
        <SmoothLink
          key={item.href}
          to={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start",
          )}
        >
          {item.title}
        </SmoothLink>
      ))}
    </nav>
  );
}
