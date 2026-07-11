export type Service = {
  slug: string
  title: string
  shortDescription: string
  metaDescription: string
  body: string[]
}

export const SERVICES: Service[] = [
  {
    slug: 'event-planning',
    title: 'Event Planning',
    shortDescription:
      'Full-service planning for occasions that should feel effortless to attend and unforgettable to remember, from concept through to the final detail.',
    metaDescription:
      'Full-service event planning in South Africa. Miyōra Collective manages every detail from concept to execution so your event feels effortless.',
    body: [
      'Full-service planning for occasions that should feel effortless to attend and unforgettable to remember, from concept through to the final detail.',
      'We handle vendor coordination, timelines, budgets and on-the-day logistics so you can be present at your own event instead of managing it. Every plan is tailored to the scale and tone of your celebration, whether that is an intimate gathering or a full production.',
    ],
  },
  {
    slug: 'event-styling-tablescaping',
    title: 'Event Styling & Tablescaping',
    shortDescription:
      'Transforming your vision into a beautifully curated celebration through thoughtful styling, refined details and a cohesive design that leaves a lasting impression.',
    metaDescription:
      'Event styling and tablescaping services in South Africa. Curated florals, table design and refined details that turn a venue into an experience.',
    body: [
      'Transforming your vision into a beautifully curated celebration through thoughtful styling, refined details and a cohesive design that leaves a lasting impression.',
      'From tablescapes and floral direction to lighting and decor, we design a cohesive visual language for your event so every corner of the room feels intentional.',
    ],
  },
  {
    slug: 'intimate-dinners-celebrations',
    title: 'Intimate Dinners & Celebrations',
    shortDescription:
      'Dinner parties, birthdays, bridal showers, and the occasions that deserve more than a last-minute plan. We design private experiences for the host who wants the result without the process.',
    metaDescription:
      'Private dinner parties, birthdays and bridal showers styled and planned by Miyōra Collective for hosts who want the result without the process.',
    body: [
      'Dinner parties, birthdays, bridal showers, and the occasions that deserve more than a last-minute plan. We design private experiences for the host who wants the result without the process.',
      'These smaller-scale celebrations get the same attention to detail as our larger events: considered styling, a clear run of show, and a host who gets to actually enjoy the evening.',
    ],
  },
]

export function getServiceBySlug(slug: string | undefined): Service | undefined {
  return SERVICES.find((service) => service.slug === slug)
}
