type ParallelRoutesLayoutProps = {
  genres: React.ReactNode;
  movies: React.ReactNode;
};

type MovieCategoryPage = {
  title: string;
  category: string;
  seeMorePath: string;
};

type MovieRouteParams = {
  params: { movieId: string };
};

type PageRouteParams = {
  params: { segments: string[] };
  searchParams: { page: string };
};

type MovieGenre = {
  id: number;
  name: string;
};

type MovieGenresResponse = {
  genres: MovieGenre[];
};

type MovieDetails = {
  id: number;
  runtime: number;
  overview: string;
  vote_count: number;
  poster_path: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
  original_title: string;
} & MovieGenresResponse;

type MoviesListResponse = {
  total_pages: number;
  total_results: number;
  results: MovieDetail[];
};

type VideoDetails = {
  key: string;
  site: string;
  type: string;
};

type MovieVideosResponse = {
  results: VideoDetails[];
};

type MovieCrewMember = {
  job: string;
  name: string;
};

type MovieCastMember = {
  name: string;
  known_for_department: string;
};

type MovieCreditsResponse = {
  cast: MovieCastMember[];
  crew: MovieCrewMember[];
};
