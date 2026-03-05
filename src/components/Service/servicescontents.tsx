import Button from "@/components/ui/button";
import Section from "@/components/ui/section";

interface Props {
  subCategories?: string[];
}

export default function ContentsServices({ subCategories = [] }: Props) {
  if (subCategories.length === 0) {
    return (
      <Section className="   py-2 ">
        <p role="status" className="text-text-muted">
          No sub-categories available.
        </p>
      </Section>
    );
  }

  return (
    <Section className="min-h-[150px] mb-[100px]">
      <div className="grid grid-cols-5 gap-5 items-start  justify-between py-[30px]">
        {subCategories.map((sub) => (
          <Button
            type="button"
            size="md"
            key={sub}
            variant="ghost"
            className="w-[200px] h-[75px] !bg-[#C3C3C3] text-dark hover:text-dark"
          >
            {sub}
          </Button>
        ))}
      </div>
    </Section>
  );
}
