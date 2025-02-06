import { Input } from "@/shared/ui/input.tsx";
import { Label } from "@/shared/ui/label.tsx";
import { FieldError } from "react-hook-form";

interface FormFieldProps {
    id: string;
    label: string;
    type?: string;
    placeholder?: string;
    error?: FieldError;
    register: any;
}

export const FormField = ({ id, label, type = "text", placeholder, error, register }: FormFieldProps) => {
    return (
        <div className="flex flex-col gap-2">
            <Label className="text-zinc-400" htmlFor={id}>{label}</Label>
            <Input
                {...register(id)}
                id={id}
                type={type}
                placeholder={placeholder}
                className="border border-neutral-700 bg-neutral-800 focus:ring-2 focus:ring-blue-500 rounded-md p-2 text-zinc-200"
            />
            {error && <div className="text-red-500 text-sm">{error.message}</div>}
        </div>
    );
};
