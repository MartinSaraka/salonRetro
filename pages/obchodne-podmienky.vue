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
              Obchodné podmienky
            </h1>
            <p class="font-body text-sm text-sepia-light italic">
              Platné od 1. januára 2025
            </p>
          </div>

          <!-- Content -->
          <div class="vintage-card space-y-8">
            <section>
              <h2 class="font-serif text-2xl font-semibold text-vintage-brown mb-4 border-b-2 border-vintage-gold/30 pb-2">
                1. Základné ustanovenia
              </h2>
              <div class="font-body text-base text-vintage-brown/90 space-y-3 leading-relaxed">
                <p>
                  Tieto obchodné podmienky upravujú vzájomné práva a povinnosti medzi poskytovateľom služieb Vintage Barbershop (ďalej len "poskytovateľ") a klientom.
                </p>
                <p>
                  <strong>Poskytovateľ:</strong> Vintage Barbershop s.r.o., Staromestská 15, 811 03 Bratislava, IČO: 12345678
                </p>
              </div>
            </section>

            <section>
              <h2 class="font-serif text-2xl font-semibold text-vintage-brown mb-4 border-b-2 border-vintage-gold/30 pb-2">
                2. Rezervácia a storno
              </h2>
              <div class="font-body text-base text-vintage-brown/90 space-y-3 leading-relaxed">
                <p>
                  <strong>Rezervácia:</strong> Klient si môže rezervovať termín online, telefonicky alebo osobne. Rezervácia je záväzná po potvrdení poskytovateľom.
                </p>
                <p>
                  <strong>Storno:</strong> Klient môže zrušiť rezerváciu bezplatne najneskôr 24 hodín pred termínom. Pri neskoršom zrušení alebo nedostavení sa môže byť účtovaný poplatok 50% z ceny služby.
                </p>
              </div>
            </section>

            <section>
              <h2 class="font-serif text-2xl font-semibold text-vintage-brown mb-4 border-b-2 border-vintage-gold/30 pb-2">
                3. Poskytovanie služieb
              </h2>
              <div class="font-body text-base text-vintage-brown/90 space-y-3 leading-relaxed">
                <p>
                  Poskytovateľ sa zaväzuje poskytovať služby odborne a kvalitne podľa tradičných metód. Konečný vzhľad závisí od stavu vlasov klienta a jeho spolupráce.
                </p>
                <p>
                  Klient je povinný informovať poskytovateľa o všetkých alergických reakciách a zdravotných problémoch, ktoré by mohli ovplyvniť poskytovanie služby.
                </p>
              </div>
            </section>

            <section>
              <h2 class="font-serif text-2xl font-semibold text-vintage-brown mb-4 border-b-2 border-vintage-gold/30 pb-2">
                4. Platobné podmienky
              </h2>
              <div class="font-body text-base text-vintage-brown/90 space-y-3 leading-relaxed">
                <p>
                  Ceny služieb sú uvedené v cenníku. Platba sa uskutočňuje v hotovosti alebo kartou bezprostredne po poskytnutí služby.
                </p>
                <p>
                  Poskytovateľ si vyhradzuje právo zmeniť ceny služieb. Zmeny cien sa nevzťahujú na už potvrdené rezervácie.
                </p>
              </div>
            </section>

            <section>
              <h2 class="font-serif text-2xl font-semibold text-vintage-brown mb-4 border-b-2 border-vintage-gold/30 pb-2">
                5. Reklamácie
              </h2>
              <div class="font-body text-base text-vintage-brown/90 space-y-3 leading-relaxed">
                <p>
                  Klient má právo reklamovať poskytnutú službu do 7 dní od jej poskytnutia. Reklamáciu je potrebné uplatniť písomne alebo osobne.
                </p>
                <p>
                  Poskytovateľ sa zaväzuje vybaviť reklamáciu do 14 dní od jej uplatnenia.
                </p>
              </div>
            </section>

            <section>
              <h2 class="font-serif text-2xl font-semibold text-vintage-brown mb-4 border-b-2 border-vintage-gold/30 pb-2">
                6. Záverečné ustanovenia
              </h2>
              <div class="font-body text-base text-vintage-brown/90 space-y-3 leading-relaxed">
                <p>
                  Tieto obchodné podmienky sú platné a účinné od 1. januára 2025.
                </p>
                <p>
                  Poskytovateľ si vyhradzuje právo zmeniť tieto obchodné podmienky. Zmeny budú zverejnené na webovej stránke a vstúpia do platnosti dňom zverejnenia.
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
  title: 'Obchodné podmienky - Vintage Barbershop',
  meta: [
    { name: 'description', content: 'Obchodné podmienky Vintage Barbershop kaderníctva.' }
  ]
})
</script>
