import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <div>
      <SidebarTrigger className="ml-5" />

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50">50</div>
          <div className="aspect-video rounded-xl bg-muted/50">10</div>
          <div className="aspect-video rounded-xl bg-muted/50">0</div>
        </div>

        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
          <div className="aspect-video rounded-xl bg-muted/50">50</div>
          <div className="aspect-video rounded-xl bg-muted/50">10</div>
        </div>
      </div>
    </div>
  );
}
