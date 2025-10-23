
export const AboutHero = (): JSX.Element => {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                A propos
              </p>
              <h1 className="mt-5 text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl">
                L equipe Cuisine Alger maitrise l art de la menuiserie moderne
              </h1>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                Basee a Tlemcen, Cuisine Alger concoit et fabrique des cuisines sur mesure
                avec un savoir-faire artisanal et des materiaux de qualite. Nous transformons
                vos espaces grace a notre expertise en menuiserie et notre attention aux details.
              </p>
            </div>

            <div className="grid gap-8">
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">
                  Notre histoire
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Depuis plus de cinq ans, nous concevons et fabriquons des cuisines
                  sur mesure avec un savoir-faire artisanal et une grande exigence qualitative.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">
                  Notre promesse
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Offrir des cuisines fonctionnelles et esthetiques, de la conception 3D
                  a l installation finale, pour une experience sans stress et
                  parfaitement orchestree.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-neutral-200 pt-6">
              <div>
                <p className="text-3xl font-elegant font-semibold text-neutral-900">
                  50+
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-neutral-500">
                  Cuisines
                </p>
              </div>
              <div>
                <p className="text-3xl font-elegant font-semibold text-neutral-900">
                  5+
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-neutral-500">
                  Annees
                </p>
              </div>
              <div>
                <p className="text-3xl font-elegant font-semibold text-neutral-900">
                  Artisans
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-neutral-500">
                  Qualifies
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-white/80 shadow-lg">
              <div className="relative aspect-[4/5] bg-neutral-100 flex items-center justify-center">
                <div className="text-center text-neutral-400">
                  <div className="text-6xl mb-4">👥</div>
                  <p className="text-lg">Équipe à venir</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 w-60 -translate-x-1/2 rounded-3xl border border-neutral-200 bg-white/95 px-6 py-5 text-center shadow-lg">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                Atelier de fabrication
              </p>
              <p className="mt-3 text-sm text-neutral-600">
                Materiaux nobles et fabrication sur mesure pour chaque cuisine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
