export interface HackerNewsResponseDto {
  hits: Hit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  exhaustive: Exhaustive;
  query: string;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: ProcessingTimingsMs;
  serverTimeMS: number;
}

export interface Hit {
  created_at: string;
  title: string;
  url?: string;
  author: string;
  points: number;
  story_text?: string;
  comment_text: any;
  num_comments: number;
  story_id: any;
  story_title: any;
  story_url: any;
  parent_id: any;
  created_at_i: number;
  _tags: string[];
  objectID: string;
  _highlightResult: HighlightResult;
}

export interface HighlightResult {
  title: Title;
  url?: Url;
  author: Author;
  story_text?: StoryText;
}

export interface Title {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface Url {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface Author {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface StoryText {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface Exhaustive {
  nbHits: boolean;
  typo: boolean;
}

export interface ProcessingTimingsMs {
  afterFetch: AfterFetch;
  request: Request;
  total: number;
}

export interface AfterFetch {
  total: number;
}

export interface Request {
  roundTrip: number;
}
