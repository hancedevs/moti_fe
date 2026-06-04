export function parseProjectId(value: string | undefined): number | null {
  if (!value?.trim()) return null;
  const id = Number.parseInt(value, 10);
  if (!Number.isFinite(id) || id <= 0) return null;
  return id;
}
