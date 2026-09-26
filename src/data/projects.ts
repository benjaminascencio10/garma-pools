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
  {
    id: "project-2",
    photos: [
      { src: "/images/projects/project-2-excavation.jpg", stageKey: "excavation" },
      { src: "/images/projects/project-2-rebar-plumbing.jpg", stageKey: "rebarPlumbing" },
      { src: "/images/projects/project-2-plaster.jpg", stageKey: "plaster" },
      { src: "/images/projects/project-2-tile-detail.jpg", stageKey: "tileWork" },
      { src: "/images/projects/project-2-tile-wide.jpg", stageKey: "tileWork" },
      { src: "/images/projects/project-2-finished.jpg", stageKey: "finished" },
    ],
  },
  {
    id: "project-3",
    photos: [
      { src: "/images/projects/project-3-rebar-plumbing.jpg", stageKey: "rebarPlumbing" },
      { src: "/images/projects/project-3-plaster-spray.jpg", stageKey: "plaster" },
      { src: "/images/projects/project-3-tile.jpg", stageKey: "tileWork" },
      { src: "/images/projects/project-3-plaster-finish.jpg", stageKey: "plaster" },
      { src: "/images/projects/project-3-finished.jpg", stageKey: "finished" },
    ],
  },
  {
    id: "project-4",
    photos: [
      { src: "/images/projects/project-4-excavation.jpg", stageKey: "excavation" },
      { src: "/images/projects/project-4-rebar-plumbing.jpg", stageKey: "rebarPlumbing" },
      { src: "/images/projects/project-4-tile.jpg", stageKey: "tileWork" },
      { src: "/images/projects/project-4-plaster-finish.jpg", stageKey: "plaster" },
      { src: "/images/projects/project-4-finished.jpg", stageKey: "finished" },
    ],
  },
  {
    id: "project-5",
    photos: [
      { src: "/images/projects/project-5-excavation.jpg", stageKey: "excavation" },
      { src: "/images/projects/project-5-rebar-plumbing.jpg", stageKey: "rebarPlumbing" },
      { src: "/images/projects/project-5-plaster.jpg", stageKey: "plaster" },
      { src: "/images/projects/project-5-finished.jpg", stageKey: "finished" },
    ],
  },
];
