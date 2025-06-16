export {};

declare global {
  interface Band {
    id: string;
    band_name: string;
    album: string;
    genre: string;
    description: string;
    cover_image: string;
  }
}
