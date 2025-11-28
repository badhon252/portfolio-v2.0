import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import Link from "next/link";

interface RouteProps {
  href: string;
  label: string;
}

export default function ContactMedium({
  routeList,
}: {
  routeList: RouteProps[];
}) {
  return (
    <div>
      {" "}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link
                  href={href}
                  className={`text-base px-4 py-2 rounded-lg transition-all duration-200`}
                >
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
