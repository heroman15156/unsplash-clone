export const queryKeys = {
  images: {
    search: (query: string) => ['images', 'search', query],
    random: ['images', 'random'],
    list: ['images', 'lists'],
  },
} as const;
