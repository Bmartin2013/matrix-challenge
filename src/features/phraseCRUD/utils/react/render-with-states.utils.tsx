import { ReactNode } from "react";
import { EmptyState, ErrorState, LoadingState } from "@/features/phraseCRUD/components/states";
import { JSX } from "@emotion/react/jsx-runtime";

export type RenderConfig = {
  loading?: boolean;
  error?: string | null;
  emptyState?: boolean;
  emptyMessage?: string;
  component: ReactNode;
  loadingClass?:string
};

export function renderWithStates({
  loading,
  error,
  emptyState,
  emptyMessage,
  component,
  loadingClass
}: RenderConfig) : JSX.Element {
  if (loading) return <LoadingState spinnerClass={loadingClass ?? ""}/>;
  if (error) return <ErrorState message={error} />;
  if (emptyState) return <EmptyState message={emptyMessage ?? ""} />;
  return <>{component}</>;
}
