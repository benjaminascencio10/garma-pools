export type ProjectStageKey = "excavation" | "rebarPlumbing" | "plaster" | "finished";

export interface ProjectPhoto {
  src: string;
  stageKey: ProjectStageKey;
}

export interface Project {
  id: string;
  photos: ProjectPhoto[];
}

// Each project is a start-to-finish photo set for one real Garma Pools build.
// Add new projects here as more photo packages come in.
export const projects: Project[] = [
  {
    id: "project-1",
    photos: [
      { src: "/images/projects/project-1-excavation.jpg", stageKey: "excavation" },
      { src: "/images/projects/project-1-rebar-plumbing.jpg", stageKey: "rebarPlumbing" },
      { src: "/images/projects/project-1-plaster.jpg", stageKey: "plaster" },
      { src: "/images/projects/project-1-finished.jpg", stageKey: "finished" },
    ],
  },
];
