interface RelatedLink {
  href: string
  title: string
  desc: string
  icon: string
}

interface RelatedLinksProps {
  links: RelatedLink[]
  title?: string
}

export default function RelatedLinks({ links, title = 'Das könnte dich auch interessieren' }: RelatedLinksProps) {
  return (
    <aside className="my-10 bg-brand-green-50 border border-brand-green-100 rounded-2xl p-6 md:p-8">
      <h3 className="text-lg font-bold text-brand-anthrazit mb-5">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="flex items-start gap-3 bg-white rounded-xl p-4 border border-brand-gray-border hover:border-brand-green hover:shadow-soft transition-all group"
          >
            <span className="text-2xl shrink-0">{link.icon}</span>
            <div>
              <div className="font-semibold text-brand-anthrazit text-sm group-hover:text-brand-green transition-colors">{link.title}</div>
              <div className="text-xs text-brand-gray-warm mt-0.5">{link.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </aside>
  )
}
