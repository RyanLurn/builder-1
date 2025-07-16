import PageButton from "@/features/design/components/left-sidebar/tabs/pages/page-button";

const mockPages = [{ name: "Home" }, { name: "/about" }, { name: "/contact" }];

export default function PagesList() {
  return (
    <div className="flex w-full flex-col">
      {mockPages.map(page => (
        <PageButton key={page.name} name={page.name} />
      ))}
    </div>
  );
}
