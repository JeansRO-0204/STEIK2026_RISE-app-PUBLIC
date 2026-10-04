import { z } from 'astro/zod';

const linkGroups = z.array(
  z.object({
    title: z.string(),
    description: z.string().optional(),
    links: z.array(
      z.object({
        label: z.string(),
        href: z.url(),
        note: z.string().optional(),
      }),
    ),
  }),
);

// Parsed at build time so a malformed URL fails the build instead of shipping a dead link.
export const LINK_GROUPS = linkGroups.parse([
  {
    title: 'General',
    description: 'Placeholder group — replace with real Drive folders.',
    links: [
      {
        label: 'Example shared folder',
        href: 'https://drive.google.com/drive/folders/REPLACE_ME',
        note: 'Replace with a real link',
      },
    ],
  },
]);
