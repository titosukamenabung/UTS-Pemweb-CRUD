import { z } from "zod";
import { InputText } from "../../../components/ui/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../../../components/ui/Button";

type FormData = {
  name: string;
  category: string;
  price: string;
  image: string;
};

const schema = z.object({
  name: z.string().min(1, "Nama produk harus diisi"),
  category: z.string().min(1, "Kategori harus diisi"),
  price: z.string().min(1, "Harga harus diisi"),
  image: z.string().min(1, "Gambar produk harus diisi"),
});

const onSubmit = (data: FormData) => {
  console.log(data);
};

export default function ProductCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-[#f8f5f0] rounded-2xl shadow-md p-8 border border-[#e0d6c8]">
        
        <h2 className="text-2xl font-bold text-[#3e2f1c] mb-6 border-b border-[#d6c7b2] pb-4">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">

            <InputText
              label="Product Name"
              nama="name"
              register={register}
              error={errors.name?.message}
            />

            <InputText
              label="Category"
              nama="category"
              register={register}
              error={errors.category?.message}
            />

            <InputText
              label="Price"
              nama="price"
              register={register}
              error={errors.price?.message}
            />

            <InputText
              label="Image URL"
              nama="image"
              register={register}
              error={errors.image?.message}
            />

          </div>

          <div className="flex justify-start mt-4">
            <Button type="submit" label="Save Product" />
          </div>
        </form>
      </div>
    </div>
  );
}