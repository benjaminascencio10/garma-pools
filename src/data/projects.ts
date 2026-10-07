export type ProjectStageKey =
  | "excavation"
  | "rebarPlumbing"
  | "plaster"
  | "tileWork"
  | "finished";

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

// Other real builds, shown as a single finished-pool photo each.
export const completedProjects: CompletedProject[] = [
  { id: "project-1", image: "/images/projects/project-1-finished.jpg" },
  { id: "project-2", image: "/images/projects/project-2-finished.jpg" },
  { id: "project-3", image: "/images/projects/project-3-finished.jpg" },
  { id: "project-4", image: "/images/projects/project-4-finished.jpg" },
];
