import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react"

export function CustomDialogContent({ children, className, ...props }:any) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 z-999 " />
      <DialogPrimitive.Content
        className={`fixed z-9999 left-1/2 top-1/2 w-[80%] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-xl   bg-white shadow-lg ${className}`}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}
