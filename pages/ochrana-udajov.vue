<template>
  <div>
    <Navigation />
    
    <main class="min-h-screen pt-32 pb-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-12 space-y-4">
            <div class="flex justify-center mb-4">
              <div class="w-24 h-0.5 bg-vintage-gold"></div>
              <Icon name="mdi:star" class="text-vintage-gold text-xl mx-2" />
              <div class="w-24 h-0.5 bg-vintage-gold"></div>
            </div>
            <h1 class="font-serif text-4xl md:text-6xl font-bold text-vintage-brown vintage-heading">
              Ochrana osobných údajov
            </h1>
            <p class="font-body text-sm text-sepia-light italic">
              Platné od 1. januára 2025
            </p>
          </div>

          <!-- Content -->
          <div class="vintage-card space-y-8">
            <section>
              <h2 class="font-serif text-2xl font-semibold text-vintage-brown mb-4 border-b-2 border-vintage-gold/30 pb-2">
                1. Správca osobných údajov
              </h2>
              <div class="font-body text-base text-vintage-brown/90 space-y-3 leading-relaxed">
                <p>
                  Správcom vašich osobných údajov je:
                </p>
                <p class="pl-4 border-l-4 border-vintage-gold">
                  <strong>Vintage Barbershop s.r.o.</strong><br/>
                  Staromestská 15<br/>
                  811 03 Bratislava<br/>
                  IČO: 12345678<br/>
                  Email: info@vintagebarbershop.sk
                </p>
              </div>
            </section>

            <section>
              <h2 class="font-serif text-2xl font-semibold text-vintage-brown mb-4 border-b-2 border-vintage-gold/30 pb-2">
                2. Aké údaje zhromažďujeme
              </h2>
              <div class="font-body text-base text-vintage-brown/90 space-y-3 leading-relaxed">
                <p>
                  Pre poskytovanie našich služieb spracúvame nasledujúce osobné údaje:
                </p>
                <ul class="list-disc list-inside space-y-2 pl-4">
                  <li>Meno a priezvisko</li>
                  <li>Email</li>
                  <li>Telefónne číslo</li>
                  <li>Informácie o rezerváciách a poskytnutých službách</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 class="font-serif text-2xl font-semibold text-vintage-brown mb-4 border-b-2 border-vintage-gold/30 pb-2">
                3. Účel spracovania
              </h2>
              <div class="font-body text-base text-vintage-brown/90 space-y-3 leading-relaxed">
                <p>
                  Vaše osobné údaje spracúvame na nasledujúce účely:
                </p>
                <ul class="list-disc list-inside space-y-2 pl-4">
                  <li>Poskytovanie kaderníckych služieb</li>
                  <li>Správa rezervácií</li>
                  <li>Komunikácia s klientmi</li>
                  <li>Marketing (len so súhlasom)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 class="font-serif text-2xl font-semibold text-vintage-brown mb-4 border-b-2 border-vintage-gold/30 pb-2">
                4. Právny základ
              </h2>
              <div class="font-body text-base text-vintage-brown/90 space-y-3 leading-relaxed">
                <p>
                  Vaše osobné údaje spracúvame na základe:
                </p>
                <ul class="list-disc list-inside space-y-2 pl-4">
                  <li>Plnenia zmluvy (poskytovanie služieb)</li>
                  <li>Oprávneného zájmu (zlepšovanie služieb)</li>
                  <li>Vášho súhlasu (marketing)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 class="font-serif text-2xl font-semibold text-vintage-brown mb-4 border-b-2 border-vintage-gold/30 pb-2">
                5. Doba uchovávania
              </h2>
              <div class="font-body text-base text-vintage-brown/90 space-y-3 leading-relaxed">
                <p>
                  Osobné údaje uchovávame po dobu nevyhnutnú na dosiahnutie účelu spracovania, minimálne však po dobu určenú právnymi predpismi.
                </p>
                <p>
                  Marketingové údaje uchovávame do odvolania súhlasu.
                </p>
              </div>
            </section>

            <section>
              <h2 class="font-serif text-2xl font-semibold text-vintage-brown mb-4 border-b-2 border-vintage-gold/30 pb-2">
                6. Vaše práva
              </h2>
              <div class="font-body text-base text-vintage-brown/90 space-y-3 leading-relaxed">
                <p>
                  Máte právo:
                </p>
                <ul class="list-disc list-inside space-y-2 pl-4">
                  <li>Na prístup k svojim osobným údajom</li>
                  <li>Na opravu nesprávnych údajov</li>
                  <li>Na vymazanie údajov</li>
                  <li>Na obmedzenie spracovania</li>
                  <li>Na prenosnosť údajov</li>
                  <li>Namietať proti spracovaniu</li>
                  <li>Odvolať súhlas</li>
                  <li>Podať sťažnosť na Úrad na ochranu osobných údajov SR</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 class="font-serif text-2xl font-semibold text-vintage-brown mb-4 border-b-2 border-vintage-gold/30 pb-2">
                7. Kontakt
              </h2>
              <div class="font-body text-base text-vintage-brown/90 space-y-3 leading-relaxed">
                <p>
                  V prípade akýchkoľvek otázok týkajúcich sa spracovania osobných údajov nás môžete kontaktovať:
                </p>
                <p class="pl-4 border-l-4 border-vintage-gold">
                  Email: info@vintagebarbershop.sk<br/>
                  Telefón: +421 2 5555 1234
                </p>
              </div>
            </section>
          </div>

          <!-- Back Button -->
          <div class="text-center mt-12">
            <NuxtLink 
              to="/"
              class="inline-block px-8 py-3 font-serif font-semibold text-lg border-2 border-vintage-brown text-vintage-brown hover:bg-vintage-tan transition-all duration-300"
            >
              ← Späť domov
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: 'Ochrana osobných údajov - Vintage Barbershop',
  meta: [
    { name: 'description', content: 'Zásady ochrany osobných údajov Vintage Barbershop kaderníctva.' }
  ]
})
</script>
