/*
 * Sourced from the LaTeX resume, including entries that were commented out
 * there but are still yours. None of the Deedy template's example content is
 * here. Jane Street and the publication came from you directly.
 */

export interface Entry {
  /** Org name, or the title for a publication. */
  org: string;
  /** Role, or the venue and author list for a publication. */
  role: string;
  /** Omitted where there is no meaningful date. */
  dates?: string;
  url?: string;
  /**
   * Renders the title on its own full-width line with the meta beneath it.
   * Publication titles are far too long for a fixed column.
   */
  stacked?: boolean;
}

export interface Section {
  title: string;
  entries: Entry[];
}

export const cv: Section[] = [
  {
    title: "Experience",
    entries: [
      {
        org: "Jane Street",
        role: "Software Engineer",
        dates: "2023–Present",
        url: "https://www.janestreet.com/",
      },
      {
        org: "Skio",
        role: "Founding Software Engineer",
        dates: "2022",
        url: "https://skio.com/",
      },
      {
        org: "Two Sigma",
        role: "Software Engineer",
        dates: "2020–2022",
        url: "https://www.twosigma.com/",
      },
    ],
  },
  {
    title: "Education",
    entries: [
      {
        org: "University of Maryland",
        role: "B.S. Computer Science",
        dates: "2016–2020",
        url: "https://www.umd.edu/",
      },
      {
        org: "QUEST Honors Program",
        role: "Business Honors",
        url: "https://www.rhsmith.umd.edu/programs/undergraduate-programs/academics/fellows-special-programs/quest",
      },
      {
        org: "UMD CS Department",
        role: "Teaching Assistant, Algorithms",
        url: "https://www.cs.umd.edu/",
      },
    ],
  },
  {
    title: "Publications",
    entries: [
      {
        org: "Transfer of information across repeated decisions in general and in obsessive-compulsive disorder",
        role: "Solway A, Lin Z, Vinaik E · PNAS 118(1)",
        dates: "2021",
        url: "https://pubmed.ncbi.nlm.nih.gov/33443150/",
        stacked: true,
      },
    ],
  },
  {
    title: "Research",
    entries: [
      {
        org: "Maryland Blended Reality Center",
        role: "Research Assistant",
        dates: "2018",
        url: "http://mbrc.umd.edu/",
      },
      {
        org: "Solway Lab",
        role: "Research Assistant",
        dates: "2018",
        url: "http://solwaylab.org/people/",
      },
    ],
  },
  {
    title: "Projects",
    entries: [
      {
        org: "Metro Visualization",
        role: "D.C. Metro ridership in D3.js",
        dates: "2018",
        url: "https://ekanshvinaik.com/metro-vis/",
      },
      {
        org: "DiscoVR",
        role: "Virtual reality memory palace",
        dates: "2018",
        url: "https://github.com/evinaik/discovr",
      },
    ],
  },
  {
    title: "Hackathons",
    entries: [
      {
        org: "Hoya Hacks",
        role: "Best Internet-Sourced App",
        dates: "2016",
        url: "https://hoyahacks.georgetown.domains/",
      },
      {
        org: "Hoya Hacks",
        role: "Best Entrepreneurship App",
        dates: "2016",
        url: "https://hoyahacks.georgetown.domains/",
      },
    ],
  },
  {
    title: "Internships",
    entries: [
      {
        org: "Two Sigma",
        role: "Software Engineering Intern",
        dates: "2019",
        url: "https://www.twosigma.com/",
      },
      {
        org: "Facebook",
        role: "Software Engineering Intern",
        dates: "2019",
        url: "https://www.facebook.com/",
      },
      {
        org: "Capital One Tech Incubator",
        role: "Data Engineering Intern",
        dates: "2018",
        url: "https://www.capitalone.com/tech/machine-learning/capital-one-unveils-new-technology-incubator-at-the-university-of-maryland-to-foster-ai-and-machine-learning/",
      },
      {
        org: "Capital One Labs",
        role: "Software Engineering Intern",
        dates: "2018",
        url: "https://www.capitalonelabs.com/",
      },
      {
        org: "Amazon Web Services",
        role: "Software Engineering Intern",
        dates: "2018",
        url: "https://aws.amazon.com/",
      },
      {
        org: "Capital One",
        role: "Software Engineering Intern",
        dates: "2017",
        url: "https://www.capitalone.com/",
      },
    ],
  },
];
