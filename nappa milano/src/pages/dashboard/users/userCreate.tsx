import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { InputText } from "../../../components/ui/InputText";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const schema = z.object({
  name: z.string().min(1, "Nama harus diisi"),
  email: z
    .string()
    .min(1, "Email harus diisi")
    .email("Format email tidak valid"),
  password: z.string().min(1, "Password harus diisi"),
});

export default function UsersCreate() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(
        "http://localhost:3000/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Gagal menambahkan user");
      }

      alert("User berhasil ditambahkan");

      reset();

      navigate("/dashboard/users");
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan, coba lagi");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-[#f8f5f0] rounded-2xl shadow-md p-8 border border-[#e0d6c8]">
        <h2 className="text-2xl font-bold text-[#3e2f1c] mb-6 border-b border-[#d6c7b2] pb-4">
          Add New User
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <InputText
            label="Nama"
            nama="name"
            register={register}
            error={errors.name?.message}
          />

          <InputText
            label="Email"
            nama="email"
            register={register}
            error={errors.email?.message}
          />

          <InputText
            label="Password"
            nama="password"
            register={register}
            error={errors.password?.message}
          />

          <div className="flex justify-start mt-4">
            <Button type="submit" label="Save User" />
          </div>
        </form>
      </div>
    </div>
  );
}