export type ProjectStageKey =
  | "excavation"
  | "rebarPlumbing"
  | "plaster"
  | "tileWork"
  | "finished";

export type ProjectCategory =
  | "residentialPools"
  | "residentialSpas"
  | "waterfallFeatures"
  | "commercialPools";

export interface ProjectPhoto {
  src: string;
  stageKey: ProjectStageKey;
}

export interface FeaturedProject {
  id: string;
  photos: ProjectPhoto[];
}

export interface CompletedProject {
  id: string;
  image: string;
  category: ProjectCategory;
}

// The one project shown start-to-finish, stage by stage.
export const featuredProject: FeaturedProject = {
  id: "project-5",
  photos: [
    { src: "/images/projects/project-5-excavation.jpg", stageKey: "excavation" },
    { src: "/images/projects/project-5-rebar-plumbing.jpg", stageKey: "rebarPlumbing" },
    { src: "/images/projects/project-5-plaster.jpg", stageKey: "plaster" },
    { src: "/images/projects/project-5-finished.jpg", stageKey: "finished" },
  ],
};

// Other real builds, shown as a single finished-pool photo each, tagged by
// category for the Our Work category pages. Categorized by actually
// looking at each photo: a separate raised/attached spa structure next to
// the pool -> residentialSpas, otherwise -> residentialPools.
export const completedProjects: CompletedProject[] = [
  { id: "project-1", image: "/images/projects/project-1-finished.jpg", category: "residentialSpas" },
  { id: "project-2", image: "/images/projects/project-2-finished.jpg", category: "residentialSpas" },
  { id: "project-3", image: "/images/projects/project-3-finished.jpg", category: "residentialPools" },
  { id: "project-4", image: "/images/projects/project-4-finished.jpg", category: "residentialSpas" },
  { id: "project-5", image: "/images/projects/project-5-finished.jpg", category: "residentialPools" },
];

// The hero photo has a raised-wall sheer-descent waterfall feature — it's
// the one real photo we have that anchors the Waterfall Features category.
export const waterfallFeaturePhotos: { id: string; image: string }[] = [
  { id: "hero-waterfall", image: "/images/pool-hero.jpg" },
];

export function getProjectsByCategory(category: ProjectCategory) {
  if (category === "waterfallFeatures") {
    return waterfallFeaturePhotos.map((p) => ({ id: p.id, image: p.image }));
  }
  return completedProjects
    .filter((p) => p.category === category)
    .map((p) => ({ id: p.id, image: p.image }));
}
