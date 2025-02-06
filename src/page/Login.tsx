import { Button } from "@/shared/ui/button.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "@/components/FormField.tsx";
import { FormWrapper } from "@/components/FormWrapper.tsx";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

const Login = () => {
    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await new Promise((res) => setTimeout(res, 1000));
            console.log(data);
        } catch (err) {
            setError('root', { message: 'Ops)' });
        }
    };

    return (
        <FormWrapper title="Login" onSubmit={handleSubmit(onSubmit)}>
            <FormField
                id="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                register={register}
                error={errors.email}
            />
            <FormField
                id="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                register={register}
                error={errors.password}
            />

            <Button
                disabled={isSubmitting || !!errors.email || !!errors.password}
                variant="secondary"
                type="submit"
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition duration-200"
            >
                {isSubmitting ? "Loading..." : "Login"}
            </Button>

            {errors.root && <div className="text-red-700 text-center text-sm mt-2">{errors.root.message}</div>}
        </FormWrapper>
    );
};

export default Login;
