import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  component: ServicesLayout,
});

function ServicesLayout() {
  return (
    <div className="services-layout">
      <Outlet />
    </div>
  );
}
