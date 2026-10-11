import { withAuthor } from "./withAuthor";
import { posts as posts2020 } from "./2020";
import { posts as posts2021 } from "./2021";
import { posts as posts2022 } from "./2022";
import { posts as posts2023 } from "./2023";
import { posts as posts2024 } from "./2024";
import { posts as posts2025 } from "./2025";
import { posts as posts2026 } from "./2026";

export const archivePosts = [...posts2020, ...posts2021, ...posts2022, ...posts2023, ...posts2024, ...posts2025, ...posts2026].map(withAuthor);
