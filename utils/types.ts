export interface Gutendex {
    count:    number;
    next:     string;
    previous: string;
    results:  Result[];
}
export interface pagination {
    next: string;
    previous : string;
}
export interface Result {
    id:             number;
    title:          string;
    authors:        Author[];
    translators:    Author[];
    subjects:       string[];
    bookshelves:    string[];
    languages:      Language[];
    copyright:      boolean;
    media_type:     MediaType;
    formats:        Formats;
    download_count: number;
}

export interface Author {
    name:       string;
    birth_year: number;
    death_year: number;
}

export interface Formats {
    "text/html; charset=utf-8"?:       string;
    "text/plain; charset=utf-8"?:      string;
    "application/x-mobipocket-ebook":  string;
    "application/epub+zip":            string;
    "application/rdf+xml":             string;
    "image/jpeg":                      string;
    "text/html":                       string;
    "text/plain; charset=us-ascii"?:   string;
    "text/html; charset=iso-8859-1"?:  string;
    "text/plain; charset=iso-8859-1"?: string;
    "application/zip"?:                string;
    "text/plain"?:                     string;
    "application/octet-stream"?:       string;
    "text/html; charset=us-ascii"?:    string;
}

export enum Language {
    En = "en",
}

export enum MediaType {
    Text = "Text",
}
