import { ReactNode } from "react";

interface FormWrapperProps {
    title: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children: ReactNode;
}

export const FormWrapper = ({ title, onSubmit, children }: FormWrapperProps) => {
    return (
        <div className="bg-neutral-900 p-8 rounded-xl shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-semibold text-center text-zinc-100 mb-6">{title}</h2>
            <form className="space-y-5" onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    );
};
