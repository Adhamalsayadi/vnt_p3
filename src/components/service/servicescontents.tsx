"use client";
import Button from "@/components/ui/button";
import Section from "@/components/ui/section";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  subCategories?: string[];
  categoryId?: string;
}

export default function ContentsServices({
  subCategories = [],
  categoryId,
}: Props) {
  const router = useRouter();
  const params = useSearchParams();

  const buildSubCategoryHref = (subCategory: string) => {
    const next = new URLSearchParams(params.toString());
    next.set("subCategory", subCategory);
    next.set("source", "dropdown");
    next.delete("page");

    if (categoryId) {
      next.set("category", categoryId);
    }

    return `?${next.toString()}`;
  };

  if (subCategories.length === 0) {
    return (
      <Section className="py-2">
        <p role="status" className="text-text-muted">
          No sub-categories available.
        </p>
      </Section>
    );
  }

  return (
    <Section className="min-h-[150px] mb-[60px] md:mb-[100px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 items-start py-[30px]">
        {subCategories.map((sub) => (
          <Button
            type="button"
            size="md"
            key={sub}
            variant="ghost"
            onClick={() => categoryId && router.push(buildSubCategoryHref(sub))}
            className={
              "w-full h-[75px] text-dark hover:text-dark !bg-[#C3C3C3] rounded-md"
            }
          >
            {sub}
          </Button>
        ))}
      </div>
    </Section>
  );
}
