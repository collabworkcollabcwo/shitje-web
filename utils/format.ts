export function formatPrice(price: number): string {
  return price.toLocaleString('sq-AL') + ' Lekë';
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Tani';
  if (diffMins < 60) return `${diffMins} min më parë`;
  if (diffHours < 24) return `${diffHours} orë më parë`;
  if (diffDays < 7) return `${diffDays} ditë më parë`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} javë më parë`;
  return date.toLocaleDateString('sq-AL');
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
}
