export interface AuthorizationData {
  id: number,
  email: string,
  name: string,
  avatarUrl: string
}

export interface Film {
  id: number,
  title: string,
  cover: string,
  poster: string,
  previewVideo: string,
  genre: string,
  release: number,
  rating: number,
  ratingsCount: number,
  description: string,
  director: string,
  actors: string[],
  runTime: number,
  previewImage: string,
  backgroundColor: string,
  videoLink: string,
  isFavorite: boolean
}

export interface Comment {
  id: number,
  text: string,
  rating: number,
  userName: string,
  date: Date
}
