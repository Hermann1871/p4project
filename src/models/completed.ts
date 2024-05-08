export type ChallengesPage = {
    totalPages: number;
    totalItems: number;
    // data?: (Challenge)[] | null;
    data?: (Challenge)[];
}

export type Challenge = {
    id: string;
    name: string;
    slug: string;
    // completedLanguages?: (string)[] | null;
    completedLanguages?: (string)[];
    completedAt: string;
}
