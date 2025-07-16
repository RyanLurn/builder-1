import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function AddMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Plus />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right">
        <DropdownMenuItem>New Page</DropdownMenuItem>
        <DropdownMenuItem>New 404 Page</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
