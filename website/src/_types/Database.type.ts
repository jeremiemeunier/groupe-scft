export interface ArticleInterface {
  id: string;
  created_at: string;
  content: ArticleBlockCardInterface[];
  title: string;
  enc_title: string;
  resume: string;
  author: string;
  color?: string;
}

export interface ArticleBlockInterface {
  class?: string[];
  elements: ArticleBlockElementInterface[];
}

export interface ArticleBlockElementInterface {
  type: string;
  content: string | ArticleBlockCardInterface[];
  class?: string[];
  author?: string;
}

export interface ArticleBlockCardInterface {
  media: string;
  content: ArticleBlockElementInterface[];
}
