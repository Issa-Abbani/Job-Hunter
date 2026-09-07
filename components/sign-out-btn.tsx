"use client";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { signOut } from "@/lib/auth/auth-client";
export default function SignOutBtn() {
  const router = useRouter();
  return (
    <DropdownMenuItem
      className={"text-destructive"}
      variant="destructive"
      onClick={async () => {
        const res = await signOut();
        if(res.data){
          router.push("/sign-in");
        }else{
          alert("Error Signing Out");
        }
      }}
    >
      Log Out
    </DropdownMenuItem>
  );
}
